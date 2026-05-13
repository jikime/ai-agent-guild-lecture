"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Wallet } from "lucide-react";

const STATS = [
  { icon: Monitor, value: "3회차", label: "온라인 강의" },
  { icon: Users, value: "소그룹", label: "밀착 실습" },
  { icon: Wallet, value: "19만원", label: "전체 수강료" },
];

const PARADIGM = ["Prompt Engineering", "Context Engineering", "Harness Engineering →"];

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image src="/images/hero_bg.png" alt="hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/92 via-blue-800/88 to-slate-900/96" />
      </div>

      {/* 격자 패턴 */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* 패러다임 진화 흐름 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PARADIGM.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full border ${
                i === 2
                  ? "bg-blue-500/30 border-blue-400/60 text-blue-200 font-bold"
                  : "bg-white/5 border-white/10 text-white/40 line-through"
              }`}>
                {step}
              </span>
              {i < 2 && <span className="text-white/20 text-xs">›</span>}
            </div>
          ))}
        </div>

        {/* 메인 카피 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          AI가 일하는{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            환경
          </span>
          을 설계하는<br className="hidden sm:block" />
          사람이 됩니다
        </h1>

        {/* 핵심 인용 */}
        <p className="text-blue-200/80 text-sm sm:text-base font-medium mb-5 italic">
          "원시 LLM은 운영체제 없는 CPU와 같다 — 하네스가 그 OS다"
        </p>

        {/* 설명 */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Claude Code의 Skill · Agent · Loop를 조합한 하네스 엔지니어링으로<br className="hidden sm:block" />
          반복 작업을 자동화하고 기획 문서를 AI로 완성하세요
        </p>

        {/* 날짜 칩 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { n: "1", label: "하네스 기초 & 툴 설치", date: "5/31(일)" },
            { n: "2", label: "Vibe Coding 실습", date: "6/7(일)" },
            { n: "3", label: "기획문서 자동화", date: "6/14(일)" },
          ].map(({ n, label, date }) => (
            <div key={n} className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <span className="text-blue-300 text-xs font-bold">{n}회차</span>
              <span className="text-white/40 text-xs">|</span>
              <span className="text-white/80 text-xs">{label}</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-white/60 text-xs">{date}</span>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/payment">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-12 text-base w-full sm:w-auto transition-all duration-200 hover:scale-105">
              지금 수강 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <button
            onClick={() => handleScrollTo("curriculum")}
            className="border border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 h-12 text-base w-full sm:w-auto backdrop-blur-sm rounded-md transition-all duration-200"
          >
            커리큘럼 보기
          </button>
        </div>

        {/* 통계 칩 */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4 border border-white/10">
              <Icon className="w-5 h-5 text-blue-200" />
              <span className="text-white font-bold text-base">{value}</span>
              <span className="text-white/50 text-xs text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
