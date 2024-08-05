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
			<div className="max-w-screen-xl mx-auto md:text-center md:px-8 mt-12 pt-20">
				<div className="max-w-xl md:mx-auto">
					<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
						<span className="text-primary uppercase font-bold">
							Projects:
						</span>{" "}
						Crafting Digital Solutions with Precision and Innovation
					</h3>
					<p className="mt-3 text-gray-600">
						Discover my extensive portfolio showcasing proficiency in
						software engineering, automation, and digital marketing.
						Projects like CareerBot automate job applications, while
						Chatrix innovates IoT solutions. Notably, Hawk JS, Richie JS,
						and Minomax enhance SEO strategies. With expertise in
						TypeScript, Python, React.js, and more, these projects
						exemplify my commitment to delivering impactful solutions
						across diverse domains.
					</p>
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
