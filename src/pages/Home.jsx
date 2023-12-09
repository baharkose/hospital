import React, { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { appointmentData, doctorData } from "../helpers/data";
import { Container } from "react-bootstrap";
import AddModal from "../components/AddModal";
const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  //! new version
const [makeAppointment, setMakeAppointment] = useState([])
  return (
    <div>
      <div className="fluid d-flex gap-5 flex-wrap justify-content-center m-5">
        <h2>Doctor List</h2>
        <Doctors doctorData={doctorData} setSelectedDoctor= {setSelectedDoctor}  />

        {selectedDoctor && (
          <AddModal
            doctors={selectedDoctor}
            onClose = {()=>setSelectedDoctor(null)}
            selectedDoctor={selectedDoctor}
            makeAppointment={makeAppointment}
            setMakeAppointment = {setMakeAppointment}
          />
        )}
      </div>
      <h1 className="text-center pb-2">Appointment List</h1>
      {appointmentData.map((item) => (
        <AppointmentList appointmentData={item} makeAppointment={makeAppointment} />
      ))}
    </div>
  );
};
export default Home;
