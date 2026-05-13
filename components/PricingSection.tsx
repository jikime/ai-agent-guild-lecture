import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield } from "lucide-react";
import { PAYMENT_LINK } from "@/lib/data";

const INCLUDES = [
  "온라인 강의 3회 참여",
  "소그룹 Tech 리더 밀착 지도",
  "실습 자료 제공",
  "강의 녹화본 무제한 제공",
];


export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 mb-4 px-3 py-1">
            Pricing
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            수강료
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
            타 강의 대비 <span className="font-bold text-blue-600 dark:text-blue-400">37% 저렴</span>한 가격으로 동일한 실전 역량을
          </p>
        </div>

        {/* 가격 카드 — div 기반, 그림자 없음 */}
        <div className="max-w-sm mx-auto mb-10">

          {/* 전체 묶음 — 추천 */}
          <div className="relative rounded-2xl border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-slate-900 p-5 sm:p-7 flex flex-col hover:-translate-y-0.5 transition-transform duration-200 overflow-hidden">
            {/* 상단 그라데이션 바 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

            {/* 추천 뱃지 */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              <Star className="w-3 h-3 fill-white" />
              추천
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl">전체 묶음</h3>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs">베스트</Badge>
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">19만원</span>
                <span className="text-slate-400 dark:text-slate-500">/ 3회</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mb-8 flex-1">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href={PAYMENT_LINK}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-12 text-base transition-colors duration-200">
                수강 신청하기
              </Button>
            </Link>
          </div>
        </div>

        {/* 환불 보증 */}
        <div className="flex items-start justify-center gap-3 text-center text-slate-500 dark:text-slate-400 sm:items-center">
          <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <p className="text-sm">
            강의 시작 전 100% 환불 보장 · 수강 결정이 망설여지신다면 언제든 문의해주세요
          </p>
        </div>

      </div>
    </section>
  );
}
