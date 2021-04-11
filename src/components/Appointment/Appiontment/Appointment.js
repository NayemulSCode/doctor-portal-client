import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeade from '../AppointmentHeader/AppointmentHeade';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeade handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate}/>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;