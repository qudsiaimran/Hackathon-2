import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Filter } from "lucide-react"
  
  export function AccordionDemo() {
    return (
      <div className="p-5">
        <div className="flex justify-between items-center">
        <h1 className="font-bold">Filters</h1>
<Filter/>
        </div>
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-shirts</AccordionTrigger>
          <AccordionContent>
          "Comfortable and stylish T-shirts for every occasion."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
          
"Trendy and comfy shorts for your everyday adventures."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
          "Classic and versatile shirts for every style."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hoodie</AccordionTrigger>
          <AccordionContent>
           
"Cozy and stylish hoodies to keep you warm."
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Jeans</AccordionTrigger>
          <AccordionContent>
          
"Durable and trendy jeans for any look."
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  