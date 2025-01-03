import React from 'react'
import {MdOutlineEmail} from "react-icons/md"

const Offers = () => {
  return (
    <main className='max-w-screen-2xl mx-auto w-full flex justify-center items-center'>
    <div className='w-[80%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-3 rounded-[20px]'>
      <h1 className='text-2xl sm:text-4xl font-extrabold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <div className='space-y-3'>
      <div className="flex justify-center items-center rounded-full bg-gray-100 sm:w-[330px] h-[40px]">
               <MdOutlineEmail  className="text-xl ml-2 text-black"/>
               <input
                 placeholder="search for products....."
                 className=" bg-gray-100 rounded-full h-full w-full ml-2"
               ></input>
             </div>
             <div className="flex justify-center items-center rounded-full bg-gray-100 sm:w-[330px] h-[40px]">
            <p className='text-black'>  Subscribe to Newsletter</p>
              </div>
      </div>
    </div>
    </main>
  )
}

export default Offers
