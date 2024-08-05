import style from "../styles/style.module.scss";

export const ShortMessage = ({
	totalProjects,
	totalCommits,
	overallDownloadCounts,
}: {
	totalProjects: number;
	totalCommits: number;
	overallDownloadCounts: number;
}) => {
	return (
		<ul
			className={
				"text-primary font-normal tracking-normal flex gap-x-1 sm:gap-x-2 " +
				style.stats
			}>
			<li className="flex justify-center before:content-['•'] before:mr-1 before:text-red-500">
				<p>
					<span className="font-bold">{overallDownloadCounts}</span>+ NPM
					engagements
				</p>
			</li>
			<li className="flex justify-center before:content-['•'] before:mr-1 before:text-red-500">
				<p>
					<span className="font-bold">{totalCommits}</span>+ OS
					Contributions
				</p>
			</li>
			<li className="flex justify-center before:content-['•'] before:mr-1 before:text-red-500">
				<p>
					<span className="font-bold">{totalProjects}</span>+ projects
					completed
				</p>
			</li>
		</ul>
	);
};
