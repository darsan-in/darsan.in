"use client";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

import HomePage from "../components/home";

export default function Root() {
	return (
		<ReactLenis
			root={true}
			autoRaf={true}
			options={{ duration: 3.5, smoothWheel: true }}>
			<main className="px-7 sm:px-10 mt-10 sm:mt-0">
				<HomePage />
			</main>
		</ReactLenis>
	);
}
