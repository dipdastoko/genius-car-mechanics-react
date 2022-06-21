import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://immense-sierra-19949.herokuapp.com/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2>Details of {service.Name}</h2>
            <h3>Price: ${service.Price}</h3>
        </div>
    );
};

export default Booking;