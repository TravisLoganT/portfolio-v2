import React from "react";
import { BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";

const HeaderSocialsSoc = () => {
  return (
    <div className="header__socials-soc">
      {/* facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=100006278568312"
        rel="noreferrer"
        target="_blank">
        <BiLogoFacebookSquare />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/travislogant/"
        rel="noreferrer"
        target="_blank">
        <BsInstagram />
      </a>

      {/* Snapchat */}
      <a
        href="https://t.snapchat.com/Ute8DVHL"
        rel="noreferrer"
        target="_blank">
        <BsSnapchat />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/travislogant?s=21&t=ybeDcZrJwGYJsB47_1VGJQ"
        rel="noreferrer"
        target="_blank">
        <BsTwitter />
      </a>

      {/* Apple Music */}
      <a
        href="https://music.apple.com/profile/travislogant"
        rel="noreferrer"
        target="_blank">
        <SiApplemusic />
      </a>
    </div>
  );
};

export default HeaderSocialsSoc;
