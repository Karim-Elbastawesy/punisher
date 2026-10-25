"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, ChevronDown, Minus } from "lucide-react";

import { fadeInUp, staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

const plans = [
    {
        name: "Starter",
        duration: "1 Month",
        price: "2,500",
        perMonth: "2,500 EGP / month",
        popular: false,
        features: [
            "Full gym access",
            "Locker room access",
            "Free fitness assessment",
        ],
    },
    {
        name: "Standard",
        duration: "3 Months",
        price: "5,999",
        perMonth: "~2,000 EGP / month",
        popular: true,
        features: [
            "Full gym access",
            "Locker room access",
            "Free fitness assessment",
            "1 personal training session",
        ],
    },
    {
        name: "Commitment",
        duration: "6 Months",
        price: "10,999",
        perMonth: "~1,833 EGP / month",
        popular: false,
        features: [
            "Full gym access",
            "Locker room access",
            "Free fitness assessment",
            "2 personal training sessions",
            "1 guest pass / month",
        ],
    },
    {
        name: "Annual",
        duration: "12 Months",
        price: "19,999",
        perMonth: "~1,667 EGP / month",
        popular: false,
        features: [
            "Full gym access",
            "Locker room access",
            "Free fitness assessment",
            "4 personal training sessions",
            "2 guest passes / month",
            "One free program freeze",
        ],
    },
];

const comparisonRows = [
    { label: "Full gym access", values: [true, true, true, true] },
    { label: "Locker room access", values: [true, true, true, true] },
    { label: "Free fitness assessment", values: [true, true, true, true] },
    { label: "Personal training sessions", values: ["—", "1", "2", "4"] },
    { label: "Guest passes / month", values: ["—", "—", "1", "2"] },
    { label: "Freeze / pause option", values: [false, false, true, true] },
    { label: "Priority class booking", values: [false, false, false, true] },
];

const faqs = [
    {
        question: "Is there a joining fee?",
        answer:
            "No. The price shown is everything you pay — there's no separate registration or joining fee on top.",
    },
    {
        question: "Can I pause my membership?",
        answer:
            "Commitment and Annual plans include a freeze option for travel or injury. Starter and Standard plans don't pause, but you can always resume with a new plan later.",
    },
    {
        question: "Can I upgrade to a longer plan later?",
        answer:
            "Yes. Talk to the front desk any time and we'll credit the remaining value of your current plan toward the new one.",
    },
    {
        question: "Do you offer student discounts?",
        answer:
            "Yes, students get a discount on the Standard and Commitment plans with a valid student ID. Ask a coach at the front desk.",
    },
    {
        question: "Do I need to be experienced to join PUNISHER?",
        answer:
            "Not at all. Beginners are welcome, and our team can help you get familiar with the equipment, basic movements, and training environment.",
    },
    {
        question: "Do you offer personal training?",
        answer:
            "Yes. Personal training sessions are available with our coaches and can be tailored to your goals, experience level, and preferred training style.",
    },
    {
        question: "Can I visit the gym before becoming a member?",
        answer:
            "Yes. You can book a free trial and experience the gym, equipment, and training environment before choosing a membership.",
    },
    {
        question: "What should I bring for my first workout?",
        answer:
            "Bring comfortable training clothes, proper athletic shoes, a towel, and a water bottle. Everything else you need for your session is available at the gym.",
    },
];

export default function MembershipsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                        src="/images/image15.jpg"
                        alt="Member training on the PUNISHER floor"
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
                                Membership
                            </p>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
                        >
                            Simple plans.
                            <span className="block text-red-500">No small print.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                            Pick the commitment that matches your goals. No joining fee, no
                            hidden charges, cancel-friendly terms.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-zinc-950 py-24 lg:py-32">
                <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.name}
                                variants={scaleIn}
                                className={`relative flex flex-col border p-8 ${plan.popular
                                        ? "border-red-500/40 bg-red-500/[0.04]"
                                        : "border-white/5 bg-black"
                                    }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3 left-8 bg-red-500 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                                        Most Popular
                                    </span>
                                )}

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                    {plan.duration}
                                </p>
                                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight">
                                    {plan.name}
                                </h2>

                                <div className="mt-6 flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-xs uppercase tracking-[0.15em] text-white/30">EGP</span>
                                </div>
                                <p className="mt-1 text-xs text-white/35">{plan.perMonth}</p>

                                <ul className="mt-7 flex-1 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-xs text-white/60 sm:text-sm">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                                                <Check className="h-3 w-3" strokeWidth={2} />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/book-a-trial"
                                    className={`group mt-8 inline-flex items-center justify-center gap-3 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${plan.popular
                                            ? "bg-red-500 text-black hover:bg-red-400"
                                            : "border border-white/15 text-white hover:border-red-500 hover:text-red-500"
                                        }`}
                                >
                                    Get started
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <p className="mt-8 text-center text-xs text-white/30">
                        Sign-up happens at the front desk — online payment isn't available yet.
                    </p>
                </div>
            </section>

            <section className="bg-black py-32 lg:py-44">
                <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={fadeInUp}
                        className="mb-14 max-w-2xl"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-red-500" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                Compare Plans
                            </p>
                        </div>
                        <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                            What's included,
                            <span className="block text-white/25">side by side.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={fadeInUp}
                        className="overflow-x-auto"
                    >
                        <table className="w-full min-w-[720px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-5 pr-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                        Feature
                                    </th>
                                    {plans.map((plan) => (
                                        <th
                                            key={plan.name}
                                            className="py-5 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70"
                                        >
                                            {plan.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.label} className="border-b border-white/5">
                                        <td className="py-5 pr-4 text-sm text-white/60">{row.label}</td>
                                        {row.values.map((value, index) => (
                                            <td key={index} className="px-4 py-5 text-sm text-white/60">
                                                {typeof value === "boolean" ? (
                                                    value ? (
                                                        <Check className="h-4 w-4 text-red-500" strokeWidth={2} />
                                                    ) : (
                                                        <Minus className="h-4 w-4 text-white/20" strokeWidth={2} />
                                                    )
                                                ) : (
                                                    value
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            <section className="border-t border-white/5 bg-zinc-950 py-32 lg:py-44">
                <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={fadeInUp}
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-red-500" />
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                                    FAQ
                                </p>
                            </div>
                            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                                Questions,
                                <span className="block text-white/25">answered.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={staggerContainer}
                        >
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <motion.div key={faq.question} variants={fadeInUp} className="border-b border-white/10">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(isOpen ? null : index)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-medium text-white/85 sm:text-lg"
                                        >
                                            {faq.question}
                                            <ChevronDown
                                                className={`h-5 w-5 shrink-0 text-red-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                strokeWidth={1.7}
                                            />
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-6 pr-8 text-sm leading-6 text-white/50 sm:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
                <div className="absolute inset-0">
                    <Image
                        src="/images/memberships/cta.jpg"
                        alt=""
                        fill
                        className="object-cover grayscale opacity-20"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                    <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[130px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={staggerContainer}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                        >
                            Try before
                            <span className="block text-red-500">you commit.</span>
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="mt-10">
                            <Link
                                href="/book-a-trial"
                                className="group inline-flex items-center justify-center gap-3 bg-red-500 px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors hover:bg-red-400"
                            >
                                Book a free trial
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}