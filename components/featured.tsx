const imageRecord: { imageLink: string; alt: string }[] = [
	{
		imageLink: "/carousels/darsan-cyber-hackathon-winners.webp",
		alt: "Winners taking picture with trophy and medals at Sri Krishna Arts and Science College,Coimbatore - National Level Cyber Hackathon India, 2022 Winners - Darsan and more (bladerunners)",
	},
	{
		imageLink: "/carousels/darsan-winner-national-hackathon-skasc-2.webp",
		alt: "Winners Receiving prize at the hackathon event - Sri Krishna Arts and Science College,Coimbatore - National Level Cyber Hackathon India, 2022 Winners - Darsan and more (bladerunners)",
	},
	{
		imageLink: "/carousels/darsan-winner-national-hackathon-skasc.webp",
		alt: "National Level Cyber Hackathon India, 2022 Winners - Darsan Holding Trophy",
	},
	{
		imageLink: "/carousels/darsan-top-coder-winner.webp",
		alt: "Internal campus coding competition at Sri Krishna Arts and Science College (SKASC) - Winner",
	},
	{
		imageLink: "/carousels/darsan-ug-graduation.webp",
		alt: "Darsan receiving his certificate at graduation ceremony",
	},
];

export default () => (
	<section className="pt-15 md:pt-[13%] lg:pt-[7%] mt-10 flex-col items-center justify-center text-center">
		<h1 className="flex-col md:inline-block text-3xl sm:text-4xl md:text-6xl font-bold text-primary pb-10 md:mb-10 uppercase space-y-4 w-[50%] md:w-auto m-auto">
			<span className="sm:bg-primary/[10%] sm:p-5 sm:px-10 rounded-lg block md:inline-block">
				📸 Featured
			</span>{" "}
			<span className="text-white sm:p-5 sm:px-10 rounded-lg bg-primary block md:inline-block">
				Gallery
			</span>
		</h1>

		<div className="flex-col space-y-4 lg:space-y-0 gap-y-5 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4 w-[100%] lg:h-[1000px]">
			<div className="row-span-2 col-span-1 col-start-1">
				<img
					className="object-cover h-[100%] w-[100%]"
					src={imageRecord[0].imageLink}
					alt={imageRecord[0].alt}
				/>
			</div>

			<div className="row-span-1 col-start-2 row-start-1">
				<img
					className="object-cover h-[100%] w-[100%]"
					src={imageRecord[1].imageLink}
					alt={imageRecord[1].alt}
				/>
			</div>

			<div className="row-span-1 col-start-2 row-start-2">
				<img
					className="object-cover h-[100%] w-[100%]"
					src={imageRecord[3].imageLink}
					alt={imageRecord[3].alt}
				/>
			</div>

			<div className="col-start-1 row-span-1">
				<img
					className="object-cover h-[100%] w-[100%]"
					src={imageRecord[4].imageLink}
					alt={imageRecord[4].alt}
				/>
			</div>
			<div className="col-start-2 row-span-1">
				<img
					className="object-cover h-[100%] w-[100%]"
					src={imageRecord[2].imageLink}
					alt={imageRecord[2].alt}
				/>
			</div>
		</div>
	</section>
);
