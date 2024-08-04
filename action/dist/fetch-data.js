"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const https_1 = require("https");
const path_1 = require("path");
const get_contribs_js_1 = require("./get-contribs.js");
/* @ts-ignore */
const ignore_json_1 = require("./ignore.json");
function convertDate(dateString) {
    const date = new Date(dateString);
    let monthAbbreviations = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getUTCDate();
    const month = monthAbbreviations[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
}
function parseRepoMeta(ghResponse) {
    return {
        name: ghResponse.name ?? "",
        owner: {
            login: ghResponse.owner?.login ?? "",
            /* type: ghResponse.owner?.type ?? "", */
        },
        htmlUrl: ghResponse.html_url ?? "",
        description: ghResponse.description ?? "",
        /* fork: ghResponse.fork ?? "", */
        /* url: ghResponse.url ?? "", */
        /* releasesUrl: ghResponse.releases_url ?? "", */
        /* languagesUrl: ghResponse.languages_url ?? "", */
        /* contributorsUrl: ghResponse.contributors_url ?? "", */
        createdAt: ghResponse.created_at ?? "",
        updatedAt: ghResponse.updated_at ?? "",
        homepage: ghResponse.homepage ?? "",
        /* stargazersCount: ghResponse.stargazers_count ?? "", */
        /* watchersCount: ghResponse.watchers_count ?? "", */
        language: ghResponse.language ?? "",
        /* forksCount: ghResponse.forks_count ?? "", */
        /* archived: ghResponse.archived ?? "", */
        openIssuesCount: ghResponse.open_issues_count ?? "",
        license: {
            name: ghResponse.license?.name ?? "",
            spdxId: ghResponse.license?.spdx_id ?? "",
        },
        topics: ghResponse.topics ?? "",
    };
}
async function initOctokit() {
    const { Octokit } = await import("@octokit/rest");
    return new Octokit({ auth: process.env.GITHUB_TOKEN });
}
async function getReposMeta(username) {
    const octokit = await initOctokit();
    const { repos: { listForAuthenticatedUser }, } = octokit.rest;
    const reposMeta = [];
    const { data } = await listForAuthenticatedUser({
        username: username,
        type: "all",
        per_page: 100,
        sort: "created",
    });
    const parsedData = data.map((repoMeta) => {
        return parseRepoMeta(repoMeta);
    });
    for (const repoMeta of parsedData) {
        if (ignore_json_1.ignore.includes(repoMeta.name)) {
            continue;
        }
        let languagesMeta = {};
        let latestVersion = "";
        let downloadCount = 0;
        let loc = 0;
        try {
            languagesMeta = await getLanguagesMeta(repoMeta.owner.login, repoMeta.name);
            /* Calculate LOC */
            loc = await countLOC(repoMeta.owner.login, repoMeta.name);
            /* Calculate percentage of the language meta */
            languagesMeta = calculateLangUtilPercentage(languagesMeta);
            latestVersion = await getLatestVersion(repoMeta.owner.login, repoMeta.name);
            downloadCount = await getDownloadCount(repoMeta.owner.login, repoMeta.name);
        }
        catch (err) {
            console.log(err);
            console.log("\n⚠️ Error Getting languages meta or latest version or download count");
        }
        reposMeta.push({
            ...repoMeta,
            createdAt: convertDate(repoMeta.createdAt),
            updatedAt: convertDate(repoMeta.updatedAt),
            languagesMeta: languagesMeta,
            latestVersion: latestVersion,
            downloadCount: downloadCount,
            loc: loc,
            language: repoMeta.language === "" ? "Other" : repoMeta.language,
        });
    }
    return reposMeta;
}
function getMostUsedLanguages(rawGHMEta) {
    const mostUsedLanguages = new Set();
    rawGHMEta.forEach((repoMeta) => {
        mostUsedLanguages.add(repoMeta.language);
    });
    return Array.from(mostUsedLanguages).filter((lang) => lang);
}
function makeRepoGroups(uniqueLangs, rawGHMEta) {
    let groupsMeta = {};
    uniqueLangs.forEach((language) => {
        const groupedMeta = rawGHMEta.filter((repoMeta) => repoMeta.language === language);
        groupsMeta[language] = groupedMeta;
    });
    return groupsMeta;
}
function calculateLangUtilPercentage(languagesMeta) {
    const sum = Object.values(languagesMeta).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const calculatedLanguageMeta = {};
    for (const language of Object.keys(languagesMeta)) {
        const utilPercent = Math.ceil((languagesMeta[language] / sum) * 100);
        calculatedLanguageMeta[language] = utilPercent;
    }
    return calculatedLanguageMeta;
}
function getLanguagesMeta(owner, repoName) {
    return new Promise((resolve, reject) => {
        initOctokit()
            .then((octokit) => {
            const { repos: { listLanguages }, } = octokit;
            listLanguages({ owner: owner, repo: repoName })
                .then((response) => {
                resolve(response.data ?? {});
            })
                .catch((_err) => {
                resolve({});
            });
        })
            .catch(reject);
    });
}
async function getLatestVersion(owner, repo) {
    return new Promise((resolve, reject) => {
        initOctokit()
            .then((octokit) => {
            const { rest: { repos: { getLatestRelease }, }, } = octokit;
            getLatestRelease({ owner: owner, repo: repo })
                .then((releaseMeta) => {
                const latestVersion = releaseMeta.data?.tag_name ?? false;
                resolve(latestVersion);
            })
                .catch((_err) => {
                resolve(false);
            });
        })
            .catch(reject);
    });
}
function isNodejsProject(owner, repoName) {
    return new Promise((resolve, reject) => {
        initOctokit()
            .then((octokit) => {
            const { rest: { repos: { getContent }, }, } = octokit;
            getContent({
                owner: owner,
                repo: repoName,
                ref: "main",
                path: "package.json",
            })
                .then((response) => {
                if (response.status === 200) {
                    try {
                        const content = Buffer.from(response.data.content, "base64").toString("utf8");
                        const nodejsPackageName = JSON.parse(content)?.name;
                        resolve(nodejsPackageName);
                    }
                    catch {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            })
                .catch((_err) => {
                resolve(false);
            });
        })
            .catch(reject);
    });
}
async function getDownloadCount(owner, repoName) {
    const nodejsPackageName = await isNodejsProject(owner, repoName);
    return new Promise((resolve, reject) => {
        const npmEndpoint = `/npm/d18m/${nodejsPackageName}?label=%20&cacheSeconds=60`;
        const githubEndpoint = `/github/downloads-pre/${owner}/${repoName}/latest/total?sort=date&label=%20&cacheSeconds=60`;
        const options = {
            hostname: "img.shields.io",
            headers: {
                "user-agent": "Node.js",
                Accept: "application/json",
            },
            path: nodejsPackageName ? npmEndpoint : githubEndpoint,
        };
        (0, https_1.get)(options, (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });
            response.on("end", () => {
                if (response.statusCode === 200) {
                    const titleMatch = data.match(/<title>(.*?)<\/title>/);
                    const downloadCount = titleMatch
                        ? parseInt(titleMatch[1])
                        : 0;
                    resolve(downloadCount);
                }
                else {
                    resolve(0);
                }
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
}
async function countLOC(owner, repoName) {
    return new Promise((resolve, reject) => {
        initOctokit()
            .then((octokit) => {
            const { rest: { repos: { getContent }, }, } = octokit;
            getContent({
                owner: owner,
                repo: repoName,
                ref: "main",
                path: "loc-meta.json",
            })
                .then((response) => {
                if (response.status === 200) {
                    try {
                        const content = Buffer.from(response.data.content, "base64").toString("utf8");
                        const LOC = JSON.parse(content)?.SUM?.code;
                        resolve(LOC);
                    }
                    catch {
                        resolve(0);
                    }
                }
                else {
                    resolve(0);
                }
            })
                .catch((_err) => {
                resolve(0);
            });
        })
            .catch(reject);
    });
}
function getOverallDownloadCounts(ghMetas) {
    let overallDownloadCounts = 0;
    ghMetas.forEach((meta) => {
        const downloadCount = meta.downloadCount ?? 0;
        if (!!downloadCount) {
            overallDownloadCounts += downloadCount;
        }
    });
    return overallDownloadCounts;
}
async function getTotalContributions(userName) {
    const data = await (0, get_contribs_js_1.fetchDataForAllYears)(userName);
    /* @ts-ignore */
    const totalContributions = data.years.reduce((acumulator, currentValue) => acumulator + currentValue.total, 0);
    return totalContributions;
}
async function main() {
    const userName = "iamspdarsan";
    let ungroupedMeta = [];
    try {
        ungroupedMeta = await getReposMeta(userName);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    const mostUsedLanguages = getMostUsedLanguages(ungroupedMeta);
    const groupedMeta = makeRepoGroups(mostUsedLanguages, ungroupedMeta);
    const totalContributions = await getTotalContributions(userName);
    const localMeta = {
        projects: groupedMeta,
        totalProjects: ungroupedMeta.length + ignore_json_1.ignore.length - ignore_json_1.dontCount.length,
        totalCommits: totalContributions,
        overallDownloadCounts: getOverallDownloadCounts(ungroupedMeta),
    };
    (0, fs_1.writeFileSync)((0, path_1.join)(process.cwd(), "ghmeta.json"), JSON.stringify(localMeta));
    /* summary */
    console.log("Repo cards count: ", ungroupedMeta.length);
    console.log("Ignored repo cards count: ", ignore_json_1.ignore.length);
    console.log("DontCount size: ", ignore_json_1.dontCount.length);
    console.log("Final repos count = ( ungroupedMeta.length + ignore.length - dontCount.length ) : ", localMeta.totalProjects);
}
main().catch(console.log);
