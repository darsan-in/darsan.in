"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					("get" in desc
						? !m.__esModule
						: desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", {
					enumerable: true,
					value: v,
				});
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (
					k !== "default" &&
					Object.prototype.hasOwnProperty.call(mod, k)
				)
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const https_1 = require("https");
const path_1 = require("path");
const get_contribs_js_1 = require("./get-contribs.js");
const ignore_json_1 = require("./ignore.json");
class RequestOption {
	hostname = "api.github.com";
	headers = {
		"user-agent": "Node.js",
		Authorization: `token ${process.env.GITHUB_TOKEN}`,
		Accept: "application/vnd.github+json",
	};
	path = ``;
	searchParams = {
		type: "all",
		per_page: 100,
	};
	constructor(path) {
		this.path = path;
	}
}
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
			type: ghResponse.owner?.type ?? "",
		},
		htmlUrl: ghResponse.html_url ?? "",
		description: ghResponse.description ?? "",
		fork: ghResponse.fork ?? "",
		url: ghResponse.url ?? "",
		releasesUrl: ghResponse.releases_url ?? "",
		languagesUrl: ghResponse.languages_url ?? "",
		contributorsUrl: ghResponse.contributors_url ?? "",
		createdAt: ghResponse.created_at ?? "",
		updatedAt: ghResponse.updated_at ?? "",
		homepage: ghResponse.homepage ?? "",
		stargazersCount: ghResponse.stargazers_count ?? "",
		watchersCount: ghResponse.watchers_count ?? "",
		language: ghResponse.language ?? "",
		forksCount: ghResponse.forks_count ?? "",
		archived: ghResponse.archived ?? "",
		openIssuesCount: ghResponse.open_issues_count ?? "",
		license: {
			name: ghResponse.license?.name ?? "",
			spdxId: ghResponse.license?.spdx_id ?? "",
		},
		topics: ghResponse.topics ?? "",
	};
}
async function getReposMeta(username) {
	const { Octokit } = await Promise.resolve().then(async () =>
		__importStar(await import("octokit")),
	);
	const octakit = new Octokit({ auth: process.env.GITHUB_TOKEN });
	const {
		repos: { listForAuthenticatedUser },
	} = octakit.rest;
	const reposMeta = [];
	const { data } = await listForAuthenticatedUser({
		username: username,
		type: "all",
		per_page: 100,
	});
	const parsedData = data.map((repoMeta) => {
		return parseRepoMeta(repoMeta);
	});
	for (const repoMeta of parsedData) {
		console.log(repoMeta);
		if (ignore_json_1.ignore.includes(repoMeta.name)) {
			continue;
		}
		let languagesMeta = {};
		let latestVersion = "";
		let downloadCount = 0;
		let loc = 0;
		try {
			languagesMeta = await getLanguagesMeta(repoMeta.languagesUrl ?? "");
			/* Calculate LOC */
			loc = await countLOC(repoMeta.htmlUrl);
			/* Calculate percentage of the language meta */
			languagesMeta = calculateLangUtilPercentage(languagesMeta);
			delete repoMeta.languagesUrl;
			latestVersion = await getLatestVersion(repoMeta.releasesUrl ?? "");
			downloadCount = await getDownloadCount(repoMeta.htmlUrl);
		} catch (err) {
			console.log(err);
			console.log(
				"\n⚠️ Error Getting languages meta or latest version or download count",
			);
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
		const groupedMeta = rawGHMEta.filter(
			(repoMeta) => repoMeta.language === language,
		);
		groupsMeta[language] = groupedMeta;
	});
	return groupsMeta;
}
function calculateLangUtilPercentage(languagesMeta) {
	const sum = Object.values(languagesMeta).reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	const calculatedLanguageMeta = {};
	for (const language of Object.keys(languagesMeta)) {
		const utilPercent = Math.ceil((languagesMeta[language] / sum) * 100);
		calculatedLanguageMeta[language] = utilPercent;
	}
	return calculatedLanguageMeta;
}
function getLanguagesMeta(languageURL) {
	return new Promise((resolve, reject) => {
		const path = new URL(languageURL).pathname;
		const options = new RequestOption(path);
		(0, https_1.get)(options, (response) => {
			let data = "";
			response.on("data", (chunk) => {
				data += chunk;
			});
			response.on("end", () => {
				if (response.statusCode === 200) {
					const languagesMeta = JSON.parse(data);
					resolve(languagesMeta);
				} else {
					reject(response.statusCode);
				}
			});
		}).on("error", (err) => {
			reject(err);
		});
	});
}
function getLatestVersion(releasesUrl) {
	return new Promise((resolve, reject) => {
		const parsedUrl = new URL(`${releasesUrl.slice(0, -5)}/latest`);
		const options = new RequestOption(parsedUrl.pathname);
		(0, https_1.get)(options, (response) => {
			let data = "";
			response.on("data", (chunk) => {
				data += chunk;
			});
			response.on("end", () => {
				if (response.statusCode === 200) {
					const latestVersion = JSON.parse(data)?.tag_name ?? false;
					resolve(latestVersion);
				} else {
					resolve(false);
				}
			});
		}).on("error", (err) => {
			reject(err);
		});
	});
}
function isNodejsProject(userName, repoName) {
	const options = {
		hostname: "raw.githubusercontent.com",
		headers: {
			"user-agent": "Node.js",
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			Accept: "application/json",
		},
		path: `/${userName}/${repoName}/main/package.json`,
	};
	return new Promise((resolve, reject) => {
		(0, https_1.get)(options, (response) => {
			let data = "";
			response.on("data", (chunk) => {
				data += chunk;
			});
			response.on("end", () => {
				if (response.statusCode === 200) {
					const packageName = JSON.parse(data).name;
					resolve(packageName);
				} else {
					resolve(false);
				}
			});
		}).on("error", (err) => {
			reject(err);
		});
	});
}
async function getDownloadCount(htmlUrl) {
	const [userName, repoName] = htmlUrl.slice(19).split("/");
	const nodejsPackageName = await isNodejsProject(userName, repoName);
	return new Promise((resolve, reject) => {
		const npmEndpoint = `/npm/d18m/${nodejsPackageName}?label=%20&cacheSeconds=60`;
		const githubEndpoint = `/github/downloads-pre/${userName}/${repoName}/latest/total?sort=date&label=%20&cacheSeconds=60`;
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
					const downloadCount = titleMatch ? parseInt(titleMatch[1]) : 0;
					resolve(downloadCount);
				} else {
					resolve(0);
				}
			});
		}).on("error", (err) => {
			reject(err);
		});
	});
}
async function countLOC(repoURL) {
	const locMetaFilePath = `${repoURL}/raw/main/loc-meta.json`;
	const rawResponse = await fetch(locMetaFilePath);
	const jsonResponse = await rawResponse.json();
	return jsonResponse.SUM?.code;
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
/* @ts-ignore */
async function commitsCounter(urls) {
	let overallCommits = 0;
	for (const url of urls) {
		const commitsUrl = `${url}/commits`;
		const options = new RequestOption(new URL(commitsUrl).pathname);
		const totalRepoCommits = await new Promise((resolve, reject) => {
			(0, https_1.get)(options, (response) => {
				let data = "";
				response.on("data", (chunk) => {
					data += chunk;
				});
				response.on("end", () => {
					if (response.statusCode === 200) {
						const parsedData = JSON.parse(data ?? "{}");
						const totalRepoCommits = parsedData.length ?? 0;
						resolve(totalRepoCommits);
					} else {
						console.log("⚠️Failed " + commitsUrl);
						resolve(0);
					}
				});
			}).on("error", (err) => {
				reject(err);
			});
		});
		overallCommits += totalRepoCommits;
	}
	return overallCommits;
}
async function getTotalContributions(userName = "iamspdarsan") {
	const data = await (0, get_contribs_js_1.fetchDataForAllYears)(userName);
	/* @ts-ignore */
	const totalContributions = data.years.reduce(
		(acumulator, currentValue) => acumulator + currentValue.total,
		0,
	);
	return totalContributions;
}
async function main() {
	const userName = "iamspdarsan";
	let ungroupedMeta = [];
	try {
		ungroupedMeta = await getReposMeta(userName);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
	const mostUsedLanguages = getMostUsedLanguages(ungroupedMeta);
	const groupedMeta = makeRepoGroups(mostUsedLanguages, ungroupedMeta);
	/* const processedMeta = { All: ungroupedMeta, ...groupedMeta }; */
	/* 	const totalCommits = await commitsCounter(
        [...ungroupedMeta].map((meta) => meta.url),
    ); */
	const totalContributions = await getTotalContributions();
	const localMeta = {
		projects: groupedMeta,
		totalProjects: ungroupedMeta.length,
		totalCommits: totalContributions,
		overallDownloadCounts: getOverallDownloadCounts(ungroupedMeta),
	};
	(0, fs_1.writeFileSync)(
		(0, path_1.join)(process.cwd(), "ghmeta.json"),
		JSON.stringify(localMeta),
	);
}
main().catch((err) => {
	console.log(err);
});
