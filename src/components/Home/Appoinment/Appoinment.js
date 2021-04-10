import React from 'react';
import './Appointment.css'
const Appoinment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src="https://i.postimg.cc/8kr8fzM4/5790-removebg.png" alt=""/>
                    </div>
                    <div className="col-md-7 appointmentText py-5">
                        <h5 style={{color:'#6ACECE'}}>APPOINTMENT</h5>
                        <h2 className="my-5">Make an appointment<br />Today</h2>
                        <p>After you’ve chosen a doctor, please click “Get appointment”. It will lead you to a new page, which will ask you to get registered and login. After you have logged in, you will enter into your dashboard. Here you will see the “appointment” menu, click it</p>
                        <button className="btn btn-primary appoimentBtn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;