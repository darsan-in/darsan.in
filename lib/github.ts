import { get } from "https";
import { githubMetaKey, mostUsedLanguagesKey } from "meta";
import { GithubRepoMeta } from "./options";
import { parseRepoMeta } from "./utils";

class RequestOption {
	hostname: string = "api.github.com";
	headers: Record<string, string> = {
		"User-Agent": "Node.js",
		Accept: "application/json",
	};
	path: string = ``;

	constructor(path: string) {
		this.path = path;
	}
}

export function getReposMeta(user: string): Promise<GithubRepoMeta[]> {
	const path: string = `/users/${user}/repos`;
	const options: RequestOption = new RequestOption(path);

	return new Promise((resolve, reject) => {
		get(options, (res) => {
			let data: string = "";

			res.on("data", (chunk) => {
				data += chunk;
			});

			res.on("end", () => {
				if (res.statusCode === 200) {
					const ghResponse: Record<string, any>[] = JSON.parse(data);

					const reposMeta: GithubRepoMeta[] = [];

					ghResponse.forEach((repoMetaRaw) => {
						const repoMeta: GithubRepoMeta = parseRepoMeta(repoMetaRaw);
						reposMeta.push(repoMeta);
					});

					resolve(reposMeta);
				} else {
					reject("Error code:" + res.statusCode);
				}
			});
		}).on("error", (err: Error) => {
			reject(err);
		});
	});
}

export function getMostUsedLanguages(): string[] {
	const mostUsedLanguages: Set<string> = new Set();

	const localGHMeta: GithubRepoMeta[] = JSON.parse(
		localStorage.getItem(githubMetaKey) ?? "{}",
	);

	localGHMeta.forEach((repoMeta: GithubRepoMeta) => {
		mostUsedLanguages.add(repoMeta.language);
	});

	return Array.from(mostUsedLanguages).filter((lang) => lang);
}

type repoGroup = "language" | "";

export function makeRepoGroups(
	by: repoGroup = "language",
): Record<string, GithubRepoMeta[]> {
	let groupsMeta: Record<string, GithubRepoMeta[]> = {};

	if (by === "language") {
		const uniqueLangs: string[] = JSON.parse(
			localStorage.getItem(mostUsedLanguagesKey) ?? "{}",
		);

		const localGithubReposMeta: GithubRepoMeta[] = JSON.parse(
			localStorage.getItem(githubMetaKey) ?? "{}",
		);

		uniqueLangs.forEach((language: string) => {
			const groupedMeta = localGithubReposMeta.filter(
				(repoMeta: GithubRepoMeta) => repoMeta.language === language,
			);
			groupsMeta[language] = groupedMeta;
		});
	}

	return groupsMeta;
}
