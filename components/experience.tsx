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
		job_title: "Founder & Lead Software Engineer",
		job_description: (
			<ul className="list-disc leading-loose">
				<li>
					<span className="font-medium">
						Founder and lead engineer at Cresteem
					</span>
					, spearheading cutting-edge projects in web development, SEO, and
					productivity.
				</li>
				<li>
					Successfully led and mentored a team to develop impactful web
					solutions, including landing pages, blogging platforms, and web
					crawlers.
				</li>
				<li>
					Expertise in SEO and continuous integration using GitHub Actions,
					enhancing the team&apos;s efficiency and project success.
				</li>
				<li>
					Embraced automation to overcome startup challenges,
					single-handedly developing over 10 projects, including:
					<ul
						className="pl-5"
						style={{ listStyleType: "circle" }}>
						<li>
							<a
								href="https://hawkjs.cresteem.com"
								className="font-medium">
								Hawk JS
							</a>
							: Sitemap generator and deployer.
						</li>
						<li>
							<a
								href="https://richiejs.cresteem.com/"
								className="font-medium">
								Richie JS
							</a>
							: Rich result generator.
						</li>
						<li>
							<a
								href="https://minomax.cresteem.com/"
								className="font-medium">
								Minomax
							</a>
							: Web resource compression tool.
						</li>
						<li>
							<a
								href="https://bonse.cresteem.com/"
								className="font-medium">
								BONSE
							</a>
							: SEO optimization tool.
						</li>
						<li>
							<a
								href="https://github.com/darsan-in/Div.js#readme"
								className="font-medium">
								Div.js
							</a>
							: Device-specific CSS splitter.
						</li>
						<li>
							<a
								href="https://fastimage.darsan.in/"
								className="font-medium">
								Fastimage & API
							</a>
							: HD image search engine.
						</li>
					</ul>
				</li>
				<li>
					Comprehensive approach to software development, covering the
					entire lifecycle from development and testing to deployment and
					maintenance, using agile methodologies.
				</li>
				<li>
					<span className="font-medium">Visionary project:</span>{" "}
					Developing a fully autonomous digital robot for complex web
					development tasks based on user requirements.
				</li>
				<li>
					Proven track record of delivering high-impact solutions, with a
					keen interest in joining a leading technology company or
					collaborating with entrepreneurs seeking innovative, automated
					solutions.
				</li>
			</ul>
		),
		job_type: "Full-time",
		location: "Remote",
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
		job_description: (
			<ul className="list-disc leading-loose">
				<li>
					Completed an intensive, month-long internship at{" "}
					<span className="font-medium">BlueKode Technology</span>.
				</li>
				<li>
					Successfully led a team of three in developing an{" "}
					<span className="font-medium">
						Online Billing Management System
					</span>{" "}
					for enterprises.
				</li>
				<li>
					Utilized <span className="font-medium">Python</span> and{" "}
					<span className="font-medium">Django</span>, along with{" "}
					<span className="font-medium">JavaScript</span> and{" "}
					<span className="font-medium">MySQL</span>, to deliver a robust
					solution.
				</li>
				<li>
					Streamlined billing processes and significantly improved user
					experience with the developed system.
				</li>
				<li>
					Quickly honed leadership abilities and technical skills,
					achieving impactful results in a short timeframe and laying a
					strong foundation for future projects.
				</li>
			</ul>
		),
		job_type: "Intern",
		location: "IN, TN, Coimbatore",
		path: "https://bluekode.com",
		duration: "1 Month",
	},
];

export default function Experience() {
	return (
		<section
			className="py-20"
			id="experience">
			<div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
				<div className="md:mx-auto">
					<h3 className="lg:w-[75%] text-gray-800 text-3xl font-semibold sm:text-4xl mx-auto">
						<span className="text-primary uppercase font-bold">
							&lt;Experiences/&gt;
						</span>{" "}
						Expertise Forged Through Dedication, Not Just the Passage of
						Time.
					</h3>
				</div>
			</div>
			<div className="max-w-screen-md mx-auto md:px-8">
				<ul className="mt-12 space-y-3">
					{experiences.map((item, idx) => (
						<li
							key={idx}
							className={
								"px-[10%] py-[6%] duration-150 hover:rounded-xl rounded-xl hover:shadow-xl border border-gray-200 " +
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
								<div className="text-gray-600 sm:text-sm">
									{item.job_description}
								</div>
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
}
