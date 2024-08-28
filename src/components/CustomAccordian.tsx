import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type CustomAccordianProps = {
  id: string;
  title: string;
  details: string;
};

export default function CustomAccordion({
  id,
  title,
  details,
}: CustomAccordianProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={id}>
        <AccordionTrigger className="lg:text-[20px] text-left">
          {title}
        </AccordionTrigger>
        <AccordionContent>{details}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
