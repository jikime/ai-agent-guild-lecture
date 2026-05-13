import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSE_DATA } from "@/lib/data";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 mb-4 px-3 py-1">
            FAQ
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
            궁금하신 점이 있으시면 아래를 확인해보세요
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion className="flex flex-col gap-3">
          {COURSE_DATA.faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-4 sm:px-5 transition-colors hover:border-blue-200 dark:hover:border-blue-800"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-white hover:no-underline py-5 gap-4">
                <span className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    Q
                  </span>
                  <span className="text-sm sm:text-base">{item.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center text-xs font-bold">
                    A
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
