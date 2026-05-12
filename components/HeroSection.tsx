"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Wallet, Flame } from "lucide-react";

const STATS = [
  { icon: Monitor, value: "3회차", label: "온라인 강의" },
  { icon: Users, value: "소그룹", label: "밀착 실습" },
  { icon: Wallet, value: "19만원", label: "전체 수강료" },
];

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg.png"
          alt="hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-slate-900/95" />
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
        {/* 한정 뱃지 */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <Flame className="w-4 h-4 fill-orange-400 text-orange-400" />
            2025년 6월 한정 오픈 — 소수 정원
          </div>
        </div>

        {/* 부제 */}
        <p className="text-blue-300 font-semibold text-base sm:text-lg tracking-widest uppercase mb-3">
          Claude Code · Harness Engineering
        </p>

        {/* 메인 제목 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          AI로 생산성을{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            10배
          </span>{" "}
          높이는<br className="hidden sm:block" />
          실전 하네스 마스터 코스
        </h1>

        {/* 설명 */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Claude Code의 Skill, Agent, Loop를 조합한 하네스 엔지니어링으로<br className="hidden sm:block" />
          반복 작업을 자동화하고 기획 문서를 AI로 완성하세요
        </p>

        {/* 날짜 정보 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {["5/31(일)", "6/7(일)", "6/14(일)"].map((date, i) => (
            <div key={date} className="flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <span className="text-blue-300 text-xs font-bold">{i + 1}회차</span>
              <span className="text-white/70 text-xs">|</span>
              <span className="text-white text-xs font-medium">{date}</span>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/payment">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-13 text-base w-full sm:w-auto transition-all duration-200 hover:scale-105"
            >
              지금 수강 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <button
            onClick={() => handleScrollTo("curriculum")}
            className="border border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 h-12 text-base w-full sm:w-auto backdrop-blur-sm rounded-md transition-all duration-200"
          >
            커리큘럼 보기
          </button>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-4 border border-white/10"
            >
              <Icon className="w-5 h-5 text-blue-200" />
              <span className="text-white font-bold text-base">{value}</span>
              <span className="text-white/60 text-xs text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
