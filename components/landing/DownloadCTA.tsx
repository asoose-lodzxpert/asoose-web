import { StoreButtons } from "./StoreButtons";

export function DownloadCTA() {
  return (
    <section id="download" className="scroll-mt-20 px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="bg-grid absolute inset-0 opacity-30 invert" />
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 size-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Your day, sorted.
            <br />
            Get Asoose today.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Download the app and enjoy food, rides, parcels and stays — all in one place.
          </p>
          <div className="mt-10 flex justify-center">
            <StoreButtons variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
