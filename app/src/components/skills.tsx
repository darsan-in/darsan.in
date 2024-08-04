import { useEffect } from "react";
import style from "../styles/style.module.scss";

import { getRandomColor } from "./utils";

export default function Skills({
	iconSize,
	color,
	skills,
}: {
	iconSize: number;
	color: string;
	skills: { text: string; icon: any }[];
}) {
	useEffect(() => {
		/* Skill hover animation */
		const skillIcons = document.querySelectorAll(`.${style.skillIcon}`);

		const handleMouseOver = (event: MouseEvent) => {
			const skillIcon = event.target as HTMLElement;
			const randomColor = `${getRandomColor()}`;
			skillIcon.style.fill = randomColor;
			skillIcon.style.color = randomColor;
		};

		skillIcons.forEach((skillIcon: any) => {
			skillIcon.addEventListener("mouseover", handleMouseOver);
		});
		/* Skill hover animation ended*/

		/* Remove all skill animation event when ui unmounts */
		return () => {
			skillIcons.forEach((skillIcon: any) => {
				skillIcon.removeEventListener("mouseover", handleMouseOver);
			});
		};
		/* ------- */
	}, []);

	return (
		<>
			{skills.map((skill: any, index: number) => {
				const SkillIcon = skill.icon;

				return (
					<div
						className={
							`flex justify-center items-center mx-0 ` + style.skills
						}
						key={index}>
						<SkillIcon
							className={`text-center ${style.skillIcon}`}
							size={iconSize}
							color={color}
						/>
						<p
							className="text-center mx-2"
							style={{ color: color }}>
							{skill.text}
						</p>
					</div>
				);
			})}
		</>
	);
}
