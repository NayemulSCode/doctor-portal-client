import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className='col-md-4 text-center'>
            <img src="https://i.postimg.cc/05W3rr8W/doctor-sm.png" className="img-fluid mb-3" alt=""/>
            <h4>Dr. Nayemul</h4>
            <p className="text-secondary"><FontAwesomeIcon icon={faPhoneAlt} />+8801760988577</p>
        </div>
    );
};

export default Doctor;