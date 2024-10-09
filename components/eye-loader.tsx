import { useEffect } from "react";
import initEyeLoader from "../scripts/eye-loader.js";
import "../styles/eye-loader.scss";

export default function EyeLoader({ className }: { className?: string }) {
	useEffect(() => {
		initEyeLoader();
	}, []);

	return (
		<div
			id="scene"
			className={className}>
			<div className="box">
				<div className="chart">
					<div className="lines">
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
				</div>
				<div className="eye"></div>
				<div
					className="tracker"
					style={{ transform: "translate(0px, 0px)" }}>
					<div className="scale">
						<div className="sun">
							<div className="rays">
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
								<div className="ray"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
