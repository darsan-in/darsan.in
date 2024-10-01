"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import HomePage from "../components/home";
import scrollHandler, {
	anchorInterceptor,
} from "../scripts/scroll-handler";
export default function Root() {
	const lenisRef = useRef(null);

	useEffect(() => {
		AOS.init({ mirror: true, duration: 1000, delay: 200 });

		scrollHandler();

		anchorInterceptor(lenisRef);
	}, []);

	return (
		<ReactLenis
			root={true}
			autoRaf={true}
			options={{ duration: 5.5, smoothWheel: true }}
			ref={lenisRef}>
			<main className="px-7 sm:px-10 mt-10 sm:mt-0">
				<HomePage />
			</main>
		</ReactLenis>
	);
}
