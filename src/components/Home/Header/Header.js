import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <HeaderMain />
            <BusinessCard />
        </div>
    );
};

export default Header;