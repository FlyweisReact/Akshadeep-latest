import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img3 from "../Images/a-12.png";
import img4 from "../Images/a-11.png";
import img5 from "../Images/a-10.png";
import BottomCont from "./bottom_cont";
import Footer from "./footer";
import Header from "./Layout/Header";

const Main6 = () => {
  return (
    <>
    <Header />
      <div className="travel_Container">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={1000}
          stopOnHover={true}
          showArrows={false}
          showIndicators={false}
        >
          <div className="carousel1"></div>
          <div className="carousel2"></div>
          <div className="carousel3"></div>
        </Carousel>


        <div className="main6-form-cont">
            <div className="mb-3">
              <p>Destination</p>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div>
              <p>AGE OF TRAVELLER(S)</p>
              <div>
                <input type=''
              </div>
            </div>
        </div>
      </div>
      

    </>
  );
};

export default Main6;
