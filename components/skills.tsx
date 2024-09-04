import { useEffect } from "react";
import style from "../styles/style.module.scss";

import { getRandomColor } from "./utils";

export default function Skills({
	iconSize,
	skills,
}: {
	iconSize: number;
	skills: { text: string; icon: any; color: string }[];
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
							`flex justify-center items-center py-5 mx-0 ` + style.skills
						}
						key={index}>
						<SkillIcon
							className={`text-center ${style.skillIcon}`}
							size={iconSize}
							color={skill.color}
						/>
						<p
							className="text-center mx-2"
							style={{ color: "black" }}>
							{skill.text}
						</p>
					</div>
				);
			})}
		</>
	);
}
