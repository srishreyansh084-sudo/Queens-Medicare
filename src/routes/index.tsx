import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  BadgeCheck,
  Clock,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import hero from "@/assets/hero-mother.jpg";
import doctor from "@/assets/doctor.jpg";
import hospital from "@/assets/hospital.jpg";
import newborn from "@/assets/newborn.jpg";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Queens Medicare — Safe Births & Women's Care in Lucknow" },
      {
        name: "description",
        content:
          "NABH accredited maternity hospital led by Dr. Nihan Iqbal. 24/7 deliveries, pregnancy care and newborn support in Dubagga, Lucknow. Rated 4.9 by 532 families.",
      },
      { property: "og:title", content: "Queens Medicare — Safe Births & Women's Care in Lucknow" },
      {
        property: "og:description",
        content: "24/7 NABH accredited maternity care in Lucknow, rated 4.9 by 532 families.",
      },
    ],
  }),
  component: Home,
});

const JOURNEY = [
  {
    n: "01",
    t: "The first heartbeat",
    d: "From your first positive test, we plan every scan, test and visit with you — clearly explained, never rushed.",
  },
  {
    n: "02",
    t: "Nine months, together",
    d: "Regular antenatal check-ups, nutrition guidance and a direct line to our team for every worry, big or small.",
  },
  {
    n: "03",
    t: "The day you meet",
    d: "Normal and caesarean deliveries in a fully equipped labour suite, with doctors present round the clock.",
  },
  {
    n: "04",
    t: "Home, with confidence",
    d: "Newborn checks, breastfeeding support and postnatal follow-ups so the fourth trimester feels lighter.",
  },
];

const SERVICES = [
  {
    icon: HeartPulse,
    t: "Antenatal Care",
    d: "Structured check-ups and monitoring through every trimester.",
  },
  {
    icon: Baby,
    t: "Normal & C-Section Delivery",
    d: "Safe, dignified births with 24/7 obstetric cover.",
  },
  {
    icon: ShieldCheck,
    t: "High-Risk Pregnancy",
    d: "Close supervision for complex and sensitive cases.",
  },
  {
    icon: Stethoscope,
    t: "Gynaecology",
    d: "Menstrual, hormonal and reproductive health concerns.",
  },
  { icon: Syringe, t: "Newborn Care", d: "Vaccinations, screening and first-days guidance." },
  {
    icon: Users,
    t: "Family Planning",
    d: "Confidential, judgement-free counselling for every couple.",
  },
];

