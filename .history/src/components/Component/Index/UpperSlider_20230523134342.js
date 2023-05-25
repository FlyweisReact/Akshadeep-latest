/** @format */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../../Images/card-img.png.png";

const UpperSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className='Slick-Slider'>

        <div className="slider-container-div">
          <p>Lorem Ipsum Slide 1 for offer for students</p>
          <div className="slide-cont">
            <div className="left-slide-cont">
              <img src={img} alt="" className="slide-img" />
            </div>
            <div className="right-slide-cont">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>


        <div>
          <h3>Lorem Ipsum Slide 1 for offer for students</h3>
          <div className="slide-cont">
            <div className="left-slide-cont">
              <img src={img} alt="" className="slide-img" />
            </div>
            <div className="right-slide-cont">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3>Lorem Ipsum Slide 1 for offer for students</h3>
          <div className="slide-cont">
            <div className="left-slide-cont">
              <img src={img} alt="" className="slide-img" />
            </div>
            <div className="right-slide-cont">
              <ul>
                <li>Lorem Ipsum is a dummy text for list thus time </li>
                <li>Lorem Ipsum is a dummy text for list thus time</li>
                <li>Lorem Ipsum is a dummy text for list thus time </li>
                <li>Lorem Ipsum is a dummy text for list thus time </li>
                <li>Lorem Ipsum is a dummy text for list thus time </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default UpperSlider;
