import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/>Starts Here</h1>
                <p className="text-secondary">Dental treatment is most important for your future! Teeth are not bones. Yes, both are white in color and they do indeed store calcium, 
                    but that's where their similarities end
                </p>
                <button className="btn btn-primary appoimentBtn">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src="https://i.postimg.cc/DzjpSsJf/Mask-Group-1.png" alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;