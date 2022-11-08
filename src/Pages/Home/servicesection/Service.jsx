import React from 'react';
import { FaStar } from "react-icons/fa";

const Service = ({ service }) => {
    console.log(service);
    const { _id, title, price, image, rating, description } = service
    return (
        <div className="card card-compact  max-w-[384px] mx-auto  shadow-xl rounded-none bg-black">
            <img src={image} alt={title} className='max-h-60' />
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)} </p>
                <div className="card-actions items-center justify-between">
                    <div>
                        <p className='text-xl'>Price: ${price} <span className='ml-7'> {rating.rate} <FaStar className=' inline-block h-4 mb-1' /> </span></p>
                    </div>
                    <button className="btn rounded-none">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;