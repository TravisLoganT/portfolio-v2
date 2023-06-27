import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Travis.png'
import HeaderSocialsPro from './HeaderSocialsPro'
import HeaderSocialsSoc from './HeaderSocialsSoc'


const Header = () => {
  return (
    // display the introduction to the website
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Travis Logan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocialsPro />
        <HeaderSocialsSoc />

        <div className="me">
          <img src={ME} alt="Travis Logan" />
        </div>

      </div>
    </header>  
  )
}

export default Header