import { GithubRepoMeta } from "action/ds";
import { localMetaKey } from "meta";

export function getRandomColor(): string {
	let color: string = "";
	const min: number = 50;
	const max: number = 255;

	do {
		color = `rgb(${Math.floor(Math.random() * (max - min) + min)}, 
                     ${Math.floor(Math.random() * (max - min) + min)}, 
                     ${Math.floor(Math.random() * (max - min) + min)})`;
	} while (color === "rgb(0, 0, 0)");

	return color;
}

export async function fetchGHMeta(
	user: string,
	reponame: string,
	expiryInHours: number = 24,
): Promise<localMetaStructure> {
	const localMeta: localMetaStructure =
		getItemWithExpiration(localMetaKey);

	if (localMeta) {
		return localMeta;
	} else {
		const response = await fetch(
			`https://raw.githubusercontent.com/${user}/${reponame}/main/ghmeta.json`,
		);

		const localMetaWithoutAllCat: localMetaStructure =
			await response.json();

		const localMeta: localMetaStructure = {
			projects: {
				...localMetaWithoutAllCat.projects,
				All: Object.values(localMetaWithoutAllCat.projects).flat(),
			},
			totalProjects: localMetaWithoutAllCat.totalProjects,
			totalCommits: localMetaWithoutAllCat.totalCommits,
		};

		setItemWithExpiration(localMetaKey, localMeta, expiryInHours);

		return localMeta;
	}
}

export function getBarColours(percentages: number[]): string[] {
	const colors: string[] = [
		"#3498DB",
		"#2ECC71",
		"#E67E22",
		"#E74C3C",
		"#1ABC9C",
	];

	const sortedPercentage = percentages.sort();

	const sortedColours: string[] = [];

	percentages.forEach((percentage: number) => {
		sortedColours.push(colors[sortedPercentage.indexOf(percentage)]);
	});

	return sortedColours;
}

export function setItemWithExpiration(
	key: string,
	value: any,
	expirationInHours: number,
): void {
	const now = new Date();
	const item = {
		value: value,
		expiration: now.getTime() + expirationInHours * 60 * 60 * 1000,
	};

	localStorage.setItem(key, JSON.stringify(item));
}

function getItemWithExpiration(key: string): boolean | any {
	const itemStr = localStorage.getItem(key);

	if (!itemStr) {
		return false;
	}

	const item = JSON.parse(itemStr);
	const now = new Date();

	if (now.getTime() > item.expiration) {
		localStorage.removeItem(key);
		return false;
	}

	return item.value;
}

export interface localMetaStructure {
	projects: Record<string, GithubRepoMeta[]>;
	totalProjects: number;
	totalCommits: number;
}

export function experienceDuration(dateString: string) {
	//"08-07-2024" Example date string in "date-month-year" format

	const [day, month, year] = dateString.split("-").map(Number);

	const startedFrom: number = new Date(year, month - 1, day).getTime();

	const now: number = new Date().getTime();

	const durationInMonths: number =
		(now - startedFrom) / (1000 * 60 * 60 * 24 * 30.44);

	//Return year and month in string
	const remMonths = Math.floor(durationInMonths % 12);
	const years = Math.floor(durationInMonths / 12);

	return `${years} ${years > 1 ? "Years" : "Year"} & ${remMonths} ${
		remMonths > 1 ? "Months" : "Month"
	}`;
}

export function suppressConsoleError() {
	console.error = function () {};
}
