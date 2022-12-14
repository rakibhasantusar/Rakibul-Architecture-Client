import { FaHome } from 'react-icons/fa';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../dynamicTitle/useSetTitle';
import ServiceCard from './ServiceCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Services = () => {
    const services = useLoaderData()
    useSetTitle("Services");

    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
    }


    return (
        <section>
            <div className="dark:bg-black">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Architectural Services <FaHome className='inline-block'></FaHome> </h1>
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