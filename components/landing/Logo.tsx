import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Asoose home">
      <Image src="/logo.png" alt="" width={36} height={36} className="size-9" />
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        asoose
      </span>
    </Link>
  );
}
