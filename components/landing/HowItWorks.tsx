import { MapPinned, MousePointerClick, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Smartphone,
    title: "Download & sign up",
    body: "Create your account in under a minute with email, Google or Apple.",
  },
  {
    icon: MousePointerClick,
    title: "Choose what you need",
    body: "Order a meal, book a ride, send a parcel or reserve a stay — all from the home screen.",
  },
  {
    icon: MapPinned,
    title: "Track it in real time",
    body: "Watch your order, rider or driver move on the map, with updates at every step.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in three steps"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* connector line */}
          <div
            aria-hidden
            className="absolute left-[16.6%] right-[16.6%] top-8 hidden h-px bg-gradient-to-r from-brand-200 via-accent-300 to-brand-200 md:block"
          />
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="relative grid size-16 place-items-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-brand-900/5 ring-1 ring-slate-200">
                <Icon className="size-7" />
                <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-accent-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
