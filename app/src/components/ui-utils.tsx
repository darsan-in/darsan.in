import { totalProjectkey } from "meta";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

export const ShortMessage = () => {
	const [state, setState] = useState<string | number>(0);

	useEffect(() => {
		const count: string = String(localStorage.getItem(totalProjectkey));
		setState(count);
	}, []);

	return (
		<>
			{state ? `Over ${state} projects completed` : <Spinner size={20} />}
		</>
	);
};
