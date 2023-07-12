import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I can Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX Title */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          {/* list of services */}
          <ul className="service__list">
            {/* service 1 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Modelling visually appealing and intuitive user interfaces that
                drive user engagement and satisfaction.
              </p>
            </li>

            {/* service 2 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing meaningful interactions between users and your
                product.
              </p>
            </li>

            {/* service 3 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Constructing aesthetically pleasing and functional websites that
                align with your brand and engage visitors
              </p>
            </li>

            {/* service 4 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ensuring that your website or application is accessible to users
                of all abilities, complying with relevant accessibility
                standards and guidelines.{" "}
              </p>
            </li>

            {/* service 5 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing comprehensive design systems and style guides to
                ensure consistency across your digital products, making your
                brand instantly recognizable to users.
              </p>
            </li>
          </ul>
        </article>

        {/* Web Development Title */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          {/* list of services */}
          <ul className="service__list">
            {/* service 1 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Delivering unique and engaging websites designed from scratch.
              </p>
            </li>

            {/* service 2 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing and implementing effective eCommerce platforms with
                intuitive user interfaces and robust functionality.
              </p>
            </li>

            {/* service 3 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ensuring that your website is fully responsive and accessible
                across a wide range of devices.
              </p>
            </li>

            {/* service 4 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Offering ongoing website maintenance and support services to
                ensure your website stays current, secure, and functional.{" "}
              </p>
            </li>
          </ul>
        </article>

        {/* Fullstack Title */}
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Development</h3>
          </div>

          {/* list of services */}
          <ul className="service__list">
            {/* service 1 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building user-facing parts of the web application using
                technologies such as HTML, CSS, and JavaScript, ensuring optimal
                visual aesthetics and user interactions
              </p>
            </li>

            {/* service 2 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating server-side logic using languages like Python, NodeJS,
                or Java, enabling interactions between the user-facing front-end
                and the database.
              </p>
            </li>

            {/* service 3 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing and managing databases using SQL or NoSQL systems like
                MySQL, PostgreSQL, or MongoDB, ensuring data persistence and
                integrity.
              </p>
            </li>

            {/* service 4 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing automated tests to ensure the functionality of the
                application before actual development starts, leading to more
                robust and bug-free software.
              </p>
            </li>

            {/* service 5 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Learing DevOps practices like continuous integration/continuous
                delivery (CI/CD) for faster, more reliable software releases.
              </p>
            </li>
          </ul>
        </article>

        {/* Mentorship Title */}
        <article className="service">
          <div className="service__head">
            <h3>Mentorship</h3>
          </div>

          {/* list of services */}
          <ul className="service__list">
            {/* service 1 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting interactive workshops for teams or groups, focusing
                on specific areas like Python programming, web development, or
                machine learning.
              </p>
            </li>

            {/* service 2 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Providing constructive feedback and guidance through detailed
                code reviews, helping trainees improve their coding practices
                and understand industry standards.
              </p>
            </li>

            {/* service 3 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Offering training and strategic guidance for competitive coding
                platforms such as LeetCode and HackerRank, aiding in improving
                problem-solving skills and preparing for coding interviews.
              </p>
            </li>

            {/* service 4 */}
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Supporting students in tech-related research projects, providing
                mentorship on methodologies, data analysis, and presentation of
                findings.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
