import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (
    <div>
      <section className="dark:bg-darkBg border-border dark:border-darkBorder border-b-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>Q: What does NeoAutomate do?</AccordionTrigger>
              <AccordionContent>
                A: NeoAutomate specialises in business process automation, helping companies streamline operations, reduce manual tasks, and improve efficiency with automation solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>Q: How can automation help my business?</AccordionTrigger>
              <AccordionContent>
                A: Automation can reduce manual work, improve accuracy, speed up processes, and free up your team to focus on higher-value tasks. It also helps ensure compliance with industry regulations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>Q: Do you provide custom automation solutions?</AccordionTrigger>
              <AccordionContent>
                A: Yes, we design and implement tailored automation solutions based on your business needs, whether it’s workflow automation, CRM integration, or AI-driven process optimisation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-4">
              <AccordionTrigger>Q: How do I get started?</AccordionTrigger>
              <AccordionContent>
                A: Simply reach out via our contact form or book a consultation. We’ll discuss your needs and identify the best automation strategy for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-5">
              <AccordionTrigger>Q: What are your pricing options?</AccordionTrigger>
              <AccordionContent>
                A: Pricing varies based on the scope and complexity of the project. We offer flexible engagement models, including fixed-price projects, retainer-based consulting, and day-rate services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
