"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Dumbbell,
  Flame,
  MapPin,
  Target,
  Trophy,
  Users,
  Clock3,
  SeparatorVerticalIcon,
} from "lucide-react";

import { motion, type Variants } from "motion/react";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    desc: "Professional-grade machines and free weights built for serious training.",
  },
  {
    icon: Flame,
    title: "High Intensity",
    desc: "A focused environment designed to keep your sessions demanding.",
  },
  {
    icon: Target,
    title: "Expert Coaching",
    desc: "Experienced trainers helping you train with purpose and consistency.",
  },
  {
    icon: Trophy,
    title: "Iron Culture",
    desc: "A community built around discipline, progress, and showing up.",
  },
];

const programs = [
  {
    number: "01",
    title: "Strength",
    description:
      "Build raw strength through structured resistance training and progressive overload.",
    image: "/images/strength.jpg",
  },
  {
    number: "02",
    title: "Bodybuilding",
    description:
      "Train with intention and build muscle through focused hypertrophy sessions.",
    image: "/images/bodybuilding1.jpg",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "One-on-one coaching built around your goals, experience, and training level.",
    image: "/images/trainer.png",
  },
];

const trainers = [
  {
    name: "Adam Hassan",
    role: "Strength Coach",
    specialty: "Strength & Conditioning",
    image: "/images/staff01.jpg",
  },
  {
    name: "Youssef Adel",
    role: "Bodybuilding Coach",
    specialty: "Hypertrophy & Nutrition",
    image: "/images/staff02.jpg",
  },
  {
    name: "Islam Khaled",
    role: "Personal Trainer",
    specialty: "Performance Training",
    image: "/images/staff03.jpg",
  },
];

const membershipFeatures = [
  "Full gym access",
  "Professional equipment",
  "Locker room access",
  "Free fitness assessment",
  "Training guidance",
];

const galleryImages = [
  {
    src: "/images/gallery/gallery-01.jpg",
    alt: "PUNISHER gym equipment",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery/gallery-02.jpg",
    alt: "Athlete training at PUNISHER",
    className: "",
  },
  {
    src: "/images/gallery/gallery-03.jpg",
    alt: "PUNISHER training floor",
    className: "",
  },
  {
    src: "/images/gallery/gallery-04.jpg",
    alt: "Strength training at PUNISHER",
    className: "md:col-span-2",
  },
];

