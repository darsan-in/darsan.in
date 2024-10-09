"use client";
import { useLayoutEffect, useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

/* function useFirstRender(callback: () => void) {
	useLayoutEffect(() => {
		callback();
	}, []); 
} */

export default function DarkMode({
	className,
	size,
}: {
	className: string;
	size: number;
}) {
	const [isDark, setDark] = useState<boolean>(false);

	/* useFirstRender(() => {
		const sysIsDark: boolean = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		if (sysIsDark) {
			setDark(true);
		}
	}); */

	useLayoutEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
			/* eye-loader bg */
			document.body.style.setProperty("--background", "rgb(17 24 39)");
		} else {
			document.body.classList.remove("dark");
			/* eye-loader bg */
			document.body.style.setProperty("--background", "#fff");
		}
	}, [isDark]);

	return (
		<button
			className={`${isDark ? "bg-yellow-500 " : "bg-black "}` + className}
			onClick={function () {
				setDark(!isDark);
			}}>
			{isDark ? <IoSunny size={size} /> : <IoMoonSharp size={size} />}
		</button>
	);
}
