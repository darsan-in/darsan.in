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
			Founder of{" "}
			<a
				className="text-primary"
				target="_blank"
				href="https://cresteem.com/">
				Cresteem
			</a>
			<span className="text-primary"> & </span>
			<a
				className="text-primary"
				target="_blank"
				href="https://effectivepc.in/">
				Effective PC
			</a>
			, Full Stack Engineer, DevOps and Cloud Specialist, SEO Expert, Tech
			Consultant
		</p>
	);
};

export const summary = (
	<>
		I turn ideas into impactful solutions by combining technical expertise
		with strategic insight. Using agile methodologies, I streamline
		development and leverage cloud technologies for efficient deployment
		and scaling. My DevOps practices ensure seamless integration, while my
		full-stack skills provide comprehensive solutions. Committed to
		continuous improvement and innovation,{" "}
		<span className="text-primary">
			I aim to make a meaningful impact in the tech world through
			collaboration on visionary projects.
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
