import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/kamran.png";
import AVATAR2 from "../../assets/thomas.jpg";
import AVATAR3 from "../../assets/chiara.JPG";
import AVATAR4 from "../../assets/nancy.JPG";
import AVATAR5 from "../../assets/ruell.PNG";
import AVATAR6 from "../../assets/silvia.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const testimonials = [
  {
    avatar: AVATAR1,
    name: "Kamran Ahmed",
    title: "Software Engineer",
    review:
      "Together, we have tackled many challenging projects, and I have been consistently impressed by your ability to analyze complex issues and devise effective solutions. Your attention to detail and meticulous approach to problem-solving have been instrumental in the success of our projects, and your contributions have been highly appreciated.",
  },

  {
    avatar: AVATAR2,
    name: "Thomas Simpson",
    title: "Games Developer",
    review:
      "Collaborating with you as a games enginner has been inspiring. Your technical skills, creativity and problem-solving abilities have been invaluable to our porjects together. Your positive attitude and willingness to support others have made you a highly values colleague. Your innovative mindset consistently drives us to explore new frontiers in game development, leading to unique and engaging experiences for our users.",
  },

  {
    avatar: AVATAR3,
    name: "Chiara Del Galdo",
    title: "MBCHB Medicine",
    review:
      "The knowledge and skills you have obtained from your experience in programming greatly helped my medical studies, as you provided me with add-ons for my anki flashcard app that were monumental to my progress. Furthermore, seeing you handle a part-time job, university and your own personal programming projects while helping me is truly admirable, and I am sure that you will be a strong asset to any software company that you work for in the future.",
  },

  {
    avatar: AVATAR4,
    name: "Nancy Garner",
    title: "Environmental Chemist",
    review:
      "Your technical proficiency and innovative approach to software engineering have have helped us develop novel ways of analysing and visualising data in our Environment chemistry projects, giving us more significant insights and a deeper understanding of our work. Your ability to work well with others and your positive attitude have made you a highly valued colleague.  ",
  },
  {
    avatar: AVATAR5,
    name: "Ruell Coulson",
    title: "Programming Mentee",
    review:
      "Your vast knowledge in the field, coupled with your innate ability to simplify complex concepts, has fostered in me a deeper understanding of programming. You have always made yourself available for my many questions, always providing insightful, thoughtful and patient responses. The innovative problem-solving strategies and efficient programming practices you've imparted continue to influence my coding style and professional approach.",
  },

  {
    avatar: AVATAR6,
    name: "Silvia Carbone",
    title: "Senior Biomedical Engineer",
    review:
      "Your profound understanding of software development and its underlying principles has consistently amazed me. Your ability to engineer complex solutions with a seemingly effortless ease, while maintaining high-quality standards, is a true testament to your skill and dedication to your craft. You have a unique ability to merge creativity with logic, resulting in software that is not only efficient, but also innovative and user-friendly. I am confident that you would be an asset to any organization fortunate enough to have you.",
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={!isMobile}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}>
        {testimonials.map(({ avatar, name, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name}></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <h6>{title}</h6>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
