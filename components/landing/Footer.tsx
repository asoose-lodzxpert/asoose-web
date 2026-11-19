import { Logo } from "./Logo";

const columns = [
  {
    title: "Services",
    links: ["Food delivery", "Rides", "Parcels", "Grocery & pharmacy", "Stays"],
  },
  {
    title: "Partners",
    links: ["Become a vendor", "Become a rider", "Become a driver", "List a property"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Contact", "Help centre"],
  },
  {
    title: "Legal",
    links: ["Terms of service", "Privacy policy", "Refund policy"],
  },
];

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Food, rides, parcels, stays and payments — everything you need, in one app.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Asoose. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "X", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="transition-colors hover:text-ink">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
