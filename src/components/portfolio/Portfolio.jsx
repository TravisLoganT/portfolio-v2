import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import RESEARCHPAPER from "../../assets/ResearchPaper.pdf";
import IMG3 from "../../assets/IMG3.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    description:
      "This is my second portfolio website, This time built with React and Node.js. I focused on a simpler, modern design including a responsive layout.",
    title: "Portfolio Website V2",
    github: "https://github.com/TravisTLogan/portfolio-v2/",
    demo: "#",
  },

  {
    id: 2,
    image: IMG2,
    description:
      "My research paper on the importance of serious games for health which scored 95%, by analysing potential benefits of serious games for promoting health.",
    title: "Critical Research Paper",
    demo: RESEARCHPAPER,
  },
  {
    id: 3,
    image: IMG3,
    description: "This was a team fullstack project that was done to help assist those who struggle for food. Providing a platform for those who need food and those who can donate food. Giving the ability to search for food banks and food pantries in your local area. This project was built to help assist in the UN's Sustainable Development Goals. ",
    title: "Need 4 Feed"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, description, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn--primary" target="_blank">
                    View
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
