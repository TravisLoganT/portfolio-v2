import React from 'react'
import {BsLinkedin, BsGithub, } from 'react-icons/bs'
import { BiLogoGmail, BiLogoDevTo } from 'react-icons/bi'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocialsPro = () => {
  return (
    <div className="header__socials-pro">
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

        {/* LeetCode */}
        <a href="https://leetcode.com/TravisLoganT/" rel="noreferrer" target="_blank">
            <SiLeetcode />
        </a>
        
        {/* Dev.to */}
        <a href="https://dev.to/travistlogant" rel="noreferrer" target="_blank">
            <BiLogoDevTo />
        </a>
    </div>
  )
}

export default HeaderSocialsPro