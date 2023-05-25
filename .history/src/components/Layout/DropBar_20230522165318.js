/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

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
