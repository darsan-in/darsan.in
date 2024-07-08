import { communication, metainfo } from "meta";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
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
			<head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Mochiy+Pop+One&display=swap"
					rel="stylesheet"
				/>
			</head>

			<body>
				<header className="h-15 rounded-b-lg border border-indigo-100">
					<div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8 flex flex-wrap">
						<div
							className={
								"flex gap-x-4 text-sm text-black " + style.innerContainer
							}>
							<a
								href={`https://github.com/${communication.github}`}
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-black"}>
									<RiGithubFill size={bannerIconSize} />
								</div>
								<p className="py-2">@{communication.github}</p>
							</a>

							<a
								href={`https://www.linkedin.com/in/${communication.linkedin}`}
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-blue-600"}>
									<RiLinkedinFill size={bannerIconSize} />
								</div>
								<p className="py-2">@{communication.linkedin}</p>
							</a>

							<a
								href={`mailto:${communication.mail}`}
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-green-600"}>
									<IoMail size={bannerIconSize} />
								</div>
								<p className="py-2">{communication.mail}</p>
							</a>

							<a
								href={`tel:${communication.phone}`}
								className="flex gap-x-2">
								<div className={iconBgClasses + " bg-teal-600"}>
									<IoCallSharp size={bannerIconSize} />
								</div>
								<p className="py-2">{communication.phone}</p>
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

						<Hireme />
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
