/** @format */

import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useNavigate } from "react-router-dom";
import Records from "../../Json/menu.json";
import Sidebar from "./Sidebar";
import Offcanvas from "react-bootstrap/Offcanvas";

const DropBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [offShow, setOffShow] = useState(false);

  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <img
            src="./Image/hamburger.png"
            alt=""
            style={{ width: "30px", cursor: "pointer" }}
            onClick={() => setShow(true)}
          />
        </div>
        <div className="right-Container">
          <button className="Expolre_Btn" onClick={() => setOffShow(true)}>
            Explore More
          </button>
          {Records.map((i, index) =>
            i.item ? (
              <Dropdown key={index}>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  {i.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {i?.item?.map((element) =>
                    element?.subItem ? (
                      <DropdownButton
                        id={`dropdown-button-drop-end`}
                        drop={`end`}
                        variant="none"
                        title={`${element.name}`}
                        key={index}
                      >
                        {element?.subItem?.map((name, index) => (
                          <Dropdown.Item
                            eventKey={index}
                            key={index}
                            onClick={() => navigate(name.link)}
                          >
                            {name.itemName}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    ) : (
                      <Dropdown.Item onClick={() => navigate(element.link)}>
                        {" "}
                        {element.name}{" "}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              i.type === 'href' ? 
              <a to={i.link} className='Links'>
                {i.name}
              </Link> :<Link to={i.link} className='Links'>
                {i.name}
              </Link>  
            )
          )}
        </div>
      </section>

      <Sidebar show={show} setShow={setShow} />

      {/* Category Off Canvas for Mobile */}
      <Offcanvas
        show={offShow}
        onHide={() => setOffShow(false)}
        className="Offcanvas-Menu"
      >
        <Offcanvas.Body>
          <i className="fa-solid fa-x" onClick={() => setOffShow(false)}></i>

          <div className="Drop">
            {Records.map((i, index) => (
              <Dropdown key={index}>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  {i.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {i?.item?.map((element) =>
                    element?.subItem ? (
                      <DropdownButton
                        id={`dropdown-button-drop-end`}
                        drop={`end`}
                        variant="none"
                        title={`${element.name}`}
                        key={index}
                      >
                        {element?.subItem?.map((name, index) => (
                          <Dropdown.Item
                            eventKey={index}
                            key={index}
                            onClick={() => navigate(name.link)}
                          >
                            {name.itemName}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    ) : (
                      <Dropdown.Item onClick={() => navigate(element.link)}>
                        {" "}
                        {element.name}{" "}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DropBar;
