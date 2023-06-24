import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {BiSolidHome, BiSolidUser, BiSolidBook, BiSolidMessageRounded} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href='#'><BiSolidHome/></a>
      <a href='#about'><BiSolidUser/></a>
      <a href='#experience'><BiSolidBook/></a>
      <a href='#services'><MdComputer/></a>
      <a href='#contact'><BiSolidMessageRounded/></a>
    </nav>
  )
}

export default Nav