/** @format */

import React , {useState , useRef} from "react";
import img from "../../../../Images/18.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import img1 from "../../../../Images/13.png";
import img2 from "../../../../Images/14.png";

const TestimonialSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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

     const data = [
        {
            img : img
        },
        {
            img : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        },
        {
            img : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
        },
        {
            img : 'https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A='
        },
    ]

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
      };

    



  return (
    <>
      <div className="Index_testimonial_Slider">
        <p className="head">What our Client Says</p>
    
      </div>


   
      

    </>
  );
};

export default TestimonialSlider;
