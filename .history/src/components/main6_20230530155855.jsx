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
          stopOnHover={false}
          showArrows={false}
        >
          <div className="carousel1"></div>
          <div className="carousel2"></div>
          <div className="carousel3"></div>
        </Carousel>

        
        <div className="main6-form-cont">
          <div className="main2-mid-form">
            <div className="form-part-2">
              <div className="row1">
                <select className="ip" id="timezone" name="timezone" required>
                  <option value="">Destination</option>
                  <option value="EST">Germany</option>
                  <option value="CST">Brazil</option>
                  <option value="PST">USA</option>
                  <option value="PST">UK</option>
                  <option value="PST">France</option>
                  <option value="PST">Russia</option>
                </select>
              </div>
              <div className="row1">
                <div className="row2">
                  <label>AGE OF TRAVELLERS</label>
                  <div className="col2">
                    <input type="text" />
                    <button>Add Member</button>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="col1">
                  <label>Trip Start Date</label>
                  <input
                    className="ip"
                    type="date"
                    id="end-date-1"
                    name="end-date-1"
                    required
                  />
                </div>
                <div className="col1">
                  <label>Trip End Date</label>
                    <input
                      className="ip"
                      type="date"
                      id="end-date-1"
                      name="end-date-1"
                      required
                  />
                </div>
              </div>
            </div>
            <div className="main2-bot-cont2">
              <button>BOOK THIS ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main2-cont-2">
          <div className="main2-cont-2-1">
            <img src={img3} />
            <button>Request Call Back</button>
          </div>
          <div className="main2-cont-2-1">
            <img src={img4} />
            <button>Request Call Back</button>
          </div>
          <div className="main2-cont-2-1">
            <img src={img5} />
            <button>Request Call Back</button>
          </div>
        </div>
        <BottomCont />
        <Footer />
    </>
  );
};

export default Main6;
