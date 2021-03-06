import React from 'react';
import LogoSvgHero from '../assets/images/hero-bg.jpg';

const Home = () => {
    return (
        <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src={LogoSvgHero} data-natural-width={3000} data-natural-height={2000} data-position-y="center">
  <div className="grid-overlay">
    <div />
  </div>
  <div className="home-content">
    <div className="row home-content__main">
      <h1>
        Sublime
      </h1>
      <h3>React Theme</h3>
      <h2>Created by Rodolphe Augusto</h2>
      <h3>
        We build brands and beautiful experiences
      </h3>
      <div className="home-content__video">
        <a className="video-link" href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" data-lity>
          <span className="video-icon" />
          <span className="video-text">Watch Video</span>
        </a>
      </div>
      <div className="home-content__button">
        <a href="#about" className="smoothscroll btn btn--primary btn--large">
          More About Us
        </a>
        <a href="#contact" className="smoothscroll btn btn--large">
          Let's Talk
        </a>
      </div>
    </div> {/* end home-content__main */}
    <div className="home-content__scroll">
      <a href="#about" className="scroll-link smoothscroll">
        Scroll
      </a>
    </div>
  </div> {/* end home-content */}
  <ul className="home-social">
    <li>
      <a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /><span>Facebook</span></a>
    </li>
    <li>
      <a href="#0"><i className="fab fa-twitter" aria-hidden="true" /><span>Twiiter</span></a>
    </li>
    <li>
      <a href="#0"><i className="fab fa-instagram" aria-hidden="true" /><span>Instagram</span></a>
    </li>
    <li>
      <a href="#0"><i className="fab fa-behance" aria-hidden="true" /><span>Behance</span></a>
    </li>
    <li>
      <a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /><span>Dribbble</span></a>
    </li>
  </ul> {/* end home-social */}
</section>

    )
}

export default Home;