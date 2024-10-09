"use client";

import { useEffect, useState } from "react";
import Achievments from "./achievments";
import Education from "./education";
import Experience from "./experience";
import EyeLoader from "./eye-loader";
import Featured from "./featured";
import Hero from "./hero";
import NotLimited from "./not-limited";
import Quote from "./quote";
import Skills from "./skills";
import Topnav from "./topnav";
import {
	fetchGHMeta,
	liveNPMDownloads,
	localMetaStructure,
} from "./utils";
import Works from "./works";

export default function HomePage() {
	const [localMeta, setLocalMeta] = useState<localMetaStructure>(
		{} as localMetaStructure,
	);

	useEffect(() => {
		/*  */
		const getSetMeta = async () => {
			const expiryInHours = 30;

			const localMeta: localMetaStructure = await fetchGHMeta(
				expiryInHours,
			);

			const npmDownloads = await liveNPMDownloads();

			setLocalMeta({
				...localMeta,
				overallDownloadCounts: npmDownloads.toUpperCase(),
			});
		};

		getSetMeta().catch((err) => {
			console.error(err);
		});
	}, []);

	return (
		<>
			{!localMeta?.projects ? (
				<div className="flex w-[100vw] h-[100vh] justify-center relative">
					<EyeLoader className="animate-pulse -top-[25%] sm:-top-[22%] md:-top-[17%] lg:-top-[5%] -left-10" />
				</div>
			) : (
				<>
					<Topnav />
					<section>
						<Hero localMeta={localMeta} />

						<Skills iconSize={40} />

						<NotLimited />
					</section>
					<Works projectsMeta={localMeta.projects ?? {}} />

					<Experience />

					<Achievments />

					<Education />

					<Featured />
					<Quote />
				</>
			)}
		</>
	);
}
