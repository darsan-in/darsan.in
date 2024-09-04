import {
	BiLogoDjango,
	BiLogoFlask,
	BiLogoGraphql,
	BiLogoJquery,
	BiLogoMongodb,
	BiLogoPython,
	BiLogoSass,
	BiLogoTypescript,
} from "react-icons/bi";
import { CiPenpot } from "react-icons/ci";
import { DiDart } from "react-icons/di";
import { FaGulp, FaLinux, FaNode } from "react-icons/fa";
import { FaAws, FaFreebsd, FaGitAlt, FaJenkins } from "react-icons/fa6";
import { GiDolphin, GiEyeTarget } from "react-icons/gi";

import {
	IoLogoCss3,
	IoLogoElectron,
	IoLogoGithub,
	IoLogoHtml5,
	IoTerminal,
} from "react-icons/io5";
import { MdScatterPlot } from "react-icons/md";
import {
	RiFirebaseFill,
	RiFlutterFill,
	RiGitlabFill,
	RiJavaFill,
	RiJavascriptFill,
	RiNextjsFill,
	RiReactjsFill,
	RiTailwindCssFill,
	RiWindowsFill,
} from "react-icons/ri";
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiArduino,
	SiBurpsuite,
	SiCplusplus,
	SiDocker,
	SiExpress,
	SiFoodpanda,
	SiGooglecloud,
	SiGooglesearchconsole,
	SiJest,
	SiKeystone,
	SiNextra,
	SiNumpy,
	SiPassport,
	SiPhp,
	SiPuppeteer,
	SiSelenium,
	SiSocketdotio,
	SiWebassembly,
	SiWebpack,
	SiWindowsterminal,
	SiWireshark,
} from "react-icons/si";
import Office from "./icons/office";

const skillRecords: Record<
	string,
	{ text: string; icon: any; color: string }[]
> = {
	"Programming Languages": [
		{
			text: "TypeScript",
			icon: BiLogoTypescript,
			color: "#478CCF",
		},
		{
			text: "JavaScript",
			icon: RiJavascriptFill,
			color: "#F9E400",
		},
		{ text: "Python", icon: BiLogoPython, color: "#FFDA76" },
		{ text: "Dart", icon: DiDart, color: "#086972" },
		{ text: "PHP", icon: SiPhp, color: "#6EACDA" },
		{ text: "Java", icon: RiJavaFill, color: "#FF8343" },
		{ text: "C & C++", icon: SiCplusplus, color: "#4535C1" },
	],

	"Frontend Development": [
		{ text: "React", icon: RiReactjsFill, color: "#36C2CE" },
		{ text: "Next JS", icon: RiNextjsFill, color: "#03346E" },
		{ text: "Flutter", icon: RiFlutterFill, color: "#3DC2EC" },
		{ text: "HTML", icon: IoLogoHtml5, color: "#FF8343" },
		{ text: "CSS", icon: IoLogoCss3, color: "#1679AB" },
		{ text: "SCSS", icon: BiLogoSass, color: "#FF4191" },
		{ text: "Tailwind CSS", icon: RiTailwindCssFill, color: "#3FA2F6" },
		{ text: "Jquery", icon: BiLogoJquery, color: "#0F67B1" },
		{ text: "Web Assembly", icon: SiWebassembly, color: "#17B978" },
		{ text: "Nextra", icon: SiNextra, color: "#7FA1C3" },
		{ text: "Electron JS", icon: IoLogoElectron, color: "#03346E" },
	],

	"Backend Development": [
		{ text: "Node", icon: FaNode, color: "#88D66C" },
		{ text: "Express JS", icon: SiExpress, color: "#134B70" },
		{ text: "Django", icon: BiLogoDjango, color: "#399918" },
		{ text: "Flask", icon: BiLogoFlask, color: "#677D6A" },
		{ text: "Keystone JS", icon: SiKeystone, color: "#36C2CE" },
		{ text: "Passport JS", icon: SiPassport, color: "#41B06E" },
		{ text: "Socket.io", icon: SiSocketdotio, color: "#A0153E" },
	],

	"Databases and Data Handling": [
		{ text: "Mongo DB", icon: BiLogoMongodb, color: "#35A29F" },
		{ text: "My SQL", icon: GiDolphin, color: "#6499E9" },
		{ text: "Firebase", icon: RiFirebaseFill, color: "#FF8400" },
		{ text: "GraphQL", icon: BiLogoGraphql, color: "#82CD47" },
		{ text: "Pandas", icon: SiFoodpanda, color: "#443737" },
		{ text: "Numpy", icon: SiNumpy, color: "#333A73" },
		{ text: "MatPlotlib", icon: MdScatterPlot, color: "#090088" },
	],

	"DevOps and CI/CD": [
		{ text: "Github & CI", icon: IoLogoGithub, color: "#414141" },
		{ text: "Gitlab & CI", icon: RiGitlabFill, color: "#faa226" },
		{ text: "Git", icon: FaGitAlt, color: "#FF6868" },
		{ text: "Jenkins", icon: FaJenkins, color: "#071952" },
		{ text: "WebPack", icon: SiWebpack, color: "#2192FF" },
		{ text: "Gulp", icon: FaGulp, color: "#FF7777" },
		{ text: "AWS", icon: FaAws, color: "#FF9551" },
		{ text: "Google Cloud", icon: SiGooglecloud, color: "#0E185F" },
		{ text: "Docker", icon: SiDocker, color: "#2FA4FF" },
	],

	"Test Automation": [
		{ text: "Puppeteer", icon: SiPuppeteer, color: "#43919B" },
		{ text: "Jest", icon: SiJest, color: "#7E2553" },
		{ text: "Selenium", icon: SiSelenium, color: "#52D681" },
	],

	"Network Security Tools": [
		{ text: "Wireshark", icon: SiWireshark, color: "#0096FF" },
		{ text: "Burp Suite", icon: SiBurpsuite, color: "#FF8D29" },
		{ text: "Nmap", icon: GiEyeTarget, color: "#4D77FF" },
	],

	"Operating Systems": [
		{ text: "Linux", icon: FaLinux, color: "#172774" },
		{ text: "Windows", icon: RiWindowsFill, color: "#7DEDFF" },
		{ text: "Free BSD", icon: FaFreebsd, color: "#FC5404" },
	],

	"Design Tools": [
		{ text: "Photoshop", icon: SiAdobephotoshop, color: "#0E49B5" },
		{ text: "Illustrator", icon: SiAdobeillustrator, color: "#6F0000" },
		{ text: "Penpot", icon: CiPenpot, color: "#F40968" },
	],

	"Development and Productivity Tools": [
		{ text: "Bash", icon: IoTerminal, color: "#272121" },
		{ text: "CMD", icon: SiWindowsterminal, color: "#414141" },
		{ text: "MS Office", icon: Office, color: "#FC6B3F" },
	],

	"Digital Marketing": [
		{ text: "SEO", icon: SiGooglesearchconsole, color: "#7459DC" },
	],

	"IOT & Hardwares": [
		{ text: "Arduino", icon: SiArduino, color: "#38C6BD" },
	],
};

export default skillRecords;
