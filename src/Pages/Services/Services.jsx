import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()

    return (
        <section>
            <div className="dark:bg-black">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Architectural Services <FaHome className='inline-block'></FaHome> </h1>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-white dark:text-text-dark">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-white dark:text-white">Learn more</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='container mx-auto my-20 '>
                    <h2 className='text-6xl font-semibold mb-5'>All Sarvice Area </h2>
                    <hr className='w-[50%] mx-auto mb-20 border-2 border-dashed ' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                        {
                            services.map((service) => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;