import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import {BiLogoGmail, BiLogoFacebookSquare} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/travislogant/" rel="noreferrer" target="_blank">
            <BsLinkedin />
        </a>

        {/* GitHub */}
        <a href="https://github.com/TravisTLogan" rel="noreferrer" target="_blank">
            <BsGithub />
        </a>

        {/* Gmail */}
        <a href="mailto:TravisLoganT@gmail.com" rel="noreferrer" target="_blank">
            <BiLogoGmail />
        </a>

        {/* facebook */}
        <a href="https://www.facebook.com/profile.php?id=100006278568312" rel="noreferrer" target="_blank">
            <BiLogoFacebookSquare />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/travislogant/" rel="noreferrer" target="_blank">
            <BsInstagram />
        </a>
    </div>
  )
}

export default HeaderSocials