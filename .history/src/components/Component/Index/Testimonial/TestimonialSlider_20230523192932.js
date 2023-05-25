/** @format */


import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialSlider = () => {

    const sliderRef = useRef(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  
    const nextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    const prevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <>
        <div >
          <Slider {...settings} >
            <div >
             
            </div>
  
         
          </Slider>
    
        </div>
      </>
    );
  };
  
export default TestimonialSlider;
