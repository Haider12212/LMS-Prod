import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'


const Register = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);

    // Simulate a registration process with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay of 2 seconds

    // After registration is complete, you can navigate or perform other actions
    router.push('/register');

    setIsLoading(false);
  };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                {isLoading && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        {/* You can use any loading spinner or animation here */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )}

    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
      <div className="hidden lg:block">
        <button
          className="text-Blueviolet border-2 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-[#666AA9]"
          onClick={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register Now'}
        </button>
      </div>
    </div>
            </div>
            
        </>
    )
}

export default Register;
