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
		job_description: (
			<div>
				<p className="mb-3">
					My journey in software development is anchored in a commitment to
					innovation and excellence. As the founder and lead engineer at
					Cresteem, I spearheaded the creation of cutting-edge projects
					aimed at enhancing web development, search engine optimization,
					and productivity. My leadership and technical skills were pivotal
					in mentoring a team to develop impactful web solutions, such as
					landing pages, blogging platforms, and web crawlers, while also
					imparting valuable knowledge in SEO and continuous integration
					through GitHub Actions.
				</p>

				<p className="mb-3">
					Facing the challenges of a startup environment, I embraced
					automation and rapidly expanded my portfolio, single-handedly
					developing over 10 projects. Notable among these are{" "}
					<a
						href="https://hawkjs.cresteem.com"
						className="font-medium">
						Hawk JS
					</a>
					,{" "}
					<a
						href="https://richiejs.cresteem.com/"
						className="font-medium">
						Richie JS
					</a>
					,{" "}
					<a
						href="https://minomax.cresteem.com/"
						className="font-medium">
						Minomax
					</a>
					,{" "}
					<a
						href="https://bonse.cresteem.com/"
						className="font-medium">
						BONSE
					</a>
					,{" "}
					<a
						href="https://github.com/darsan-in/Div.js#readme"
						className="font-medium">
						Div.js
					</a>
					, and{" "}
					<a
						href="https://fastimage.darsan.in/"
						className="font-medium">
						Fastimage & API
					</a>
					—tools specifically designed to optimize web development and
					search engine processes. My approach encompasses the entire
					software lifecycle, from initial development and rigorous testing
					to seamless deployment and continuous maintenance, all executed
					with efficiency and precision through agile methodologies.
				</p>

				<p className="mb-3">
					Driven by a visionary goal, I am working on creating a fully
					autonomous digital robot capable of executing complex web
					development tasks based solely on user requirements. This
					ambitious project ties together my extensive experience and
					diverse skill set in full-stack development, SEO, productivity
					enhancement, and continuous integration.
				</p>

				<p>
					With a proven track record of delivering high-impact solutions, I
					am eager to bring my expertise to a leading technology company or
					to collaborate with entrepreneurs seeking innovative, automated
					solutions.
				</p>
			</div>
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
			<p>
				During my month-long internship at BlueKode Technology, I led a
				team of three in developing an Online Billing Management System for
				enterprises. Utilizing Python and Django, along with JavaScript and
				MySQL, we created a robust solution that streamlined billing
				processes and improved user experience. This role honed my
				leadership abilities and technical skills, laying a strong
				foundation for delivering innovative solutions in my future
				projects.
			</p>
		),
		job_type: "Intern",
		location: "IN, TN, Coimbatore",
		path: "https://www.bluekode.com",
		duration: "1 Month",
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
		<div className="max-w-screen-md mx-auto md:px-8">
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
