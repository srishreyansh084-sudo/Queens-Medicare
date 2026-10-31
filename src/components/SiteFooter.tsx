import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              A NABH accredited maternity hospital in Lucknow, led by {CLINIC.doctor}. Safe births,
              gentle care and a team that never sleeps, so you can rest.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-4 py-2 text-sm">
              <Star className="h-4 w-4 fill-gold text-gold" /> {CLINIC.rating} · {CLINIC.reviews}{" "}
              Google reviews
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="eyebrow text-ink-foreground/50">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-coral">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-coral">
                  Care & Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-coral">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-coral">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm md:col-span-4">
            <h4 className="eyebrow text-ink-foreground/50">Reach us</h4>
            <a href={CLINIC.phoneHref} className="flex gap-3 hover:text-coral">
              <Phone className="h-4 w-4 shrink-0 text-coral" />
              {CLINIC.phone}
            </a>
            <p className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-coral" />
              Open 24 hours, all 7 days
            </p>
            <a
              href={CLINIC.maps}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 text-ink-foreground/80 hover:text-coral"
            >
              <MapPin className="h-4 w-4 shrink-0 text-coral" />
              {CLINIC.address}
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Queens Medicare. All rights reserved.</p>
          <p>In an emergency, call us directly — we are always open.</p>
        </div>
      </div>
    </footer>
  );
}
