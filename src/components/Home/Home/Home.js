import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appoinment from '../Appoinment/Appoinment';
import Blogs from '../Blog/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctor/Doctors';
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
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;