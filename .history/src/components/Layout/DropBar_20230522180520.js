/** @format */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Records from '../../Json/menu.json'

const DropBar = () => {
  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <i className="fas fa-bars" />
        </div>

        <div className="right-Container">
          {Records.map((i, index) => (
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
                    {ite?.subItem?.map((name, index) => (
                      <Dropdown.Item eventKey={index} key={index}>
                        {name.iten}
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