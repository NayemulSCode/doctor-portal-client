import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Appoinment />
        </div>
    );
};

export default Home;