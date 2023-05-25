/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import { Link } from "react-router-dom";

const DropBar = () => {
  const menu = [
    {
      name: "Service",
      item: [
       {
        name : "Currency Exchange"
       },
       {
        name : "Send Money Abroad"
       },
       {
        name : "Tour & Activities"
       },
       {
        name : "International Sim Card"
       },
       {
        name : "Trade Remittance"
       },
       {
        name : "Forex as a Service (Faas) Solution"
       },
      ],
    },
    {
      name: "Top Currencies",
    //   item : [
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //   ]
    },
    {
      name: "Currency Convertor",
    },
    {
      name: "FAQ",
    },
    {
      name: "Offers",
    },
  ];

  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <i className="fas fa-bars" />
        </div>

        <div className="right-Container">
          {menu.map((i, index) => (
            <Dropdown key={index}>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                {i.name}
              </Dropdown.Toggle>

              
                <Dropdown.Menu>
                {i?.item?.map((ite, index) => (
                <DropdownButton
                  id={`dropdown-button-drop-end`}
                  drop={`end`}
                  variant="none"
                  title={`${ite.name}`}
                  key={index}
                >
                  {i?.item?.map((ite, index) => (
                    <Dropdown.Item eventKey={index} key={index}>
                      {ite.name}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                ))}
              </Dropdown.Menu>
         
        
            </Dropdown>
          ))}
        </div>
      </section>
    </>
  );
};

export default DropBar;
