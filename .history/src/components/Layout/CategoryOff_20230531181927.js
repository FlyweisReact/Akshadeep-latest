
import Offcanvas from "react-bootstrap/Offcanvas";


const CategoryOff = ({ offShow, setOffShow }) => {
    return (
      <Offcanvas
        show={offShow}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Body>
          <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
     
        </Offcanvas.Body>
      </Offcanvas>
    );
  };
  
  export default CategoryOff;