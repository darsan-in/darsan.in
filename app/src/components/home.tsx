"use client";

import { ShortInto, communication, name, navigation, summary } from "meta";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Skills from "./skills";
import { ShortMessage } from "./ui-utils";
import { fetchGHMeta, localMetaStructure } from "./utils";
import Works from "./works";

export default function HomePage() {
	const [localMeta, setLocalMeta] = useState<localMetaStructure>(
		{} as localMetaStructure,
	);

	useEffect(() => {
		const getSetMeta = async () => {
			const expiryInHours = 1;

			const localMeta: localMetaStructure = await fetchGHMeta(
				communication.github,
				"Kinact",
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
			{Object.keys(localMeta).length === 0 ? (
				<div className="flex w-full h-full justify-center mt-20">
					<Loading />
				</div>
			) : (
				<>
					<nav className="relative mt-9 items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
						<div className="flex justify-between font-jose pr-20">
							<a href="">
								<p className="block w-full mt-2 text-center text-primary font-bold duration-1000 hover:text-blue-700 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm lg:text-8xl">
									{name}
								</p>
							</a>
						</div>

						<ul
							className={`flex-1 justify-between mt-12 md:text-lg md:font-medium md:flex md:mt-0 ${"absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"}`}>
							<div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
								{navigation.map((item, idx) => (
									<li
										className="ml-5 text-black hover:text-primary uppercase hover:underline hover:font-900"
										key={idx}>
										<a href={item.path}>{item.title}</a>
									</li>
								))}
							</div>
						</ul>
					</nav>
					<section className="py-20">
						<div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 justify-between overflow-hidden md:flex md:px-8">
							<div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
								<h1 className="text-primary font-medium">
									<ShortMessage count={localMeta.totalProjects ?? 0} />
								</h1>

								<h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl leading-loose">
									<ShortInto />
								</h2>

								<p>{summary}</p>

								<div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
									<a
										href="#skills"
										className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
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

							<div className="flex-none mt-6 md:mt-0 md:max-w-xl">
								<img
									src="pp-t.png"
									className=" md:rounded-tl-[108px] w-85"
									alt=""
								/>
							</div>
						</div>

						<div
							className="mt-14 px-4 md:px-8"
							id="skills">
							<p className="text-center text-2xl text-gray-700 font-semibold">
								<span className="text-primary text-2xl font-bold">
									Technical Skills:
								</span>{" "}
								Have Been Worked with numerous technolgies
							</p>

							<div
								className={
									"flex justify-center items-center text-center flex-wrap gap-x-12 gap-y-6 text-sm w-100 px-20 my-10"
								}>
								<Skills
									color="#4B5563"
									iconSize={40}
								/>
							</div>
						</div>
					</section>
					<Works projectsMeta={localMeta.projects ?? {}} />
				</>
			)}
		</>
	);
}
