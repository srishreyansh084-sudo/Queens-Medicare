import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Care & Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Visit Us" },
] as const;

export function Logo() {
  return (
    <Link to="/" aria-label="Queens Medicare home" className="flex items-center">
      <img
        src="/queen-medicare-wordmark.png"
        alt="Queens Medicare"
        className="h-auto w-[min(38vw,170px)] shrink-0"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-1.5 transition-all duration-500 sm:px-5",
          scrolled ? "glass shadow-soft" : "bg-transparent",
        )}
      >
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/75 transition hover:text-primary-deep"
              activeProps={{ className: "bg-secondary text-primary-deep" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-primary-deep px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Book Appointment
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary-deep shadow-soft lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-3xl p-4 shadow-soft lg:hidden animate-in fade-in slide-in-from-top-2">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-medium text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-secondary text-primary-deep" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CLINIC.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-coral-gradient px-4 py-3 font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
