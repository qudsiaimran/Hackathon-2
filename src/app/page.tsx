'use client';
import React from 'react'

import Hero from '@/components/Hero';
import Fonts from "@/components/Fonts";
import Products from "@/app/products-details/page";
import Top_sell from "@/app/products-details/sell";
import Dress from "@/components/Dress"
import Rating from "@/components/Rating";
import Casual from './Casual/page';


const page = () => {
  return (
    <div>
   <div>
      <main>
       <Hero />
       <Fonts />
      <Products />
      <Top_sell />
      <Dress/>
      <Rating/>
      {/* <Casual/> */}
      </main>
    </div>
    </div>
  )
}

export default page
