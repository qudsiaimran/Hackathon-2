import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto w-full h-full md:h-[470px] flex flex-col md:flex-row  justify-between items-start bg-[#F2F0F1]">
        <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
          <h1 className="text-2xl md:text-5xl mt-5 font-extrabold text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm md:mt-6">
            {" "}
            Browse through our diverse range of meticulsously crafted garments,
            dsigned to bring out your individuality and cater to your sense of
            style
          </p>
          <button className="bg-black py-2 px-8  text-white mt-10 text-sm rounded-[16px] hover:bg-gray-400">
            Shop now
          </button>
        </div>
        <div className="relative">
          <Image
            src={"/Rectangle 2.png"}
            className=" mr-4"
            width={1000}
            height={900}
            alt="profile"
          ></Image>
          <Image
            src={"/Vector (1).png"}
            className="w-[50px] md:w-[100px] absolute top-[100px] left-40 md:top-[300px] md:left[-100px]"
            width={75}
            height={75}
            alt="profile"
          ></Image>
          <Image
            src={"/Vector.png"}
            className="w-[60px] md:w-[100px] absolute top-1 right-[10px] md:top-[50px] md:right[10px]"
            width={75}
            height={75}
            alt="profile"
          ></Image>
        </div>
      </main>
      </div>
  );
};

export default Hero;
