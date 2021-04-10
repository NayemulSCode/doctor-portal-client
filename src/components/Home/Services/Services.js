import React from 'react';
import ServiceDetails from './ServiceDetails';
const servicesData = [
    {
        name: 'Fluoride Treatment',
        image: 'https://i.postimg.cc/tCGqz4Qq/001-dental.png',
        description:'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.'
    },
    {
        name: 'Cavity Filling',
        image: 'https://i.postimg.cc/4ykgwB0L/tooth-1.png',
        description:'Many options are available for tooth fillings, and all of them have their pros and cons. Types of tooth fillings include gold, silver amalgam (a composite of mercury, silver, and other metals), tooth-colored composite material, porcelain, and a special type of glass.'
    },
    {
        name: 'Teath Whitening',
        image: 'https://i.postimg.cc/gJR9w30v/tooth.png',
        description:'Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums. Individuals with yellow tones to their teeth respond best. But this cosmetic procedure is not recommended for everyone.Find out if teeth whitening is right for you.'
    }

]
const Services = () => {
    return (
        <section className="service-container mt-5">
            <div className='text-center'>
                <h5 style={{color:'#17D2B7'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetails service = {service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;