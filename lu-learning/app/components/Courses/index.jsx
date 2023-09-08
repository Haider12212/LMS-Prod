"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import courseData from '../../datasets/courseData.js';
import { useRouter } from "next/navigation";
import Image from "next/image";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: "absolute",
                top: "50%",
                 // Adjust the right position as needed
                marginRight: "-100px",
                display: "flex",
                transform: "translateY(850%)",
                justifyContent: "center",
                alignItems: "center",
                background: "#8493E9",
                padding: "28px",
                borderRadius: "50%",

            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                color: "black",
                position: "absolute",
                marginTop: "470px",
                marginLeft: "-100px",
                transform: "translateX(-2000%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#8493E9",
                padding: "28px",
                borderRadius: "50%",

            }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        };
        

       

        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>
                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular courses.</h3>
                        <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore courses&nbsp;&gt;&nbsp;</Link>
                    </div>

                    <Slider {...settings}>
                        {courseData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl h-[400] w-[1000]'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        
                                    </div>
                                    <div className="px-3">
                                        <Link href={`/${items.li}`}>

                                            <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                            <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>
                                        </Link>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className=" sm:text-xl font-medium md:text-2xl lg:text-3xl ">Rs.{items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex  items-center justify-between pt-6">
                                            <Link href={"/register"}>
                                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
                                            Enroll Now
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
