import { communication } from "meta";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaGitlab, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiNpmjsFill } from "react-icons/ri";
import Huggingface from "./icons/huggingface";

export default function Footer() {
	return (
		<footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 border-t">
			<div className="gap-6 justify-between md:flex">
				<div className="flex-1">
					<div className="max-w-xs">
						<p className="w-32 font-extrabold text-3xl text-primary pt-4">
							Keep innovating,
						</p>
						<p className="leading-relaxed mt-2 text-xl font-semibold">
							PRIYADARSAN S, <br />
							<span className="font-normal text-lg">
								Tech Enthusiast & Lifelong Learner
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 py-6 border-t items-center justify-between sm:flex">
				<div className="mt-4 sm:mt-0">
					&copy; 2024 PRIYADARSAN S. Licensed under the Apache License,
					Version 2.0.
				</div>
				<div className="mt-6 sm:mt-0">
					<ul className="flex items-center space-x-4">
						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://github.com/" + communication.github}
								target="_blank"
								aria-label="Visit my github page"
								title="Visit my github page">
								<FaGithub className="svg-icon w-6 h-6 text-black" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://gitlab.com/" + communication.gitlab}
								target="_blank"
								aria-label="Visit my gitlab page"
								title="Visit my gitlab page">
								<FaGitlab className="svg-icon w-5 h-5 text-orange-500" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://linkedin.com/in/" + communication.linkedin}
								target="_blank"
								aria-label="Visit my linkedin page"
								title="Visit my linkedin page">
								<FaLinkedin className="svg-icon w-6 h-6 text-blue-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://npmjs.com/~" + communication.npmjs}
								target="_blank"
								aria-label="Visit my npmjs page"
								title="Visit my npmjs page">
								<RiNpmjsFill className="svg-icon w-7 h-7 text-red-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={
									"https://huggingface.co/" + communication.huggingface
								}
								target="_blank"
								aria-label="Visit my huggingface page"
								title="Visit my huggingface page">
								<Huggingface className="svg-icon w-7 h-7 text-blue-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href="https://wa.me/+916381866191"
								target="_blank"
								aria-label="Chat me on Whatsapp"
								title="Chat me on Whatsapp">
								<IoLogoWhatsapp className="svg-icon w-7 h-7 text-green-600" />
							</a>
						</li>
						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://www.youtube.com/@" + communication.youtube}
								target="_blank"
								aria-label="Visit my youtube channel"
								title="Visit my youtube channel">
								<FaYoutube className="svg-icon w-7 h-7 text-red-600" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
