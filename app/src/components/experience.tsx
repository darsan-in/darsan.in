import { BiLinkExternal } from "react-icons/bi";
import { BsSuitcaseLg } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";
import style from "../styles/style.module.scss";
import { experienceDuration } from "./utils";

const experiences = [
	{
		company_icon: (
			<img
				className="rounded-full"
				src="/icon/cresteem_logo.jpg"
				alt=""
			/>
		),
		company_name: "Cresteem",
		job_title: "Founder & Software Engineer",
		job_description:
			"As the founder and software engineer at Cresteem, I initiated the development of open-source projects like Hawk JS, Richie JS, and Minomax, specializing in web development and SEO. Our vision is to enhance web development and digital marketing efficiency through our automated tools. These projects, released on npm and GitHub, highlight my expertise in managing the entire software lifecycle from development to production. With a solid grasp of software licensing and operational strategies as a company founder, I successfully led a dedicated team of three members.",
		job_type: "Full-time",
		location: "IN, TN, Nagapattinam",
		path: "https://cresteem.com",
		duration: experienceDuration("01-01-2023"),
	},
	{
		company_icon: (
			<img
				className="rounded-full"
				src="/icon/bluekode_logo.jpg"
				alt=""
			/>
		),
		company_name: "Bluekode Solutions",
		job_title: "Full Stack Developer",
		job_description:
			"During my internship at Bluekode Solutions, I spearheaded a dynamic team in crafting an innovative Online Billing Management System. Leveraging Django, JavaScript, and MySQL, we streamlined processes and enhanced user interaction, ensuring seamless integration and optimal performance. This experience fortified my leadership and technical skills, preparing me to drive impactful solutions in future endeavors.",
		job_type: "Intern",
		location: "IN, TN, Coimbatore",
		path: "https://www.bluekode.com",
		duration: "2 Months",
	},
];

export default () => (
	<section
		className="py-20"
		id="experience">
		<div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
			<div className="max-w-1xl md:mx-auto">
				<h3 className="w-full text-gray-800 text-3xl font-semibold sm:text-4xl">
					<span className="text-primary uppercase font-bold">
						&lt;Experiences/&gt;
					</span>{" "}
					Expertise Forged Through Dedication, Not Just the Passage of
					Time.
				</h3>
			</div>
		</div>
		<div className="max-w-screen-lg mx-auto md:px-8">
			<ul className="mt-12 space-y-3">
				{experiences.map((item, idx) => (
					<li
						key={idx}
						className={
							"px-10 py-8 duration-150 hover:rounded-xl rounded-xl hover:shadow-xl border border-gray-200 " +
							style.expCard
						}>
						<a
							href={item.path}
							target="_blank"
							className="space-y-3">
							<div className="flex items-center gap-x-3">
								<div className="bg-white w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center">
									<div className="w-12">{item.company_icon}</div>
								</div>
								<div>
									<p className="flex text-sm text-primary font-medium items-center gap-x-2">
										{item.company_name} <BiLinkExternal />
									</p>
									<h3 className="text-base text-gray-800 font-semibold mt-1">
										{item.job_title}
									</h3>
								</div>
							</div>
							<p className="text-gray-600 sm:text-sm">
								{item.job_description}
							</p>
							<div
								className={
									"text-sm text-gray-600 flex items-center gap-6 px-4 " +
									style.expItems
								}>
								<span className="flex items-center gap-2">
									<BsSuitcaseLg className="w-4 h-4 text-gray-500" />
									{item.job_type}
								</span>
								<span className="flex items-center gap-2">
									<GrLocation className="w-4 h-4 text-gray-500" />

									{item.location}
								</span>

								<span className="flex items-center gap-2">
									<RxCalendar className="w-4 h-4 text-gray-500" />

									{item.duration}
								</span>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	</section>
);
