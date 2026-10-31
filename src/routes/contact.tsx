import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Queens Medicare — Dubagga, Lucknow · Open 24 Hours" },
      {
        name: "description",
        content:
          "Find Queens Medicare near Sitapur Bypass, Dubagga, Lucknow. Call 094500 46320 any time, day or night.",
      },
      { property: "og:title", content: "Visit Queens Medicare, Lucknow" },
      {
        property: "og:description",
        content: "Open 24 hours near Sitapur Bypass, Dubagga. Call 094500 46320.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const wa = `${CLINIC.whatsapp}?text=${encodeURIComponent(`Hello Queens Medicare, I am ${name}. ${msg}`)}`;

  const cards = [
    { i: Phone, t: "Call us", v: CLINIC.phone, h: CLINIC.phoneHref },
    { i: Clock, t: "Hours", v: "Open 24 hours, 7 days" },
    { i: MapPin, t: "Address", v: CLINIC.shortAddress, h: CLINIC.maps },
  ];

  return (
    <>
      <PageHero
        eyebrow="Visit us"
        title={
          <>
            We're here, <em className="text-coral">day and night.</em>
          </>
        }
      >
        Near Sitapur Bypass in Dubagga, Lucknow. Walk in, call ahead, or message us on WhatsApp.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((c, i) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-soft text-coral">
                    <c.i className="h-5 w-5" />
                  </span>
                  <p className="eyebrow mt-6 text-muted-foreground">{c.t}</p>
                  <p className="mt-2 font-display text-2xl text-primary-deep">{c.v}</p>
                </>
              );
              return (
                <Reveal key={c.t} delay={i * 100}>
                  {c.h ? (
                    <a
                      href={c.h}
                      target={c.h.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block h-full rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-3xl border border-border bg-card p-8">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <Reveal className="overflow-hidden rounded-[2rem] border border-border lg:col-span-3">
              <iframe
                title="Queens Medicare location"
                src="https://www.google.com/maps?q=Queens+Medicare+Dubagga+Lucknow&output=embed"
                className="h-[26rem] w-full lg:h-full"
                loading="lazy"
              />
            </Reveal>
            <Reveal
              delay={100}
              className="rounded-[2rem] bg-ink-gradient p-8 text-ink-foreground sm:p-10 lg:col-span-2"
            >
              <h2 className="text-3xl font-medium">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-foreground/70">
                It opens WhatsApp with your note ready to send.
              </p>
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(wa, "_blank");
                }}
              >
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 px-5 py-4 text-ink-foreground placeholder:text-ink-foreground/40 focus:border-coral focus:outline-none"
                />
                <textarea
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={4}
                  placeholder="How can we help? (e.g. book an antenatal check-up)"
                  className="w-full resize-none rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 px-5 py-4 text-ink-foreground placeholder:text-ink-foreground/40 focus:border-coral focus:outline-none"
                />
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-coral-gradient px-6 py-4 font-semibold text-primary-foreground shadow-coral">
                  <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                </button>
              </form>
              <a
                href={CLINIC.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-ink-foreground/80 hover:text-coral"
              >
                <Navigation className="h-4 w-4" /> Open directions in Google Maps
              </a>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">{CLINIC.address}</p>
        </div>
      </section>
    </>
  );
}
