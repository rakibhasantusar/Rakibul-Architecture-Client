import React, { useContext, useEffect, useState } from 'react';
import { FaReceipt } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewDetail from './ReviewDetail';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    console.log(user)
    return (
        <div>
            <div className="dark:bg-black">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Architectural Services <FaReceipt className='inline-block'></FaReceipt> </h1>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-white dark:text-text-dark">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-white dark:text-white">Learn more</button>
                    </div>
                </div>
            </div>



            <div className=" container mx-auto my-20 overflow-x-auto w-full shadow-lg border-2">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead  >
                        <tr className='text-black text-bold'>
                            <th>User photo</th>
                            <th>User Name</th>
                            <th>Review Text</th>
                            <th>Service Name</th>
                            <th>Edit Review</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewDetail
                                key={review._id}
                                review={review}
                            ></ReviewDetail>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;