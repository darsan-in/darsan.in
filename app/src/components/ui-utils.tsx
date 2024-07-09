import Spinner from "./spinner";

export const ShortMessage = ({
	totalProjects,
	totalCommits,
}: {
	totalProjects: number;
	totalCommits: number;
}) => {
	return (
		<>
			{totalProjects ? (
				`Over ${totalCommits}+ commits and ${totalProjects} projects completed`
			) : (
				<Spinner size={20} />
			)}
		</>
	);
};
