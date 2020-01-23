import React from 'react';

const Testimonials = () => {
    return (
        <section className="s-testimonials">
        <div className="testimonials__icon" data-aos="fade-up" />
        <div className="row testimonials narrow">
          <div className="col-full testimonials__slider" data-aos="fade-up">
            <div className="testimonials__slide">
              <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
                Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.</p>
              <div className="testimonials__author">
                Tim Cook
                <span>CEO, Apple</span>
              </div>
            </div> {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
              <div className="testimonials__author">
                Sundar Pichai
                <span>CEO, Google</span>
              </div>
            </div> {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
              <div className="testimonials__author">
                Satya Nadella
                <span>CEO, Microsoft</span>
              </div>
            </div> {/* end testimonials__slide */}
          </div> {/* end testimonials__slider */}
        </div> {/* end testimonials */}
      </section>
       
    )
}

export default Testimonials;
