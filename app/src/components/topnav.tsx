import { name, navigation } from "meta";
import style from "../styles/style.module.scss";

export default () => {
	return (
		<section className="text-gray-500 bg-white max-w-screen-xl mx-auto px-6 py-7">
			<div className="flex justify-between md:flex">
				<div className="flex-1">
					<div className="max-w-3xl">
						<p
							className={
								"mt-2 text-8xl font-bold text-primary transition-all duration-[3000ms] ease-in-out font-jose hover:bg-white " +
								style.name
							}>
							{name}
						</p>
					</div>
				</div>
				<nav
					className={
						"flex-1 items-center gap-x-6 justify-center sm:flex md:space-y-0 md:mt-0 " +
						style.navs
					}>
					{navigation.map((item, idx) => (
						<a
							className="text-gray-800 font-semibold uppercase text-xl hover:text-primary hover:underline hover:font-900"
							key={idx}
							href={item.path}>
							#{item.title}
						</a>
					))}
				</nav>
			</div>
		</section>
	);
};
