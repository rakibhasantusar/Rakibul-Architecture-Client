import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../../assets/Banner-Image.png";

const Slider = () => {
    return (
        <section>
            <div className="dark:bg-black">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-300">Best Architectural Design Service in Bangladesh</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-300">I Provide Architectural Design, Interior Design, Landscape Design, Animation, Rajuk Sheet Design, Pauroshava Sheet Design, 3d Virtual Tour, Product Design!</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/services'>
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-white dark:text-text-dark">All Service</button>
                        </Link>
                        <Link to='/blog'>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-white dark:text-white">Blog Here</button>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={photo} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 max-h-[700px]" />
        </section >
    );
};

export default Slider;