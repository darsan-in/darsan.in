import style from "../styles/style.module.scss";
import skills from "./skill-records";

export default function Skills({
	iconSize,
	color,
}: {
	iconSize: number;
	color: string;
}) {
	return (
		<>
			{skills.map((skill: any, index: number) => {
				const SkillIcon = skill.icon;

				return (
					<div
						className={`flex justify-center items-center my-3 mx-0`}
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
