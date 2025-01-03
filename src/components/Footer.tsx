import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import Offers from '@/components/Offers';

const Footer = () => {
  return (
    <main className='bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto'>
        <span className='absolute top-[-80px]'>
        <Offers/>
      </span>
      <div  className='flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b'>
      {/* top div */}
      <div className='flex flex-col justify-center items-center w-[200px]'>
        <ul>
            <h2 className='text-2xl sm:text-3xl font-extrabold '>SHOP.CO</h2>
         <p className='text-sm mt-1'>We have clothes that suits your style and which you're proud to wear.From woman to men</p>
        
        <div className='flex items-center space-x-3 mt-1'>
            <FaInstagram className='text-xl' />
             <FaFacebook className='text-xl' />
               <FaGithub className='text-xl' />
              <FaTwitter className='text-xl' />
        </div>
        </ul>
      </div>

      {/* mid div */}
      <div className=' w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4'>
        {/* box1 */}
        <ul className='space-y-3 pr-9'>
            <h2 className='text-sm sm:text-2xl font-extrabold pt-4 '>COMPANY</h2>
            <li className='text-sm'>About</li>
            <li className='text-sm'>Feature</li>
            <li className='text-sm'>Work</li>
            <li className='text-sm'>Career</li>
        </ul>
        {/* box2 */}
        <ul className='space-y-3' >
            <h2 className='text-sm sm:text-2xl font-extrabold'>HELP</h2>
            <li className='text-sm'>Customer Support</li>
            <li className='text-sm'>Delivery Details</li>
            <li className='text-sm'>Terms & Conditions</li>
            <li className='text-sm'>Privacy Policy</li>
        </ul>
        {/* box3 */}
        <ul  className='space-y-3'>
            <h2 className='text-sm sm:text-2xl font-extrabold'>FAQ</h2>
            <li className='text-sm'>Account</li>
            <li className='text-sm'>Manage Deliveries</li>
            <li className='text-sm'>Orders</li>
            <li className='text-sm'>Payments</li>
        </ul>
        {/* box4 */}
        <ul  className='space-y-3'>
            <h2 className='text-sm sm:text-2xl font-extrabold'>RESOURCES</h2>
            <li className='text-sm'>Free Books</li>
            <li className='text-sm'>Development Tutorial</li>
            <li className='text-sm'>How to-Blog</li>
            <li className='text-sm'>YouTube Playlist</li>
        </ul>


      </div>
      {/* bottom div */}
     
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center mt-3'>
        <p className='text-sm'> Shop.co © 2000-2023, All Rights Reserved</p>
      </div>
    </main>
  )
}

export default Footer

























