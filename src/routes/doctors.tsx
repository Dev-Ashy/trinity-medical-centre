import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { stock } from "@/data/images";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors & Medical Team | Trinity Medical Centre" },
      { name: "description", content: "Meet the Trinity Medical Centre medical team. Doctor identities and qualifications will be published after clinic confirmation." },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <div>
      <PageHero
        title="Doctors & Medical Team"
        subtitle="Committed professionals providing compassionate care."
        image={stock.doctorConsult}
        imageAlt="Doctor consultation"
      />
      <div className="container-tmc py-16">
        <p className="text-muted-foreground">
          Doctor names, qualifications, and specialities are pending confirmation by Trinity Medical Centre administration. This page will be updated with verified team profiles once approved.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-border bg-white p-6 text-center">
              <img src={stock.doctorWhiteCoat} alt="Placeholder" className="mx-auto h-32 w-32 rounded-full object-cover" />
              <h3 className="mt-4 font-semibold text-navy">Doctor Name TBC</h3>
              <p className="text-sm text-muted-foreground">Qualifications pending verification</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
