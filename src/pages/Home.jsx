import React from 'react'
import Doctors from "../components/Doctors"
import AppointmentList from '../components/AppointmentList'
import {appointmentData, doctorData} from "../helpers/data"
 
const Home = () => {
  return (
    <div>
      {doctorData.map((item)=>(
          <Doctors doctorData={item}/>
      ))}
    
    {appointmentData.map((item)=>(
      <AppointmentList appointmentData={item}/>
    ))}
    </div>
  )
}

export default Home
