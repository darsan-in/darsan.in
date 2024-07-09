import { communication } from "meta";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiNpmjsFill } from "react-icons/ri";
import Huggingface from "../icons/huggingface";

export default () => {
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
								Tech Enthusiast & Dream Chaser
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
								target="_">
								<FaGithub className="svg-icon w-6 h-6 text-black" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://linkedin.com/in/" + communication.linkedin}
								target="_">
								<FaLinkedin className="svg-icon w-6 h-6 text-blue-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://npmjs.com/~" + communication.github}
								target="_">
								<RiNpmjsFill className="svg-icon w-7 h-7 text-red-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={
									"https://huggingface.co/" + communication.huggingface
								}
								target="_">
								<Huggingface className="svg-icon w-7 h-7 text-blue-600" />
							</a>
						</li>

						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href="https://wa.me/+916381866191"
								target="_">
								<IoLogoWhatsapp className="svg-icon w-7 h-7 text-green-600" />
							</a>
						</li>
						<li className="w-10 h-10 border rounded-full flex items-center justify-center">
							<a
								href={"https://www.youtube.com/@" + communication.youtube}
								target="_">
								<FaYoutube className="svg-icon w-7 h-7 text-red-600" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
