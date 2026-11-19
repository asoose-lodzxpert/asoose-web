import {
  ArrowUpRight,
  Car,
  Hotel,
  Package,
  ShoppingBasket,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="One app, many services"
          title="Your everyday essentials, all in one place"
          description="Stop switching between apps. Asoose brings the things you do every day into one simple, reliable experience."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-6 md:grid-rows-[auto_auto]">
          {/* Food — feature card */}
          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white md:col-span-4 md:row-span-1">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl" />
            <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
              <UtensilsCrossed className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-bold">Food delivery</h3>
            <p className="mt-2 max-w-md text-white/80">
              Discover restaurants near you, order from several at once in a single
              cart, and follow your rider live until it&apos;s at your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Local favourites", "Multi-restaurant cart", "Live tracking"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>

          <ServiceCard
            className="md:col-span-2"
            icon={Car}
            tone="bg-brand-50 text-brand-600"
            title="Rides"
            body="Get an upfront fare, pick your pickup on the map and even book a ride for someone else."
          />
          <ServiceCard
            className="md:col-span-2"
            icon={Package}
            tone="bg-violet-50 text-violet-600"
            title="Parcels"
            body="Send one package or several drops in a single request — tracked end to end."
          />
          <ServiceCard
            className="md:col-span-2"
            icon={ShoppingBasket}
            tone="bg-emerald-50 text-emerald-600"
            title="Grocery & pharmacy"
            body="Shop supermarkets, pharmacies and local stores, delivered the same day."
          />
          <ServiceCard
            className="md:col-span-2"
            icon={Hotel}
            tone="bg-accent-50 text-accent-600"
            title="Stays"
            body="Find and book hotels and short-let apartments wherever you're headed."
          />

          {/* Wallet — wide card */}
          <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:col-span-6">
            <div className="absolute -bottom-24 right-10 size-72 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg">
                <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-accent-400">
                  <Wallet className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl font-bold">One wallet for everything</h3>
                <p className="mt-2 text-white/70">
                  Top up once and pay for meals, rides, parcels and stays. Use your card
                  or bank transfer, and get refunds straight back to your balance.
                </p>
              </div>
              <div className="w-full max-w-sm rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                <p className="text-xs text-white/60">Available balance</p>
                <p className="mt-1 text-3xl font-bold tracking-tight">₦48,250.00</p>
                <div className="mt-5 space-y-3 text-sm">
                  {[
                    ["Ride to Victoria Island", "−₦3,400"],
                    ["Wallet top-up", "+₦25,000"],
                    ["Parcel to Ikeja", "−₦2,100"],
                  ].map(([label, amount]) => (
                    <div key={label} className="flex justify-between text-white/80">
                      <span>{label}</span>
                      <span
                        className={
                          amount.startsWith("+") ? "text-emerald-400" : "text-white"
                        }
                      >
                        {amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  tone,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  tone: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative rounded-3xl border border-slate-200/80 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 ${className}`}
    >
      <ArrowUpRight className="absolute right-6 top-6 size-5 text-slate-300 transition-colors group-hover:text-brand-500" />
      <span className={`grid size-12 place-items-center rounded-2xl ${tone}`}>
        <Icon className="size-6" />
      </span>
      <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </article>
  );
}
