import { RiCodeSSlashLine, RiRobot2Line } from "react-icons/ri";

export default () => {
	return (
		<div className="w-full mb-60 pb-20">
			<div className="max-w-2xl mx-auto py-10">
				<div className="mx-auto px-4 sm:px-0 mt-8 text-center">
					<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
						<span className="font-bold text-primary">
							Educational Background{" "}
						</span>
					</h3>
					<p className="mt-3 text-gray-800">
						Showcasing the degrees and certifications that have shaped my
						professional foundation.
					</p>
				</div>
				{/*  */}
				<div className="flex max-w-full-1xl mt-7 relative px-10 justify-center">
					<div className="flex w-[90%] relative justify-between">
						<div className="relative z-10 flex justify-center items-center w-[25px] h-[25px] p-2 rounded-full bg-indigo-100 text-primary">
							<RiCodeSSlashLine size={21} />

							<p className="absolute top-10 pt-2 font-semibold w-[790%] text-gray-800 text-xl text-center">
								Bachelor in Science
								<br />
								<span>(2018 - 2021)</span>
								<br />
								<span className="text-sm font-normal">
									I earned my B.Sc in{" "}
									<b className="text-gray-600">Computer Science</b> from
									E.G.S Pillay Arts and Science College in Nagapattinam,
									TN, completing the program from 2018 to 2021 with a
									commendable <b className="text-gray-600">score of 79%</b>
									. This foundational degree provided me with essential
									knowledge and skills in computer science, laying the
									groundwork for my subsequent advanced studies and
									professional pursuits in the tech industry.
								</span>
							</p>
						</div>

						<div className="relative z-10 flex justify-center items-center w-[25px] h-[25px] p-2 rounded-full bg-indigo-100 text-primary">
							<RiRobot2Line size={22} />
							<p className="absolute top-10 pt-2 font-semibold w-[790%] text-gray-800 text-xl text-center">
								Master in Science
								<br />
								<span>(2021 - 2023)</span>
								<br />
								<span className="text-sm font-normal">
									I hold an M.Sc in{" "}
									<b className="text-gray-600">Information Technology</b>{" "}
									from Sri Krishna Arts and Science College in Coimbatore,
									TN, completed between 2021 and 2023 with a distinguished{" "}
									<b className="text-gray-600">score of 84%</b>. This
									academic journey not only equipped me with a robust
									understanding of advanced IT concepts but also honed my
									skills in various cutting-edge technologies, preparing me
									to excel in the dynamic field of technology and software
									development.
								</span>
							</p>
						</div>

						<hr className="absolute top-5 z-0 h-12 border md:w-full md:h-auto border-primary max-w-lg" />
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
};
