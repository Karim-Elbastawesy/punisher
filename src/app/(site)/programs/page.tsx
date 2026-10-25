"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Dumbbell,
  Trophy,
  UserCheck,
  Scale,
  Activity,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const programs = [
  {
    id: "strength",
    number: "01",
    icon: Dumbbell,
    title: "Strength Training",
    image: "/images/image09.jpg",
    description:
      "Barbell-first programming built around the squat, bench, and deadlift. You train on a written progression, log every session, and add weight when the numbers say you're ready — not when it feels convenient.",
    whoFor:
      "Lifters chasing a specific total or PR, athletes who need a strength base under their sport, and anyone tired of wandering between machines with no plan.",
    benefits: [
      "Written progression, not a random workout each day",
      "Coached technique on every main lift",
      "Logged numbers so progress is never a guess",
      "Periodic max-out sessions to test where you stand",
    ],
  },
  {
    id: "bodybuilding",
    number: "02",
    icon: Trophy,
    title: "Bodybuilding",
    image: "/images/bodybuilding.jpg",
    description:
      "Split training built for size and shape — chest and triceps, back and biceps, legs, shoulders, on rotation. Volume increases in planned blocks, with deload weeks built in so growth doesn't stall.",
    whoFor:
      "Lifters who want visible size and definition, intermediate to advanced trainees, and anyone prepping for a show or photoshoot.",
    benefits: [
      "Body-part split matched to your recovery capacity",
      "Volume and intensity planned in blocks, not guessed",
      "Nutrition guidance to support the muscle you're building",
      "Posing and prep coaching if you're stepping on stage",
    ],
  },
  {
    id: "personal-training",
    number: "03",
    icon: UserCheck,
    title: "Personal Training",
    image: "/images/image11.jpg",
    description:
      "One coach, one plan, built entirely around your goals, schedule, and starting point. Every session is supervised — no wondering if your form is right or your program still makes sense.",
    whoFor:
      "Beginners who want hands-on guidance from day one, people training around an old injury, and anyone who wants faster, more accountable progress.",
    benefits: [
      "A program built for your body, not a template",
      "A dedicated coach in every session, not just the first one",
      "Scheduling built around your week",
      "Form corrected in real time, rep by rep",
    ],
  },
  {
    id: "weight-loss",
    number: "04",
    icon: Scale,
    title: "Weight Loss",
    image: "/images/image13.jpg",
    description:
      "A structured mix of resistance training and conditioning, built for fat loss that holds up after the program ends — not a six-week crash that comes back the moment you stop.",
    whoFor:
      "People starting from zero, anyone who's tried cardio-only and stalled, and busy schedules that need efficient, high-value sessions.",
    benefits: [
      "Resistance training kept in, so you lose fat, not muscle",
      "Realistic weekly structure you can actually sustain",
      "Nutrition basics, no fad diets or banned food lists",
      "Progress tracked with measurements, not just the scale",
    ],
  },
  {
    id: "functional",
    number: "05",
    icon: Activity,
    title: "Functional Training",
    image: "/images/image12.jpg",
    description:
      "Movement-based sessions built around mobility, balance, and multi-joint patterns — squatting, hinging, carrying, rotating. Strength that transfers directly to sport and daily life.",
    whoFor:
      "Athletes prepping for a season, people who want functional strength without a pure bodybuilding focus, and older trainees prioritizing mobility and injury prevention.",
    benefits: [
      "Full-body movement patterns, not isolated machine work",
      "Mobility and stability built into every session",
      "Sport-specific conditioning options on request",
      "Lower injury risk for long-term training",
    ],
  },
  {
    id: "beginner",
    number: "06",
    icon: Rocket,
    title: "Beginner Training",
    image: "/images/image08.jpg",
    description:
      "An onboarding program for people who've never set foot on a gym floor — or haven't in years. You'll learn the equipment, the basic lifts, and gym etiquette before anything gets complicated.",
    whoFor:
      "First-time gym-goers, people returning after a long break, and anyone who's felt intimidated walking into a normal gym floor.",
    benefits: [
      "Small-group intro sessions, no judgment",
      "A simple 3-day starter plan you can actually follow",
      "Movement screening before you touch a barbell",
      "Direct access to a coach for the questions you're embarrassed to ask",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image14.jpg"
            alt="Athlete mid-lift at PUNISHER"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                Train With Purpose
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              Six programs.
              <span className="block text-red-500">One standard.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Whatever brought you in — strength, size, fat loss, or your
              first day ever in a gym — there's a coached program built for
              exactly that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {programs.map((program, index) => {
        const Icon = program.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={program.id}
            id={program.id}
            className={`scroll-mt-24 py-28 lg:py-36 ${isEven ? "bg-black" : "bg-zinc-950"}`}
          >
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid gap-14 lg:grid-cols-2 lg:gap-20"
              >
                <motion.div
                  variants={isEven ? fadeInLeft : fadeInRight}
                  className={`relative aspect-[4/5] overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-black/70 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-red-500" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <motion.div
                  variants={isEven ? fadeInRight : fadeInLeft}
                  className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-red-500">
                    {program.number}
                  </span>

                  <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                    {program.title}
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                    {program.description}
                  </p>

                  <div className="mt-7 border-l-2 border-red-500/40 pl-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Who it's for
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                      {program.whoFor}
                    </p>
                  </div>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {program.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-xs text-white/60 sm:text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <Check className="h-3 w-3" strokeWidth={2} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book-a-trial"
                    className="group mt-9 inline-flex w-fit items-center gap-3 bg-red-500 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-red-400"
                  >
                    Start {program.title}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/programs/cta.jpg"
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
              Not sure which
              <span className="block text-red-500">program fits?</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Tell us your goal on the trial form and we'll match you with the
              right coach and program on your first visit.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                href="/book-a-trial"
                className="group inline-flex items-center justify-center gap-3 bg-red-500 px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors hover:bg-red-400"
              >
                Book a free trial
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}