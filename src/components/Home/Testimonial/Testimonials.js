import React from 'react';
import Testimonial from './Testimonial';
import './Testimonial.css'
const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur',
        name: 'Sabbir Ahmed',
        form: 'Bangladesh',
        img: 'https://i.postimg.cc/KjB3L6h0/Ellipse-1.png'
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur',
        name: 'Mahmufa Didi',
        form: 'India',
        img: 'https://i.postimg.cc/DwBJqQR3/Ellipse-2.png'
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur',
        name: 'Flowra Dilruba',
        form: 'Africa',
        img: 'https://i.postimg.cc/nrbg0DNn/Ellipse-3.png'
    }
]
const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color: '#6CCFCF'}} className="text-uppercase">testimonial</h5>
                    <h1>What's Our Patients <br/> Says</h1>
                </div>
                <div className="card-deck mt-5 d-flex justify-content-center">
                    {
                        testimonialData.map( testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;