import { get } from "https";
import { useState } from "react";

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

export async function getLatestVersion(releasesUrl: string) {
	await new Promise((resolve, reject) => {
		if (!releasesUrl) {
			reject("Error: Unreleased project");
		}

		const endpoint = releasesUrl.slice(0, -5) + "/latest";
		const parsedUrl = new URL(endpoint);

		const options = {
			hostname: parsedUrl.hostname,
			path: parsedUrl.pathname,
			headers: {
				"User-Agent": "node.js",
				Accept: "application/json",
			},
		};

		get(options, (res) => {
			let data: string = "";

			res.on("data", (chunk) => {
				data += chunk;
			});

			if (res.statusCode === 200) {
				resolve(JSON.parse(data).tag_name ?? false);
			} else {
				reject("Error: " + res.statusCode);
			}
		}).on("error", (err) => {
			reject(err);
		});
	});
}

export function LatestVersion({ releasesUrl }: { releasesUrl: string }) {
	const [state, setState] = useState<string | boolean>(false);

	getLatestVersion(releasesUrl)
		.then((version: any) => {
			if (version) setState(version);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<p className="text-blue-500">
			{state ? `Version: ${state}` : "Unreleased"}
		</p>
	);
}
