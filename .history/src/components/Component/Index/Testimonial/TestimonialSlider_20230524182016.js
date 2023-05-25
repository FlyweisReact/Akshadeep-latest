/** @format */
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../../Images/13.png";
import img6 from "../../../../Images/14.png";
import { useRef , useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

 const centerIndex = (currentSlide + Math.floor(settings.slidesToShow / 2)) % data.length;

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  
  
  return (
    <>
      <div className="Index_testimonial_Slider">
        <p className="head">What our Client Says</p>
        <Slider {...settings} ref={sliderRef}  className="Slider_Cont">    
          {data.map((i , index) => (
            <div  key={index}   className={centerIndex === index ? 'active_slide' : 'normal_div'}  >
              <img src={i.img} alt="" />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          ))}
          
      
        </Slider>

        <div className="content_div">
          <p>
            Torem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
            vulputate libero et velit <br /> interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="Prev_Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
