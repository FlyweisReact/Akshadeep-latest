
import Offcanvas from "react-bootstrap/Offcanvas";


const CategoryOff = ({ show, setShow }) => {
    return (
      <Offcanvas
        show={offhow}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Body>
          <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
     
        </Offcanvas.Body>
      </Offcanvas>
    );
  };
  
  export default CategoryOff;