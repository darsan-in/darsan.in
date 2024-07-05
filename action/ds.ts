export interface GithubRepoMeta {
	name: string;
	owner: {
		login: string;
		type: string;
	};
	htmlUrl: string;
	description: string;
	fork: boolean;
	url: string;
	releasesUrl: string;
	languagesUrl?: string;
	languagesMeta?: Record<string, string>;
	contributorsUrl: string;
	createdAt: string;
	updatedAt: string;
	homepage: string | null;
	stargazersCount: number;
	watchersCount: number;
	language: string;
	forksCount: number;
	archived: boolean;
	openIssuesCount: number;
	license: {
		name: string;
		spdxId: string;
	};
	topics: string[];
}
