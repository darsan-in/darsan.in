"use client";
import { useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

export default function DarkMode({
	className,
	size,
}: {
	className: string;
	size: number;
}) {
	const [isDark, setDark] = useState<boolean>(
		Boolean(localStorage.getItem("dark")),
	);

	if (isDark) {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}

	return (
		<button
			className={`${isDark ? "bg-yellow-500 " : "bg-black "}` + className}
			onClick={function () {
				localStorage.setItem("dark", `${isDark}`);
				setDark(!isDark);
			}}>
			{isDark ? <IoSunny size={size} /> : <IoMoonSharp size={size} />}
		</button>
	);
}
