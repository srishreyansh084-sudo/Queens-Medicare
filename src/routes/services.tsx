import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Check,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  Activity,
} from "lucide-react";
import newborn from "@/assets/newborn.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Maternity & Women's Care Services — Queens Medicare Lucknow" },
      {
        name: "description",
        content:
          "Antenatal care, normal and C-section delivery, high-risk pregnancy, gynaecology, newborn care and family planning at Queens Medicare, Lucknow.",
      },
      { property: "og:title", content: "Care & Services — Queens Medicare" },
      {
        property: "og:description",
        content: "Complete maternity, gynaecology and newborn care, available 24/7 in Lucknow.",
      },
    ],
  }),
  component: Services,
});

const LIST = [
  {
    icon: HeartPulse,
    t: "Antenatal Care",
    d: "A clear plan for all three trimesters — check-ups, scans, blood work and diet advice, timed to your pregnancy.",
    p: [
      "Trimester-wise check-up schedule",
      "Nutrition & supplement guidance",
      "Foetal growth monitoring",
    ],
  },
  {
    icon: Baby,
    t: "Normal Delivery",
    d: "We support natural birth wherever it is safe, with patient labour monitoring and pain-relief options.",
    p: ["24/7 labour suite", "Continuous monitoring", "Birth companion friendly"],
  },
  {
    icon: Activity,
    t: "Caesarean Section",
    d: "When surgery is the safest path, our operation theatre and team are ready at any hour.",
    p: ["Planned & emergency C-sections", "Modern OT setup", "Careful post-op recovery"],
  },
  {
    icon: ShieldCheck,
    t: "High-Risk Pregnancy",
    d: "Extra attention for conditions like gestational diabetes, high blood pressure, twins or previous complications.",
    p: ["Closer follow-up visits", "Specialist coordination", "Personalised birth plan"],
  },
  {
    icon: Stethoscope,
    t: "Gynaecology",
    d: "Care for periods, PCOS, infections, fibroids and other concerns — discussed privately and respectfully.",
    p: ["PCOS & hormonal care", "Menstrual health", "Routine screenings"],
  },
  {
    icon: Syringe,
    t: "Newborn Care",
    d: "Your baby's first examinations, vaccinations and feeding support before and after you go home.",
    p: ["Newborn examination", "Vaccination guidance", "Breastfeeding support"],
  },
  {
    icon: Users,
    t: "Family Planning",
    d: "Confidential counselling to help you choose what's right for your family and your health.",
    p: ["Contraception advice", "Pre-conception counselling", "Spacing between pregnancies"],
  },
  {
    icon: Microscope,
    t: "Diagnostics & Tests",
    d: "Essential pregnancy and women's health tests coordinated under one roof to save you running around.",
    p: ["Pregnancy blood panels", "Ultrasound coordination", "Quick reports"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Care & services"
        title={
          <>
            Every stage of womanhood, <em className="text-coral">cared for.</em>
          </>
        }
      >
        From the first consultation to your baby's first vaccine — one hospital, one team, open 24
        hours.
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {LIST.map((s, i) => (
            <Reveal
              key={s.t}
              delay={(i % 2) * 100}
              className="group rounded-[2rem] border border-border bg-card p-8 transition duration-500 hover:border-primary/40 hover:shadow-soft sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-coral-gradient group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-medium text-primary-deep">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
              <ul className="mt-6 space-y-2.5">
                {s.p.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm font-medium text-foreground"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-coral-soft text-coral">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-ink-gradient px-6 text-ink-foreground lg:grid-cols-2 lg:px-0">
          <img
            src={newborn}
            alt="Newborn feet in a parent's hands"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full max-h-[26rem] w-full rounded-3xl object-cover lg:rounded-none"
          />
          <Reveal className="pb-12 lg:py-16 lg:pr-16">
            <p className="eyebrow text-coral">Not sure where to start?</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              Talk to us. We'll guide you to the right care.
            </h2>
            <p className="mt-4 text-ink-foreground/70">
              One call is enough to book your visit or get advice in an emergency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CLINIC.phoneHref}
                className="rounded-full bg-coral-gradient px-7 py-4 font-semibold text-primary-foreground shadow-coral"
              >
                Book Appointment
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-7 py-4 font-semibold"
              >
                Visit us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
