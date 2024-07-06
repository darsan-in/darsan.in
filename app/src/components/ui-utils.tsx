import Spinner from "./spinner";

export const ShortMessage = ({ count }: { count: number }) => {
	return (
		<>
			{count ? `Over ${count} projects completed` : <Spinner size={20} />}
		</>
	);
};
