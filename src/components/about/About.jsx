import React from 'react'
import './About.css'
import ME from '../../assets/Travis2.png'
import {BiAward} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Who I Am</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Me Profile Picture" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {/* card 1 */}
            <article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year working experience</small>
            </article>

            {/* card 2 */}
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>500+ Worldwide</small>
            </article>

            {/* card 3 */}
            <article className='about__card'>
              <BsFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ projects</small>
            </article>

          </div>

        </div>

        <p>
          cvqgcvqgycvqgwvc qgicvgqi cvqgiycv gqiwvcgiqwvcg vduh cuavc uq vgqwvc viu vgsuvc uiv cqi fvqi qwwc vgavc gqvcg qvcy qgq v
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default About