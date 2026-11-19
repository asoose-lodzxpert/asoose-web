import { ArrowRight, Bike, Building2, Car, Store } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const partners = [
  {
    icon: Store,
    title: "Vendors",
    body: "List your restaurant, supermarket or pharmacy and reach new customers every day.",
    cta: "Sell on Asoose",
  },
  {
    icon: Bike,
    title: "Riders",
    body: "Deliver food and parcels on your own schedule and get paid straight to your bank.",
    cta: "Ride with us",
  },
  {
    icon: Car,
    title: "Drivers",
    body: "Accept ride requests near you, keep more of every fare, and drive when it suits you.",
    cta: "Start driving",
  },
  {
    icon: Building2,
    title: "Property owners",
    body: "Put your hotel or short-let in front of travellers and manage bookings with ease.",
    cta: "List a property",
  },
];

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Partner with us"
            title="Grow your business with Asoose"
            description="Join the vendors, riders, drivers and hosts who power Asoose — and earn on your own terms."
          />
          <a
            href="#download"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-600 hover:text-brand-700 lg:self-auto"
          >
            Read partner requirements <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map(({ icon: Icon, title, body, cta }) => (
            <article
              key={title}
              className="group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 hover:ring-brand-200"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/30">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
              <a
                href="#download"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
              >
                {cta}
                <ArrowRight className="size-4 text-brand-500 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
