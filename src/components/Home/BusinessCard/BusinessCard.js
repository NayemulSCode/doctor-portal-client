import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const infos =[
    {
        title: 'Opening Hours',
        description: 'open 7/24 hours also available online',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit our location',
        description: 'Mohammadpur,Dhaka-Bangladesh',
        icon:  faMapMarkerAlt,
        background:'dark'
    },
    {
        title: 'Contact us now',
        description: '+0881760988572',
        icon: faPhoneAlt,
        background:'primary'
    }
]

const BusinessCard = () => {
    return (
        <section className="row">
            {
                infos.map(info => <CardInfo info={info} />)
            }
        </section>
    );
};

export default BusinessCard;