export default function PunisherGymPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image01.jpg"
            alt="Athlete training inside PUNISHER Fitness Club"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/80 to-transparent" />

          <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-32 lg:px-10 lg:pb-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-red-500" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                PUNISHER FITNESS CLUB
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-6 text-[10px] uppercase tracking-[0.28em] text-red-500 sm:text-xs"
            >
              Mansoura, Egypt
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="max-w-5xl text-5xl font-bold uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]"
            >
              Built through
              <span className="block text-red-500">discipline.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8"
            >
              Strength, conditioning, and serious training for people who
              refuse to stay average.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/book-a-trial"
                className="group inline-flex items-center justify-center gap-3 bg-red-500 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-red-400"
              >
                Book a free trial

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                href="#programs"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Explore programs

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
              <span>06:00 — 23:00</span>
              <span>MON — SAT</span>
              <span>MANSOURA, EGYPT</span>
            </div>

            <Link
              href="#discover"
              className="group inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white sm:text-[10px]"
            >
              Scroll to discover

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-red-500 group-hover:text-red-500">
                <ArrowDownRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO / PHILOSOPHY
      ========================================================== */}
      <section
        id="discover"
        className="relative overflow-hidden bg-zinc-950 py-32 lg:py-44"
      >
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/[0.04] blur-[140px]" />

        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-28"
          >
            <div>
              <motion.div
                variants={fadeInLeft}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-red-500" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  Our Philosophy
                </p>
              </motion.div>

              <motion.h2
                variants={fadeInLeft}
                className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl"
              >
                No excuses.
                <span className="block text-white/25">Just results.</span>
              </motion.h2>

              <motion.p
                variants={fadeInLeft}
                className="mt-8 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base"
              >
                We did not build PUNISHER to be another place where people
                show up once a week. We built a serious training environment
                for people who understand that progress comes from consistency,
                patience, and putting in the work.
              </motion.p>

              <motion.div variants={fadeInLeft} className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Discover our philosophy

                  <ArrowRight
                    className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.7}
                  />
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={scaleIn}
                    className="group border border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.04] sm:p-8"
                  >
                    <Icon
                      className="mb-7 h-8 w-8 text-red-500 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />

                    <h3 className="mb-3 text-lg font-bold uppercase tracking-wide">
                      {feature.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="border-y border-white/5 bg-black">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "2K+",
              label: "Members",
              icon: Users,
            },
            {
              number: "25+",
              label: "Machines",
              icon: Dumbbell,
            },
            {
              number: "8+",
              label: "Expert Trainers",
              icon: Trophy,
            },
            {
              number: "17h",
              label: "Open Daily",
              icon: Clock3,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group border-b border-r border-white/5 px-6 py-12 last:border-r-0 sm:px-10 lg:border-b-0 lg:py-16"
              >
                <Icon
                  className="mb-6 h-5 w-5 text-red-500/70 transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />

                <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.number}
                </div>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-white/30">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================== */}
      <section
        id="programs"
        className="bg-black py-32 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-red-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Train With Purpose
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <h2 className="max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Programs designed
                <span className="block text-white/25">
                  for real progress.
                </span>
              </h2>

              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                View all programs

                <ArrowRight
                  className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </Link>
            </motion.div>

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {programs.map((program, index) => (
                <motion.div
                  key={program.number}
                  variants={scaleIn}
                  className={`group relative overflow-hidden border border-white/5 bg-zinc-950 ${index === 1 ? "lg:translate-y-12" : ""
                    }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                      <span className="text-[10px] font-semibold tracking-[0.25em] text-red-500">
                        {program.number}
                      </span>

                      <h3 className="mt-3 text-3xl font-bold uppercase tracking-tight">
                        {program.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-xs leading-6 text-white/55">
                        {program.description}
                      </p>

                      <Link
                        href="/programs"
                        className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-red-500"
                      >
                        Learn more
                        <ArrowRight
                          className="h-3.5 w-3.5"
                          strokeWidth={1.7}
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          IMAGE BREAK
      ========================================================== */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/image02.jpg"
          alt="PUNISHER gym floor"
          fill
          className="object-cover object-center grayscale"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/80" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeInUp}
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500"
              >
                The PUNISHER Standard
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                className="mt-6 text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
              >
                Train hard.
                <span className="block text-white/30">Stay relentless.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-lg text-sm leading-7 text-white/55 sm:text-base"
              >
                Every session is another opportunity to become stronger,
                faster, more capable, and more disciplined than you were
                yesterday.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINERS
      ========================================================== */}
      <section
        id="trainers"
        className="bg-zinc-950 py-32 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  Meet The Team
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Coaches who know
                <span className="block text-white/25">how to push you.</span>
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {trainers.map((trainer) => (
                <motion.article
                  key={trainer.name}
                  variants={scaleIn}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
                        {trainer.role}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight">
                        {trainer.name}
                      </h3>

                      <p className="mt-2 text-xs text-white/45">
                        {trainer.specialty}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                href="/trainers"
                className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              >
                Meet all trainers
                <ArrowRight
                  className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section
        id="gallery"
        className="bg-black py-32 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-red-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    Inside PUNISHER
                  </span>
                </div>

                <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                  Built for
                  <span className="block text-white/25">the work.</span>
                </h2>
              </div>

              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                View full gallery

                <ArrowRight
                  className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </Link>
            </motion.div>

            <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
              {galleryImages.map((image) => (
                <motion.div
                  key={image.src}
                  variants={scaleIn}
                  className={`group relative overflow-hidden ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MEMBERSHIP
      ========================================================== */}
      <section
        id="membership"
        className="border-y border-white/5 bg-zinc-950 py-32 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"
          >
            <motion.div variants={fadeInLeft}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  Membership
                </span>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Your strongest
                <span className="block text-red-500">chapter starts here.</span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                Simple memberships. Serious equipment. No unnecessary
                complications. Pick the commitment that fits your goals and
                get to work.
              </p>

              <Link
                href="/memberships"
                className="group mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              >
                Compare memberships

                <ArrowRight
                  className="h-4 w-4 text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.7}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="border border-white/10 bg-black p-8 sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-8">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
                    Most Popular
                  </p>

                  <h3 className="mt-3 text-3xl font-bold uppercase">
                    Standard
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-bold">5,999</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    EGP / 3 MONTHS
                  </p>
                </div>
              </div>

              <div className="py-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {membershipFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-xs text-white/60"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <Check className="h-3 w-3" strokeWidth={2} />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/book-a-trial"
                className="group flex w-full items-center justify-center gap-3 bg-red-500 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-red-400"
              >
                Start your journey

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-black py-32 lg:py-44"
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <motion.div variants={fadeInLeft}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  Find Us
                </span>
              </div>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Come train
                <span className="block text-white/25">with us.</span>
              </h2>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" strokeWidth={1.5} />

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Mansoura, Dakahlia, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-red-500" strokeWidth={1.5} />

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      Opening Hours
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Monday — Saturday
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      06:00 — 23:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white/90"
                >
                  Get directions
                  <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/10 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <SeparatorVerticalIcon className="h-4 w-4" strokeWidth={1.5} />
                  Instagram
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative min-h-[380px] overflow-hidden border border-white/10 bg-zinc-950 lg:min-h-[500px]"
            >
              {/* Replace this with an actual map embed later */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_45%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:45px_45px]" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                  <MapPin
                    className="h-7 w-7 text-red-500"
                    strokeWidth={1.5}
                  />

                  <span className="absolute inset-0 animate-ping rounded-full border border-red-500/20" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  PUNISHER FITNESS CLUB
                </p>

                <p className="mt-1 text-xs text-white/70">
                  Mansoura, Egypt
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/image03.jpg"
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
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-5 flex items-center justify-center gap-3"
            >
              <span className="h-px w-8 bg-red-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500">
                Your move
              </span>

              <span className="h-px w-8 bg-red-500" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]"
            >
              Ready to
              <span className="block text-red-500">get stronger?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base"
            >
              Stop waiting for the perfect time. Book your free trial and
              experience PUNISHER for yourself.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            >
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

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/15 px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}