import { GithubRepoMeta } from "action/ds";
import { FaGithub } from "react-icons/fa6";
import { GoGoal, GoIssueOpened } from "react-icons/go";
import { RxDownload, RxExternalLink, RxUpdate } from "react-icons/rx";
import LevelBars from "./levelBar";

import { useEffect } from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import style from "../styles/style.module.scss";
export default ({ projects }: { projects: GithubRepoMeta[] }) => {
	useEffect(() => {
		const cards = document.querySelectorAll(`.${style.workCard}`);
		cards.forEach((card) => {
			card.classList.add(style.activeTab);
		});
	});

	return (
		<section className="py-5">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<ul className="mt-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, idx) => (
						<li
							className={"border rounded-lg " + style.workCard}
							key={idx}>
							<div className="flex items-start justify-between p-4 rounded-t-lg bg-primary">
								<div className="space-y-2">
									<h4 className="text-white font-bold text-blue-700 text-xl">
										{project.name.toUpperCase()}
									</h4>
									<p className="text-white text-sm">
										{project.description}
									</p>
								</div>
								<div className="flex gap-2">
									<a
										href={project.htmlUrl + "#readme"}
										target="_"
										className="text-black text-sm rounded-lg p-1 duration-150 hover:bg-black hover:text-white bg-white">
										<FaGithub
											size={20}
											className="fill-current"
										/>
									</a>

									{project.homepage ? (
										<a
											href={project.homepage ?? ""}
											target="_"
											className="text-black text-sm rounded-lg p-1 duration-150 hover:bg-black hover:text-white bg-white">
											<RxExternalLink
												size={20}
												className="fill-current"
											/>
										</a>
									) : (
										""
									)}
								</div>
							</div>
							<section className="py-5 px-4 border-t text-sm">
								<div className="flex gap-x-2 justify-between">
									<ul>
										<li className="flex">
											<GoGoal className="mr-2 pt-1 text-indigo-600" />
											Created on{" "}
											<span className="ml-1 font-normal text-gray-500">
												{project.createdAt}
											</span>
										</li>
										<li className="mt-2 flex">
											<RxUpdate className="mr-2 pt-1 text-indigo-600" />{" "}
											Updated on{"  "}
											<span className="ml-1 font-normal text-gray-500">
												{project.updatedAt}
											</span>
										</li>

										{project.downloadCount ? (
											<li className="mt-2 flex">
												<RxDownload className="mr-2 pt-1 text-indigo-600" />{" "}
												Downloads:{"  "}
												<span className="ml-1 font-normal text-gray-500">
													{project.downloadCount}
												</span>
											</li>
										) : (
											""
										)}

										{project.openIssuesCount ? (
											<li className="mt-2 flex">
												<GoIssueOpened className="mr-2 pt-1 text-indigo-600" />
												Request:{" "}
												<span className="ml-1 font-normal text-gray-500">
													{project.openIssuesCount}
												</span>
											</li>
										) : (
											""
										)}
										<li className="mt-2 flex">
											<HiOutlineCodeBracket className="mr-2 pt-1 text-indigo-600" />
											Lines of code:{" "}
											<span className="ml-1 font-normal text-gray-500">
												{project.openIssuesCount}
											</span>
										</li>
									</ul>
									<ul className="text-right">
										<p>
											{project.latestVersion
												? "v" + project.latestVersion
												: "Unreleased"}
										</p>
										<p className="text-blue-500 mt-2">
											©️{" "}
											{project.license.spdxId === "NOASSERTION"
												? "Custom License"
												: project.license.spdxId}
										</p>
									</ul>
								</div>
							</section>
							<div className="border-t border-grey-400">
								<p className="font-semibold text-start text-md pl-5 pt-4 text-gray-600">
									LANGUAGE USAGE STATISTICS
								</p>
								<LevelBars languagesMeta={project.languagesMeta ?? {}} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
