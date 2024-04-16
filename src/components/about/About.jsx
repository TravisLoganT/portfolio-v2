import React from "react";
import "./About.css";
import ME from "../../assets/Travis2.jpg";
import { BiAward } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";

const About = () => {
	return (
		<section id="about">
			<h5>Who I Am</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				{/* about me introduction */}
				<div className="about__me">
					<div className="about__me-image">
						<img
							src={ME}
							alt="Travis"	
						/>
					</div>
				</div>

				{/* container to display the cards and summary */}
				<div className="about__content">
					<div className="about__cards">
						{/* card 1 */}
						<article className="about__card">
							<BiAward className="about__icon" />
							<h5>Experience</h5>
							<small>5+ years working experience</small>
						</article>

						{/* card 2 */}
						<article className="about__card">
							<FaUsers className="about__icon" />
							<h5>Clients</h5>
							<small>20+ Worldwide</small>
						</article>

						{/* card 3 */}
						<article className="about__card">
							<BsFolderFill className="about__icon" />
							<h5>Projects</h5>
							<small>10+ projects</small>
						</article>
					</div>

					{/* professtional summary infomration */}
					<p>
						Hey there! I'm Travis, a budding software developer who loves
						building and bridging connections: whether it's between ideas from
						various fields, people across teams, or applications spanning
						industries.
						<br />
						<br />
						In my current studies, I've taken across multiple leadership roles.
						I have mentored 8 undergraduate students every year. Coordinating
						institute-wide inductions and talks for over a 1000 people for the
						university. I have also recieved more than 2 scholarships for
						computer science at Newcastle University. I have worked on over 10+
						projects alongside university, including multiple team projects
						using collaboration to develop and deliver products.
					</p>

					{/* contact me button */}
					<a
						href="#contact"
						className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
