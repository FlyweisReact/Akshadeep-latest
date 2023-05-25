import React from "react";
import Fade from "react-reveal/Fade";
import img from "../../../Images/GIF/1.gif";

const IndexSecondMotion = () => {
  return (
    <div className="Index_First_Motion_Fade">
    <Fade bottom>
      <div className="Main_Container">
        <div className="left_cont">
          <img src={img} alt="" />
        </div>

        <div className="right_cont">
          <h6>
            Stay top on your <br />
            <span style={{ color: "#00296B" }}>Forex Exchange</span>
          </h6>
          <p>Check your forex rates and learn way to use them </p>
          <div>
            <button className="btn_1">Learn More</button>
            <button className="btn_2">Learn More</button>
          </div>
        </div>
      </div>
    </Fade>
  </div>
  )
}

export default IndexSecondMotion