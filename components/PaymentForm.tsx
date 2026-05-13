"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PaymentSuccessModal } from "@/components/PaymentSuccessModal";
import { PAYMENT_OPTIONS, PAYMENT_METHODS } from "@/lib/data";
import { CheckCircle, CreditCard, Building2, Smartphone, Lock } from "lucide-react";

const METHOD_ICONS: Record<string, React.ReactNode> = {
  card: <CreditCard className="w-4 h-4" />,
  transfer: <Building2 className="w-4 h-4" />,
  kakaopay: <Smartphone className="w-4 h-4" />,
};

export function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState("all");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);

  const currentOption = PAYMENT_OPTIONS.find((o) => o.value === selectedOption)!;
  const currentMethod = PAYMENT_METHODS.find((m) => m.value === selectedMethod)!;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "이름을 입력해주세요.";
    if (!email.trim()) errs.email = "이메일을 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "올바른 이메일 형식을 입력해주세요.";
    if (!phone.trim()) errs.phone = "연락처를 입력해주세요.";
    if (!agreed) errs.agreed = "약관에 동의해주세요.";
    return errs;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setShowModal(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 text-sm border rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
      errors[field] ? "border-red-400 bg-red-50 dark:bg-red-900/10" : "border-slate-200 dark:border-slate-700"
    }`;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 페이지 헤더 */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            수강 신청
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Claude Code Harness 마스터 코스
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* 왼쪽: 요약 패널 — div 기반 */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 rounded-2xl border-2 border-blue-100 dark:border-blue-900/40 bg-white dark:bg-slate-900 overflow-hidden">
              {/* 상단 바 */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

              <div className="p-5 sm:p-6">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">
                  신청 정보 요약
                </h2>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">강의명</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      [1인] 필수 강의 3회차
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Claude Code Harness 마스터 코스
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-1">선택 옵션</p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">
                        {currentOption.label}
                      </p>
                      {currentOption.recommended && (
                        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs">
                          추천
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 mb-1">결제 방법</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      {currentMethod.label}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center mb-4">
                      <span className="text-slate-500 dark:text-slate-400 text-sm">최종 결제 금액</span>
                      <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                        {currentOption.price.toLocaleString()}원
                      </span>
                    </div>
                    <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 p-3">
                      {["온라인 강의 참여", "소그룹 Tech 리더 가이드", "실습 자료 제공", "강의 녹화본 무제한 제공"].map((item) => (
                        <div key={item} className="flex items-center gap-2 py-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          <span className="text-xs text-slate-600 dark:text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 폼 — div 기반 */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* 기본 정보 */}
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">기본 정보</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { id: "name", label: "이름", type: "text", value: name, setter: setName, placeholder: "홍길동" },
                    { id: "email", label: "이메일", type: "email", value: email, setter: setEmail, placeholder: "example@email.com" },
                    { id: "phone", label: "연락처", type: "tel", value: phone, setter: setPhone, placeholder: "010-0000-0000" },
                  ].map(({ id, label, type, value, setter, placeholder }) => (
                    <div key={id}>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                        {label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        placeholder={placeholder}
                        className={inputClass(id)}
                      />
                      {errors[id] && (
                        <p className="text-xs text-red-500 mt-1">{errors[id]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 수강 옵션 */}
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">수강 옵션</h2>
                <div className="flex flex-col gap-2.5">
                  {PAYMENT_OPTIONS.map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 sm:flex-row sm:items-center sm:justify-between ${
                        selectedOption === option.value
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedOption === option.value ? "border-blue-500" : "border-slate-300 dark:border-slate-600"}`}>
                          {selectedOption === option.value && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          )}
                        </div>
                        <input type="radio" name="option" value={option.value} checked={selectedOption === option.value} onChange={() => setSelectedOption(option.value)} className="sr-only" />
                        <div>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{option.label}</span>
                          {option.recommended && (
                            <Badge className="ml-2 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">추천</Badge>
                          )}
                        </div>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">{option.price.toLocaleString()}원</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 결제 방법 */}
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-5">결제 방법</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method.value}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        selectedMethod === method.value
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                      }`}
                    >
                      <input type="radio" name="method" value={method.value} checked={selectedMethod === method.value} onChange={() => setSelectedMethod(method.value)} className="sr-only" />
                      <span className={selectedMethod === method.value ? "text-blue-500" : "text-slate-400"}>
                        {METHOD_ICONS[method.value]}
                      </span>
                      <span className={`text-xs font-medium ${selectedMethod === method.value ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"}`}>
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 약관 동의 */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      agreed ? "bg-blue-600 border-blue-600" : "border-slate-300 dark:border-slate-600 group-hover:border-blue-400"
                    }`}
                    onClick={() => setAgreed(!agreed)}
                  >
                    {agreed && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    이용약관 및 개인정보처리방침에 동의합니다.{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">(내용 확인)</a>
                  </span>
                </label>
                {errors.agreed && <p className="text-xs text-red-500 mt-1 ml-8">{errors.agreed}</p>}
              </div>

              {/* 제출 버튼 */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-base rounded-xl transition-colors duration-200"
              >
                <Lock className="w-4 h-4 mr-2" />
                {currentOption.price.toLocaleString()}원 안전하게 결제하기
              </Button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                🔒 256bit SSL 암호화로 안전하게 처리됩니다
              </p>
            </form>
          </div>
        </div>
      </div>

      <PaymentSuccessModal
        open={showModal}
        onOpenChange={setShowModal}
        name={name}
        option={currentOption.label}
        price={currentOption.price}
      />
    </>
  );
}
