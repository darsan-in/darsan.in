"use client";

import { ShortInto, summary } from "meta";
import { useEffect, useState } from "react";
import Achievments from "./achievments";
import Education from "./education";
import Experience from "./experience";
import Featured from "./featured";
import Loading from "./loading";
import NotLimited from "./not-limited";
import Quote from "./quote";
import skillRecords from "./skill-records";
import Skills from "./skills";
import Topnav from "./topnav";
import { ShortMessage } from "./ui-utils";
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
					<main className="px-7 sm:px-10 mt-10 sm:mt-0">
						<Topnav />
						<section>
							<div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 justify-between overflow-hidden md:flex md:px-8">
								<div className="flex-none space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl mb-20 pb-12 mt-5 sm:mt-0">
									<h1 className="text-primary font-medium">
										<ShortMessage
											totalProjects={localMeta.totalProjects}
											totalCommits={localMeta.totalCommits}
											overallDownloadCounts={
												localMeta.overallDownloadCounts
											}
										/>
									</h1>

									<h2 className="text-4xl text-gray-800 font-bold md:text-5xl">
										<ShortInto />
									</h2>

									<p>{summary}</p>

									<div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
										<a
											href="#skills"
											className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-primary/[80%] active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
											Explore more
										</a>
										<a
											href="#works"
											className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
											Works
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5">
												<path
													fillRule="evenodd"
													d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
									</div>
								</div>

								<div className="flex-none mt-2 md:mt-0 md:max-w-xl">
									<img
										src="pp-t.webp"
										className="w-85 rounded-lg"
										alt="Profile picture of PRIYADARSAN S / darsan-in"
									/>
								</div>
							</div>

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
					</main>
				</>
			)}
		</>
	);
}
