import { getBarColours } from "./utils";

export default function LevelBars({
	languagesMeta,
}: {
	languagesMeta: Record<string, number>;
}) {
	const barColours: string[] = getBarColours(Object.values(languagesMeta));

	return (
		<div className="flex-col w-[90%] p-5">
			{Object.keys(languagesMeta).map((language, idx) => (
				<div
					className="mb-4 flex justify-around"
					key={idx}>
					<p className="text-sm font-semibold min-w-[24%]">{language}:</p>
					<div className="flex bg-stroke dark:bg-dark-3 relative h-4 w-[60%] rounded-2xl">
						<div
							className="border w-full rounded-2xl"
							style={{
								borderColor:
									languagesMeta[language] > 5
										? barColours[idx]
										: "#B3C8CF",
							}}>
							{languagesMeta[language] > 5 ? (
								<div
									className={`absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white `}
									style={{
										backgroundColor: barColours[idx],

										width: `${
											languagesMeta[language] > 50
												? languagesMeta[language]
												: languagesMeta[language] * 1.5
										}%`,
									}}>
									{languagesMeta[language]}%
								</div>
							) : (
								<>
									<div
										className="absolute rounded-md h-5/6 pb-0.5"
										style={{
											backgroundColor: barColours[idx],
											width: "6%",
										}}></div>
									<p className="text-xs text-black text-center">&lt; 5%</p>
								</>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
