import { CheckCircle, Rocket, RefreshCw, FileText, TrendingUp } from "lucide-react";

const TARGET_CARDS = [
  {
    icon: Rocket,
    title: "Claude Code를 처음 시작하는 분",
    description: "설치부터 기본 활용까지 단계별로 안내합니다. 처음이어도 전혀 걱정 없습니다.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/30",
    num: "01",
  },
  {
    icon: RefreshCw,
    title: "반복 작업을 자동화하고 싶은 1인 개발자",
    description: "Skill, Agent, Loop 개념으로 반복 작업을 자동화하여 개발 생산성을 극대화하세요.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/30",
    num: "02",
  },
  {
    icon: FileText,
    title: "AI로 기획문서 작성을 자동화하고 싶은 분",
    description: "뉴스레터, 사업계획서 등 기획 문서를 AI Harness로 빠르게 초안을 작성하세요.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800/30",
    num: "03",
  },
];

const BEFORE_AFTER = [
  { before: "매번 같은 프롬프트를 반복 작성", after: "Skill로 한 번에 자동 실행" },
  { before: "에이전트 개념이 어렵고 막막함", after: "Agent 구조를 실전 예제로 이해" },
  { before: "기획 문서에 몇 시간씩 소요", after: "Harness로 초안 3개를 10분 안에" },
  { before: "혼자 공부하다 포기하게 됨", after: "소그룹 Tech 리더와 함께 해결" },
];

const FEATURES = [
  { text: "개념 → 사례 → 실습 3단계 구성", highlight: true },
  { text: "소그룹 Tech 리더와 1:1 밀착 가이드", highlight: true },
  { text: "실전 프로젝트 기반 커리큘럼", highlight: false },
  { text: "게스트 강사의 실제 사례 공유", highlight: false },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            이런 분들께 추천합니다
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Claude Code와 Harness 엔지니어링으로 더 스마트하게 일하고 싶은 모든 분
          </p>
        </div>

        {/* 대상 카드 — Card 대신 div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TARGET_CARDS.map(({ icon: Icon, title, description, color, bg, border, num }) => (
            <div
              key={title}
              className={`rounded-2xl border ${border} bg-white dark:bg-slate-800 p-6 hover:-translate-y-1 transition-transform duration-300 cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <span className="text-3xl font-black text-slate-100 dark:text-slate-700 select-none">
                  {num}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base leading-snug">
                {title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              수강 전 vs 수강 후
            </div>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {BEFORE_AFTER.map(({ before, after }) => (
              <div key={before} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 text-right">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{before}</span>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex-shrink-0">
                  →
                </div>
                <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/40 px-4 py-3">
                  <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">{after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 강의 특징 */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            강의 특징
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map(({ text, highlight }) => (
              <div
                key={text}
                className={`flex items-center gap-3 rounded-xl px-5 py-4 border transition-colors ${
                  highlight
                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30"
                    : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700"
                }`}
              >
                <CheckCircle className={`w-5 h-5 flex-shrink-0 ${highlight ? "text-blue-500" : "text-slate-400"}`} />
                <span className={`text-sm font-medium ${highlight ? "text-blue-700 dark:text-blue-300" : "text-slate-700 dark:text-slate-200"}`}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