const REVIEWS = [
  {
    q: "From admission to discharge the staff treated us like family. Doctor ma'am explained everything with so much patience.",
    n: "Verified Google review",
  },
  {
    q: "We came in at 2 AM, nervous and scared. Within minutes the team had everything under control. Our daughter was born healthy.",
    n: "Verified Google review",
  },
  {
    q: "Clean rooms, caring nurses and honest advice. I would recommend Queens Medicare to every mother in Lucknow.",
    n: "Verified Google review",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral-soft px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                <BadgeCheck className="h-4 w-4" /> NABH Accredited · Open 24 hours
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-medium leading-[1.02] text-primary-deep sm:text-6xl xl:text-7xl">
                Where every <em className="font-normal text-coral">new beginning</em> is held with
                care.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Queens Medicare is a maternity hospital in Lucknow led by {CLINIC.doctor}. For
                hundreds of families, we have been the calm, experienced hands at the most important
                moment of their lives.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-4 font-semibold text-primary-foreground shadow-coral transition hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Book a consultation
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-deep/15 bg-card px-7 py-4 font-semibold text-primary-deep transition hover:border-primary"
              >
                Explore our care <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[newborn, doctor, hero].map((s, i) => (
                  <img
                    key={i}
                    src={s}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                  <span className="ml-1 font-semibold text-primary-deep">{CLINIC.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by {CLINIC.reviews}+ families on Google
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <Reveal delay={150} className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rotate-3 rounded-[3rem] bg-coral-gradient opacity-20" />
              <img
                src={hero}
                alt="A mother holding her newborn at Queens Medicare"
                width={1280}
                height={1536}
                className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-soft"
              />
              {/* glass accent cards — used sparingly */}
              <div className="glass absolute -left-4 bottom-10 rounded-2xl p-4 shadow-soft animate-float sm:-left-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary-deep">24 × 7 Labour Room</p>
                    <p className="text-xs text-muted-foreground">Doctors on call, always</p>
                  </div>
                </div>
              </div>
              <div
                className="glass absolute -right-3 top-8 rounded-2xl px-4 py-3 shadow-soft sm:-right-8"
                style={{ animation: "float-y 7s ease-in-out infinite 1s" }}
              >
                <p className="font-display text-3xl font-semibold text-coral">4.9★</p>
                <p className="text-xs text-muted-foreground">532 reviews</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-card py-5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-12 pr-12 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "NABH Accredited",
                "Open 24 Hours",
                "Normal & C-Section Deliveries",
                "High-Risk Pregnancy Care",
                "Newborn Care",
                "LGBTQ+ Friendly",
                "Gynaecology",
                "Family Planning",
              ].map((t) => (
                <span key={t + k} className="flex items-center gap-12 whitespace-nowrap">
                  {t}
                  <Sparkles className="h-4 w-4 text-coral" />
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* STORY / PROMISE */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <img
              src={doctor}
              alt="Doctor consulting an expecting mother"
              loading="lazy"
              width={1280}
              height={1024}
              className="aspect-[5/4] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-8 right-6 max-w-[15rem] rounded-2xl bg-primary-deep p-6 text-primary-foreground shadow-soft">
              <p className="font-display text-4xl font-semibold">Every</p>
              <p className="mt-1 text-sm text-primary-foreground/75">
                question answered, every visit unhurried.
              </p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-coral">Our promise</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-4xl font-medium leading-tight text-primary-deep sm:text-5xl">
                A hospital built around how a mother <em className="text-coral">feels</em>, not just
                what she needs.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Pregnancy is medical, but it is also deeply personal. At Queens Medicare,{" "}
                {CLINIC.doctor} and her team pair NABH-certified clinical standards with the warmth
                of a neighbourhood hospital — where nurses know your name and doctors take the time
                to explain.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  i: ShieldCheck,
                  t: "NABH standards",
                  d: "Nationally audited safety, hygiene and patient-care protocols.",
                },
                { i: Clock, t: "Never closed", d: "Emergencies don't keep hours. Neither do we." },
              ].map((f, k) => (
                <Reveal
                  key={f.t}
                  delay={300 + k * 100}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <f.i className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-sans text-base font-bold text-primary-deep">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-ink-gradient py-24 text-ink-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow text-coral">Your journey with us</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
                From the first heartbeat to the first step home.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-sm text-ink-foreground/70">
                Four chapters. One team that stays with you through all of them.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink-foreground/10 md:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((j, i) => (
              <Reveal
                key={j.n}
                delay={i * 120}
                className="group bg-ink p-8 transition-colors hover:bg-primary-deep"
              >
                <span className="font-display text-5xl font-light text-coral">{j.n}</span>
                <h3 className="mt-8 text-2xl font-medium">{j.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{j.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-coral">Care & services</p>
            <h2 className="mt-4 text-4xl font-medium text-primary-deep sm:text-5xl">
              Complete care for women, mothers & newborns.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.t}
                delay={i * 80}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-coral-soft opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 text-2xl font-medium text-primary-deep">{s.t}</h3>
                <p className="relative mt-2 text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-coral"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS + IMAGE */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={hospital}
              alt="Maternity ward at Queens Medicare"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-[28rem] w-full object-cover sm:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="glass-dark absolute inset-x-4 bottom-4 grid grid-cols-2 gap-6 rounded-3xl p-6 text-ink-foreground sm:inset-x-8 sm:bottom-8 sm:p-8 md:grid-cols-4">
              {[
                ["4.9", "Google rating"],
                ["532+", "Family reviews"],
                ["24/7", "Emergency & labour"],
                ["NABH", "Accredited hospital"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl font-semibold sm:text-4xl">{v}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/70">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-accent/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-coral">In their words</p>
            <h2 className="mt-4 text-4xl font-medium text-primary-deep sm:text-5xl">
              532 families. One feeling: <em className="text-coral">safe.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal
                key={i}
                delay={i * 120}
                className="flex flex-col rounded-3xl bg-card p-8 shadow-soft"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-6 flex-1 font-display text-xl leading-snug text-primary-deep">
                  “{r.q}”
                </p>
                <p className="mt-6 text-sm font-semibold text-muted-foreground">{r.n}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-coral-gradient px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10" />
            <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-primary-foreground/10" />
            <h2 className="relative mx-auto max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
              Expecting? Let's plan your safest birth, together.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-primary-foreground/85">
              Call any time — day or night. A real person from our team will answer.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 font-semibold text-accent-foreground transition hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> {CLINIC.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 font-semibold transition hover:bg-primary-foreground/10"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
