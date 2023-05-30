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
            <div className="mb-3">
              <p>AGE OF TRAVELLER(S)</p>
              <div className="two-sec_container">
                <input type='text' />
                <button>Add Member</button>
              </div>
            </div>
            <div className="mb-3">
              <p>TRIP START DATE</p>
              <div className="two-sec">
                <input type='date' />
                <input type='date' />
              </div>
            </div>

            <button className="latBtn">Continue</button>
        </div>
      </div>

      <div className="convertor_three_component" style={{ marginTop: "5%" }}>
          <div>
            <img src={img3} alt="" />
            <button>Request Call Back</button>
          </div>
          <div>
            <img src={img4} alt="" />
            <button>Set Rate Alert</button>
          </div>
          <div>
            <img src={img5} alt="" />
            <button>Request Better Rate</button>
          </div>
        </div>
      

    </>
  );
};

export default Main6;
