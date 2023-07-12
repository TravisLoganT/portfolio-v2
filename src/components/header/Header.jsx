import React, {useState, useEffect} from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Travis4.png";
import HeaderSocialsPro from "./HeaderSocialsPro";
import HeaderSocialsSoc from "./HeaderSocialsSoc";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  // have a custom greeting based on the users current time
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const setGreetingUpdates = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 0 && hour < 12) {
      setGreeting('Good Morning, I\'m');
    } else if (hour >= 12 && hour < 19) {
      setGreeting('Good Afternoon, I\'m');
    } else {
      setGreeting('Good Evening, I\'m');
    };
  };

    // Call once right away, then set up the interval:
    setGreetingUpdates();
    const intervalId = setInterval(setGreetingUpdates, 60000); // Update every minute

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
    }, []);


  return (
    // display the introduction to the website
    <header>
      <div className="container header__container">
        <h5>{greeting}</h5>
        <h1>Travis Logan</h1>
        <h5 className="text-light">
          <TypeAnimation sequence={[500, "Full Stack Developer", 2000, "Software Engineer Intern", 2000, "University Student", 2000]}
            speed={10}
            repeat={Infinity}
          />
        </h5>
        <CTA />
        <HeaderSocialsPro />
        <HeaderSocialsSoc />

        <div className="me">
          <img src={ME} alt="Travis Logan" />
        </div>
      </div>
    </header>
  );
};

export default Header;
