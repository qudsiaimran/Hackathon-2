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
    title: "VERTICAL STRIPED SHIRT",
    id: 1,
    price: "$212",
    img_url: "/Frame 32.png",
    old_price: "$232",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 2,
    price: "$240",
    img_url: "/Frame 33 (1).png",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 3,
    price: "$210",
    img_url: "/Frame 34 (1).png",
  },
  {
    title: "FADED SKINNY JEANS",
    id: 4,
    price: "$130",
    img_url: "/Frame 38 (1).png",
  },
];
let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
export default function Top_sell() {
  return (
    <div className="w-full h-full sm:h-[500px] md:mt-28">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        TOP SELLING
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {Product.map((data) => {
          return (
            <div key={data.id}>
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
      <div className="bg-white text-center pt-5 ">
          <button className="bg-white text-black border  py-2 px-6  h-14 w-44 rounded-full">
            View All
          </button>
    </div>
    </div>
  );
}
