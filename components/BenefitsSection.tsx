import { Badge } from "@/components/ui/badge";
import { Code2, BookOpen, FlaskConical, FileSpreadsheet, Gift } from "lucide-react";

const BENEFITS = [
  {
    icon: Code2,
    title: "수업에 사용된 스킬 & 에이전트 전체 제공",
    description:
      "강의에서 직접 시연한 Claude Code Skill 파일과 Agent 정의 파일을 그대로 받으실 수 있습니다. 수업 후 바로 본인 프로젝트에 복사해 적용하세요.",
    tags: ["Skill 파일", "Agent 정의", "CLAUDE.md 예시"],
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/30",
  },
  {
    icon: BookOpen,
    title: "하네스 엔지니어링 백과사전 전자책 제공",
    description:
      "강의의 이론적 토대가 되는 『하네스 엔지니어링 백과사전』 전자책(PDF)을 제공합니다. 15장 본문 + 11개 부록, 총 12,000줄 이상의 실전 지식을 담고 있습니다.",
    tags: ["15장 본문", "11개 부록", "PDF 제공"],
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/30",
  },
  {
    icon: FlaskConical,
    title: "실습 키트 (Practice Kit) 제공",
    description:
      "실습 키트를 제공합니다. 도메인별 하네스 설계 템플릿, 단계별 실습 시나리오, 결과 검증 체크리스트가 포함되어 있습니다.",
    tags: ["실습 시나리오", "하네스 템플릿", "검증 체크리스트"],
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800/30",
  },
  {
    icon: FileSpreadsheet,
    title: "워크시트 & 설계 카드 제공",
    description:
      "워크시트와 하네스 설계 카드를 제공합니다. 강의 중 직접 채우며 본인만의 하네스를 설계하고, 이후 반복 업무에 그대로 활용하실 수 있습니다.",
    tags: ["워크시트", "하네스 설계 카드", "성숙도 체크리스트"],
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800/30",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 mb-4 px-3 py-1">
            수강 특전
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Gift className="w-8 h-8 text-amber-500" />
            수강생 전원 제공
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            강의 수강만으로 끝나지 않습니다. 바로 실무에 적용할 수 있는 자료 일체를 드립니다.
          </p>
        </div>

        {/* 특전 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {BENEFITS.map(({ icon: Icon, title, description, tags, color, bg, border }) => (
            <div
              key={title}
              className={`rounded-2xl border ${border} bg-white dark:bg-slate-900 p-6 flex flex-col gap-4 hover:-translate-y-0.5 transition-transform duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pl-0 sm:pl-15">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border ${border} ${bg} ${color} font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 강조 문구 */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-300 px-5 py-3 rounded-full text-sm font-medium">
            <Gift className="w-4 h-4" />
            모든 특전은 수강 신청 확인 후 강의 당일 또는 종료 후 순차 제공됩니다
          </div>
        </div>

      </div>
    </section>
  );
}
