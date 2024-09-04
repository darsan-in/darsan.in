export const metainfo = {
	title:
		"Darsan: Engineering Excellence in Web Development and SEO | Best Freelancer at your service | @darsan-in",
	description:
		"Discover the resume of Darsan S., a tech enthusiast with a diverse skill set. Offering expertise in full-stack development, SEO, and automation, Darsan is eager to drive innovation.",
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
	github: "darsan-in",
	gitlab: "darsan.in",
	linkedin: "darsan-in",
	mail: "hello@darsan.in",
	phone: "+91-6381866191",
	npmjs: "darsan.in",
	youtube: "darsan-in",
	huggingface: "darsan",
};

export const localMetaKey: string = "worksmeta";
