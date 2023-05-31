/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img9 from "../Images/span.png";
import img10 from "../Images/a.png";
import img11 from "../Images/a-1.png";
import img12 from "../Images/a-2.png";
import img13 from "../Images/a-3.png";
import img14 from "../Images/a-4.png";
import img15 from "../Images/a-5.png";
import img16 from "../Images/a-6.png";
import  img from '../Images/i.png'
import Flag1 from '../Images/Flags/1.png'
import Flag2 from '../Images/Flags/2.png'
import Flag3 from '../Images/Flags/3.png'
import Flag4 from '../Images/Flags/4.png'




const Rate = () => {
  return (
    <>
      <Header />

      <div
        className="exch-below-cont-6"
        style={{
          width: "80%",
          display: "block",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <div className="exch-below-cont-6-1">
          <h4>US Dollars Rates In Other Cities</h4>
          <img src={img9} alt="" />
        </div>

        <div className="form-group-2">
          <select className="ip" id="timezone" name="timezone" required>
            <option value="">Select City</option>
            <option value="EST">Mumbai</option>
            <option value="CST">Delhi</option>
            <option value="PST">Ghaziabad</option>
            <option value="PST">Pune</option>
            <option value="PST">Chennai</option>
            <option value="PST">Banglore</option>
          </select>
        </div>

        <div className="exch-below-6-last">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>

      <div className="Rate_Table">
        <div className="left">
          <p className="head">CURRENCY</p>
          <div className="seacrhBar">
            <input type="search" placeholder="seacrch" />
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>US Dollar</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Euro</p>
          </div>
          <div className="subItem">
          <img src={Flag2} alt='' />
            <p>British Pound</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag3} alt='' />
            <p>Australian Dollar</p>
          </div>
          <div className="subItem">
          <img src={Flag4} alt='' />
            <p>Canadian Dollar</p>
          </div>
          <div className="subItem">
          <img src='./Image/span.png' alt='' />
            <p>Singapore Dollar</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>New Zealand Dollar</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Hong Kong Dollar</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>UAE Dirham</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Saudi Riyal</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Swiss Franc</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Japanese Yen</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Swedish Krona</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Thai Baht  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Malaysian Ringgits</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Chinese Yuan  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>South African Rand</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Omani Rial</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Bahraini Dinar</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Kuwaiti Dinar  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Norwegian Krone</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Danish Krone  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Indonesian Rupiah</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Sri Lankan Rupee  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Korean Won</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Turkish Lira  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Russian Ruble</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>Qatari Rial  </p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Euro</p>
          </div>
          <div className="subItem">
          <img src={img} alt='' />
            <p>US Dollar</p>
          </div>
          <div className="subItem" style={{backgroundColor : 'transparent'}}>
          <img src={Flag1} alt='' />
            <p>Euro</p>
          </div>
        </div>
        <div className="mid">
          <p className="head">BUY RATES</p>

          <div className="main">
            <div className="item">
              <div className="seacrhBar">
                <p>Prepaid Forex Card</p>
              </div>
            </div>
            <div className="item">
              <div className="seacrhBar">
                <p>Wire Tranfer's (TT)*** / Demand Draft (DD)</p>
              </div>
            </div>
            <div className="item">
              <div className="seacrhBar">
                <p>Cash (CN)*</p>
              </div>
            </div>
            <div className="item">
              <div className="seacrhBar">
                <p>Cash (bought along with card)**</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="head">SELL RATES</p>

          <div className="main">
            <div className="item">
              <div className="seacrhBar">
                <p>Cash(CN)</p>
              </div>
            </div>
            <div className="item">
              <div className="seacrhBar">
                <p>Prepaid Card</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Rate;
