/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

const DropBar = () => {

    const menu = [
        {
            name : 'Service',
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
      <section>
        <div>
          <i className="fas fa-bars" />
        </div>

        <div>
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
