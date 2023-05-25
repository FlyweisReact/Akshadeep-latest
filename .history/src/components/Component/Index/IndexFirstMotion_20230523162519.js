/** @format */

import React from "react";
import Fade from "react-reveal/Fade";
import img from "../../../Images/17.svg";

const IndexFirstMotion = () => {
  return (
    <>
      <div className="Index_First_Motion_Fade">
        <Fade bottom>
          <div>
            <div>
              <img src={img} alt="" />
            </div>

            <div>
              <h6>Stay top on your Forex Exchange</h6>
              <p>Check your forex rates and learn way to use them </p>
              <div>
                <button>Learn More</button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default IndexFirstMotion;
