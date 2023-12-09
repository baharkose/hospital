import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
const AppointmentList = ({ setMakeAppointment, makeAppointment }) => {
  console.log(makeAppointment)
  return (
    <>
      <div>
        {makeAppointment.map(({ patientName, time, name, id }) => {
          return (
            <ListGroup as="ol" numbered key={id}>
              <ListGroup.Item
                as="li"
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
                  X
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
    </>
  );
};
export default AppointmentList;
