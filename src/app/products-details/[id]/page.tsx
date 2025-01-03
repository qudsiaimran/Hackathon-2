"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/Reviews";
import Products from "@/components/Products"


let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  description: string;
}

let Product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$212",
    img_url: "/Frame 33.png",
    img1: "/Frame 32.png",
    img2: "/Frame 32.png",
    img3: "/Frame 32.png",
    img4: "/Frame 32.png",
    name: "VERTICAL STRIPPED SHIRT",
    description:"Elevate your wardrobe with our Vertical Striped Shirt, blending classic design with modern elegance.",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/Frame 33.png",
    // old_price: "$260",
    img1: "/Frame 33 (1).png",
    img2: "/Frame 33 (1).png",
    img3: "/Frame 33 (1).png",
    img4: "/Frame 33 (1).png",
    name: "COURAGE GRAPHIC T-SHIRT", 
    description:"Show your bold side with the Courage Graphic T-Shirt, featuring a powerful design that inspires confidence."


  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$210",
    img_url: "/Frame 34.png",
    img1: "/Frame 34 (1).png",
    img2: "/Frame 34 (1).png",
    img3: "/Frame 34 (1).png",
    img4: "/Frame 34 (1).png",
    name: "LOOSE FIT BERMUDA SHORTS", 
    description: "Stay cool and relaxed with our Loose Fit Bermuda Shorts, designed for ultimate comfort and style."


  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/Frame 38.png",
    // old_price: "$160",
    img1: "/Frame 38 (1).png",
    img2: "/Frame 38 (1).png",
    img3: "/Frame 38 (1).png",
    img4: "/Frame 38 (1).png",
    name: "FADED SKINNY JEANS", 
    description: "Add an edgy vibe to your look with our Faded Skinny Jeans, combining a sleek fit with a trendy worn-in finish."


  },
];
export default function Pro_Detail() {
  const params = useParams();
  const id = params.id;
  const item = Product.find((item) => item.id === Number(id));
  if (!item) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
    <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
      {/* Left Column: Thumbnails */}
      <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
        <Image
          src={item.img1}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px]"
          alt="productdetail"
          width={2000}
          height={2000}
        />
        <Image
          src={item.img2}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
          alt="productdetail"
          width={2000}
          height={2000}
        />
        <Image
          src={item.img3}
          className="w-[100px] sm:w-full h-[100] sm:h-[150px] sm:mt-3"
          alt="productdetail"
          width={2000}
          height={2000}
        />
      </div>

      {/* Middle Column: Main Image */}
      <div className="w-[90%] order-1 sm:order-2 sm:w-[444px] h-[500px]">
        <Image
          src={item.img4}
          className="w-full h-[95%]"
          alt="productdetail"
          width={1000}
          height={2000}
        />
      </div>

      {/* Right Column: Product Details */}
      <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          {item.name} {/* Dynamic product name */}
        </h1>

        <div className="flex text-yellow-500">{star}</div>
        <p className="font-bold mt-1">
          {item.price}
          {item.old_price && <span className="line-through ml-2">{item.old_price}</span>} {/* Conditional old price */}
        </p>
        <p>
          {item.description}
        </p>

        {/* Additional Div */}
        <div className="mt-5">
          <p className="text-gray-500">Select Color</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-1 mt-2">
            <button>
              <div className="mr-1 hover:bg-black pt-4 w-[80px] h-[50px] text-gray-400 bg-gray-200 justify-center items-center rounded-[62px]">
                Small
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                Medium
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[80px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                Large
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                X-Large
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-start items-center mt-7 space-x-4">
          <div className="w-[90px] h-[40px] flex justify-between items-center p-3 rounded-[62px] bg-gray-200 text-gray-500">
            <Minus />
            1
            <Plus />
          </div>
          <Button className="bg-black text-white w-[300px] rounded-full">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
    <Reviews/>
    <Products/>
    </>
  );
}

