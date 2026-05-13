const STATS = [
  {
    value: "100%",
    label: "작업 성공률",
    sub: "Vercel d0 — 하네스 도입 후\n(도입 전 80%)",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/30",
  },
  {
    value: "3.5×",
    label: "실행 속도 향상",
    sub: "274.8초 → 77.4초\n(Vercel d0 실측)",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/30",
  },
  {
    value: "100만+",
    label: "줄의 코드 생성",
    sub: "OpenAI Codex\n3인 × 5개월",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800/30",
  },
  {
    value: "10×",
    label: "토큰 비용 절감",
    sub: "$3.00 → $0.30/MTok\n(하네스 최적화)",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800/30",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 제목 */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Real Data · 실증 수치
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            하네스 엔지니어링, 숫자로 증명됩니다
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Vercel · OpenAI · Anthropic 등 세계 최고 AI 팀들이 하네스로 얻은 실제 결과
          </p>
        </div>

        {/* 수치 카드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map(({ value, label, sub, color, bg, border }) => (
            <div key={label} className={`rounded-2xl border ${border} ${bg} p-6 text-center`}>
              <p className={`text-4xl sm:text-5xl font-black mb-2 ${color}`}>{value}</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">{label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre-line">{sub}</p>
            </div>
          ))}
        </div>

        {/* 핵심 인용 2개 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
            <p className="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed mb-3">
              "같은 모델을 써도 어떤 팀은 안정적으로 결과를 내고,<br />
              어떤 팀은 계속 같은 실수에 막힌다.<br />
              <span className="font-bold text-blue-600 dark:text-blue-400">차이는 하네스에서 난다.</span>"
            </p>
            <p className="text-xs text-slate-400">— 하네스 엔지니어링 백과사전</p>
          </div>
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
            <p className="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base leading-relaxed mb-3">
              "Vercel은 도구의 80%를 없애자 더 빨라졌고,<br />
              OpenAI는 100만 줄을 사람이 아닌 AI가 썼다.<br />
              <span className="font-bold text-blue-600 dark:text-blue-400">모델은 약간만, 하네스는 촘촘히.</span>"
            </p>
            <p className="text-xs text-slate-400">— 하네스 엔지니어링 백과사전 제13장</p>
          </div>
        </div>

      </div>
    </section>
  );
}
