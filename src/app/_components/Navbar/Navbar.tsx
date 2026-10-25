"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "../icons/icons";
import { getWhatsAppLink } from "@/lib/whatsapp";
 
const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Memberships", href: "/memberships" },
    { name: "Trainers", href: "/trainers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled
                    ? "border-b border-white/10 bg-black/85 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <nav
                className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10"
                aria-label="Main navigation"
            >
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="relative z-50 flex items-center"
                    aria-label="PUNISHER home"
                >
                    <Image
                        src="/images/logo.png"
                        width={48}
                        height={48}
                        alt="PUNISHER"
                        priority
                        className="h-10 w-auto invert lg:h-11"
                    />
                </Link>

                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group relative py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white"
                        >
                            {link.name}

                            <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-3 lg:flex">
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Chat with PUNISHER on WhatsApp"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
                    >
                        <WhatsAppIcon className="h-4 w-4" />
                    </a>

                    <Link
                        href="/book-a-trial"
                        className="group relative inline-flex overflow-hidden border border-red-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500 transition-colors duration-300 hover:text-black"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-red-500 transition-transform duration-300 group-hover:translate-x-0" />

                        <span className="relative z-10">Book a trial</span>
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="relative z-50 flex h-10 w-10 items-center justify-center text-white/70 transition-colors duration-300 hover:text-white lg:hidden"
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" strokeWidth={1.5} />
                    ) : (
                        <Menu className="h-6 w-6" strokeWidth={1.5} />
                    )}
                </button>
            </nav>

            <div
                id="mobile-navigation"
                className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isOpen
                        ? "visible max-h-[38rem] opacity-100"
                        : "invisible max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 py-6">
                    <div className="flex flex-col">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`border-b border-white/10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:pl-2 hover:text-white ${isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                                    }`}
                                style={{
                                    transitionDelay: isOpen
                                        ? `${index * 50}ms`
                                        : "0ms",
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div
                        className={`flex gap-3 pt-6 transition-all duration-500 ${isOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-3 opacity-0"
                            }`}
                        style={{
                            transitionDelay: isOpen
                                ? `${navLinks.length * 50}ms`
                                : "0ms",
                        }}
                    >
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Chat with PUNISHER on WhatsApp"
                            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center border border-white/10 text-white/60 transition-colors duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
                        >
                            <WhatsAppIcon className="h-5 w-5" />
                        </a>

                        <Link
                            href="/book-a-trial"
                            onClick={closeMenu}
                            className="block w-full bg-red-500 px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-red-400"
                        >
                            Book a trial
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}