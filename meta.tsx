import { getReposMeta } from "lib/github";
import { GithubRepoMeta } from "lib/options";

export const metainfo = {
	title:
		"DARSAN (@iamspdarsan)- Expert in Web, Desktop, Mobile Development & SEO",
	description: "",
};

export const name: string = `PRIYADARSAN`;

export const shortMessage: string = `Over 10 projects completed`;

export const ShortInto = (): React.ReactNode => {
	return (
		<>
			Founder <span className="text-blue-600">@Cresteem</span> , Expert in
			Web, Desktop, Mobile Development & SEO
		</>
	);
};

export const summary: string = `I specialize in web, desktop, and mobile development,
							combining innovation with meticulous craftsmanship to deliver
							impactful software solutions. With a passion for transforming
							ideas into reality, I lead projects that redefine user
							experiences and drive business growth. Let's collaborate on
							building the next generation of digital innovations.`;

export const navigation = [
	{ title: "Works", path: "" },
	{ title: "Experience", path: "" },
	{ title: "Achievments", path: "" },
];

export const communication = {
	github: "iamspdarsan",
	linkedin: "iamspdarsan",
	mail: "hello@darsan.in",
	phone: "+91-6381866191",
};

/* GitHub page owners whose projects you have worked on */
const workedOn: string[] = ["iamspdarsan", "cresteem"];

export const loadGithubMeta = async () => {
	const reposMeta: GithubRepoMeta[] = [];

	for (const page of workedOn) {
		const currentPageReposMeta: GithubRepoMeta[] = await getReposMeta(
			page,
		);
		/* filter */

		reposMeta.push(...currentPageReposMeta);
	}
	return reposMeta;
};

export const githubMetaKey: string = "ghmeta";
export const mostUsedLanguagesKey = "ghlangs";
export const groupedMetaKey = "gh-grouped";
