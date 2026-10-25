import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_75%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 lg:px-10">
          <Link
            href="/"
            aria-label="PUNISHER home"
            className="group flex items-center"
          >
            <Image
              src="/images/logo.png"
              width={48}
              height={48}
              alt="PUNISHER"
              priority
              className="h-10 w-auto invert transition-opacity duration-300 group-hover:opacity-70"
            />
          </Link>

          <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/30">
            Error 404
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-5xl text-center">
            {/* Small label */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-red-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-red-500">
                Wrong direction
              </span>

              <span className="h-px w-8 bg-red-500" />
            </div>

            {/* 404 */}
            <div className="relative">
              <h1
                aria-label="404"
                className="select-none text-[clamp(9rem,28vw,25rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] text-white/[0.045]"
              >
                404
              </h1>

              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/40 sm:text-xs">
                  Page not found
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="mx-auto mt-8 max-w-xl">
              <h2 className="text-2xl font-semibold uppercase tracking-[-0.02em] sm:text-3xl">
                You took a wrong turn.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                The page you're looking for doesn't exist, has moved, or
                probably never survived the workout.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 bg-red-500 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-red-400"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                  strokeWidth={1.8}
                />

                Back to PUNISHER
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between px-6 py-6 lg:px-10">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
              PUNISHER FITNESS CLUB
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/15">
              Mansoura, Egypt
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.22em] text-white/30 transition-colors hover:text-white"
          >
            Need help?

            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
