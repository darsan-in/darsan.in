import { totalProjectkey } from "meta";
import { useEffect, useState } from "react";

export const ShortMessage = () => {
	const [state, setState] = useState<string | number>(0);

	useEffect(() => {
		const count: string = String(localStorage.getItem(totalProjectkey));
		setState(count);
	}, []);

	return <>{`Over ${state} projects completed`}</>;
};

export function LatestVersion({ userRepo }: { userRepo: string }) {
	const [state, setState] = useState<string | number>(0);
	const endpoint = `https://img.shields.io/github/v/release${userRepo}`;

	useEffect(() => {
		console.log(endpoint);
		fetch(endpoint)
			.then((response) => response.text())
			.then((data) => {
				const versionRegex = /<title>release: (v\d+\.\d+\.\d+)<\/title>/;
				const match = data.match(versionRegex);

				if (match) {
					setState(`Version ${match[1].slice(1)}`);
				} else {
					setState("Unreleased");
				}
			})
			.catch((error) => console.error("Error fetching the data:", error));
	}, []);

	return <>{state ? `${state}` : "Loading.."}</>;
}
