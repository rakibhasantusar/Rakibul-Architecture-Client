import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './servicesection/Service';
import Slider from './Slider/Slider';

const Home = () => {
    const services = useLoaderData()

    return (
        <div>
            <div className='mb-5'>
                <Slider></Slider>
            </div>

            <div className='container mx-auto mb-20 '>
                <h2 className='text-6xl font-semibold mb-5'>Sarvice Area</h2>
                <hr className='w-[50%] mx-auto mb-20 border-2 border-dashed ' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
                    {
                        services.map((service) => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div>
                    <Link to='/services'>
                        <button className='btn text-2xl rounded-none mt-20'>See all</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;