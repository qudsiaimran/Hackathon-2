
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  
}

let Product: Iproducts[] = [
  {
    title: "Gradient Graphic T-shirt",
    id: 1,
    price: "$212",
    img_url: "/Frame 33 (2).png",
    
  },
  {
    title: "Polo with Tipping Details",
    id: 1,
    price: "$180",
    img_url: "/Frame 34 (2).png",
   
  },
  {
    title: "Black Striped T-shirt",
    id: 1,
    price: "$120",
    img_url: "/Frame 38 (2).png",
    
  },
  {
    title: "SKINNY FIT JEANS",
    id: 1,
    price: "$240",
    img_url: "/Frame 33.png",
    
  },
  {
    title: "CHECKERED SHIRT",
    id: 1,
    price: "$180",
    img_url: "/Frame 34.png",
  
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 1,
    price: "$130",
    img_url: "/Frame 38.png",
   
  },
  {
    title: "VERTICAL STRIPED SHIRT",
    id: 1,
    price: "$212",
    img_url: "/Frame 32.png",
   
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 1,
    price: "$145",
    img_url: "/Frame 33 (1).png",
   
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 1,
    price: "$80",
    img_url: "/Frame 34 (1).png",
   
  },
];
let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
export default function Shirts() {
  
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
     
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10 gap-8">
        {Product.map((data) => {
          return (
            <div>
              <Link href={`/products-details/${data.id}`}>
                <div className="w-[230px] h-[250px] bg-white rounded-[20px]">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    className="w-full h-full rounded-[20px]"
                    width={2000}
                    height={2000}
                  ></Image>
                </div>
              </Link>
              <div>
                <p className="text-lg mt-2 font-bold">{data.title}</p>
                <p className="flex text-yellow-400">{star}</p>
                <p className="font-bold mt-1">
                  {data.price}
                  <span className="text-gray-400 font-bold line-through">
                    {data.old_price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}
