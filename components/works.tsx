import * as Tabs from "@radix-ui/react-tabs";

import { GithubRepoMeta } from "action/ds";
import { useState } from "react";
import WorkCard from "./work-card";

export default function Works({
	projectsMeta,
}: {
	projectsMeta: Record<string, GithubRepoMeta[]>;
}) {
	const tabs: string[] = Object.keys(projectsMeta);

	const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

	return (
		<>
			<div className="max-w-screen-xl mx-auto md:text-center md:px-8 sm:mt-12 sm:pt-20 pt-[10%] px-5">
				<div className="max-w-xl md:mx-auto">
					<h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
						<span className="text-primary uppercase">
							&lt;Projects/&gt;
						</span>{" "}
						That Reflect My Passion and Expertise.
					</h3>
					<div className="mt-3 text-gray-600 leading-loose text-start sm:text-center">
						<p className="mb-1.5">
							Discover a curated selection of projects that showcase my
							dedication to crafting innovative and effective solutions. My
							portfolio spans various fields, including advanced search
							engines, web performance optimization, and workflow
							automation, each designed to address real-world challenges
							with precision and creativity.
						</p>

						<p className="mb-1.5">
							These projects reflect a commitment to blending technical
							skill with a deep understanding of user needs, ensuring that
							each solution is not only functional but also impactful.
							Whether you're seeking to enhance business operations or
							develop next-generation tools, my work demonstrates a blend
							of practical expertise and visionary thinking.
						</p>

						<p>
							Explore these projects to see how I bring ideas to life and
							drive progress in technology and business.
						</p>
					</div>
				</div>
			</div>
			<Tabs.Root
				id="works"
				className="max-w-screen-xl mt-6 mx-auto flex-col"
				value={selectedTab}
				onValueChange={(val) => setSelectedTab(val)}>
				<Tabs.List
					className="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex place-content-center"
					aria-label="Project Experience">
					{tabs.map((language, idx) => (
						<Tabs.Trigger
							key={idx}
							className="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium"
							value={language}>
							{language}
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{/* mobile area */}
				<div className="relative text-gray-500 sm:hidden px-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
					<select
						value={selectedTab}
						className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-gray-800 text-sm"
						onChange={(e) => setSelectedTab(e.target.value)}>
						{tabs.map((language, idx) => (
							<option key={idx}>{language}</option>
						))}
					</select>
				</div>
				{/* mobile area ended */}

				{tabs.map((language, idx) => (
					<Tabs.Content
						key={idx}
						className="py-6"
						value={language}>
						<WorkCard projects={projectsMeta[language]} />
					</Tabs.Content>
				))}
			</Tabs.Root>
		</>
	);
}
