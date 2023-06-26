/** @format */

import { useRef } from "react";
import { useState , useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../../Images/13.png";
import img6 from "../../../../Images/14.png";
import img4 from "../../../../Images/21.png";
import img from "../../../../Images/22.png";

const Index = () => {
  const sliderRef = useRef(null);

  const [slidesToShow, setSlidesToShow] = useState(2); 

  useEffect(() => {
    const updateSlidesToShow = () => {
      // Adjust the number of slides to show based on the device width
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(2);
      }
    };

    // Call the function initially
    updateSlidesToShow();

    // Update the number of slides on window resize
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
      <div className="News_Slider">
        <Slider {...settings} ref={sliderRef}>
          <div className="Container_Div">
            <div className="subItem">
              <p className="head">Loren Ipsum Id best Platform out there</p>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <hr />
              <div className="two_cont">
                <img src={img4} alt="" />
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="Container_Div">
            <div className="subItem">
              <p className="head">Loren Ipsum Id best Platform out there</p>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <hr />
              <div className="two_cont">
                <img src={img} alt="" />
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="Container_Div">
            <div className="subItem">
              <p className="head">Loren Ipsum Id best Platform out there</p>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <hr />
              <div className="two_cont">
                <img src={img4} alt="" />
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="Prev_Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Index;
