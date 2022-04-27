import React from 'react';
import './Service.css';

const Service = props => {
    const { name, description, img, price } = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-5'>{description}</p>
        </div>
    );
};

export default Service;