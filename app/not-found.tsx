export default function NotFound() {
	return (
		<main>
			<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
				<div className="max-w-lg mx-auto space-y-3 text-center">
					<h3 className="text-primary font-semibold">404 Error</h3>
					<p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
						Page not found
					</p>
					<p className="text-gray-600">
						Sorry, the page you are looking for could not be found or has
						been removed.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<a
							href="/"
							className="block py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary/[60%] active:bg-primary/[60%] rounded-lg"
							aria-label="go back to home page"
							title="go back to home page">
							Go back
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
