import React from 'react';

const Clients = () => {
    return (
    <section id="clients" className="s-clients target-section darker">
    <div className="grid-overlay">
        <div />
    </div>
    <div className="row section-header text-center narrow" data-aos="fade-up">
        <div className="col-full">
        <h3 className="subhead">Our Clients</h3>
        <h1 className="display-1">Who we have work with</h1>
        </div>
    </div> {/* end section-header */}
    <div className="row clients-wrap" data-aos="fade-up">
        <div className="col-twelve">
        <ul className="clients">
            <li><a href="#0">Uber</a></li>
            <li><a href="#0">Spotify</a></li>
            <li><a href="#0">Grab</a></li>
            <li><a href="#0">Dropbox</a></li>
            <li><a href="#0">IBM</a></li>
            <li><a href="#0">Microsoft</a></li>
            <li><a href="#0">Xiaomi</a></li>
            <li><a href="#0">Adidas</a></li>
            <li><a href="#0">Mozilla</a></li>
            <li><a href="#0">Apple</a></li>
            <li><a href="#0">Google</a></li>
            <li><a href="#0">Asus</a></li>
        </ul>
        </div>
    </div>
    </section>

 )
}

export default Clients;
