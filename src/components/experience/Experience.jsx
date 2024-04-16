import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>

					{/* experience 1 */}
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 2 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 3 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>

						{/* experience 4 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">3+ years</small>
							</div>
						</article>

						{/* experience 5 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">1 year </small>
							</div>
						</article>

						{/* experience 6 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Tailwind</h4>
								<small className="text-light">1 year</small>
							</div>
						</article>
					</div>
				</div>

				{/* Backend Experience */}
				<div className="experience__backend">
					<h3>Backend Development</h3>

					{/* experience 1 */}
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 2 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Java</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>

						{/* experience 3 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>C</h4>
								<small className="text-light">2+ years</small>
							</div>
						</article>

						{/* experience 4 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>C#</h4>
								<small className="text-light">3+ years</small>
							</div>
						</article>

						{/* experience 5 */}

						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Node JS</h4>
								<small className="text-light">3+ years</small>
							</div>
						</article>

						{/* experience 6 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">2+ years</small>
							</div>
						</article>

						{/* experience 8 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>
					</div>
				</div>

				{/* Version Control Experience */}
				<div className="experience__version">
					<h3>Version Control</h3>

					{/* experience 1 */}
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Git</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 2 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>GitHub & GitLab</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 3 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Command Line</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>

						{/* experience 4 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CI/CD</h4>
								<small className="text-light">3+ years</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Azure DevOps</h4>
								<small className="text-light">1 year</small>
							</div>
						</article>

						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Docker</h4>
								<small className="text-light">2+ years</small>
							</div>
						</article>

						{/* experience 5 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Documentation</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>
					</div>
				</div>

				{/* Project Management Experience */}
				<div className="experience__management">
					<h3>Project Management</h3>

					{/* experience 1 */}
					<div className="experience__content">
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Agile</h4>
								<small className="text-light">2+ years</small>
							</div>
						</article>

						{/* experience 2 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>SCRUM Master</h4>
								<small className="text-light">1 year</small>
							</div>
						</article>

						{/* experience 3 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Quality Assurance</h4>
								<small className="text-light">2+ years</small>
							</div>
						</article>

						{/* experience 4 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Mentoring</h4>
								<small className="text-light">5+ years</small>
							</div>
						</article>

						{/* experience 5 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Leadership</h4>
								<small className="text-light">4+ years</small>
							</div>
						</article>

						{/* experience 6 */}
						<article className="experience__details">
							<BsFillPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Software Cycle</h4>
								<small className="text-light">3+ years</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
