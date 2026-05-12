import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

const LINKS = [
  { label: "커리큘럼", href: "#curriculum" },
  { label: "강사", href: "#instructors" },
  { label: "수강료", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "개인정보처리방침", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Harness Academy
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Claude Code와 Harness 엔지니어링으로 1인 개발자의 생산성을 극대화하는 실전 강의
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-slate-800 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Harness Academy. All rights reserved.</p>
          <p className="text-slate-600">
            Powered by Claude Code Harness Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
