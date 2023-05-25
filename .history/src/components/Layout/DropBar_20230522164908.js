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
        <Dropdown.Item href="#/action-1">Currency </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </section>
    </>
  );
};

export default DropBar;
