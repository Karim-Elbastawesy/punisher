"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const categories = [
  "All",
  "Training Floor",
  "Equipment",
  "Trainers",
  "Classes",
  "Community",
] as const;

type Category = (typeof categories)[number];

type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  width: number;
  height: number;
};

const images: GalleryImage[] = [
  { src: "/images/gallery/gallery-02.jpg", alt: "Free weights section on the PUNISHER training floor", category: "Training Floor", width: 800, height: 1000 },
  { src: "/images/rack.jpg", alt: "Power rack lined up on the training floor", category: "Training Floor", width: 800, height: 600 },
  { src: "/images/gallery/gallery-04.jpg", alt: "Wide view of the main training floor", category: "Training Floor", width: 800, height: 900 },
  { src: "/images/gallery/gallery-03.jpg", alt: "Deadlift platform on the training floor", category: "Training Floor", width: 800, height: 700 },
  { src: "/images/dumbells.jpg", alt: "Dumbbell rack up to 50kg", category: "Equipment", width: 800, height: 1000 },
  { src: "/images/cable.jpg", alt: "Cable machine close-up", category: "Equipment", width: 800, height: 650 },
  { src: "/images/barbell.jpg", alt: "Barbell and weight plates", category: "Equipment", width: 800, height: 950 },
  { src: "/images/cardio.jpg", alt: "Cardio equipment row", category: "Equipment", width: 800, height: 600 },
  { src: "/images/spotting.jpg", alt: "Coach spotting a member on bench press", category: "Trainers", width: 800, height: 1000 },
  { src: "/images/deadlift.jpg", alt: "Coach demonstrating a deadlift setup", category: "Trainers", width: 800, height: 700 },
  { src: "/images/review.avif", alt: "Coach reviewing a member's training log", category: "Trainers", width: 800, height: 850 },
  { src: "/images/group.jpg", alt: "Small group class mid-session", category: "Classes", width: 800, height: 1000 },
  { src: "/images/kettle.jpg", alt: "Conditioning class using kettlebells", category: "Classes", width: 800, height: 650 },
  { src: "/images/basic.jpg", alt: "Beginner class learning basic movement patterns", category: "Classes", width: 800, height: 900 },
  { src: "/images/resting.jpg", alt: "Members resting between sets and talking", category: "Community", width: 800, height: 700 },
  { src: "/images/celeb.jpg", alt: "Member celebrating a new personal record", category: "Community", width: 800, height: 1000 },
  { src: "/images/resting2.jpg", alt: "Group of members after a Saturday session", category: "Community", width: 800, height: 800 },
  { src: "/images/chalk.webp", alt: "Members chalking up before deadlifts", category: "Community", width: 800, height: 600 },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    lastTriggerRef.current?.focus();
  };

  const showNext = () => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % filtered.length
    );
  };

  const showPrev = () => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current - 1 + filtered.length) % filtered.length
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black">
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/gallery/gallery-00.jpg"
            alt="Wide shot of the PUNISHER training floor"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 lg:px-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                Inside PUNISHER
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              Built for
              <span className="block text-red-500">the work.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div
            role="tablist"
            aria-label="Filter gallery by category"
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeCategory === category
                    ? "border-red-500 bg-red-500 text-black"
                    : "border-white/15 text-white/55 hover:border-white/35 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(event) =>
                    openLightbox(index, event.currentTarget)
                  }
                  className="group relative mb-4 block w-full overflow-hidden text-left"
                  aria-label={`Open image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                  <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {image.category}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 sm:p-10"
            onClick={closeLightbox}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-red-500 hover:text-red-500"
            >
              <X className="h-5 w-5" strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-red-500 hover:text-red-500 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-red-500 hover:text-red-500 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.7} />
            </button>

            <motion.div
              key={activeImage.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[75vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden border-t border-white/5 py-32 lg:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/cta.jpg"
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
              See it in person.
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