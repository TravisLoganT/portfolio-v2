import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/kamran.png'
import AVATAR2 from '../../assets/kamran.png'
import AVATAR3 from '../../assets/kamran.png'
import AVATAR4 from '../../assets/kamran.png'
import AVATAR5 from '../../assets/kamran.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVATAR1} alt="Kamran"></img>
          </div>
          <h5 className='client__name'>Kamran</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials