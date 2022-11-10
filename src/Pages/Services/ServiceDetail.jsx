import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar, FaTasks } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSetTitle from '../../dynamicTitle/useSetTitle';
import OtherReview from '../MyReviews/OtherReview';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData()
    const { _id, image, title, description, price, rating, list } = serviceDetail;
    const { user } = useContext(AuthContext)
    useSetTitle("service-Detail");

    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id, refresh])


    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            userId: user?.uid,
            email: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            image,
            message
        }

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Thanks for your Review ");
                    setRefresh(!refresh)
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <section className='mb-20'>
                <div className="dark:bg-black">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Service Detail <FaTasks className='inline-block' /> </h1>
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
            </section>

            <section className='mb-20 mx-2'>
                <div className="container mx-auto p-8 shadow-md shadow-slate-500 border-black border-2 dark:text-gray-100">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image} alt="" className="block object-cover object-center w-full rounded-md max-h-[700px]  dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <div className='mb-10'>
                                <h3 className="text-4xl font-semibold mb-4 dark:text-black">{title}</h3>
                                <p className="leading-snug dark:text-black">{description}</p>
                            </div>
                            <div className='flex  items-center justify-around flex-wrap w-[50%] mx-auto'>
                                <div>
                                    <h3 className="text-3xl font-semibold dark:text-black mb-2">Price: ${price}</h3>
                                    <h3 className="text-3xl font-semibold dark:text-black">Rating: {rating || 0}  <FaStar className='inline-block mb-3' /></h3>
                                </div>
                                <div >
                                    {list &&
                                        list.map((sl, index) => <p
                                            key={index}
                                            className='text-black text-left' >
                                            <li> {sl}</li></p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2 className='text-4xl font-semibold mb-5'>Review Area </h2>
                    <hr className='w-[50%] mx-auto mb-20 border-2 border-dashed ' />
                </div>

                {
                    reviews.length ?
                        <div className=" container mx-auto my-20 overflow-x-auto w-full shadow-lg border-2">
                            <table className="table w-full ">
                                {/* <!-- head --> */}
                                <thead  >
                                    <tr className='text-black text-bold'>
                                        <th>User photo</th>
                                        <th>User Name</th>
                                        <th>Review Text</th>
                                        <th>Service Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(review => <OtherReview
                                            key={review._id}
                                            review={review}
                                        ></OtherReview>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        : <h2 className='text-5xl my-24' > no reviews Added</h2>

                }

                <form onSubmit={handleReview}>
                    <div className="flex flex-col container w-[75%] mx-auto mb-20  p-8 shadow-sm  lg:p-12 dark:bg-black dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea name='message' rows="3" placeholder="Give your opinion here..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-gray-400 text-xl">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ServiceDetail;