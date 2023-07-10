import React from "react";
import "./Nav.css";
import {
  BiSolidHome,
  BiSolidUser,
  BiSolidBook,
  BiSolidMessageRounded,
} from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#about",
        "#experience",
        "#services",
        "#portfolio",
        "#testimonials",
        "#contact",
      ];
      const offset = window.innerHeight / 2;

      // check if the page is scrolled to the top
      if (window.scrollY < offset) {
        setActiveNav("#");
        return;
      }

      // case effect used to have the nav change when the user scrolls to a new section.
      for (const section of sections) {
        const element = document.querySelector(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.top + rect.height > offset) {
          setActiveNav(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <BiSolidHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <BiSolidUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BiSolidBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <BsBriefcase />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <MdComputer />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}>
        <TbStarsFilled />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiSolidMessageRounded />
      </a>
    </nav>
  );
};

export default Nav;
