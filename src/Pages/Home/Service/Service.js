import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = props => {
    const { _id, Name, Description, img, Price } = props.service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price: {Price}</h5>
            <p className='px-5'>{Description}</p>
            <Link to={`booking/${_id}`}>
                <button className='btn btn-warning'>Book {Name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;