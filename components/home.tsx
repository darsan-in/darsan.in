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
import skillRecords from "./skill-records";
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

						<div
							className="mt-20 px-4 py-10 md:px-8"
							id="skills">
							<p className="text-center text-4xl text-gray-700 font-semibold mb-10">
								<span className="text-primary font-bold uppercase tracking-wider">
									Technical Skills:
								</span>{" "}
								Have Experience with Numerous Technologies.
							</p>
							{Object.keys(skillRecords).map((skillsCat, idx) => (
								<div
									className="py-7"
									key={idx}>
									<p className="text-center text-2xl text-primary font-semibold mb-8 tracking-widest">
										{skillsCat}
									</p>
									<div
										className={
											"flex justify-center items-center text-center flex-wrap gap-x-12 gap-y-6 text-sm w-100 px-3 sm:px-20 shadow-custom-light pb-10 rounded-3xl"
										}>
										<Skills
											iconSize={40}
											skills={skillRecords[skillsCat]}
										/>
									</div>
								</div>
							))}
						</div>

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
