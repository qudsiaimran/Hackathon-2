
import { FaStar } from "react-icons/fa";
import { Check } from "lucide-react";
const Reviews =[
    {
        name: "Samantha D.",
        review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating:5,
verified: true,  
date:"Posted on August 14, 2023"
    },
      {
        name: "Alex M.",
        review:
          "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
          rating:5,
          verified: true,  
          date:"Posted on August 14, 2023"
        },
      {
        name: "Ethan R.",
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
          rating:5,
          verified: true,  
          date:"Posted on August 14, 2023"
        },
      {
        name: "Olivia P.",
        review:
          "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
          rating:5,
          verified: true,  
          date:"Posted on August 14, 2023"
        },
      {
        name: "Liam K.",
        review:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
          rating:5,
          verified: true,  
          date:"Posted on August 14, 2023"
        },
      {
        name: "Ava H.",
        review:
          "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
          rating:5,
          verified: true,  
          date:"Posted on August 14, 2023"
        },
 ];
 let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />,];
export default function Review(){
    return(
        <main className="max-w-screen-2xl mx-auto">
           <div className="px-5 flex justify-between mt-6">
            <h1 className="font-bold text-2xl"> All Reviews</h1>
           <div className="space-x-3">
           <button className=" bg-gray font-bold text-black border px-6 p-2 rounded-full">Latest</button>
           <button className="bg-black text-white px-6 p-3 text-sm rounded-full">Write a Review</button>
           </div>
           </div>
           {/* container */}
           <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                {
                    Reviews.map((data)=>{
                        return(
                            <div className="border p-5 rounded-[20px]">
                                <p className="flex text-yellow-500">{star}</p>
                            <h2 className="font-bold mt-1 flex text-xl">{data.name} <Check className="bg-green-500 rounded-full text-white"/> </h2>
                            <p className="text-sm">{data.review}</p>
                            <p className="mt-5 text-gray-400">{data.date}</p>
                            </div>
                        )
                    })
                }
            </div>
           </div>
           <div className="bg-white text-center pt-5 ">
          <button className="bg-white text-black border  px-8  h-12 w-44 rounded-full">
          Load More Reviews
          </button>
          </div>
        </main>
    )
}




