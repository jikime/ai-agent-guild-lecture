"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Moon, Sun, Zap, Menu } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { label: "커리큘럼", href: "#curriculum" },
  { label: "강사", href: "#instructors" },
  { label: "수강료", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-md border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                scrolled ? "text-slate-900 dark:text-white" : "text-white"
              }`}
            >
              Harness Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  scrolled
                    ? "text-slate-600 dark:text-slate-300"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* CTA Button (desktop) */}
            <div className="hidden md:block">
              <Link href="/payment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  수강 신청
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                  className={`p-2 rounded-lg transition-colors inline-flex items-center justify-center ${
                    scrolled
                      ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-6 pt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-lg">Harness Academy</span>
                    </div>
                    <nav className="flex flex-col gap-1">
                      {NAV_ITEMS.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                    <Link href="/payment" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        수강 신청
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
