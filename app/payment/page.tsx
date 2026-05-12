import { Navbar } from "@/components/Navbar";
import { PaymentForm } from "@/components/PaymentForm";
import { Footer } from "@/components/Footer";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <PaymentForm />
      </main>
      <Footer />
    </div>
  );
}
