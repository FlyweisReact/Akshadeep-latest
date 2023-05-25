import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img2 from "../Images/card-img.png.png";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={1000}
      stopOnHover={false}
      showArrows={false}
    >
      <div>
        <h3>Lorem Ipsum Slide 1 for offer for students</h3>
        <div className="slide-cont">
          <div className="left-slide-cont">
            <img src={img2} alt="" className="slide-img" />
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
            <img src={img2} alt="" className="slide-img" />
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
            <img src={img2} alt="" className="slide-img" />
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
    </Carousel>
  );
};

export default Slider;
