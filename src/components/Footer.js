import React from 'react';
import Contact from './Contact';

const Footer = () => {
    return (
    <footer>
    <div className="row">
    <Contact />
        <div className="col-full ss-copyright">
        <span>© Copyright Sublime 2020</span> 
       {/*eslint-disable-next-line*/}
        <span>Created by <a href="#">Rodolphe Augusto</a></span>
        </div>
    </div>
    <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">Back to Top</a>
    </div>
    </footer>

    )
}

export default Footer;
