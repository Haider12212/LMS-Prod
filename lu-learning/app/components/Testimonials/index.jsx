"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA



const postData = [
    {
        name: "tba_9410",
        profession: 'Ex Graphic Designing Student',
        comment: 'it was amazing. I have learn a lot about graphic designing. Dr. Maria Ishaq gave usamazing lectures and taught us well. Than you so much Dr Maria....',
        imgSrc: '/assets/testimonial/female.png',
    },
    {
        name: "Anamata_n55",
        profession: 'Ex Graphic Designing Student',
        comment: 'First class and last with Dr Maira Ishaq. It was amazing Platform of learning had lot of fun. Thank you so much Dr Maira Ishaq...',
        imgSrc: '/assets/testimonial/female.png',
    },
    {
        name: "mahamazib",
        profession: 'Ex Canva Student',
        comment: 'Classes with Sir Hamza are amazing. Best platform to learn. Really satisfied. Excited for more opportunities to come. Thank you Sir Hamza...',
        imgSrc: '/assets/testimonial/female.png',
    },
    {
        name: "Zahra Ali",
        profession: 'Ex Student',
        comment: 'Thank you so much Nageen Mam for this beautiful journey and knowledge you gave us is blessing for us...',
        imgSrc: '/assets/testimonial/female.png',
    },
    {
        name: "Rimsha",
        profession: 'Ex Student',
        comment: 'Classes with sir Hamza are amazing. Really satisfied hope to learn more from you...',
        imgSrc: '/assets/testimonial/female.png',
    },
    {
        name: "manal.ajq",
        profession: 'Ex Student',
        comment: 'Pracitcal knowledge and tips, brillian and useful for such low cost courses. Recommended...',
        imgSrc: '/assets/testimonial/female.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
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
                    breakpoint: 800,
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
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute h-20 top-[-45px] w-12">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" />
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
