"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { init } from "ityped";
import { StarIcon } from "@heroicons/react/24/solid";
import MainText from "./IType";
import Marquee from "react-fast-marquee";
const Banner = () => {

  const el = useRef(null);
  React.useEffect(() => {
    init(el, { showCursor: false, strings: ['Nice', 'One'] });
  }, []);






  return (
    <div id="home-section" className="bg-lightblue " style={{ background: "linear-gradient(to bottom, #DCDDEc, #7A8BE9)" }}>
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6 " >
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">

            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              LU Training And Development
            </h1>

            <h1 className="text-[#1E4B4A] text-4xl h-24 md:h-12 sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Upgrade Your
              <span className="h-4" >
                <MainText />
              </span>
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-2 lg:pt-0">
              Build skills with our courses and mentor from world-class
              companies.
            </h3>

            <div className="flex justify-between items-center py-6">
              <div className="flex gap-4">
                <h3 className="text-red text-22xl font-medium text-[#3B8383]">
                  Trusted By 5000+
                  <br />
                  students
                </h3>
                <div className="flex flex-col">
                  <h3 className="text-22xl text-center font-medium">4.7</h3>
                  <div className="flex text-[#3B8383]">
                    <StarIcon className="h-5 w-5 text-gold" />
                    <StarIcon className="h-5 w-5 text-gold" />
                    <StarIcon className="h-5 w-5 text-gold" />
                    <StarIcon className="h-5 w-5 text-gold" />
                    <StarIcon className="h-5 w-5 text-gold" />
                  </div>
                </div>
              </div>
            </div>

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
                  Flexible
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
                  Learning path
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
                  Community
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
            <Image
              src="/assets/banner/hero.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>

        </div>
      </div>
      <Marquee className="mx-auto font-bold text-red-500 max-w-7xl pt-20 md:pt-10 text-xl pb-6 sm:pb-24 px-6">
        Hurry! Limited-time offer: 50% off on buying all courses! Scroll Down to Courses Section."
      </Marquee>
    </div>
  );
};

export default Banner;
