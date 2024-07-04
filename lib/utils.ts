import { GithubRepoMeta } from "./options";

export function parseRepoMeta(
	ghResponse: Record<string, any>,
): GithubRepoMeta {
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
