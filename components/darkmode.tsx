"use client";
import { useEffect, useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

export default function DarkMode({
	className,
	size,
}: {
	className: string;
	size: number;
}) {
	const [isDark, setDark] = useState<boolean>(true);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
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
