import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement('#root')
const BookingForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
      console.log(data);
      closeModal();
    }
    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-center text-brand">{appointmentOn}</h2>
            <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-control"  {...register("name")}  required/>
                  {errors?.name && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group">
                  <input type="text" placeholder="Phone Number" className="form-control" {...register("phone")} required />
                  {errors?.phone && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control" {...register("email")} required />
                  {errors?.email && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group row">
                  <div className="col-4">

                      <select className="form-control" {...register("gender")} >
                          <option disabled={true} value="Not set">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Not set">Other</option>
                      </select>
                      {errors?.gender && <span className="text-danger">This field is required</span>}

                  </div>
                  <div className="col-4">
                      <input  className="form-control" placeholder="Your Age" type="number" {...register("age")} required />
                      {errors?.age && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="col-4">
                      <input  className="form-control" placeholder="Weight" type="number" {...register("weight")} required />
                      {errors?.weight && <span className="text-danger">This field is required</span>}
                  </div>
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form>
        </Modal>
      </div>
    );
};

export default BookingForm;