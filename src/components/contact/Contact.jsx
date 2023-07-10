import React, { useRef } from "react";
import "./Contact.css";
import { BiMailSend } from "react-icons/bi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef() 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_he4rk0r",
        "template_2mztbrk",
        form.current,
        "KGUvls8t-cT2YoNKA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>.
      <div className="container contact__container">
        <div className="contact__options">
          {/* contact via email */}
          <article className="contact__option">
            <BiMailSend className="contact__option-icon" />
            <h4>Email</h4>
            <h5>TravisLoganT@gmail.com</h5>
            <a href="mailto:TravisLoganT@gmail.com" target="_blank">
              Send a Mesage
            </a>
          </article>

          {/* contact via messanger */}
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Travis Logan</h5>
            <a href="https://www.linkedin.com/in/travislogant/" target="_blank">
              Send a Mesage
            </a>
          </article>

          {/* contact via whatsapp */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Travis Logan</h5>
            <a
              href="https://api.whatsapp.com/send?phone=447877667860"
              target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
