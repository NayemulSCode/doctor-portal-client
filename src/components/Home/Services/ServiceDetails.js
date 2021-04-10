import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'60px'}} src={service.image} alt=""/>
            <h5 style={{color:'#565E69'}} className="mt-4 mb-4">{service.name}</h5>
            <small style={{color:'gray'}}>{service.description}</small>
        </div>
    );
};

export default ServiceDetails;