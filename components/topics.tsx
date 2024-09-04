export default function Topic({ topics }: { topics: string[] }) {
	return (
		<div className="px-4 pt-2 pb-10">
			{topics.map((topic: string, idx: number) => (
				<a
					href={`https://github.com/topics/` + topic}
					target="_blank"
					className="inline-block px-3 py-1.5 text-xs text-primary/[70%] duration-150 bg-primary/[6%] rounded-2xl hover:bg-primary/[10%] m-2"
					key={idx}>
					{topic}
				</a>
			))}
		</div>
	);
}
