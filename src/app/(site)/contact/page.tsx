"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
    Phone,
    Mail,
    MapPin,
    Clock3,
    Navigation,
    //   Instagram,
    //   Facebook,
    //   Youtube,
    CheckCircle2,
    Loader2,
} from "lucide-react";

import { WhatsAppIcon, TikTokIcon } from "../../_components/icons/icons";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

const contactCards = [
    {
        icon: Phone,
        label: "Call Us",
        value: "+20 100 123 4567",
        href: "tel:+201001234567",
    },
    {
        icon: WhatsAppIcon,
        label: "WhatsApp",
        value: "Message us directly",
        href: getWhatsAppLink("Hi PUNISHER, I have a question about the gym."),
        external: true,
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@punishergym.com",
        href: "mailto:info@punishergym.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Mansoura, Dakahlia, Egypt",
        href: "https://www.google.com/maps/dir/?api=1&destination=Mansoura,Egypt",
        external: true,
    },
];

const socials = [
    // { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    // { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "TikTok", href: "https://tiktok.com", icon: TikTokIcon },
    // { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

type FormStatus = "idle" | "submitting" | "success";

export default function ContactPage() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        const nextErrors: Record<string, string> = {};
        if (!name) nextErrors.name = "Enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nextErrors.email = "Enter a valid email address.";
        }
        if (!message) nextErrors.message = "Tell us what you need.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setStatus("submitting");

        window.setTimeout(() => {
            setStatus("success");
            event.currentTarget?.reset();
        }, 900);
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
            <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/image16.jpg"
                        alt="Entrance to PUNISHER Fitness Club"
                        fill
                        priority
                        className="object-cover object-center grayscale"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
                </motion.div>

                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 lg:px-10">
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
                        <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-red-500" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                                Get In Touch
                            </p>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
                        >
                            Come train
                            <span className="block text-red-500">with us.</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            <section className="bg-zinc-950 py-20 lg:py-24">
                <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {contactCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <motion.a
                                    key={card.label}
                                    variants={scaleIn}
                                    href={card.href}
                                    target={card.external ? "_blank" : undefined}
                                    rel={card.external ? "noreferrer" : undefined}
                                    className="group border border-white/5 bg-black p-7 transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.02]"
                                >
                                    <Icon className="mb-6 h-6 w-6 text-red-500" strokeWidth={1.5} />
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        {card.label}
                                    </p>
                                    <p className="mt-2 text-sm text-white/75">{card.value}</p>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="bg-black py-32 lg:py-44">
                <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={fadeInLeft}
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-red-500" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                    Send A Message
                                </p>
                            </div>

                            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                                Ask us
                                <span className="block text-white/25">anything.</span>
                            </h2>

                            {status === "success" ? (
                                <div className="mt-9 flex items-start gap-4 border border-red-500/20 bg-red-500/5 p-7">
                                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-red-500" strokeWidth={1.5} />
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-white">
                                            Message sent
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-white/55">
                                            We'll get back to you within 24 hours. For anything
                                            urgent, message us on WhatsApp instead.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-5">
                                    <div>
                                        <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                            className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                                            placeholder="Your full name"
                                        />
                                        {errors.name && (
                                            <p id="name-error" className="mt-2 text-xs text-red-400">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                            className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                                            placeholder="you@email.com"
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="mt-2 text-xs text-red-400">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            aria-invalid={Boolean(errors.message)}
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                            className="mt-2 w-full resize-none border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                                            placeholder="Tell us what you need"
                                        />
                                        {errors.message && (
                                            <p id="message-error" className="mt-2 text-xs text-red-400">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="group inline-flex w-full items-center justify-center gap-3 bg-red-500 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                                                Sending
                                            </>
                                        ) : (
                                            "Send message"
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={fadeInRight}
                            className="flex flex-col gap-8"
                        >
                            <div className="relative min-h-[320px] overflow-hidden border border-white/10 lg:min-h-[380px]">
                                <iframe
                                    title="PUNISHER Fitness Club location"
                                    src="https://www.google.com/maps?q=Mansoura,Egypt&output=embed"
                                    className="absolute inset-0 h-full w-full grayscale invert-[92%] contrast-[0.9]"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="border border-white/5 bg-zinc-950 p-8">
                                <div className="flex gap-4">
                                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" strokeWidth={1.5} />
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                                            Opening Hours
                                        </p>
                                        <p className="mt-2 text-sm text-white/70">Monday — Saturday</p>
                                        <p className="mt-1 text-sm text-white/40">06:00 — 23:00</p>
                                    </div>
                                </div>

                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Mansoura,Egypt"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-7 inline-flex items-center gap-3 border border-white/15 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-red-500 hover:text-red-500"
                                >
                                    <Navigation className="h-4 w-4" strokeWidth={1.7} />
                                    Get directions
                                </a>

                                <div className="mt-7 flex items-center gap-3 border-t border-white/5 pt-7">
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
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}