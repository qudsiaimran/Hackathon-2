import { AccordionDemo } from "@/components/Accordion"
import { CheckboxDemo } from "@/components/Checkbox"
import { Dressstyle } from "@/components/Dressstyle"
import Shirts from "@/components/Shirts"
import Size from "@/components/Size"
import { SliderDemo } from "@/components/Slider"
export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
            
             {/* left */}
            <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
            <AccordionDemo/>
            <SliderDemo/>
            <CheckboxDemo/>
          <Size/>
          <Dressstyle/>

            </div>
            {/* right */}
            <div className="w-full md:w-[900px] h-full sm:h-[1200px]">
<Shirts/>

            </div> 
        </main>
    )
}