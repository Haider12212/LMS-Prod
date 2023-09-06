"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA



const postData = [
    {
        profession: 'CEO & Founder',
        name: 'Muhammad Hamza Naeem',
        imgSrc: '/assets/mentor/01.png',
    },
    {
        profession: 'Sr. Graphic Designer',
        name: 'Maira',
        imgSrc: '/assets/mentor/02.png',
    },
    {
        profession: 'Content Writing Expert',
        name: 'Nageen Shawaiz',
        imgSrc: '/assets/mentor/03.png',
    },
    {
        profession: 'Wordpress Developer',
        name: 'Saad Asghar',
        imgSrc: '/assets/mentor/04.png',
    },
    {
        profession: 'Spoken English Expert',
        name: 'Afia kazmi',
        imgSrc: '/assets/mentor/05.png',
    },
    {
        profession: 'Seo Expert',
        name: 'Ride Rashid',
        imgSrc: '/assets/mentor/06.png',
    },

]

// CAROUSEL SETTINGS

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center", background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
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
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 400,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="py-10 sm:py-24" style={{ background: "linear-gradient(to bottom, #EAF7FF, #C3E1FD)" }} id="mentor">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-center font-semibold tracking-widest">Meet  With  Our <br /> Mentors.</h2>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-10 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto" />

                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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
