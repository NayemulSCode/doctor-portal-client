import React from 'react';

const Testimonial = (props) => {
    const {quote, name, form, img} = props.testimonial;
    return (
        <div className="card shadow-sm mx-2">
            <div className="card-body">
                <p className="card-text text-center text-secondary">{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width='60px'/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{form}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonial;