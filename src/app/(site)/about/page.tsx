"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Flame,
  ShieldCheck,
  Users,
  Repeat,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  viewportOnce,
} from "@/lib/motion";

const values = [
  {
    icon: Repeat,
    title: "Consistency",
    desc: "One good session means little. What matters is the hundredth one, on a day you didn't feel like coming.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    desc: "We don't chase motivation. We build habits that hold up when motivation runs out.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "You train next to people who notice when you're missing and expect you back the next day.",
  },
  {
    icon: Target,
    title: "Honesty",
    desc: "Real numbers, real feedback, no flattery. You'll always know exactly where you stand.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
      <section className="relative flex min-h-[80vh] items-end overflow-hidden pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image05.jpg"
            alt="Coach walking the training floor at PUNISHER"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                Our Story
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              We built the gym
              <span className="block text-red-500">Mansoura was missing.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
            >
              Not a place to take selfies between sets. A place to get strong,
              stay honest about your progress, and keep showing up.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 py-32 lg:py-44">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <motion.div variants={fadeInLeft} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/old.jpg"
                alt="Early training floor at PUNISHER"
                fill
                className="object-cover grayscale"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>

            <motion.div variants={fadeInRight} className="flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  How It Started
                </p>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                One room, a
                <span className="block text-white/25">rack, and a plan.</span>
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                <p>
                  PUNISHER opened in 2019 in a rented space barely big enough
                  for a squat rack and a bench. The gyms around it were full of
                  mirrors and short on real equipment — nowhere for someone to
                  actually train hard for an hour without waiting on a machine
                  or getting talked into a class they didn't ask for.
                </p>
                <p>
                  So we built something narrower on purpose: a floor for
                  people who wanted to lift heavy, track their numbers, and
                  leave. Word moved through Mansoura's lifting community
                  before we ever ran an ad. Within two years we outgrew that
                  first room twice.
                </p>
                <p>
                  Today PUNISHER is a full facility with over two thousand
                  members and a coaching staff that actually watches your
                  form — but the reason people stay hasn't changed. It's
                  still a place built for the work, not the waiting room.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-32 lg:py-44">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-red-600/[0.05] blur-[140px]" />

        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24"
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  Philosophy
                </p>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Progress is slow.
                <span className="block text-white/25">Quitting is instant.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col justify-center gap-6 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              <p>
                Strength doesn't come from a single brutal session. It comes
                from adding a little weight to the bar most weeks, for years,
                and not skipping the boring parts.
              </p>
              <p>
                We coach the fundamentals first — bar path, breathing, rest
                periods — because that's what actually keeps people training
                injury-free at 40 instead of burned out at 25. No shortcuts,
                no fad splits that change every month.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-zinc-950">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-24 lg:px-10 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInLeft}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  Our Mission
                </p>
              </div>

              <p className="text-2xl font-medium leading-snug text-white/85 sm:text-3xl lg:text-4xl">
                "Give Mansoura a training environment serious enough for
                competitive lifters, and welcoming enough for someone
                walking into a gym for the first time."
              </p>

              <p className="mt-8 text-sm leading-7 text-white/45">
                Those two people train on the same floor at PUNISHER, often
                next to each other. That's not an accident — it's the whole
                point of how we built this place.
              </p>
            </motion.div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-0">
            <Image
              src="/images/boxing.jpg"
              alt="Member training with a coach at PUNISHER"
              fill
              className="object-cover grayscale"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-32 lg:py-44">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp} className="mb-16 max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  What We Stand For
                </p>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Four things we
                <span className="block text-white/25">won't compromise on.</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    variants={scaleIn}
                    className="group border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.04]"
                  >
                    <Icon
                      className="mb-7 h-8 w-8 text-red-500 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />

                    <h3 className="mb-3 text-lg font-bold uppercase tracking-wide">
                      {value.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                      {value.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950 py-32 lg:py-44">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  The Facility
                </p>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Built around
                <span className="block text-white/25">real equipment.</span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Full power racks, platforms for real pulls, a dedicated
                dumbbell range up to 50kg, and cardio that isn't the first
                thing you see walking in. Every machine is chosen because a
                trainer asked for it, not because it looked good in a photo.
              </p>

              <Link
                href="/gallery"
                className="group mt-8 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              >
                See the floor
                <ArrowRight
                  className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </Link>
            </motion.div>

            <motion.div variants={fadeInRight} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/gallery/gallery-05.jpg"
                  alt="Power rack at PUNISHER"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square translate-y-8 overflow-hidden">
                <Image
                  src="/images/image14.jpg"
                  alt="Dumbbell range at PUNISHER"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/gallery/gallery-03.jpg"
                  alt="Deadlift platform at PUNISHER"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square translate-y-8 overflow-hidden">
                <Image
                  src="/images/image13.jpg"
                  alt="Cardio area at PUNISHER"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="25vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-32 lg:py-44">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp} className="mb-16 max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  The Iron Family
                </p>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                A floor full of people
                <span className="block text-white/25">who show up for you.</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  quote:
                    "I've missed two sessions in a year and both times someone texted asking where I was.",
                  name: "Member since 2021",
                },
                {
                  quote:
                    "Nobody here cares what your first session looked like. They care that you had one.",
                  name: "Member since 2023",
                },
                {
                  quote:
                    "It's the first gym where the guy spotting my bench actually watches the bar, not his phone.",
                  name: "Member since 2020",
                },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  variants={scaleIn}
                  className="border border-white/5 bg-white/[0.02] p-8"
                >
                  <Flame className="mb-6 h-6 w-6 text-red-500" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                    "{item.quote}"
                  </p>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/about/cta.jpg"
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
            <motion.div variants={fadeInUp} className="mb-5 flex items-center justify-center gap-3">
              <Dumbbell className="h-5 w-5 text-red-500" strokeWidth={1.5} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500">
                Come see it yourself
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Your first session
              <span className="block text-red-500">is on us.</span>
            </motion.h2>

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