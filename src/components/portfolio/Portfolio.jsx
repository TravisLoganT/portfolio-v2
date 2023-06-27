import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://picsum.photos/500/300" alt="portfolio item" />
          </div>

          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn--primary" target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio