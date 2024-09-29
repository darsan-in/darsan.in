import style from "../styles/style.module.scss";

import skillRecords from "./skill-records";

export default function Skills({ iconSize }: { iconSize: number }) {
	return (
		<div
			className="mt-20 px-4 py-10 md:px-8 xl:mt-0 xl:pt-6"
			id="skills"
			data-aos="zoom-in-up">
			<p className="text-center text-4xl text-gray-700 font-semibold mb-10">
				<span className="text-primary font-bold uppercase tracking-wider">
					Technical Skills:
				</span>{" "}
				Have Experience with Numerous Technologies.
			</p>
			{Object.keys(skillRecords).map((skillsCat, idx) => (
				<div
					className="py-7"
					data-aos="zoom-out-up"
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
										<p className="text-center mx-2 text-black">
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
