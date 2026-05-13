import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Layers } from "lucide-react";

const BOOKS = [
  {
    title: "하네스 엔지니어링 백과사전",
    desc: "15장 본문 + 11개 부록 · 조회수 7만+",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-300",
  },
  {
    title: "요즘 바이브 코딩 v0 + 커서 입문\nPRD 기획·개발·배포, 일주일 완성",
    desc: "v0 · Cursor 실전 입문서",
    color: "bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30 text-purple-700 dark:text-purple-300",
  },
];

const ROLES = [
  { icon: Layers, label: "하네스 엔지니어링 백과사전 저자" },
  { icon: BookOpen, label: "멀티캠퍼스 강사" },
  { icon: Users, label: "페이스북 바이브코딩 커뮤니티 운영" },
];

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

        {/* 강사 카드 */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start">

              {/* 프로필 이미지 */}
              <div className="flex-shrink-0">
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/40">
                  <Image src="/images/anthony_profile.png" alt="Anthony 강사" fill className="object-cover" />
                </div>
              </div>

              {/* 프로필 내용 */}
              <div className="flex-1 text-center sm:text-left">

                {/* 이름 & 역할 뱃지 */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Anthony</h3>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    Main 강사
                  </Badge>
                </div>

                {/* 역할 목록 */}
                <div className="flex flex-col gap-1.5 mb-5">
                  {ROLES.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center justify-center sm:justify-start gap-2">
                      <Icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</span>
                    </div>
                  ))}
                </div>

                {/* 소개 문구 */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  20년 이상 풀스택 개발자로 일해 왔으며, AI 에이전트 길드 운영진으로 활동하며
                  AI 에이전트와 개발 방식의 변화를 관찰·정리해 왔습니다.
                  하네스 엔지니어링을 누구나 자신의 업무에 연결해 배울 수 있도록
                  일상 비유와 실전 사례로 풀어낸 백과사전을 집필했으며,
                  출판 이후 7만 조회수를 기록하며 큰 관심을 받았습니다.
                </p>

                {/* 저서 */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">저서</p>
                  <div className="flex flex-col gap-2">
                    {BOOKS.map(({ title, desc, color }) => (
                      <div key={title} className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${color}`}>
                        <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold whitespace-pre-line leading-snug">{title}</p>
                          <p className="text-xs opacity-70 mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {["#풀스택개발", "#하네스엔지니어링", "#바이브코딩", "#AI에이전트", "#멀티캠퍼스"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-full font-medium">
                      {tag}
                    </span>
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
