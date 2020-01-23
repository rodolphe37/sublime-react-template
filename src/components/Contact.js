import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="s-contact target-section">
  <div className="grid-overlay">
    <div />
  </div>
  <div className="row section-header narrow" data-aos="fade-up">
    <div className="col-full">
      <h3 className="subhead">Keep In Touch</h3>
      <h1 className="display-1">Feel free to contact us for any <br /> project idea or collaboration</h1>
    </div>
  </div> {/* end section-header */}
  <div className="row contact-main" data-aos="fade-up">
    <div className="col-full">
      <p className="contact-email">
        <a href="mailto:#0">sayhello@sublime.com</a>
      </p>
      <p className="contact-address">
        1600 Amphitheatre Parkway <br />
        Mountain View, CA, 94043 US 
      </p>
      <p className="contact-numbers">
        +1 (917) 123 456 &nbsp; +1 (917) 333 987
      </p>
      <ul className="contact-social">
        <li>
          <a href="#0"><i className="fab fa-facebook" /></a>
        </li>
        <li>
          <a href="#0"><i className="fab fa-twitter" /></a>
        </li>
        <li>
          <a href="#0"><i className="fab fa-instagram" /></a>
        </li>
        <li>
          <a href="#0"><i className="fab fa-behance" /></a>
        </li>
        <li>
          <a href="#0"><i className="fab fa-dribbble" /></a>
        </li>
      </ul>
    </div>
  </div>
</section>


    )
}

export default Contact;
