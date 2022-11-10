import React from 'react';
import toast from 'react-hot-toast';
import image from "../../assets/banner-signup.png";
import useSetTitle from '../../dynamicTitle/useSetTitle';

const AddServices = () => {
    useSetTitle("Add-Services");

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const addServices = {
            title,
            image,
            price,
            description,
        }

        fetch("https://rakibul-architecture-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addServices),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Welcome With your New Service");
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
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Add your Service</h1>
                    </div>
                </div>
            </section>

            <section className='mb-20'>

                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-2 bg-[#6090be] dark:text-gray-100">
                    <div className="flex flex-col justify-around">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold text-black leading-tight lg:text-5xl"> Add Your Own!</h2>
                        </div>
                        <img src={image} alt="" className="p-6 " />
                    </div>
                    {/* here */}

                    <div>
                        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                            <h2 className="mb-3 text-3xl font-semibold text-center">Add Service Here</h2>
                            <form onSubmit={handleAddService} className="space-y-8 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Your service Title</label>
                                        <input type="text" name="title" placeholder="your service title" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Your Service Photo Url</label>
                                        <input type="text" name="image" placeholder="your photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Your Service Price</label>
                                        <input type="number" name="price" placeholder="please give number digit" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm">Your Service Description</label>
                                        </div>
                                        <textarea type="text" name="description" placeholder="description here..." className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                </div>
                                <button type="submit " className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-300 dark:text-gray-900 text-xl">Submit Your Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AddServices;