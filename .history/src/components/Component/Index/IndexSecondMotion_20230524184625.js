/** @format */

import React from "react";
import Fade from "react-reveal/Fade";
import img from "../../../Images/SVG/1.svg";
import video1 from "../../../Images/GIF/2.mp4";

const IndexSecondMotion = () => {
  return (
    <div className="Index_Second_Motion_Fade">
      <Fade bottom>
        <div className="Main_Container">
          <div className="right_cont">
            <h6>
              Learn about the safest
              <br />
              way with
              <span style={{ color: "#00296B" }}> Forex </span>
            </h6>
            <p>Check your forex rates and learn way to use them </p>
            <div>
              <button className="btn_1">Learn More</button>
              <button className="btn_2">Learn More</button>
            </div>
          </div>
          <div className="left_cont">
            {/* <img src={img} alt="" /> */}
            {/* <video width="320" height="240" controls>
              <source src={video1} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default IndexSecondMotion;
