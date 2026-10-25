"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ChevronDown,
  Clock3,
  Loader2,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { WhatsAppIcon } from "../../_components/icons/icons";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce } from "@/lib/motion";

const trustPoints = [
  "No credit card required",
  "No pressure to sign up afterward",
  "One-on-one walkthrough with a coach",
  "45 — 60 minutes, at a time that works for you",
];

const faqs = [
  {
    question: "Is the trial really free?",
    answer:
      "Yes. One full session, no cost, no obligation to join afterward. We'd rather you decide with real information than a sales pitch.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable training clothes, closed shoes, and water. We'll handle everything else, including a quick equipment walkthrough.",
  },
  {
    question: "Do I need any experience?",
    answer:
      "No. Tell us your experience level on the form and your coach will adjust the session accordingly — first-timers are common.",
  },
  {
    question: "How soon can I book a time?",
    answer:
      "Most trials happen within 2 — 3 days of booking. A coach will call or WhatsApp you to confirm the exact time.",
  },
];

type FormStatus = "idle" | "submitting" | "success";

export default function BookATrialPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const experience = String(formData.get("experience") ?? "");
    const goal = String(formData.get("goal") ?? "");
    const time = String(formData.get("time") ?? "");

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^[\d+\s-]{8,}$/.test(phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!experience) nextErrors.experience = "Select your training experience.";
    if (!goal) nextErrors.goal = "Select your primary goal.";
    if (!time) nextErrors.time = "Select a preferred time.";

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
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative overflow-hidden pt-32 lg:sticky lg:top-0 lg:h-screen lg:pt-0">
          <Image
            src="/images/image04.jpg"
            alt="Coach guiding a member through their first session"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 lg:bg-gradient-to-r" />

          <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-16 pt-8 lg:px-14 lg:pb-14 lg:pt-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Book A Trial
                </p>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="max-w-md text-4xl font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              >
                Your first session
                <span className="block text-red-500">is on us.</span>
              </motion.h1>

              <motion.ul variants={fadeInUp} className="mt-9 space-y-4">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-500">
                      <Check className="h-3 w-3" strokeWidth={2} />
                    </span>
                    {point}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-14 hidden lg:block"
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Common Questions
              </p>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div key={faq.question} className="border-b border-white/10">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm text-white/80"
                      >
                        {faq.question}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-red-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
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
                            <p className="pb-4 pr-8 text-sm leading-6 text-white/50">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex max-w-lg flex-col items-start justify-center lg:min-h-full"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
              </span>

              <h2 className="mt-8 text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                You're booked in.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
                A coach will call or message you within 24 hours to confirm
                your session time. Keep an eye on your phone.
              </p>

              <div className="mt-8 w-full space-y-4 border border-white/10 bg-white/[0.02] p-6">
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                  <p className="text-sm text-white/60">
                    We're open Monday — Saturday, 06:00 — 23:00.
                  </p>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                  <p className="text-sm text-white/60">
                    Mansoura, Dakahlia, Egypt.
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppLink("Hi PUNISHER, I just booked a free trial and wanted to confirm the details.")}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-[#25D366]/50 hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Confirm on WhatsApp instead
              </a>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="mx-auto max-w-lg"
            >
              <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                Book my free trial
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Fill this in and a coach will reach out to lock in your time.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="age" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min={12}
                      max={90}
                      autoComplete="off"
                      className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                      placeholder="e.g. 24"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                      placeholder="01X XXX XXXX"
                    />
                    {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
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
                      className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                      placeholder="you@email.com"
                    />
                    {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Training Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    defaultValue=""
                    aria-invalid={Boolean(errors.experience)}
                    className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="" disabled className="bg-black">Select your experience level</option>
                    <option value="beginner" className="bg-black">Beginner — never trained before</option>
                    <option value="intermediate" className="bg-black">Intermediate — train occasionally</option>
                    <option value="advanced" className="bg-black">Advanced — train consistently</option>
                  </select>
                  {errors.experience && <p className="mt-2 text-xs text-red-400">{errors.experience}</p>}
                </div>

                <div>
                  <label htmlFor="goal" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Primary Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    defaultValue=""
                    aria-invalid={Boolean(errors.goal)}
                    className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="" disabled className="bg-black">What are you training for?</option>
                    <option value="strength" className="bg-black">Build strength</option>
                    <option value="muscle" className="bg-black">Build muscle</option>
                    <option value="weight-loss" className="bg-black">Lose weight</option>
                    <option value="general-fitness" className="bg-black">General fitness</option>
                    <option value="sport-performance" className="bg-black">Sport performance</option>
                  </select>
                  {errors.goal && <p className="mt-2 text-xs text-red-400">{errors.goal}</p>}
                </div>

                <div>
                  <label htmlFor="time" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    defaultValue=""
                    aria-invalid={Boolean(errors.time)}
                    className="mt-2 w-full border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white focus:border-red-500 focus:outline-none"
                  >
                    <option value="" disabled className="bg-black">When works best for you?</option>
                    <option value="morning" className="bg-black">Morning (06:00 — 11:00)</option>
                    <option value="afternoon" className="bg-black">Afternoon (12:00 — 17:00)</option>
                    <option value="evening" className="bg-black">Evening (18:00 — 23:00)</option>
                  </select>
                  {errors.time && <p className="mt-2 text-xs text-red-400">{errors.time}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Message <span className="text-white/25">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-red-500 focus:outline-none"
                    placeholder="Injuries, questions, or anything your coach should know"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex w-full items-center justify-center gap-3 bg-red-500 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                      Booking your trial
                    </>
                  ) : (
                    "Book my free trial"
                  )}
                </button>

                <p className="text-center text-[11px] text-white/30">
                  Prefer WhatsApp?{" "}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 underline underline-offset-2 hover:text-white"
                  >
                    Message us directly
                  </a>
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}