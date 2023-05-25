import React, { useState } from "react";
import img from "../Images/icon1.png";
import img2 from "../Images/rectangle-341.png";
import img3 from "../Images/uploadimg.png";
import img4 from "../Images/eyeimg.png";
import {useNavigate} from 'react-router-dom';

const OP2 = () => {
    const navigate = useNavigate();
  const [check, setCheck] = useState("");
  return (
    <>
      <div className="form-2-cont">
        <h2>Eligibility Check</h2>
        <div className="form-group form-grp-2">
          <label>Purpose</label>
          <select
            className="ip"
            id="timezone"
            name="timezone"
            onChange={(e) => setCheck(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="EST">Reason 1</option>
            <option value="CST">Reason 2</option>
            <option value="PST">Reason 3</option>
          </select>
        </div>
        <div className="below-form-cont">
          {check === "" ? (
            ""
          ) : (
            <>
            <div className="form-3-cont">
            <div class="form-group-e">
              <label for="indian-resident" className="label-e">Are you an Indian resident?</label>
              <img src={img} alt="" />
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="yes"
                  name="indian-resident"
                  value="yes"
                  required
                />
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="indian-resident" value="no" />
                <label for="no">No</label>
              </div>
              </div>
            <div className="form-3-cont-below">
                <h3>Documents Required</h3>
                    <div className="form-grp-2-below-cont">
                        <div className="form-item">
                                <div className="potn1-l">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="portn1-r">
                                    <p className="portp">Pan Card</p>
                                    <div className="portn1-r-bot">
                                        <button className="portn-btn">Upload
                                            <img src={img3} />
                                        </button>
                                        <p>view_file
                                            <img src={img4} />
                                        </p>
                                    </div>
                            </div>
                        </div>
                        <div className="form-item">
                           
                                <div className="potn1-l">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="portn1-r">
                                    <p className="portp">Pan Card</p>
                                    <div className="portn1-r-bot">
                                        <button className="portn-btn">Upload
                                            <img src={img3} />
                                        </button>
                                        <p>view_file
                                            <img src={img4} />
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className="form-item">
                                <div className="potn1-l">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="portn1-r">
                                    <p className="portp">Pan Card</p>
                                    <div className="portn1-r-bot">
                                        <button className="portn-btn">Upload
                                            <img src={img3} />
                                        </button>
                                        <p>view_file
                                            <img src={img4} />
                                        </p>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="form-item">
                                <div className="potn1-l">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="portn1-r">
                                    <p className="portp">Pan Card</p>
                                    <div className="portn1-r-bot">
                                        <button className="portn-btn">Upload
                                            <img src={img3} />
                                        </button>
                                        <p>view_file
                                            <img src={img4} />
                                        </p>
                                    </div>
                                </div>
                          
                        </div>
                        <div className="form-item">
                                <div className="potn1-l">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="portn1-r">
                                    <p className="portp">Pan Card</p>
                                    <div className="portn1-r-bot">
                                        <button className="portn-btn">Upload
                                            <img src={img3} />
                                        </button>
                                        <p>view_file
                                            <img src={img4} />
                                        </p>
                                    </div>
                                </div>
                          
                        </div>

                    </div>
                </div>
                <div className="foot-cont">
                    <h4>Porem Ipsum dot sit amiit. consetguvurr adpriit faltingn</h4>
                    <h5>Lorem ipsum is a dummy text to shwo dummy text and spce for actual text
                        to be decide in the future, here it shows the actual space for the text
                    </h5>
                </div>
            </div>
            <button className="form-2-btn" type="submit" onClick={()=>navigate("/customer-det2")}>
            Continue
          </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OP2;
