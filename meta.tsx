export const metainfo = {
	title:
		"The Multifaceted Talent of Priyadarsan S: Founder, Coder, Problem-Solver | @iamspdarsan",
	description:
		"Discover why Priyadarsan, a founder, engineer, and digital innovator, could be your company's next valuable asset. Explore their journey, skills, and impact.",
};

export const name: string = `DARSAN`;

export const ShortInto = (): React.ReactNode => {
	return (
		<p className="leading-tight">
			Founder{" "}
			<a
				className="text-primary"
				href="http://cresteem.com/">
				@Cresteem
			</a>
			, Innovative Engineer & Solution Architect
		</p>
	);
};

export const summary = (
	<>
		Passionate about transforming ideas into impactful solutions, I blend
		technical expertise with strategic insight to drive excellence in every
		project. With a focus on simplicity and efficiency, I leverage agile
		methodologies to enhance development, deployment, and scaling
		processes. My commitment to continuous improvement and creativity
		ensures that I deliver solutions that are both effective and
		groundbreaking. Eager to contribute to visionary projects and
		collaborate with forward-thinking teams,{" "}
		<span className="font-medium">
			I aim to make a meaningful difference in the tech world.
		</span>
	</>
);

export const navigation = [
	{ title: "Works", path: "#works" },
	{ title: "Experiences", path: "#experience" },
	{ title: "Achievments", path: "#achievments" },
];

export const communication = {
	github: "iamspdarsan",
	linkedin: "iamspdarsan",
	mail: "hello@darsan.in",
	phone: "+91-6381866191",
	npmjs: "iamspdarsan",
	youtube: "iamspdarsan",
	huggingface: "darsan",
};

export const localMetaKey: string = "worksmeta";
