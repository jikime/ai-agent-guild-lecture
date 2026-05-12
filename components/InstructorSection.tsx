import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function InstructorSection() {
  return (
    <section id="instructors" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 mb-4 px-3 py-1">
            Instructor
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            강사 소개
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            현업 전문가가 실전 노하우를 직접 전달합니다
          </p>
        </div>

        {/* 강사 카드 — div 기반, 가로 레이아웃 */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            {/* 상단 컬러 바 */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              {/* 프로필 이미지 */}
              <div className="flex-shrink-0">
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/40">
                  <Image
                    src="/images/anthony_profile.png"
                    alt="Anthony 강사"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 프로필 내용 */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Anthony 님
                  </h3>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Main 강사
                  </Badge>
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4">
                  Claude Code Harness Engineering 창시자
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  1인 개발 자동화 전문가로서 Claude Code의 Skill, Agent, Loop 구조를 활용한
                  하네스 엔지니어링을 직접 설계하고 실무에 적용해 왔습니다.
                  이번 강의에서는 반복 작업 자동화부터 기획문서 AI 초안 생성까지,
                  현장에서 검증된 하네스 기법을 단계별로 안내합니다.
                </p>

                {/* 전문 태그 */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
                  {["#ClaudeCode", "#HarnessEngineering", "#1인개발", "#AI자동화", "#Vibe Coding"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 강점 수치 */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "3회차", label: "전체 강의 진행" },
                    { value: "실전", label: "프로젝트 기반" },
                    { value: "소그룹", label: "밀착 지도" },
                  ].map(({ value, label }) => (
                    <div key={label} className="rounded-xl bg-slate-50 dark:bg-slate-800 px-3 py-3 text-center border border-slate-100 dark:border-slate-700">
                      <p className="text-base font-bold text-blue-600 dark:text-blue-400">{value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
