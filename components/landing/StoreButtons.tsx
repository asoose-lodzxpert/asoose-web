function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.55zM14.2 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.23z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path fill="#34A853" d="M3.6 2.2 13.4 12l-9.8 9.8c-.36-.2-.6-.6-.6-1.07V3.27c0-.47.24-.87.6-1.07z" />
      <path fill="#FBBC04" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.85-2.2c.9-.52.9-1.88 0-2.4L16.8 8.6z" />
      <path fill="#4285F4" d="M3.6 2.2c.3-.17.68-.18 1.03.02L16.8 8.6 13.4 12 3.6 2.2z" />
      <path fill="#EA4335" d="M3.6 21.8 13.4 12l3.4 3.4-12.17 6.38c-.35.2-.73.19-1.03.02z" />
    </svg>
  );
}

export function StoreButtons({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-all hover:-translate-y-0.5";
  const style =
    variant === "dark"
      ? "bg-ink text-white hover:bg-black shadow-lg shadow-ink/10"
      : "bg-white text-ink hover:bg-brand-50 shadow-lg shadow-black/10";

  return (
    <div className="flex flex-wrap gap-3">
      <a href="#download" className={`${base} ${style}`}>
        <AppleIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] opacity-70">Download on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a href="#download" className={`${base} ${style}`}>
        <PlayIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] opacity-70">Get it on</span>
          <span className="text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
