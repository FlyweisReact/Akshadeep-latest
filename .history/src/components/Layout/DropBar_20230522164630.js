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
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item style={{ padding: "2px", textAlign: "center" }}>
                Action
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
    </>
  );
};

export default DropBar;
