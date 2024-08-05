import { communication, metainfo } from "meta";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import Footer from "./src/components/footer";
import Hireme from "./src/icons/hireme";
import "./src/styles/globals.scss";
import style from "./src/styles/style.module.scss";

export const metadata = metainfo;

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
				<header className="h-15 rounded-b-lg border border-indigo-100 flex sm:block">
					<div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8 flex flex-wrap w-[60%] sm:w-[90%] mb-3 sm:mb-0">
						<div
							className={
								"flex gap-x-4 text-sm text-black " + style.innerContainer
							}>
							<a
								target="_blank"
								href={`https://github.com/${communication.github}`}
								className="flex gap-x-2"
								aria-label="Visit github page"
								title="Visit github page">
								<div className={iconBgClasses + " bg-black"}>
									<RiGithubFill size={bannerIconSize} />
								</div>
								<p className="py-2">@{communication.github}</p>
							</a>

							<a
								target="_blank"
								href={`https://www.linkedin.com/in/${communication.linkedin}`}
								className="flex gap-x-2"
								aria-label="Visit linkedin page"
								title="Visit linkedin page">
								<div className={iconBgClasses + " bg-blue-600"}>
									<RiLinkedinFill size={bannerIconSize} />
								</div>
								<p className="py-2">@{communication.linkedin}</p>
							</a>

							<a
								target="_blank"
								href={`mailto:${communication.mail}`}
								className="flex gap-x-2"
								aria-label="Mail me"
								title="Mail me">
								<div className={iconBgClasses + " bg-green-600"}>
									<IoMail size={bannerIconSize} />
								</div>
								<p className="py-2">{communication.mail}</p>
							</a>

							<a
								target="_blank"
								href={`tel:${communication.phone}`}
								className="flex gap-x-2"
								aria-label="My contact number"
								title="My contact number">
								<div className={iconBgClasses + " bg-teal-600"}>
									<IoCallSharp size={bannerIconSize} />
								</div>
								<p className="py-2">{communication.phone}</p>
							</a>

							<a
								target="_blank"
								href="cv.pdf"
								className="flex gap-x-2"
								aria-label="Download my resume"
								title="Download my resume">
								<div className={iconBgClasses + " bg-yellow-600"}>
									<HiDocumentArrowDown size={bannerIconSize} />
								</div>
								<p className="py-2">Resume</p>
							</a>
						</div>

						<Hireme />
					</div>
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
