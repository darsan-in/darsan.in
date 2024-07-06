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

		const groupedMetaData: Record<string, GithubRepoMeta[]> =
			await response.json();

		const nonGrouped = Object.values(groupedMetaData).flat();
		const processedMeta = { All: nonGrouped, ...groupedMetaData };

		const upstreamMeta: localMetaStructure = {
			projects: processedMeta,
			totalProjects: nonGrouped.length,
		};

		setItemWithExpiration(localMetaKey, upstreamMeta, expiryInHours);

		return upstreamMeta;
	}
}

export function getBarColours(percentages: number[]): string[] {
	const colors: string[] = [
		"#0E46A3",
		"#90D26D",
		"#80BCBD",
		"#7077A1",
		"#AC87C5",
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
}
