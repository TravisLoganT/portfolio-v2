import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import RESEARCHPAPER from "../../assets/ResearchPaper.pdf";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/laptop.png";
import IMG5 from "../../assets/houses.jpeg";
import IMG6 from "../../assets/pagerank.jpg";

const projects = [
  // project 1
  {
    id: 1,
    image: IMG1,
    description:
      "This is my second portfolio website, This time built with React and Node.js. I focused on a simpler, modern design including a responsive layout.",
    title: "Portfolio Website V2",
    github: "https://github.com/TravisTLogan/portfolio-v2/",
    demo: "#",
  },

  // project 2
  {
    id: 2,
    image: IMG2,
    description:
      "My research paper on the importance of serious games for health which scored 95%, by analysing potential benefits of serious games for promoting health.",
    title: "Critical Research Paper",
    demo: RESEARCHPAPER,
  },

  // project 3
  {
    id: 3,
    image: IMG3,
    description: "This was a team fullstack project that was done to help assist those who struggle for food. Providing a platform for those who need food and those who can donate food. Giving the ability to search for food banks and food pantries in your local area. This project was built to help assist in the UN's Sustainable Development Goals. ",
    title: "Need 4 Feed - University"
  },

  // project 4
  {
    id: 4,
    image: IMG4,
    description: "This was my first attempt at creating my own personal website. I used HTML, CSS and JavaScript to create this website. I focused on a simple, modern design including a responsive layout.",
    title: "Portfolio Website V1",
    github: "https://github.com/TravisTLogan/portfolio-v1",
    demo: "https://portfolio-v1-travistlogan.vercel.app",
  },

   // project 5
   {
    id: 5,
    image: IMG5,
    description: "This project was built to help assist estate agents in managing their properties. This was a Java based applicatioon that was used for tracking sales and rentals of properties. Acurate reporting and tracking of properties; that were differientiated by their seller, branch and locations.",
    title: "Estate Agency Software - University",
  },
   
  // project 6
  {
    id: 6,
    image: IMG6,
    description: "This was a assignment where we had to learn how to implement and optimise Google's PageRank Algorithm. Allowing me to learn how to implement and optimise algorithms, operate nodes and edges to improve its implementations, as well as, developing my soft skills in presentation, logical thinking, and mathematical understanding.",
    title: "PageRank Algorithm - University",
   }
   




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
