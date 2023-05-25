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
            <div className="Item">
              <p className="head">US Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">British Pound</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Euro</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Australian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Canadian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
            <div className="Item">
              <p className="head">US Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">British Pound</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Euro</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Australian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Canadian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
          </Slider>
    
        </div>
      </>
    );
  };
  
export default TestimonialSlider;
