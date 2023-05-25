/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";=
import DropdownButton from 'react-bootstrap/DropdownButton';

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

            <Dropdown.Menu>
            <DropdownButton
              id={`dropdown-button-drop-end`}
              drop={`end`}
              variant="secondary"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-button-drop-end">
                  Service
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Currency Exchange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </section>
    </>
  );
};

export default DropBar;
