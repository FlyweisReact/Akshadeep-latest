import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
      
      <Modal.Body className="Login_Modal">

      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
