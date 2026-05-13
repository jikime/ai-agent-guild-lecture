import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COURSE_DATA } from "@/lib/data";
import { BookOpen, Lightbulb, Wrench, CalendarDays, User } from "lucide-react";

const THEME_STYLES = {
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    border: "border-l-4 border-l-blue-500",
    icon: "text-blue-500",
    headerBg: "bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent",
    dot: "bg-blue-500",
    line: "from-blue-500 to-purple-500",
    iconImg: "/images/curriculum_icon_1.png",
  },
  purple: {
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    border: "border-l-4 border-l-purple-500",
    icon: "text-purple-500",
    headerBg: "bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent",
    dot: "bg-purple-500",
    line: "from-purple-500 to-emerald-500",
    iconImg: "/images/curriculum_icon_1.png",
  },
  green: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    border: "border-l-4 border-l-emerald-500",
    icon: "text-emerald-500",
    headerBg: "bg-gradient-to-r from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent",
    dot: "bg-emerald-500",
    line: "",
    iconImg: "/images/curriculum_icon_3.png",
  },
};

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4 px-3 py-1">
            Curriculum
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            3회차 커리큘럼
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
            개념 → 사례 → 실습 3단계로 완성되는 실전 강의
          </p>
        </div>

        {/* 타임라인 레이아웃 */}
        <div className="relative">
          {/* 타임라인 수직선 (모바일 숨김) */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

          <div className="flex flex-col gap-8">
            {COURSE_DATA.curriculum.map((session, idx) => {
              const styles = THEME_STYLES[session.theme as keyof typeof THEME_STYLES];
              return (
                <div key={session.session} className="md:flex gap-6 items-start">
                  {/* 타임라인 도트 */}
                  <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0 w-16 pt-6">
                    <div className={`w-5 h-5 rounded-full ${styles.dot} ring-4 ring-white dark:ring-slate-950 z-10`} />
                    <span className="text-xs font-bold text-slate-400">{session.date}</span>
                  </div>

                  {/* 카드 — div로 대체 */}
                  <div
                    className={`flex-1 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${styles.border} hover:-translate-y-0.5 transition-transform duration-200`}
                  >
                    {/* 헤더 영역 */}
                    <div className={`px-4 pt-5 pb-4 sm:px-6 ${styles.headerBg}`}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* 회차 아이콘 이미지 */}
                        <div className="flex-shrink-0 w-12 h-12 relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <Image
                            src={styles.iconImg}
                            alt={`${session.session}회차 아이콘`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className={`text-sm px-3 py-0.5 font-semibold ${styles.badge}`}>
                              {session.session}회차
                            </Badge>
                            <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs md:hidden">
                              <CalendarDays className="w-3 h-3" />
                              <span>{session.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs">
                              <User className="w-3 h-3" />
                              <span>{session.instructor}</span>
                            </div>
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                            {session.title}
                          </h3>
                        </div>
                        <span className="text-5xl font-black text-slate-50 dark:text-slate-800 select-none flex-shrink-0 hidden sm:block">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* 본문 영역 */}
                    <div className="px-4 pb-5 sm:px-6">
                      {session.coreQuestion && (
                        <div className="mb-4 px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border-l-2 border-slate-300 dark:border-slate-600">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">핵심 질문</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {session.coreQuestion}
                          </p>
                        </div>
                      )}

                      <Accordion>
                        <AccordionItem value="content" className="border-0">
                          <AccordionTrigger className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:no-underline py-2">
                            세부 내용 보기
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-4 pt-2">
                              {[
                                { label: "A. 개념", icon: Lightbulb, content: session.items.concept },
                                { label: "B. 사례", icon: BookOpen, content: session.items.case },
                                { label: "C. 실습", icon: Wrench, content: session.items.practice },
                              ].map(({ label, icon: Icon, content }) => (
                                <div key={label} className="flex gap-3">
                                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mt-0.5`}>
                                    <Icon className={`w-3.5 h-3.5 ${styles.icon}`} />
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">
                                      {label}
                                    </p>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                      {content}
                                    </p>
                                  </div>
                                </div>
                              ))}

                              {session.guest && (
                                <div className="px-4 py-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30">
                                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                                    🎤 게스트 강사: {session.guest}
                                  </p>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
