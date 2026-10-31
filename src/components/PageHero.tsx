import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-coral">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-medium leading-[1.05] text-primary-deep sm:text-6xl">
            {title}
          </h1>
          {children && (
            <div className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {children}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
