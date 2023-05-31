import React from 'react';
import Navbar from "./navbar";
import img from "../Images/a-13.png";
import img2 from "../Images/a-14.png";
import img3 from "../Images/a-15.png";
import img4 from "../Images/hr.png";
import Header from './Layout/Header';

const Offer = ()=>{
    return (
        <>
          <Header />
          <img className="offer-img" src={img} />  
          <div className="offer-cont">
            <div className="row1 offer-row1">
                <div className="col1 offer-col1">
                    <img style={{marginBottom:"20px"}} src={img2} />
                    <h3>Amazing VISA Offers</h3>
                    <img className="offer-hr-img" src={img4} />
                </div>
                <div className="col1 .col1-offer">
                    <p>Lorem ipsum is a dummy text here to paste and deals including food travel, shooping, dining
                        enetertainment, drishyam, and more after booking.
                    </p>
                    <div className="offer-col1-cont">
                        <div className="offer-col1-sub1">
                            <h6>Terms and Conditons</h6>
                            <ul>
                                <li>Offer is valid only when you place an Forex card on www.Loremipsum.com</li>
                                <li>All T&C Visa would be applied</li>
                                <li>To Claim the offer click here</li>
                            </ul>
                        </div>
                        <div className="offer-col1-sub2">
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row1 offer-row1">
                <div className="col1 .col1-offer">
                    <p>Get 25% discount on whole order with a coupe code entirely used for exclusive BSF coupons.
                    </p>
                    <div className="offer-col1-cont">
                        <div className="offer-col1-sub1">
                            <h6>Terms and Conditons</h6>
                            <ul>
                                <li>Offer is valid only when you place an Forex card on www.Loremipsum.com</li>
                                <li>All T&C Visa would be applied</li>
                                <li>To Claim the offer click here</li>
                            </ul>
                        </div>
                        <div className="offer-col1-sub2">
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
                <div className="col1 offer-col1 offer-col1-left">
                    <img style={{marginBottom:"20px"}} src={img3} />
                    <h3>25% off on Travel Accessories by Junket</h3>
                    <img className="offer-hr-img" src={img4} />
                </div>
            </div>
            <div className="row1 offer-row1">
                <div className="col1 offer-col1">
                    <img style={{marginBottom:"20px"}} src={img2} />
                    <h3>Amazing VISA Offers</h3>
                    <img className="offer-hr-img" src={img4} />
                </div>
                <div className="col1 .col1-offer">
                    <p>Lorem ipsum is a dummy text here to paste and deals including food travel, shooping, dining
                        enetertainment, drishyam, and more after booking.
                    </p>
                    <div className="offer-col1-cont">
                        <div className="offer-col1-sub1">
                            <h6>Terms and Conditons</h6>
                            <ul>
                                <li>Offer is valid only when you place an Forex card on www.Loremipsum.com</li>
                                <li>All T&C Visa would be applied</li>
                                <li>To Claim the offer click here</li>
                            </ul>
                        </div>
                        <div className="offer-col1-sub2">
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row1 offer-row1">
                <div className="col1 .col1-offer">
                    <p>Get 25% discount on whole order with a coupe code entirely used for exclusive BSF coupons.
                    </p>
                    <div className="offer-col1-cont">
                        <div className="offer-col1-sub1">
                            <h6>Terms and Conditons</h6>
                            <ul>
                                <li>Offer is valid only when you place an Forex card on www.Loremipsum.com</li>
                                <li>All T&C Visa would be applied</li>
                                <li>To Claim the offer click here</li>
                            </ul>
                        </div>
                        <div className="offer-col1-sub2">
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
                <div className="col1 offer-col1 offer-col1-left">
                    <img style={{marginBottom:"20px"}} src={img3} />
                    <h3>25% off on Travel Accessories by Junket</h3>
                    <img className="offer-hr-img" src={img4} />
                </div>
            </div>
          </div>
        </>
    )
}

export default Offer;