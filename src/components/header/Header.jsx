import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Travis.jpeg'

const Header = () => {
  return (
    // display the introduction to the website
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Travis Logan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Travis Logan" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>  
  )
}

export default Header