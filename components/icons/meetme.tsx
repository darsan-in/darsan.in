"use client";

import { FaHandshakeAngle } from "react-icons/fa6";

export default function HireMe() {
	return (
		<a
			href="https://calendar.app.google/eYXb2TUHy4k3S8oX8"
			target="_blank"
			className="relative inline-flex items-center p-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-primary/[80%] focus:ring-4 focus:outline-none focus:ring-blue-300">
			<FaHandshakeAngle size={22} />

			<span className="ml-2">Let&apos;s Talk</span>
			<div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full top-1 end-1 dark:border-gray-900 animate-ping"></div>
		</a>
	);
}
