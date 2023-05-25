import React from "react";
import img from "../Images/a-33.png";
import img2 from "../Images/a-34.png";
import img3 from "../Images/a-35.png";
import img4 from "../Images/a-36.png";
import img5 from "../Images/a-37.png";
import img6 from "../Images/a-51.png";

const BotCont = () => {
  return (
    <>
      <div className="bot-part-1">
        <div className="bot-cont-imgs">
          <div>
            <img src={img} alt='' />
            <h6>USD 1 Billion+</h6>
            <p>Exchanged so far</p>
          </div>
          <div>
            <img src={img2} alt='' />
            <h6>3,00,000+</h6>
            <p>Happy Customers</p>
          </div>
          <div>
            <img src={img3} alt='' />
            <h6>5000+</h6>
            <p>Banks and Money Exchangers</p>
          </div>
        </div>
      </div>
  
  
      <div className="bot-part-2">
        <h3>Media Mentions</h3>
        <div className="bot-part-2-sub">
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
              <img src={img4} />
              <p>5 star</p>
            </div>
          </div>
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
              <img src={img5} style={{height:"40px"}} />
              <p>5 star</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotCont;
