import Image from "next/image";
export default function Dress() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full h-full sm:h-[750px] mt-16 bg-[#F0F0F0] flex flex-col justify-start items-center pt-9 ">
      <div className="mt-2">
        <h1 className="text-3xl font-extrabold pl-6 sm:pl-0">
          BROWSE BY DRESS STYLE
        </h1>
      </div>
      {/* bottom div */}
      <div className="w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
        <div className="w-[490px] h-[290px] m-1 relative">
        <Image
            src={"/Frame 61.png"}
            className="w-full h-full rounded-[20px]"
            width={2000}
            height={2000}
            alt="dress"
          ></Image>
        </div>
        <div className="w-[690px] h-[290px] m-1 relative">
          <Image
            src={"/Frame 62.png"}
            className="w-full h-full rounded-[20px]"
            width={2000}
            height={2000}
            alt="dress"
          ></Image>
        </div>
        <div className="w-[690px] h-[290px] m-1 relative">
          <Image
            src={"/Frame 64.png"}
            className="w-full h-full rounded-[20px]"
            width={2000}
            height={2000}
            alt="dress"
          ></Image>
        </div>
        <div className="w-[490px] h-[290px] m-1 relative">
          <Image
            src={"/Frame 63.png"}
            className="w-full h-full rounded-[20px]"
            width={2000}
            height={2000}
            alt="dress"
          ></Image>
          
        </div>
      </div>
    </div>
  );
}
