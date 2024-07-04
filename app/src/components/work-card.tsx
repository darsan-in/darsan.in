import { GithubRepoMeta } from "lib/options";
import { FaGithub } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";
import { convertDate } from "./utils";

export default ({ projects }: { projects: GithubRepoMeta[] }) => (
	<section className="py-5">
		<div className="max-w-screen-xl mx-auto px-4 md:px-8">
			<ul className="mt-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<li
						className="border rounded-lg"
						key={idx}>
						<div className="flex items-start justify-between p-4">
							<div className="space-y-2">
								<h4 className="text-gray-800 font-bold text-blue-700">
									{project.name.toUpperCase()}
								</h4>
								<p className="text-gray-600 text-sm">
									{project.description}
								</p>
							</div>
							<div className="flex gap-2">
								<a
									href={project.htmlUrl + "#readme"}
									target="_"
									className="text-black text-sm border rounded-lg p-1 duration-150 hover:bg-gray-100 hover:text-indigo-600">
									<FaGithub
										size={20}
										className="fill-current"
									/>
								</a>

								{project.homepage ? (
									<a
										href={project.homepage ?? ""}
										target="_"
										className="text-black text-sm border rounded-lg p-1 duration-150 hover:bg-gray-100 hover:text-indigo-600">
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
									<li className="font-medium">
										Created:{" "}
										<span className="font-normal text-gray-500">
											{convertDate(project.createdAt)}
										</span>
									</li>
									<li className="font-medium">
										Updated:{" "}
										<span className="font-normal text-gray-500">
											{convertDate(project.updatedAt)}
										</span>
									</li>
									{project.openIssuesCount ? (
										<li className="font-medium">
											Request:{" "}
											<span className="font-normal text-gray-500">
												{project.openIssuesCount}
											</span>
										</li>
									) : (
										""
									)}
								</ul>
								<ul>
									<p className="text-blue-500">
										©️ {project.license.spdxId}
									</p>
									{/* <LatestVersion releasesUrl={project.releasesUrl ?? ""} /> */}
								</ul>
							</div>
						</section>
					</li>
				))}
			</ul>
		</div>
	</section>
);
