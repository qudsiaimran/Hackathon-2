
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
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/image 1.png",
  
  },
  {
    title: "SKINNY FIT JEANS",
    id: 1,
    price: "$240",
    img_url: "/Frame 33.png",
    old_price: "$260",
   
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
    old_price: "$160",
   
  },
];
let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
export default function Products() {
  
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {Product.map((data) => {
          return (
            <div>
              <Link href={`/products-details/${data.id}`}>
                <div className="w-[300px] h-[290px] bg-white rounded-[20px]">
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
      <div className="bg-white text-center py-5 border-b-2 border-gray-400 pt-8">
          <button className="bg-white text-black border  py-2 px-6  h-14 w-44 rounded-full">
            View All
          </button>
        </div>
    </div>
  );
}
