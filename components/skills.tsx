import { useEffect } from "react";
import style from "../styles/style.module.scss";

import skillRecords from "./skill-records";
import { getRandomColor } from "./utils";

export default function Skills({ iconSize }: { iconSize: number }) {
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
		<div
			className="mt-20 px-4 py-10 md:px-8 xl:mt-0 xl:pt-6"
			id="skills">
			<p className="text-center text-4xl text-gray-700 font-semibold mb-10">
				<span className="text-primary font-bold uppercase tracking-wider">
					Technical Skills:
				</span>{" "}
				Have Experience with Numerous Technologies.
			</p>
			{Object.keys(skillRecords).map((skillsCat, idx) => (
				<div
					className="py-7"
					key={idx}>
					<p className="text-center text-2xl text-primary font-semibold mb-8 tracking-widest">
						{skillsCat}
					</p>
					<div
						className={
							"flex justify-center items-center text-center flex-wrap gap-x-12 gap-y-6 text-sm w-100 px-3 sm:px-20 shadow-custom-light pb-10 rounded-3xl"
						}>
						<>
							{skillRecords[skillsCat].map((skill: any, index: number) => {
								const SkillIcon = skill.icon;

								return (
									<div
										className={
											`flex justify-center items-center py-5 mx-0 ` +
											style.skills
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
					</div>
				</div>
			))}
		</div>
	);
}
