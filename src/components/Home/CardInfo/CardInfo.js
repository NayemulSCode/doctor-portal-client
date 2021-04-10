import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardInfo.css'
const CardInfo = ({info}) => {
    return (
        <div className="col-md-4 text-white info-card ">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className="ms-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div className="ms-3">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;