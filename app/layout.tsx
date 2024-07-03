import { HiDocumentArrowDown } from "react-icons/hi2";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import "./src/styles/globals.scss";
import style from "./src/styles/style.module.scss";

export const metadata = {
	title:
		"DARSAN (@iamspdarsan)- Expert in Web, Desktop, Mobile Development & SEO",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const bannerIconSize: number = 20;
	const iconBgClasses: string =
		"w-8 h-8 flex-none rounded-full flex items-center justify-center text-white " +
		style.bannerIcon;

	return (
		<html lang="en">
			<body>
				<header className="h-15 rounded-b-lg border border-indigo-100">
					<div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8">
						<div className="flex gap-x-4 text-sm text-black">
							<a
								href="https://github.com/iamspdarsan"
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-black"}>
									<RiGithubFill size={bannerIconSize} />
								</div>
								<p className="py-2">@iamspdarsan</p>
							</a>

							<a
								href="https://www.linkedin.com/in/iamspdarsan/"
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-blue-600"}>
									<RiLinkedinFill size={bannerIconSize} />
								</div>
								<p className="py-2">@iamspdarsan</p>
							</a>

							<a
								href="mailto:iamspdarsan@gmail.com"
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-green-600"}>
									<IoMail size={bannerIconSize} />
								</div>
								<p className="py-2">iamspdarsan@gmail.com</p>
							</a>

							<a
								href="tel:+91-6381866191"
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-teal-600"}>
									<IoCallSharp size={bannerIconSize} />
								</div>
								<p className="py-2">+91-6381866191</p>
							</a>

							<a
								href="cv.pdf"
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-yellow-600"}>
									<HiDocumentArrowDown size={bannerIconSize} />
								</div>
								<p className="py-2">Resume</p>
							</a>
						</div>

						<a
							href="#works"
							className="inline-block w-full mt-3 py-2 px-3 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-800 active:bg-indigo-800 rounded-lg sm:w-auto sm:mt-0 sm:text-sm border border-indigo-600">
							Hire me
						</a>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
