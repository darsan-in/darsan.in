export default function initEyeLoader() {
	/*  */

	function orientThemes(container) {
		const mediaOrientation = matchMedia("(orientation: portrait)").matches;

		container.classList.remove(
			mediaOrientation ? "vertical" : "horizontal",
		);
		container.classList.add(mediaOrientation ? "horizontal" : "vertical");
	}

	/*  */

	function setup() {
		const pattern = document.querySelector(".box");
		const scene = document.getElementById("scene");

		orientThemes(scene);

		const box = document.querySelector(".box");
		const scale = document.querySelector(".scale");
		const tracker = document.querySelector(".tracker");

		const origin = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		};

		const state = {};

		function resetTracking() {
			box.classList.remove("active");
			tracker.style.transform = `translate(${0}px, ${0}px)`;
		}

		box.addEventListener("mouseenter", function () {
			state.radius = box.clientWidth / 2;
			state.range = state.radius * state.radius;

			origin.x = window.innerWidth / 2;
			origin.y = window.innerHeight / 2;
		});

		box.addEventListener("mouseleave", function () {
			resetTracking();
		});

		box.addEventListener("mousemove", function (event) {
			const { clientX, clientY } = event;

			const dx = clientX - origin.x;
			const dy = clientY - origin.y;

			if (dx * dx + dy * dy > state.range) return resetTracking();

			box.classList.add("active");

			const x = dx < 0 ? Math.max(dx, -30) : Math.min(dx, 30);
			const y = dy < 0 ? Math.max(dy, -15) : Math.min(dy, 15);

			tracker.style.transform = `translate(${x}px, ${y}px)`;
		});
	}

	setup();
}
