import React from "react";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-black text-white flex justify-center  items-center relative gap-2 h-[50px] pt-3 pb-3 w-full">
      <div className="font-normal text-white  flex justify-center  items-center ">
       <h3 className="text-white text-xs sm:text-sm"> Sign up and get 20  off to your first order. </h3>
  
      <button className="text-white underline text-xs sm:text-sm ml-3">Sign up now</button>
      </div>
      < RxCross2 className=" text-white absolute right-[50px] hidden sm:block"/>  
      </main>
  );
};

export default Header;