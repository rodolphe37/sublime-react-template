import React from 'react';
// import Shutterbug from '../assets/images/portfolio/gallery/g-shutterbug.jpg';
// import LazyShutterbug from '../assets/images/portfolio/lady-shutterbug.jpg';
import Woodcraft from '../assets/images/portfolio/gallery/g-woodcraft.jpg';
import Woodcraft2 from '../assets/images/portfolio/woodcraft.jpg';


const Works = () => {
    return (
        <section id="works" className="s-works target-section">
  <div className="row section-header has-bottom-sep narrow target-section" data-aos="fade-up">
    <div className="col-full">
      <h3 className="subhead">Our Works</h3>
      <h1 className="display-1">
        We create brands, products, and experiences that people love. Check out our recent works.
      </h1>
    </div>
  </div> {/* end section-header */}
  <div className="row masonry-wrap">
    <div className="masonry">
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/portfolio/gallery/g-shutterbug.jpg" className="thumb-link" title="Shutterbug" data-size="1050x700">
              <img src="images/portfolio/lady-shutterbug.jpg" srcSet="images/portfolio/lady-shutterbug.jpg 1x, ../assets/images/portfolio/lady-shutterbug@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Shutterbug
            </h3>
            <p className="item-folio__cat">
              Branding
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href={Woodcraft} className="thumb-link" title="Woodcraft" data-size="1050x700">
              <img src={Woodcraft2} srcSet="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Woodcraft
            </h3>
            <p className="item-folio__cat">
              Web Design
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="..assets/images/portfolio/gallery/g-beetle.jpg" className="thumb-link" title="The Beetle Car" data-size="1050x700">
              <img src="images/portfolio/the-beetle.jpg" srcSet="images/portfolio/the-beetle.jpg 1x, images/portfolio/the-beetle@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              The Beetle
            </h3>
            <p className="item-folio__cat">
              Web Development
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/portfolio/gallery/g-salad.jpg" className="thumb-link" title="Grow Green" data-size="1050x700">
              <img src="images/portfolio/salad.jpg" srcSet="images/portfolio/salad.jpg 1x, images/portfolio/salad@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Salad
            </h3>
            <p className="item-folio__cat">
              Branding
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/portfolio/gallery/g-lamp.jpg" className="thumb-link" title="Guitarist" data-size="1050x700">
              <img src="images/portfolio/lamp.jpg" srcSet="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Lamp
            </h3>
            <p className="item-folio__cat">
              Web Design
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
      <div className="masonry__brick" data-aos="fade-up">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/portfolio/gallery/g-fuji.jpg" className="thumb-link" title="Palmeira" data-size="1050x700">
              <img src="images/portfolio/fuji.jpg" srcSet="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x" alt="" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Fuji
            </h3>
            <p className="item-folio__cat">
              Web Design
            </p>
          </div>
          <a href="https://www.behance.net/" className="item-folio__project-link" title="Project link">
            <i className="icon-link" />
          </a>
          <div className="item-folio__caption">
            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
          </div>
        </div>
      </div> {/* end masonry__brick */}
    </div> {/* end masonry */}
  </div> {/* end masonry-wrap */}
</section>

    )
}

export default Works;