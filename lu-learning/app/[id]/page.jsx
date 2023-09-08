"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import courseData from "../datasets/courseData.js";
import { useRouter, useParams } from "next/navigation";
import Modal from 'react-modal';

export async function generateMetadata({ params }) {
  const { id } = params;
  const course = courseData.find((item) => item.li === id);
  return {
    title: course.heading,
    description: course.desc,
    image: course.banner,
  };
}

const page = () => {
  const [loading, setLoading] = useState(false);
  const Params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { id } = Params;

  let course;
  const router = useRouter();
  if (router.isFallback) {
    <h1>Data is loading</h1>;
  }

  const handleEnroll = () => {
    setLoading(true);
    router.push("/register");
    new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay of 2 seconds

    // After enrollment is complete, you can navigate or perform other actions
    router.push("/register");

    setLoading(false);
  };

  courseData.map((item) => {
    if (item.li === id) {
      course = item;
    }
  });

  if (!course) {
    return (
      <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
        <div>404</div>
      </div>
    );
  }
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>

          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      <div className="mx-auto max-w-[90rem] sm:py-8 px-4 lg:px-8 ">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div onClick={openModal} className="cursor-pointer">
              <Image
                className="h-full w-full object-cover"
                width={500}
                height={500}
                src={course.banner}
                alt="Course"
              />
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-xl font-bold text-indigo-500">
              {course.heading}
            </div>
            <div className="h-50">
              <p className="mt-2 text-gray-500">{course.desc}</p>
              <p className="mt-2 text-gray-500">{course.desc2}</p>
            </div>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <FaStar className="inline-block mr-1 text-yellow-500" />
                {course.rating}
              </span>
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                {course.originalPrice ? (
                  <>
                    <div className="text-xl font-semibold text-gray-500 line-through mr-2">
                      Rs.{course.originalPrice}
                    </div>
                    <div className="text-5xl text-red-500 font-semibold">
                      Rs.{course.price}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xl font-semibold text-gray-500 line-through mr-2">
                      Rs.1500
                    </div>
                    <div className="text-5xl text-red-500 font-semibold">
                      Rs.1000
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleEnroll}
                className="px-10 py-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                Enroll Now
              </button>

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
                    Recorded And Live Lectures
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
                    Professional Guidance
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
                    Certificates
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <div className="flex items-center justify-start">
                  <div className="rounded-full overflow-hidden border-2 border-indigo-500">
                    <Image
                      src={course.mentorImg}
                      alt="Mentor"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold text-black">
                      {course.mentorName}
                    </p>
                    <p className="text-gray-600">{course.mentorDescription}</p>
                  </div>
                </div>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Course Banner"
                  ariaHideApp={false}
                  className="modal-content"
                  overlayClassName="modal-overlay"
                  portalClassName="modal-portal"
                >
                  {/* Close button */}
                  <button className="modal-close text-white" onClick={closeModal}>
                    &times;
                  </button>

                  {/* Image */}
                  <Image
                    className="h-full w-full object-contain"
                    height={1000}
                    width={1000}
                    src={course.banner}
                    alt="Course"
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default page;
