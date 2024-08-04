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
import Office from "../icons/office";

const skillRecords: Record<string, { text: string; icon: any }[]> = {
	"Programming Languages": [
		{ text: "TypeScript", icon: BiLogoTypescript },
		{ text: "JavaScript", icon: RiJavascriptFill },
		{ text: "Python", icon: BiLogoPython },
		{ text: "Dart", icon: DiDart },
		{ text: "PHP", icon: SiPhp },
		{ text: "Java", icon: RiJavaFill },
		{ text: "C & C++", icon: SiCplusplus },
	],

	"Frontend Development": [
		{ text: "React", icon: RiReactjsFill },
		{ text: "Next JS", icon: RiNextjsFill },
		{ text: "Flutter", icon: RiFlutterFill },
		{ text: "HTML", icon: IoLogoHtml5 },
		{ text: "CSS", icon: IoLogoCss3 },
		{ text: "SCSS", icon: BiLogoSass },
		{ text: "Tailwind CSS", icon: RiTailwindCssFill },
		{ text: "Jquery", icon: BiLogoJquery },
		{ text: "Web Assembly", icon: SiWebassembly },
		{ text: "Nextra", icon: SiNextra },
		{ text: "Electron JS", icon: IoLogoElectron },
	],

	"Backend Development": [
		{ text: "Node", icon: FaNode },
		{ text: "Express JS", icon: SiExpress },
		{ text: "Django", icon: BiLogoDjango },
		{ text: "Flask", icon: BiLogoFlask },
		{ text: "Keystone JS", icon: SiKeystone },
		{ text: "Passport JS", icon: SiPassport },
		{ text: "Socket.io", icon: SiSocketdotio },
	],

	"Databases and Data Handling": [
		{ text: "Mongo DB", icon: BiLogoMongodb },
		{ text: "My SQL", icon: GiDolphin },
		{ text: "Firebase", icon: RiFirebaseFill },
		{ text: "GraphQL", icon: BiLogoGraphql },
		{ text: "Pandas", icon: SiFoodpanda },
		{ text: "Numpy", icon: SiNumpy },
		{ text: "MatPlotlib", icon: MdScatterPlot },
	],

	"DevOps and CI/CD": [
		{ text: "Github & CI", icon: IoLogoGithub },
		{ text: "Git", icon: FaGitAlt },
		{ text: "Jenkins", icon: FaJenkins },
		{ text: "WebPack", icon: SiWebpack },
		{ text: "Gulp", icon: FaGulp },
		{ text: "AWS", icon: FaAws },
		{ text: "Google Cloud", icon: SiGooglecloud },
		{ text: "Docker", icon: SiDocker },
	],

	"Test Automation": [
		{ text: "Puppeteer", icon: SiPuppeteer },
		{ text: "Jest", icon: SiJest },
		{ text: "Selenium", icon: SiSelenium },
	],

	"Network Security Tools": [
		{ text: "Wireshark", icon: SiWireshark },
		{ text: "Burp Suite", icon: SiBurpsuite },
		{ text: "Nmap", icon: GiEyeTarget },
	],

	"Operating Systems": [
		{ text: "Linux", icon: FaLinux },
		{ text: "Windows", icon: RiWindowsFill },
		{ text: "Free BSD", icon: FaFreebsd },
	],

	"Design Tools": [
		{ text: "Photoshop", icon: SiAdobephotoshop },
		{ text: "Illustrator", icon: SiAdobeillustrator },
		{ text: "Penpot", icon: CiPenpot },
	],

	"Development and Productivity Tools": [
		{ text: "Bash", icon: IoTerminal },
		{ text: "CMD", icon: SiWindowsterminal },
		{ text: "MS Office", icon: Office },
	],

	"Digital Marketing": [{ text: "SEO", icon: SiGooglesearchconsole }],

	"IOT & Hardwares": [{ text: "Arduino", icon: SiArduino }],
};

export default skillRecords;
