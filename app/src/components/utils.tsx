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

export function convertDate(dateString: string): string {
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

export async function fetchGHMeta(user: string, reponame: string) {
	const response = await fetch(
		`https://raw.githubusercontent.com/${user}/${reponame}/main/ghmeta.json`,
	);
	const repoData = await response.json();
	return repoData;
}
