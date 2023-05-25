/** @format */

import React , {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import Records from "../../Json/menu.json";
import Offcanvas from 'react-bootstrap/Offcanvas';

const DropBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <>
      <section className="Drop-Category-Bar">
        <div className="left-container">
          <i className="fas fa-bars"  onClick={handleShow}/>
        </div>

        <div className="right-Container">
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
                    <Dropdown.Item> {element.name} </Dropdown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </section>

      <Offcanvas show={show} onHide={handleClose} className='Offcanvas-Menu'>
        <Offcanvas.Body>
        <i className="fa-solid fa-x"></i>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
};

export default DropBar;
