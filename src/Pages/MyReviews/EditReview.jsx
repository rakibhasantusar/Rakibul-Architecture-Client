import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useSetTitle from '../../dynamicTitle/useSetTitle';

const EditReview = () => {
    const navigate = useNavigate()
    useSetTitle("Edit-Review");

    const editReview = useLoaderData()
    console.log(editReview)
    const { _id, message } = editReview

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;

        const reviewed = {
            message: message,
        }
        console.log(reviewed)

        fetch(`https://rakibul-architecture-server.vercel.app/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewed),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success("Your Review updated");
                    navigate('/myreviews')
                }
            })
            .catch(err => console.error(err))




    }

    return (
        <div>
            <div className='my-24'>
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col container w-[75%] mx-auto mb-20  p-8 shadow-sm  lg:p-12 dark:bg-black dark:text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Update Your Review !</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea name='message' defaultValue={message} rows="3" placeholder="Give your opinion here..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-gray-400 text-xl">Update Review</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditReview;