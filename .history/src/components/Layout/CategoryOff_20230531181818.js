
import Offcanvas from "react-bootstrap/Offcanvas";


const Sidebar = ({ show, setShow }) => {
    return (
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="Offcanvas-Menu"
      >
        <Offcanvas.Body>
          <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
          <div className="Menu-Items">
            <div>
              <Link to="/">
                <img src={img7} alt="" />
                <p>Prepaid Travel Card</p>
              </Link>
            </div>
            <div>
              <img src={img} alt="" />
              <p>Foreign Demand Draft</p>
            </div>
            <div>
              <Link to="/Foreign-Currency">
                <img src={img2} alt="" />
                <p>Foreign Currency</p>
              </Link>
            </div>
            <div>
              <Link to="/Educational-Loans">
                <img src={img3} alt="" />
                <p>Educational Loans</p>
              </Link>
            </div>
            <div>
              <Link to="/Remittance">
                <img src={img4} alt="" />
                <p>Remittance</p>
              </Link>
            </div>
            <div>
              <Link to="/travel">
                <img src={img5} alt="" />
                <p>Travel Insurance</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src={img6} alt="" />
                <p>Non-resident Services</p>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  };
  
  export default Sidebar;