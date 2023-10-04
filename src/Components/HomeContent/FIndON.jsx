
import React from 'react'
import { FaFacebookF , FaTwitter ,FaInstagram } from "react-icons/fa";
const FindON = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-xl mb-4 font-semibold'>Find Us On</h1>
            <div className='p-3'>
                <div className='flex px-5 py-2 gap-4 items-center border rounded-t-md'>
                    <FaFacebookF className='text-blue-700 w-8 h-8 p-2 rounded-full text-lg bg-gray-200' />
                    <p className='text-gray-500 text-lg'>Facebook</p>
                </div>
                <div className='flex px-5 py-2 gap-4 items-center border-l border-r '>
                    <FaTwitter className='text-cyan-600 w-8 h-8 p-2 rounded-full text-lg bg-gray-200' />
                    <p className='text-gray-500 text-lg'>Twitter</p>
                </div>
                <div className='flex px-5 py-2 gap-4 items-center border rounded-b-md'>
                    <FaInstagram className='text-rose-500 w-8 h-8 p-2 rounded-full text-lg bg-gray-200' />
                    <p className=' text-gray-500 text-lg'>Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default FindON