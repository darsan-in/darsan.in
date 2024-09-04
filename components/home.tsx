"use client";

import { useEffect, useState } from "react";
import Achievments from "./achievments";
import Education from "./education";
import Experience from "./experience";
import Featured from "./featured";
import Hero from "./hero";
import Loading from "./loading";
import NotLimited from "./not-limited";
import Quote from "./quote";
import Skills from "./skills";
import Topnav from "./topnav";
import { fetchGHMeta, localMetaStructure } from "./utils";
import Works from "./works";

export default function HomePage() {
	const [localMeta, setLocalMeta] = useState<localMetaStructure>(
		{} as localMetaStructure,
	);

	useEffect(() => {
		/*  */
		const getSetMeta = async () => {
			const expiryInHours = 168;

			const localMeta: localMetaStructure = await fetchGHMeta(
				expiryInHours,
			);

			setLocalMeta(localMeta);
		};

		getSetMeta().catch((err) => {
			console.error(err);
		});
	}, []);

	return (
		<>
			{!localMeta.projects ? (
				<div className="flex w-full h-full justify-center mt-20 pb-[50%]">
					<Loading className="animate-pulse" />
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
