import { redirect } from "next/navigation";
import { PAYMENT_LINK } from "@/lib/data";

export default function PaymentPage() {
  redirect(PAYMENT_LINK);
}
