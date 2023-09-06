"use client"
import React,{useState} from "react";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate a registration process with a delay
    new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay of 2 seconds

    // After registration is complete, you can navigate or perform other actions
    router.push('/register');

    setIsLoading(false);
  }
  return (

    <section className="mx-auto max-w-7xl bg-gray-100 py-16" id="aboutus">

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-semibold mb-4 text-center">Want to know more about us?</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <Image src="/assets/about/help.png" width={500} height={500} alt="Help" className="rounded-full mx-auto" />
        <p className="text-gray-600 mb-4 text-lg sm:text-2xl">
          We are providing the best courses in cheapest price possible in Pakistan. No one can beat us in term of quality and price. Industry level mentors guide you to the level of expertise you want to achieve.
        </p>
        <div className="flex justify-center space-x-3 mb-6">
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
        <button className="text-Blueviolet border-2 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-md bg-semiblueviolet hover:text-white hover:bg-[#666AA9] "
        onClick={handleClick}
        disabled={isLoading}
        >
          Learn More
        </button>
        <div className="mt-6">
          <h3 className="text-xl sm:text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-600">
            Email: lutrainingpvtltd@gmail.com
          </p>
          <p className="text-gray-600">
            Phone: +923457031753
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
