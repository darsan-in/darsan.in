export function getRandomColor(): string {
	let color: string;
	const min: number = 50;
	const max: number = 255;
	do {
		color = `rgb(${Math.floor(Math.random() * (max - min) + min)}, 
                     ${Math.floor(Math.random() * (max - min) + min)}, 
                     ${Math.floor(Math.random() * (max - min) + min)})`;
	} while (color === "rgb(0, 0, 0)");
	return color;
}
