import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData()
    const { image, title } = serviceDetail
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default ServiceDetail;