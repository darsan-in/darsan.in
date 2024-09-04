"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import HomePage from "../components/home";

export default function Root() {
	useEffect(() => {
		AOS.init({ mirror: true, duration: 1000, delay: 200 });
	}, []);

	return (
		<ReactLenis
			root={true}
			autoRaf={true}
			options={{ duration: 5.5, smoothWheel: true }}>
			<main className="px-7 sm:px-10 mt-10 sm:mt-0">
				<HomePage />
			</main>
		</ReactLenis>
	);
}
