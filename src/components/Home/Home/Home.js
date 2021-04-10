import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blogs from '../Blog/Blogs';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Appoinment />
            <Testimonials />
            <Blogs />
        </div>
    );
};

export default Home;