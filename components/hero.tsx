import { ShortInto, summary } from "meta";
import Profile from "./profile";
import { ShortMessage } from "./ui-utils";
import { localMetaStructure } from "./utils";

export default function Hero({
	localMeta,
}: {
	localMeta: localMetaStructure;
}) {
	return (
		<div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center xl:items-start xl:justify-between overflow-hidden flex flex-col xl:flex-row md:px-8">
			<div
				className="flex-col space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl xl:mb-20 xl:pb-12 mt-5 sm:mt-0 order-2"
				data-aos="fade-up"
				data-aos-duration="1400">
				<h1 className="text-primary font-medium">
					<ShortMessage
						totalProjects={localMeta.totalProjects}
						totalCommits={localMeta.totalCommits}
						overallDownloadCounts={localMeta.overallDownloadCounts}
					/>
				</h1>

				<h2 className="text-4xl text-gray-800 font-bold md:text-5xl">
					<ShortInto />
				</h2>

				<p className="leading-loose">{summary}</p>

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

			<Profile />
		</div>
	);
}
