import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filter } from "lucide-react";

export function Dressstyle() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Dress Style</h1>
        <Filter />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            "Experience the perfect breeze with our efficient and stylish fans."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            "Designed for performance and elegance, our fans ensure optimal
            airflow and style."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
            "Get the party started with our trendy and vibrant collection!"
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
            "Achieve your fitness goals with our high-quality gym essentials."
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center items-center ">
      <button className="w-[90%] bg-black text-white rounded-full px-3 py-3">Apply Filter</button>
      </div>
    </div>
  );
}
