import { ArrowRight, Car, ShieldCheck, Wallet } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { StoreButtons } from "./StoreButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 size-[560px] rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute top-40 left-[-15%] -z-10 size-[420px] rounded-full bg-accent-100/70 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 py-1 pl-1 pr-3 text-sm text-slate-600 backdrop-blur"
          >
            <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            Book stays &amp; send parcels in-app
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Everything you need,{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500 bg-clip-text text-transparent">
              one tap away.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Order food and groceries, hail a ride, send a parcel or book a place to
            stay — then pay for all of it from one secure wallet. Asoose keeps your
            day moving.
          </p>

          <div className="mt-8">
            <StoreButtons />
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-500" /> Verified riders &amp; drivers
            </li>
            <li className="flex items-center gap-2">
              <Wallet className="size-4 text-brand-500" /> Secure payments
            </li>
            <li className="flex items-center gap-2">
              <Car className="size-4 text-brand-500" /> Live tracking
            </li>
          </ul>
        </div>

        <div className="relative">
          <PhoneMockup />

          {/* floating cards */}
          <div className="animate-float absolute left-0 top-[46%] hidden items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 backdrop-blur sm:flex lg:-left-8 xl:-left-2">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Car className="size-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Driver arriving</p>
              <p className="text-sm font-semibold text-ink">Toyota Corolla · 3 min</p>
            </div>
          </div>

          <div className="animate-float-slow absolute bottom-6 right-0 hidden items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 backdrop-blur sm:flex lg:-right-2 xl:right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <Wallet className="size-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Wallet topped up</p>
              <p className="text-sm font-semibold text-ink">₦25,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
