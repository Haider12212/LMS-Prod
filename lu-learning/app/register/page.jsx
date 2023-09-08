"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import regData from '../datasets/regData';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';
import { get } from "https";

const page = () => {
    const [loading, setLoading] = useState(false);

    const Router = useRouter();
    if (Router.isFallback) {
        <h1>Data is loading</h1>;
    }
    const [formData, setFormData] = useState({

        name: '',
        email: '',
        age: '',
        gender: '',
        whatsapp: '',
        selectedCourse: '',
    });
    const SERVICE_ID = 'service_kkv6dqd';
    const TEMPLATE_ID = 'template_8vezmlc';
    const USER_ID = 't8i6IPKaCAbgeBGWF';
    const [courses, setCourses] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        setCourses(regData);
    }, []);

    useEffect(() => {
        const isFormValid =
            formData.name !== '' &&
            formData.gender !== '' &&
            formData.age !== '' &&
            formData.email !== '' &&
            formData.whatsapp !== '' &&
            formData.selectedCourse !== '';

        setSubmitDisabled(!isFormValid);
    }, [formData]);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const form = document.getElementById('registrationForm');
        const gender = formData.gender
        const selectedCourse = formData.selectedCourse
        console.log("Selected Gender is", gender);
        console.log("Selected Course is", selectedCourse);
        try {
            // const preFilled = `https://docs.google.com/forms/d/e/1FAIpQLScGSLHc7ROFaM1LV6WAiMErJ3l_H2fV8SZlHKva5tUKH6iOIw//formResponse?usp=pp_url&entry.1339644007=${formData.name.replace(" ", "")}&entry.826474156=${formData.email}&entry.204990664=${formData.gender}&entry.642368857=${formData.age}&entry.9190230=${formData.whatsapp}&entry.471004916=${formData.selectedCourse.replace(" ", "")}&submit=Submit?`;
            // const resGform = await fetch(preFilled, {
            //     mode: 'no-cors',
            // });
            // console.log("resGform", resGform);
            // window.open(`https://docs.google.com/forms/d/e/1FAIpQLScGSLHc7ROFaM1LV6WAiMErJ3l_H2fV8SZlHKva5tUKH6iOIw//formResponse?usp=pp_url&entry.1339644007=${formData.name.replace(" ", "")}&entry.826474156=${formData.email}&entry.204990664=${formData.email}&entry.642368857=${formData.age}&entry.9190230=${formData.whatsapp}&entry.471004916=${formData.selectedCourse.replace(" ", "")}&submit=Submit?`, '_blank');
            const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID, formData);
            if (response.status === 200) {
                // console.log('Email sent successfully!', response, form);
                Router.push('/success');
            }



        } catch (error) {
            console.error('Error sending email:', error);
        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div id="reg" className="bg-lightkblue" style={{ background: "linear-gradient(to bottom, #DCDDEc, #C3E1FD)" }}>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
                    <div className="col-span-6 flex flex-col justify-evenly">
                        <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
                            Register for Amazing Courses With LU Learning
                        </h1>
                        <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-2 lg:pt-0">
                            Build skills with our courses and mentors from world-class companies.
                        </h3>
                        <form id="registrationForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="age" className="block mb-2 text-sm font-bold text-gray-700">
                                            Age
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            placeholder="Enter your age"
                                            value={formData.age}
                                            onChange={(e) => handleInputChange('age', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="gender" className="block mb-2 text-sm font-bold text-gray-700">
                                            Gender
                                        </label>
                                        <select
                                            id="gender"
                                            value={formData.gender}
                                            name="gender"
                                            onChange={(e) => handleInputChange('gender', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="whatsapp" className="block mb-2 text-sm font-bold text-gray-700">
                                            Contact Number (WhatsApp)
                                        </label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            placeholder="Enter your contact number"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="selectedCourse" className="block mb-2 text-sm font-bold text-gray-700">
                                            Select Course
                                        </label>
                                        <select
                                            id="selectedCourse"
                                            value={formData.selectedCourse}
                                            onChange={(e) => handleInputChange('selectedCourse', e.target.value)}
                                            className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                            name="selectedCourse"

                                        >
                                            <option value="">Select a Course</option>
                                            {courses.map((course, index) => (
                                                <option key={index} value={course.heading}>
                                                    {course.heading} -for Only Rs. {course.price}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className={`mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 ${submitDisabled ? 'opacity-50 px-6 py-3 bg-green-500 cursor-not-allowed' : ''}`}
                                        disabled={submitDisabled || loading}
                                    >
                                        {loading ? <>Loading..</> : <>Submit Registration</>}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="flex items-center justify-between pt-10 lg:pt-4">
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    Money Back Gurantee
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    Lifetime Support
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    WhatsApp Community
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 flex justify-center flex-col">
                        <Image
                            src="/assets/register/academy-illustration.png"
                            alt="nothing"
                            width={1000}
                            height={805}
                        />
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
                            <p className="text-gray-600 mb-4 pl-3">
                                LU is providing people with flexible and rigorous online learning opportunities that will help them acquire the knowledge, skills, and characteristics necessary for career readiness. LU is on a mission to help creators earn a living online. Here is what we do and how we get it done.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a href="https://www.facebook.com/lutrainingsmcpvtltd?mibextid=LQQJ4d" target="_blank" className="text-gray-600 hover:text-blue-500">
                                    <FaFacebook size={50} />
                                </a>

                                <a href="https://www.instagram.com/lu_training_smc_pvt_ltd" target="_blank" className="text-gray-600 hover:text-pink-500">
                                    <FaInstagram size={50} />
                                </a>
                                <a href="https://wa.me/923457031753" target="_blank" className="text-gray-600 hover:text-green-500">
                                    <FaWhatsapp size={50} />
                                </a>
                            </div>
                            <div className="mt-6 ">
                                <h3 className="text-2xl font-semibold">Contact Us</h3>
                                <p className="text-gray-600 text-xl py-6">
                                    Email: lutrainingpvtltd@gmail.com
                                </p>
                                <p className="text-gray-600 text-xl">
                                    Phone: +923457031753
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default page;
