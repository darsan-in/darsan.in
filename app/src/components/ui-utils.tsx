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
				`Over ${totalCommits}+ commits, ${overallDownloadCounts}+ NPM downloads and ${totalProjects}+ projects completed`
			) : (
				<Spinner size={20} />
			)}
		</>
	);
};
