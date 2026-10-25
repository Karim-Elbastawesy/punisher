import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import { WhatsAppIcon, TikTokIcon } from "../icons/icons";
import { getWhatsAppLink } from "@/lib/whatsapp";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Trainers", href: "/trainers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Memberships", href: "/memberships" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "Strength Training", href: "/programs#strength" },
  { name: "Bodybuilding", href: "/programs#bodybuilding" },
  { name: "Personal Training", href: "/programs#personal-training" },
  { name: "Weight Loss", href: "/programs#weight-loss" },
  { name: "Functional Training", href: "/programs#functional" },
  { name: "Beginner Training", href: "/programs#beginner" },
];

const socials = [
//   { name: "Instagram", href: "https://instagram.com", icon: Instagram },
//   { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "TikTok", href: "https://tiktok.com", icon: TikTokIcon },
//   { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 w-full -translate-x-1/2 select-none text-center text-[22vw] font-bold uppercase leading-none tracking-tighter text-white/[0.03] sm:text-[16vw]"
      >
        PUNISHER
      </p>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-20 lg:px-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                width={44}
                height={44}
                alt="PUNISHER"
                className="h-10 w-auto invert"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              A serious training environment in the heart of Mansoura, built
              for people who show up and put in the work.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-300 hover:border-red-500/40 hover:text-red-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Explore
            </p>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Programs
            </p>

            <ul className="mt-6 space-y-4">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Visit Us
            </p>

            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                <span className="text-sm text-white/55">
                  Mansoura, Dakahlia, Egypt
                </span>
              </li>

              <li className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                <span className="text-sm text-white/55">
                  Mon — Sat, 06:00 — 23:00
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                <a
                  href="tel:+201001234567"
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  +20 100 123 4567
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                <a
                  href="mailto:info@punishergym.com"
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  info@punishergym.com
                </a>
              </li>
            </ul>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message us
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © {year} PUNISHER Fitness Club. All rights reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-red-500 group-hover:text-red-500">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}