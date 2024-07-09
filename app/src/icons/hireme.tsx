import { IoIosRocket } from "react-icons/io";

export default () => {
	return (
		<button
			type="button"
			className="relative inline-flex items-center p-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-black">
			<IoIosRocket size={22} />

			<span className="ml-2">OPEN TO WORK</span>
			<div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -end-1 dark:border-gray-900 animate-ping"></div>
		</button>
	);
};
