import React, { useEffect, useState } from 'react';
import AppointmentDetails from '../../Dashboard/AppointmentDetails/AppointmentDetails';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://hidden-badlands-01558.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="container-fluid row " >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDetails appointments ={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;