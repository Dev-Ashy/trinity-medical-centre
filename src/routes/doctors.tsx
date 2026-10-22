import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors & Medical Team | Trinity Medical Centre" },
      { name: "description", content: "Meet the Trinity Medical Centre medical team." },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <div>
      <PageHero title="Doctors & Medical Team" subtitle="Committed professionals providing compassionate care." />
      <div className="container-tmc py-16">
        <p className="text-muted-foreground max-w-[65ch]">
          Doctor names, qualifications, and specialities are pending confirmation by Trinity Medical Centre administration. This page will be updated with verified team profiles once approved.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-border bg-navy p-6 text-center text-white">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tmc-gold text-navy font-bold">TMC</div>
              <h3 className="mt-4 font-semibold">Team profile pending</h3>
              <p className="text-sm text-white/70">Verified details will be published after clinic approval.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
