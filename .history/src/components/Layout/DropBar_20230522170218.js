/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Link

const DropBar = () => {
  return (
    <>
      <section>
        <div>
          <i className="fas fa-bars" />
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              Service
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
        </div>
      </section>
    </>
  );
};

export default DropBar;
