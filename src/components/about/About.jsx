import React from "react";
import "./About.css";
import ME from "../../assets/Travis2.JPG";
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
            <img src={ME} alt="About Me Profile Picture" />
          </div>
        </div>

        {/* container to display the cards and summary */}
        <div className="about__content">
          <div className="about__cards">
            {/* card 1 */}
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ year working experience</small>
            </article>

            {/* card 2 */}
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            {/* card 3 */}
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>

          {/* professtional summary infomration */}
          <p>
            Passionate and diligent Full Stack Software Engineer with over 5
            years of experience designing, developing, and maintaining web
            applications and services. Proficient in various modern programming
            languages, frameworks, and databases, including Python, Java,
            NodeJS, Django, React, MongoDB, and MySQL. I am known for excellent
            problem-solving skills and a solid user-focused approach, resulting
            in software solutions that meet business needs while providing
            superior user experiences. I am committed to continuous learning and
            staying up-to-date with industry trends and technologies.
          </p>

          {/* contact me button */}
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
