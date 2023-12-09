import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const AddModal = ({ doctors, onClose, makeAppointment, setMakeAppointment }) => {
  const { name, dep, img } = doctors;
  const [modalData, setModalData] = useState({
    patientName: "",
    date: "",
    time: "",
  });
  const { patientName, date, time } = modalData;
  const handleModalData = (e) => {
    //+ her seferinde yeni eleman olarak ekler..
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };
  console.log(modalData);
  const handleMakeAppointment = () => {
    setMakeAppointment([...makeAppointment,
      { ...modalData, ...doctors, id: new Date().getTime() }
    ]);
    setModalData({
      patientName: "",
      date: "",
      time:"",
      consulted:false
    })
  };
console.log(makeAppointment)
return (
    <>
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="patientName"
              placeholder="First name"
              onChange={handleModalData}
              value={patientName || ""}
            />
            <br />
            <Form.Label>Day & Time</Form.Label>
            <Form.Control
              required
              type="date"
              name="date"
              placeholder="First name"
              onChange={handleModalData}
              value={date || ""}
            />
            <br />
            <Form.Control
              required
              type="time"
              name="time"
              placeholder="First name"
              onChange={handleModalData}
              value={time || ""}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleMakeAppointment}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddModal;

