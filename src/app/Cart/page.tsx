import { RiDeleteBin6Fill } from "react-icons/ri";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
interface Icart {
  imageurl: string;
  title: string;
  id: number;
  size: string;
  color: string;
  price: string;
}

const cartItem: Icart[] = [
  {
    imageurl: "/Frame 33 (2).png",
    title: "Gradient Graphic T-shirt",
    id: 1,
    size: "Large",
    color: "white",
    price: "$145",
  },
  {
    imageurl: "/Frame 34.png",
    title: "Checkered Shirt",
    id: 1,
    size: "Medium",
    color: "Red",
    price: "$180",
  },
  {
    imageurl: "/Frame 33.png",
    title: "Skinny Fit Jeans",
    id: 1,
    size: "Large",
    color: "Blue",
    price: "$240",
  },
];

export default function Cart() {
  return (
    <>
    <h1 className="font-extrabold text-4xl mt-2 pl-6">YOUR CART</h1>
    <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
      {/* left */}
      <div className="w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px]">
        {cartItem.map((item) => {
          return (
            <div className="flex justify-between mt-4 p-4 border-b">
             <div className="flex gap-3">
             <Image
                src={item.imageurl}
                alt={item.title} className="rounded-[16px]"
                width={100}
                height={100}
              ></Image>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">Size:{item.size}</p>
                <p className="text-sm">Color:{item.color}</p>
                <p className="font-bold">{item.price}</p>
              </div>
             </div>
              {/* right */}

              <div className="flex flex-col justify-between items-center space-y-5">
              <RiDeleteBin6Fill className="text-red-500 text-2xl" />
                <div className="w-[90px] h-[40px] flex justify-between items-center p-3 rounded-[62px] bg-gray-200 text-gray-500">
                  <Minus />
                  1
                  <Plus />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* right */}
      <div className="w-full h-full md:w-[400px] md:h-[450px] p-4 border rounded-[20px] flex flex-col justify-start items-center">
  <div className="w-[90%] space-y-4">
    <h1 className="text-xl font-bold">Order Summary</h1>
    <div className="flex justify-between">
      <p>Subtotal</p>
      <span>$565</span>
    </div>
    <div className="flex justify-between">
      <p>Discount</p>
      <span>-$113</span>
    </div>
    <div className="flex justify-between">
      <p>Delivery Fee</p>
      <span>$15</span>
    </div>
    <div className="flex justify-between font-bold border-t pt-2">
      <p>Total</p>
      <span>$467</span>
    </div>
    <div className="space-y-2">
      <div className="flex items-center">
        <input 
          type="text" 
          className="bg-gray-200 py-2 px-4 rounded-[16px] text-gray-600 outline-none w-full" 
          placeholder="Add promo code" 
        />
        <button className="ml-2 px-4 py-2 bg-black text-white rounded-[16px]">
          Apply
        </button>
      </div>
      <button className="w-full mt-2 py-2 bg-black text-white rounded-[16px]">
        Go To Checkout
      </button>
    </div>
  </div>
</div>

    </div>
    </>
  );
}
