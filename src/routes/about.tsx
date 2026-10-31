import { createFileRoute } from "@tanstack/react-router";
import { Heart, Eye, Handshake, Rainbow } from "lucide-react";
import doctor from "@/assets/doctor.jpg";
import hospital from "@/assets/hospital.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Dr. Nihan Iqbal & Queens Medicare, Lucknow" },
      {
        name: "description",
        content:
          "Meet Dr. Nihan Iqbal and the team behind Queens Medicare, a NABH accredited maternity hospital caring for families in Lucknow.",
      },
      { property: "og:title", content: "Our Story — Queens Medicare" },
      {
        property: "og:description",
        content: "Why Dr. Nihan Iqbal built a maternity hospital that feels like family.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    i: Heart,
    t: "Compassion first",
    d: "Fear is normal. We meet it with patience, honesty and a hand to hold.",
  },
  {
    i: Eye,
    t: "Total transparency",
    d: "Clear explanations of every test, procedure and cost, before it happens.",
  },
  {
    i: Handshake,
    t: "Clinical rigour",
    d: "NABH accreditation means our safety practices are independently audited.",
  },
  {
    i: Rainbow,
    t: "Everyone welcome",
    d: "An LGBTQ+ friendly space where every family is treated with dignity.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Built by a doctor who believes birth should feel <em className="text-coral">safe.</em>
          </>
        }
      >
        Queens Medicare began with a simple idea: mothers in Lucknow deserve world-class standards
        without losing the warmth of personal care.
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img
              src={doctor}
              alt={CLINIC.doctor}
              loading="lazy"
              width={1280}
              height={1024}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-coral">Meet the founder</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-5xl font-medium text-primary-deep">{CLINIC.doctor}</h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-2 font-semibold text-primary">
                Obstetrician & Gynaecologist · Founder, Queens Medicare
              </p>
            </Reveal>
            <Reveal
              delay={200}
              className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground"
            >
              <p>
                Every mother who walks through our doors carries hope, and often a little fear.{" "}
                {CLINIC.doctor} built Queens Medicare to answer both — with sound medicine and
                genuine kindness.
              </p>
              <p>
                Under her leadership the hospital earned NABH accreditation, India's national
                benchmark for hospital quality and patient safety, while staying open around the
                clock for the families of Dubagga, Sitapur Road and greater Lucknow.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <blockquote className="mt-10 border-l-4 border-coral pl-6 font-display text-2xl italic leading-snug text-primary-deep">
                “A mother should leave our hospital remembering her baby's first cry — not her own
                worry.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-coral">What we stand for</p>
            <h2 className="mt-4 text-4xl font-medium text-primary-deep sm:text-5xl">
              Four promises we keep, every shift.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="rounded-3xl bg-card p-8">
                <v.i className="h-7 w-7 text-coral" />
                <h3 className="mt-6 text-2xl font-medium text-primary-deep">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={hospital}
              alt="Inside Queens Medicare"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-[26rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center p-8 text-ink-foreground sm:p-14">
              <p className="eyebrow text-coral">The hospital</p>
              <h2 className="mt-3 text-4xl font-medium">
                Clean, calm rooms designed for recovery.
              </h2>
              <p className="mt-4 text-ink-foreground/75">
                Private and shared rooms, a dedicated labour suite and an operation theatre — all
                under NABH protocols.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
