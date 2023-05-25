/** @format */

import React from "react";
import Fade from "react-reveal/Fade";
import img from '../../../Images/17.svg'

const IndexFirstMotion = () => {
  return (
    <>
      <div className="Index_First_Motion_Fade">
        <Fade bottom>
            <div>   
                    <div>
                        <img src={img} alt='' />
                    </div>
            </div>
        </Fade>
      </div>
    </>
  );
};

export default IndexFirstMotion;
