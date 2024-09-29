import { GithubRepoMeta } from "action/ds";
import { GoGoal, GoIssueOpened } from "react-icons/go";
import { RxDownload, RxExternalLink, RxUpdate } from "react-icons/rx";
import LevelBars from "./levelBar";

import { useEffect } from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { RiGitlabFill } from "react-icons/ri";
import style from "../styles/style.module.scss";
import Topics from "./topics";
export default function Work({
	projects,
}: {
	projects: GithubRepoMeta[];
}) {
	useEffect(() => {
		const cards = document.querySelectorAll(`.${style.workCard}`);
		cards.forEach((card) => {
			card.classList.add(style.activeTab);
		});
	});

	return (
		<section className="py-5">
			<div className="max-w-screen-xl mx-auto">
				<ul className="mt-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, idx) => {
						return (
							<li
								className={"wcard border rounded-lg " + style.workCard}
								key={idx}
								data-aos="flip-down">
								<div className="flex items-start justify-between p-6 sm:p-4 rounded-t-lg bg-primary/[20%] wdesc">
									<div className="space-y-2">
										<h4 className="text-black font-bold text-xl">
											{project.name.toUpperCase()}
										</h4>
										<p className="text-sm">{project.description}</p>
									</div>
									<div className="flex gap-2">
										<a
											href={project.htmlUrl + "#readme"}
											target="_blank"
											className="text-[#faa226] text-sm rounded-lg p-1 duration-150 hover:bg-black hover:text-white bg-white"
											aria-label={"Visit gitlab repo of " + project.name}
											title={"Visit gitlab repo of " + project.name}>
											<RiGitlabFill
												size={20}
												className="fill-current"
											/>
										</a>

										{project.homepage ? (
											<a
												href={project.homepage ?? ""}
												target="_blank"
												className="text-black text-sm rounded-lg p-1 duration-150 hover:bg-black hover:text-white bg-white"
												aria-label={
													"Visit homepage of " + project.name + " project"
												}
												title={
													"Visit homepage of " + project.name + " project"
												}>
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
												<GoGoal className="mr-2 pt-1 text-primary" />
												Created on{" "}
												<span className="ml-1 font-normal text-gray-500">
													{project.createdAt}
												</span>
											</li>
											<li className="mt-2 flex">
												<RxUpdate className="mr-2 pt-1 text-primary" />{" "}
												Updated on{"  "}
												<span className="ml-1 font-normal text-gray-500">
													{project.updatedAt}
												</span>
											</li>

											{project.downloadCount ? (
												<li className="mt-2 flex">
													<RxDownload className="mr-2 pt-1 text-primary" />{" "}
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
													<GoIssueOpened className="mr-2 pt-1 text-primary" />
													Request:{" "}
													<span className="ml-1 font-normal text-gray-500">
														{project.openIssuesCount}
													</span>
												</li>
											) : (
												""
											)}
											{project.loc ? (
												<li className="mt-2 flex">
													<HiOutlineCodeBracket className="mr-2 pt-1 text-primary" />
													Lines of code:{" "}
													<span className="ml-1 font-normal text-gray-500">
														{Math.ceil(project.loc)}
													</span>
												</li>
											) : (
												""
											)}
										</ul>
										<ul className="text-right">
											<li>
												{project.latestVersion
													? "v" + project.latestVersion
													: "Unreleased"}
											</li>
											<li className="text-blue-500 mt-2">
												©️{" "}
												{project.license.spdxId === "NOASSERTION"
													? "Custom License"
													: project.license.spdxId}
											</li>
										</ul>
									</div>
								</section>
								<div
									className={`${
										project.topics.length === 0 ? "border-t" : "border-y"
									} border-grey-400`}>
									<p className="font-semibold text-start text-md pl-5 pt-4 text-gray-600">
										LANGUAGE USAGE STATISTICS
									</p>
									<LevelBars languagesMeta={project.languagesMeta ?? {}} />
								</div>

								{project.topics.length !== 0 ? (
									<div>
										<p className="font-semibold text-start text-md pl-5 pt-4 text-gray-600">
											TOPICS
										</p>
										<Topics topics={project.topics.slice(0, 7)} />
									</div>
								) : (
									""
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
