import React from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    return (
        <section className="doctors py-3">
            <div className="container">
                <h5 className="text-center text-primary my-5">Our Doctors</h5>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section >
    );
};

export default Doctors;