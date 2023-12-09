import React from "react";
import Badge from "react-bootstrap/Badge";
import { ListGroup, Form, Button } from "react-bootstrap";
import { faCoffee, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppointmentList = ({ setMakeAppointment, makeAppointment }) => {

  const deleteAll = () =>{
    setMakeAppointment([])
  }
  const handleDelete = (id) => {
    setMakeAppointment(makeAppointment.filter((item) => item.id !== id));
    console.log("is clicked");
  };

  console.log(makeAppointment);

  return (
    <>
      <div>
        {makeAppointment.map(({ patientName, time, name, id }) => (
          <ListGroup as="ol" numbered key={id}>
            <ListGroup.Item
              as="li"
              key={id}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-4 m-auto d-flex justify-content-between gap-5">
                <div className="fw-bold">
                  {patientName}
                  <div className="fw-light">{name}</div>
                </div>
                <div className="fw-bold">{time}</div>
              </div>
              <Badge bg="primary" pill>
                <i className="fa-solid fa-x"></i>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(id)}
                />
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        ))}
        <Form>
          <Form.Control />
          <Button onClick={deleteAll}>Tümünü Temizle</Button>
        </Form>
      </div>
    </>
  );
};

export default AppointmentList;
