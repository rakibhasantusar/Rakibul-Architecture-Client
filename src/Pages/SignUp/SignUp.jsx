import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import image from "../../assets/fine_tune.jpg";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser, upDateUserProfile } = useContext(AuthContext)

    const handlerSubmit = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                toast.success('your registration with login done')
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photourl)
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }

    const handleUpdateUserProfile = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl,
        }
        upDateUserProfile(profile)
            .then(() => { })
            .catch(err => { console.log(err) });
    }


    return (
        <div>
            <section className='mb-20'>
                <div className="dark:bg-black">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">SignUp Page</h1>
                    </div>
                </div>
            </section>

            <section className='mb-20'>

                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-2 bg-[#d0d5d1] dark:text-gray-100">
                    <div className="flex flex-col justify-around">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold text-black leading-tight lg:text-5xl">Start With Me!</h2>
                        </div>
                        <img src={image} alt="" className="p-6 " />
                    </div>
                    {/* here */}

                    <div>
                        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                            <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up Here</h2>
                            <form onSubmit={handlerSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Your full Name</label>
                                        <input type="text" name="name" placeholder="your full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Photo Url</label>
                                        <input type="text" name="photourl" placeholder="your photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-left">Email address</label>
                                        <input type="email" name="email" placeholder="Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm">Password</label>
                                        </div>
                                        <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                </div>
                                <button type="submit " className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-300 dark:text-gray-900">Sign Up</button>
                            </form>
                            <p className="text-sm text-center my-5 dark:text-gray-400">Already have an account?
                                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline"> Login here</Link>
                            </p>
                        </div>
                        <p className='text-red-600'>{error}</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SignUp;