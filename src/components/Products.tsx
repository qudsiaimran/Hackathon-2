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
    title: "Polo with Contrast Trims",
    id: 1,
    price: "$212",
    img_url: "/Frame 32 (1).png",
    old_price: "$242",
  },
  {
    title: "Gradient Graphic T-shirt",
    id: 2,
    price: "$145",
    img_url: "/Frame 33 (2).png",
  },
  {
    title: "Polo with Tipping Details",
    id: 3,
    price: "$180",
    img_url: "/Frame 34 (2).png",
  },
  {
    title: "Black Striped T-shirt",
    id: 4,
    price: "$120",
    img_url: "/Frame 38 (2).png",
    old_price: "$150",
  },
];
let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
export default function 



() {
  return (
    <div className="w-full h-full sm:h-[500px] md:mt-28">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
      YOU MIGHT ALSO LIKE
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
    </div>
  );
}
