 import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />,];

  return (
    <div className="px-4 pt-7 mb-11">
      <div className=" mt-10">
        <h1 className="text-black text-3xl font-extrabold tracking-wider">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-xl w-full max-w-xs md:max-w-md p-6">
            <div className="flex justify-center text-yellow-500 space-x-2 mt-4">
              {star}
            </div>
            <h1 className="font-extrabold text-2xl pt-4 text-center">Sarah M.</h1>
            <p className="pt-4 text-sm text-center">
              "I'm blown away by the quality and style clothes I received from
              Shop.co. From casual wear to elegant dresses, every piece I've
              bought has exceeded my expectations."
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-300 rounded-xl w-full max-w-xs md:max-w-md p-6">
            <div className="flex justify-center text-yellow-500 space-x-2">
              {star}
            </div>
            <h1 className="font-extrabold text-2xl pt-4 text-center ">Alex K.</h1>
            <p className="pt-4 text-sm text-center">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions."
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-300 rounded-xl w-full max-w-xs md:max-w-md p-6">
            <div className="flex justify-center text-yellow-500 space-x-2">
              {star}
            </div>
            <h1 className="font-extrabold text-2xl pt-4 text-center  ">James L.</h1>
            <p className="pt-4 text-sm text-center">
              "As someone who's always on the lookout for unique fashion
              pieces, I'm thrilled to have stumbled upon Shop.co. The selection
              of clothes is not only diverse but also on-point with the latest
              trends."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
