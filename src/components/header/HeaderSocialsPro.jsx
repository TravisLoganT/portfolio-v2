import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const HeaderSocialsPro = () => {
	return (
		<div className="header__socials-pro">
			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/travislogant/"
				rel="noreferrer"
				target="_blank">
				<BsLinkedin />
			</a>

			{/* GitHub */}
			<a
				href="https://github.com/TravisLoganT"
				rel="noreferrer"
				target="_blank">
				<BsGithub />
			</a>

			{/* Gmail */}
			<a
				href="mailto:TravisLoganT@gmail.com"
				rel="noreferrer"
				target="_blank">
				<BiLogoGmail />
			</a>

			{/* Instagram */}
			<a
				href="https://www.instagram.com/travislogant/"
				rel="noreferrer"
				target="_blank">
				<BsInstagram />
			</a>
		</div>
	);
};

export default HeaderSocialsPro;
