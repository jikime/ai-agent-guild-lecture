"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface PaymentSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  option: string;
  price: number;
}

export function PaymentSuccessModal({
  open,
  onOpenChange,
  name,
  option,
  price,
}: PaymentSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">수강 신청 완료</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center py-3 sm:py-4 gap-5">
          {/* Success Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />
          </div>

          {/* Message */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              수강 신청이 완료되었습니다!
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              입력하신 이메일로 안내 메일이 발송됩니다.
            </p>
          </div>

          {/* Summary */}
          <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">신청자</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {name}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">강의</span>
                <span className="font-semibold text-slate-900 dark:text-white text-right max-w-[180px]">
                  {option}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">결제 금액</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {price.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/" className="w-full">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => onOpenChange(false)}
            >
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
