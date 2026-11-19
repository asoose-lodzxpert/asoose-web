import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "What can I do with Asoose?",
    a: "Order food from restaurants, shop groceries and pharmacy items, book rides, send parcels and reserve hotels or short-lets — all from one app with one wallet.",
  },
  {
    q: "How do I pay?",
    a: "You can pay with your debit card, by bank transfer, or from your Asoose wallet. Top up your wallet once and use the balance across every service.",
  },
  {
    q: "Can I track my order or ride?",
    a: "Yes. Once your order is picked up or your driver is assigned, you can follow them live on the map and get notified at every step.",
  },
  {
    q: "What if something goes wrong with my order?",
    a: "Open the order in the app and raise a dispute. Our support team reviews every case, and approved refunds go straight back to your wallet.",
  },
  {
    q: "How do I become a vendor, rider or driver?",
    a: "Download the app, choose the partner type you want to apply as, and submit your details. Our team reviews each application before you can start.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions? We've got answers" />

        <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {q}
                <ChevronDown className="faq-chevron size-5 shrink-0 text-slate-400 transition-transform duration-200" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
