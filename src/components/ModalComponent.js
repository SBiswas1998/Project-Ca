import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalComponent = ({ show, handleClose, content }) => {
  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>Declaration Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="modal-body-content">{content}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
