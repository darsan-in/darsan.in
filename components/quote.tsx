export default function Quote() {
	return (
		<section
			className="py-20 border-t mt-20"
			data-aos="zoom-out-up">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<div className="max-w-3xl mx-auto">
					<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-4">
						<span className="text-primary font-bold">
							&lt;INSPIRED/&gt;
						</span>{" "}
					</h3>
					<figure>
						<blockquote>
							<p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
								“Your work is going to fill a large part of your life, and
								the only way to be truly satisfied is to do what you
								believe is great work. And the only way to do great work is
								to love what you do.“
							</p>
						</blockquote>
						<div className="flex justify-center items-center gap-x-4 mt-6">
							<img
								src="/icon/steve-jobs.webp"
								className="w-16 h-16 rounded-full"
								alt="steve jobs"
							/>
							<div>
								<span className="block text-gray-800 font-semibold">
									Steve Jobs
								</span>
								<span className="block text-gray-600 text-sm mt-0.5">
									Co-Founder & Former CEO of Apple.
								</span>
							</div>
						</div>
					</figure>
				</div>
			</div>
		</section>
	);
}
