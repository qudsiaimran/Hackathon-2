export default function Size(){
    return(
        <div>
             <div className="mt-4">
          <p className="text-gray-500 text-xl font-bold pl-5">Choose Size</p>
          <div className="flex flex-wrap gap-3 px-5 space-x-1 mt-2">
            <button>
              <div className="mr-1 hover:bg-black pt-4 w-[80px] h-[50px] text-gray-400 bg-gray-200 justify-center items-center rounded-[62px]">
                XX-Small
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
               X-Small
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[80px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
               Small
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
              Medium
              </div>
            </button>
            <button>
              <div className="mr-1 hover:bg-black pt-4 w-[80px] h-[50px] text-gray-400 bg-gray-200 justify-center items-center rounded-[62px]">
                Large
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
               X-Large
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[80px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                XX-Large
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                3X-Large
              </div>
            </button>
            <button>
              <div className="hover:bg-black w-[95px] h-[50px] text-gray-400 bg-gray-200 flex justify-center items-center rounded-[62px]">
                4X-Large
              </div>
            </button>
          </div>
        </div>
        
        </div>
    )
}