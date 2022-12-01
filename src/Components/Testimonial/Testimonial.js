import React, { useState, Component } from 'react';
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import TestimonialCardData from './TestimonialCardData';


const Testimonial = () => {

  const [testimonialData] = useState(TestimonialCardData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]

  };

  return (
    <>
      <section className="testimonials " id="testimonial">
        <div className="container">
          <div className="second">
            <h2>What our Customers Says</h2>
            <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore</p>
          </div>
          <div className="testi_slider my-5">
            <Slider {...settings}>
              {
                testimonialData.map((currData, ind) => {
                  return (
                    <TestimonialCard key={ind} {...currData} />
                  )
                })
              }
            </Slider>
          </div>

        </div>
      </section>
      {/* <!-- ======= Our Customer says  Section ======= -- */}
    </>
  )
}

export default Testimonial;