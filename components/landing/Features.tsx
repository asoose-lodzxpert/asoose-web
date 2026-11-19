import { BellRing, Headset, Lock, Navigation, ShieldCheck, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: Navigation,
    title: "Live tracking",
    body: "See exactly where your rider, driver or parcel is, updated in real time.",
  },
  {
    icon: Lock,
    title: "Secure payments",
    body: "Pay by card, bank transfer or wallet, processed through trusted payment partners.",
  },
  {
    icon: ShieldCheck,
    title: "Verified partners",
    body: "Every vendor, rider and driver is reviewed before they can take a job.",
  },
  {
    icon: BellRing,
    title: "Instant updates",
    body: "Push, SMS and in-app notifications so you're never left wondering.",
  },
  {
    icon: Star,
    title: "Honest reviews",
    body: "Rate every order, ride and delivery to keep quality high for everyone.",
  },
  {
    icon: Headset,
    title: "Real support",
    body: "Something went wrong? Raise a dispute in-app and our team will make it right.",
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Asoose"
          title="Built for trust, designed for speed"
          description="The details that make every order, ride and delivery feel effortless."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white p-8 transition-colors hover:bg-brand-50/40">
              <Icon className="size-6 text-brand-500" />
              <h3 className="mt-5 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
