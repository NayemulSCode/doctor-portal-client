import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeade = ({handleDateChange}) => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }} className="">Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src='https://i.postimg.cc/DzjpSsJf/Mask-Group-1.png' alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeade;