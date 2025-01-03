import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { SheetSide } from "./sheet";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto w-full h-[60px] flex justify-between items-center">
      <div className="flex justify-center items-center">
        <SheetSide />
        <h1 className="text-xl sm:text-3xl font-extrabold pl-2">SHOP.CO</h1>
      </div>
      <ul className="hidden md:block">
        <li className="space-x-5">
          <Link href={"shop"}>Shop </Link>
          <Link href={"sale"}>On sale</Link>
          <Link href={"/products"}>New Arrivals</Link>
          <Link href={"brands"}>Brands</Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <div className="flex justify-start items-center rounded-full bg-gray-100 w-[330px] h-[40px]">
          <IoSearchOutline className="text-xl ml-2" />
          <input
            placeholder="search for products....."
            className=" bg-gray-100 rounded-full h-full w-full ml-2"
          ></input>
        </div>
      </div>
      <div className="flex items-center mr-7 space-x-5">
        <IoSearchOutline className="text-xl ml-2 md:hidden " />
        <Link href={"/Cart"}><LuShoppingCart className="text-2xl" /></Link>
        <CgProfile className="text-2xl" />
      </div>
    </header>
  );
};

export default Navbar;
