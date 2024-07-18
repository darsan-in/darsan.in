import Spinner from "./spinner";

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
		<>
			{totalProjects ? (
				<>
					Over <span className="font-bold">{overallDownloadCounts}</span>+
					User installations,{" "}
					<span className="font-bold">{totalCommits}</span>+ Contributions
					& <span className="font-bold">{totalProjects}</span>+ projects
					completed{" "}
				</>
			) : (
				<Spinner size={20} />
			)}
		</>
	);
};
