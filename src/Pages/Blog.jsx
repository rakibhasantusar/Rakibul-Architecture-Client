import React from 'react';
import useSetTitle from '../dynamicTitle/useSetTitle';

const Blog = () => {
    useSetTitle("Blog");
    return (
        <div>
            <section>
                <div className=" mx-auto shadow-2xl   dark:bg-black">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-32 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">Blog Area</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className=" dark:dark:text-gray-100 m-5 mt-10">
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">1.What is the difference between SQL and NoSQL?</h2>
                            <p className="mt-3">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>
                    </div>
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">2.What is JWT, and how does it work?</h2>
                            <p className="mt-3">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). </p>
                        </div>
                    </div>
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">3.What is the difference between javascript and NodeJS?</h2>
                            <p className="mt-3">NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                            </p>
                        </div>
                    </div>
                    <div className="container my-5 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">4.How does NodeJS handle multiple requests at the same time?</h2>
                            <p className="mt-3">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;