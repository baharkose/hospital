import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddModal from "./AddModal";

const Doctors = ({ doctorData,setSelectedDoctor }) => {
  console.log(doctorData);
  return (
    <>
      {doctorData.map((doctor) => (
        <Card
          style={{ width: "13rem" }}
          key={doctor.id}
         
        >
          <Card.Img variant="top" src={doctor.img} 
           onClick={() => setSelectedDoctor(doctor)}/>
          <Card.Body>
            <Card.Text className="text-center">
              <p>
                <strong>{doctor.name}</strong>
              </p>
              <p>{doctor.dep}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Doctors;

