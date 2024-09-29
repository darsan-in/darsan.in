import { FaRegStar } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LiaMedalSolid } from "react-icons/lia";

export default function Achievements() {
	const achievments = [
		{
			icon: <GoTrophy size={24} />,
			title: "National Cyber Hackathon Winner (November 2022)",
			desc: "Developed an award-winning software solution to combat online rumor propagation, securing the championship trophy and medal at a prestigious national-level competition organized by the Cyber Crime Department of Coimbatore, Tamil Nadu, in collaboration with Sri Krishna Arts and Science College (SKASC). Utilized Twitter API, Google Fact Check API, and Python for backend development",
		},
		{
			icon: <LiaMedalSolid size={24} />,
			title: "II Place, Top Coder Competition (December 2021)",
			desc: "Secured second place in a rigorous internal campus coding competition at Sri Krishna Arts and Science College (SKASC), demonstrating strong proficiency in advanced Object-Oriented Programming (OOP) concepts using Java, all within a limited time frame.",
		},
		{
			icon: <FaRegStar size={24} />,
			title: "Smart India Hackathon Pre-Finale Runner-Up (February 2022)",
			desc: "Led a 5-member team in a prestigious national-level competition organized by AICTE and the Ministry of Education (MOE) of India, developing an innovative Plant Disease Prediction application for Android and web platforms. Leveraged Flutter and Dart for front-end development, with Python powering the backend, integrating deep learning algorithms like Convolutional Neural Networks (CNN) for accurate predictive capabilities.",
		},
	];

	return (
		<section
			className="py-14"
			id="achievments"
			data-aos="zoom-out-up">
			<div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
				<div className="max-w-2xl mx-auto">
					<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
						<span className="font-bold text-primary">
							Recognized for Problem-Solving Skills{" "}
						</span>
					</h3>
					<p className="mt-3">
						Emphasizing leadership roles that contributed to winning teams.
					</p>
				</div>
				<div className="mt-12">
					<ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
						{achievments.map((item, idx) => (
							<li
								key={idx}
								className="space-y-3"
								data-aos="zoom-in">
								<figure className="w-12 h-12 mx-auto bg-primary/[15%] text-primary rounded-full flex items-center justify-center">
									{item.icon}
								</figure>
								<h4 className="text-lg text-gray-800 font-semibold">
									{item.title}
								</h4>
								<p className="leading-relaxed">{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
