import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useSetTitle from '../../dynamicTitle/useSetTitle';
import Service from './servicesection/Service';
import Slider from './Slider/Slider';

const Home = () => {
    const services = useLoaderData()
    useSetTitle("Home");

    return (
        <div>
            <div className='mb-24'>
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
                <div className='my-10'>
                    <Link to='/services'>
                        <button className='btn text-2xl rounded-none mt-20'>See all Services</button>
                    </Link>
                </div>
            </div>
            <section className="p-6 my-24 dark:bg-black dark:text-gray-300 container mx-auto">
                <h2 className='text-5xl font-semibold mb-5'>Statistics Area</h2>
                <hr className='w-[30%] mx-auto mb-10 border-1 ' />
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">500+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">80</p>
                        <p className="text-sm sm:text-base">Blogs</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">20</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>

            <section className="my-24">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-bold leading-none text-center">What My customers are saying about Me</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">These guys are true professionals. From the initial meeting and drawings through punch out lists and actually getting the key, Zach and his crew were amazing. I’d 100% recommend using them for any project!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-black"></span>
                        <p>Abu Naeem</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">It was an absolute pleasure working with Rakibul Architecture. Zach was very professional and great to work with! They exceeded my expectations and will definitely be working with them again in the future. Highly recommend !!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-black"></span>
                        <p>Tanim Al Rayhan</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;