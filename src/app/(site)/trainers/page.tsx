"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { motion } from "motion/react";

import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportOnce,
} from "@/lib/motion";

const trainers = [
  {
    name: "Adam Hassan",
    role: "Strength Coach",
    specialty: "Strength & Conditioning",
    experience: "9+ years coaching",
    image: "/images/staff01.jpg",
    bio: "Former national-level powerlifter who's spent the last six years coaching the squat, bench, and deadlift for lifters chasing their first 100kg to their next competition total.",
    certs: ["Certified Strength & Conditioning Specialist", "Powerlifting Coach Level 2"],
    instagram: "https://instagram.com",
  },
  {
    name: "Youssef Adel",
    role: "Bodybuilding Coach",
    specialty: "Hypertrophy & Nutrition",
    experience: "7+ years coaching",
    image: "/images/staff02.jpg",
    bio: "Competed in regional bodybuilding shows for four years before moving into full-time coaching. Builds split programs and contest prep around what your body actually recovers from.",
    certs: ["Certified Personal Trainer", "Sports Nutrition Certificate"],
    instagram: "https://instagram.com",
  },
  {
    name: "Islam Khaled",
    role: "Personal Trainer",
    specialty: "Performance Training",
    experience: "6+ years coaching",
    image: "/images/staff03.jpg",
    bio: "Works exclusively one-on-one, building programs around whatever you're dealing with — old injuries, tight schedules, or just not knowing where to start.",
    certs: ["Certified Personal Trainer", "Corrective Exercise Specialist"],
    instagram: "https://instagram.com",
  },
  {
    name: "Karim Fathy",
    role: "Functional Training Coach",
    specialty: "Mobility & Movement",
    experience: "5+ years coaching",
    image: "/images/staff04.jpg",
    bio: "Trained as a physiotherapy assistant before moving into coaching. Focuses on movement quality first, so your training holds up outside the gym too.",
    certs: ["Functional Movement Screen Certified", "Mobility Coach Certification"],
    instagram: "https://instagram.com",
  },
  {
    name: "Hossam Nabil",
    role: "Weight Loss Coach",
    specialty: "Fat Loss & Nutrition Coaching",
    experience: "6+ years coaching",
    image: "/images/staff05.jpg",
    bio: "Coaches sustainable fat loss without the crash-diet approach — resistance training kept in, nutrition kept realistic, and check-ins that actually hold you accountable.",
    certs: ["Certified Personal Trainer", "Precision Nutrition Level 1"],
    instagram: "https://instagram.com",
  },
  {
    name: "Mariam Sami",
    role: "Beginner Coach",
    specialty: "Foundations & Onboarding",
    experience: "4+ years coaching",
    image: "/images/staff06.jpg",
    bio: "Runs the beginner program because he remembers exactly how intimidating his own first gym session was. Patient, direct, and big on getting the basics right early.",
    certs: ["Certified Personal Trainer"],
    instagram: "https://instagram.com",
  },

{
  name: "Lara Ehab",
  role: "Head Strength Coach",
  specialty: "Strength & Hypertrophy",
  experience: "8+ years coaching",
  image: "/images/staff07.jpg",
  bio: "Lara specializes in building strength and muscle through structured training and progressive overload. Her approach is technical, disciplined, and focused on helping members become stronger without sacrificing proper form.",
  certs: ["Certified Personal Trainer", "Strength & Conditioning Specialist"],
  instagram: "https://instagram.com",
},
{
  name: "Lina Hassan",
  role: "Performance Coach",
  specialty: "Conditioning & Athletic Performance",
  experience: "6+ years coaching",
  image: "/images/staff08.jpg",
  bio: "Lina works with members who want to improve their speed, endurance, mobility, and overall physical performance. Her sessions combine conditioning and athletic movements to keep training challenging and purposeful.",
  certs: ["Certified Personal Trainer", "Sports Performance Specialist"],
  instagram: "https://instagram.com",
},
{
  name: "Salma Youssef",
  role: "Fitness & Wellness Coach",
  specialty: "Fat Loss & Lifestyle Training",
  experience: "5+ years coaching",
  image: "/images/staff09.jpg",
  bio: "Salma helps members build sustainable habits while working toward their fitness goals. She combines resistance training, conditioning, and practical lifestyle guidance to make progress something members can maintain long term.",
  certs: ["Certified Personal Trainer", "Nutrition & Wellness Coach"],
  instagram: "https://instagram.com",
},

];

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
      <section className="relative flex min-h-[65vh] items-end overflow-hidden pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image10.jpg"
            alt="Coach spotting a member on the bench press"
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
                Meet The Team
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              Coaches who
              <span className="block text-red-500">watch the bar.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Every coach at PUNISHER is certified, on the floor daily, and
              actually watching your form — not just your membership status.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 py-28 lg:py-36">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {trainers.map((trainer) => (
              <motion.article
                key={trainer.name}
                variants={scaleIn}
                className="group flex flex-col border border-white/5 bg-black transition-colors duration-500 hover:border-red-500/20"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-500">
                      {trainer.role}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight">
                      {trainer.name}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>{trainer.specialty}</span>
                    <span>{trainer.experience}</span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                    {trainer.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {trainer.certs.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[10px] text-white/45"
                      >
                        <Award className="h-3 w-3 text-red-500/70" strokeWidth={1.5} />
                        {cert}
                      </span>
                    ))}
                  </div>

                  <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} on Instagram`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-red-500"
                  >
                    {/* <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} /> */}
                    Follow
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/trainers/cta.jpg"
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
              Train under
              <span className="block text-red-500">real coaching.</span>
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