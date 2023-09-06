import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const RegistrationSuccessfulPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 rounded shadow-lg max-w-7xl w-full mx-4">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center text-green-600">Registration Successful!</h1>
        <Image
          src="/assets/success/success.png"
          alt="Registration Successful"
          className="mx-auto mb-4 sm:mb-6 w-60 sm:w-72 md:w-80 lg:w-96"
          width={500}
          height={500}
        />
        <p className="text-gray-600 mb-4 sm:mb-6 text-center sm:text-left">
          <strong>Thank you for registering!</strong> Your registration is pending. Please proceed with the payment to complete the process.
        </p>
        <div className="mb-4 sm:mb-6">
  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-green-600">Payment Instructions:</h2>
  <p className="text-gray-600">
    To make the payment, you can use either EasyPaisa, JazzCash, or Bank Transfer. Follow the steps below:
  </p>
  <ul className="list-disc pl-6 mt-3 text-gray-600">
    <li>For EasyPaisa, use the number: <strong>+923457031753</strong></li>
    <li>For JazzCash, use the number: <strong>+923457031753</strong></li>
    <li>For Bank Transfer, use the following bank account details:</li>
    <ul className="list-disc pl-6 mt-3 text-gray-600">
      <li>Bank Name: <strong>[Meezan Bank- Kot Addu, Multan]</strong></li>
      <li>Account Name: <strong>[MUHAMMAD HAMZA NAEEM (ASAAN AC)]</strong></li>
      <li>Account Number: <strong>[95010105236209]</strong></li>
      <li>IBAN: <strong>[PK67MEZN0095010105236209]</strong></li>
    </ul>
  </ul>
</div>

        <p className="text-gray-600 text-center sm:text-left">
          Once the payment is successfully made, send the payment screenshot to our <strong>WhatsApp Number (+923457031753)</strong>. Your registration will be fully confirmed. Thank you for choosing our services!
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
        <div className="mt-6">
          <h3 className="text-xl sm:text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-600">
            Email: <strong>lutrainingpvtltd@gmail.com</strong>
          </p>
          <p className="text-gray-600">
            Phone: <strong>+923457031753</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccessfulPage;
