/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

const DropBar = () => {

    const menu = [
        {
            name : 'Service',
            item : [
                "Currency Exchange" , "Send Money Abroad" ,"Tour & Activities" ,
                
            ]
        },
        {
            name : 'Top Currencies',
        },
        {
            name : 'Currency Convertor',
        },
        {
            name : 'FAQ',
        },
        {
            name : 'Offers',
        },
    ]

  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <i className="fas fa-bars" />
        </div>

        <div className="right-Container">  
        {menu.map((i , index) => (
            <Dropdown key={index}>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              {i.name}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <DropdownButton
                id={`dropdown-button-drop-end`}
                drop={`end`}
                variant="none"
                title="Service"
                style={{width : '100%'}}
              >
                <Dropdown.Item eventKey="1">Currency Exchange</Dropdown.Item>
                <Dropdown.Item eventKey="1">Currency Exchange</Dropdown.Item>
                <Dropdown.Item eventKey="1">Currency Exchange</Dropdown.Item>
              </DropdownButton>
            </Dropdown.Menu>
          </Dropdown>
        ))}
         
        </div>
      </section>
    </>
  );
};

export default DropBar;
