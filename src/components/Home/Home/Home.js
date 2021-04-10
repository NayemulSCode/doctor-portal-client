import React from 'react';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
        </div>
    );
};

export default Home;