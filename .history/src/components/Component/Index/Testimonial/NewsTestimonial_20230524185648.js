/** @format */

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img5 from "../../../../Images/15.png";
import img6 from "../../../../Images/16.png";
import img4 from '../../../../Images/a-36.png'

const Index = () => {
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
      <div>
        <Slider {...settings} ref={sliderRef}>
        
        <div className="bot-cont-card">
            <h4>Loren Ipsum Id best Platform out there</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="thin-line"></div>
            <div className="bot-cont-card-2">
              <img src={img4} alt='' />
              <p>5 star</p>
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
        {/* <div className="Prev-Next_cont">
          <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Index;
