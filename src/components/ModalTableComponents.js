import Modal from 'react-bootstrap/Modal';
import './ModalTableComponents.css'; // Import CSS for custom styles

const ModalTableComponents = ({ show, handleClose, content }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="modal-90w" // Adjust width as needed (e.g., 90% of viewport width)
        contentClassName="modal-content" // Custom class for modal content
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Income Rules Models
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-content">{content}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTableComponents;
