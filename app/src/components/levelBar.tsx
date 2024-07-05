export default function LevelBars({
	languagesMeta,
}: {
	languagesMeta: Record<string, number>;
}) {
	return (
		<div className="flex-col w-full p-5">
			{Object.keys(languagesMeta).map((language, idx) => (
				<div
					className="mb-4 flex"
					key={idx}>
					<p className="text-sm font-semibold min-w-[24%]">{language}:</p>
					<div className="flex bg-stroke dark:bg-dark-3 relative h-4 w-[60%] rounded-2xl">
						<div
							className={`bg-indigo-600 absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-semibold text-white`}
							style={{ width: `${languagesMeta[language]}%` }}>
							{languagesMeta[language]}%
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
