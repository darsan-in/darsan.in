import { BsSuitcaseLg } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RxCalendar } from "react-icons/rx";

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
			"Established and managed an IT services company, specializing in mobile, web, and desktop development, UI/UX design, SEO, digital marketing, and software solutions. Led a 3-member team in developing our flagship landing page (cresteem.com) with a perfect Google Lighthouse score of 100% in all categories. Technologies used: Git, HTML, JS, CSS, Python (Pandas), MySQL, and PHP.",
		job_type: "Full-time",
		location: "IN, TN, Nagapattinam",
		path: "https://cresteem.com",
		duration: "1 Year & 6 Months",
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
			"Led a 4-member team in developing an Online Billing Management System using Django, JavaScript, and MySQL. Enhanced collaboration through effective GitHub utilization. Integrated team contributions into a unified web app.",
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
			<div className="max-w-xl md:mx-auto">
				<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
					<span className="text-primary uppercase font-bold">
						Experiences:
					</span>{" "}
					Discover My Previous Endeavors.
				</h3>
			</div>
		</div>
		<div className="max-w-screen-lg mx-auto px-4 md:px-8">
			<ul className="mt-12 divide-y space-y-3">
				{experiences.map((item, idx) => (
					<li
						key={idx}
						className="px-10 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50 border border-1 rounded-lg">
						<a
							href={item.path}
							target="_"
							className="space-y-3">
							<div className="flex items-center gap-x-3">
								<div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
									<div className="w-12">{item.company_icon}</div>
								</div>
								<div>
									<span className="block text-sm text-indigo-600 font-medium">
										{item.company_name}
									</span>
									<h3 className="text-base text-gray-800 font-semibold mt-1">
										{item.job_title}
									</h3>
								</div>
							</div>
							<p className="text-gray-600 sm:text-sm">
								{item.job_description}
							</p>
							<div className="text-sm text-gray-600 flex items-center gap-6">
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
