import {
  Bike,
  Car,
  Package,
  Pill,
  Search,
  ShoppingBasket,
  UtensilsCrossed,
  Hotel,
  MapPin,
  Bell,
} from "lucide-react";

const tiles = [
  { icon: UtensilsCrossed, label: "Food", tone: "bg-orange-50 text-orange-500" },
  { icon: Car, label: "Rides", tone: "bg-brand-50 text-brand-600" },
  { icon: Package, label: "Parcels", tone: "bg-violet-50 text-violet-500" },
  { icon: ShoppingBasket, label: "Grocery", tone: "bg-emerald-50 text-emerald-600" },
  { icon: Pill, label: "Pharmacy", tone: "bg-rose-50 text-rose-500" },
  { icon: Hotel, label: "Stays", tone: "bg-accent-50 text-accent-600" },
];

/** Stylised app home screen, built in markup so it stays crisp at any size. */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="rounded-[2.75rem] bg-ink p-2.5 shadow-2xl shadow-brand-900/30 ring-1 ring-black/5">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-50">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />

          {/* header */}
          <div className="bg-gradient-to-br from-brand-500 to-brand-700 px-5 pb-6 pt-12 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-white/70">Deliver to</p>
                <p className="flex items-center gap-1 text-sm font-semibold">
                  <MapPin className="size-3.5" /> Lekki Phase 1
                </p>
              </div>
              <span className="grid size-8 place-items-center rounded-full bg-white/15">
                <Bell className="size-4" />
              </span>
            </div>
            <p className="mt-4 text-lg font-bold leading-snug">
              What do you need
              <br />
              today, Ada?
            </p>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-slate-400">
              <Search className="size-4" />
              <span className="text-xs">Search food, stores, places…</span>
            </div>
          </div>

          {/* services */}
          <div className="grid grid-cols-3 gap-2.5 px-4 pt-4">
            {tiles.map(({ icon: Icon, label, tone }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-white py-3 shadow-sm ring-1 ring-slate-100"
              >
                <span className={`grid size-9 place-items-center rounded-xl ${tone}`}>
                  <Icon className="size-[18px]" />
                </span>
                <span className="text-[11px] font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          {/* active order */}
          <div className="px-4 pb-6 pt-4">
            <div className="rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink">Order on the way</p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  12 min
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand-500" />
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                </div>
                <span className="grid size-6 place-items-center rounded-full bg-accent-50 text-accent-600">
                  <Bike className="size-3.5" />
                </span>
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                Jollof rice &amp; grilled chicken · Mama&apos;s Kitchen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
