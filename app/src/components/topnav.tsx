import { name, navigation } from "meta";
import style from "../styles/style.module.scss";

export default () => {
	return (
		<section className="text-gray-500 bg-white max-w-screen-xl mx-auto sm:px-6 sm:py-7">
			<div className="flex justify-between md:flex">
				<div className="flex-1">
					<div className="max-w-3xl">
						<p
							className={
								"mt-2 text-7xl sm:text-8xl font-bold text-primary transition-all duration-[3000ms] ease-in-out hover:bg-white tracking-widest text-primary	" +
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
							className="text-primary font-normal uppercase text-xl hover:text-primary/[80%]  bg-primary/[10%] px-4 py-2 rounded-3xl hover:bg-primary/[20%]"
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
