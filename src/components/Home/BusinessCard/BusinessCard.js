import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
const infos =[
    {
        title: 'Opening Hours',
        description: 'open 7/24 hours also available online',
        icon: '',
        background:'primary'
    },
    {
        title: 'Visit our location',
        description: 'Mohammadpur,Dhaka-Bangladesh',
        icon: '',
        background:'dark'
    },
    {
        title: 'Contact us now',
        description: '+0881760988572',
        icon: '',
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