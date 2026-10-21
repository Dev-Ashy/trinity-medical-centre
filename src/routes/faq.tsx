import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { stock } from "@/data/images";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Trinity Medical Centre" },
      { name: "description", content: "Answers to common questions about visiting Trinity Medical Centre, appointments, and services." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const faqs = [
    { q: "How do I book an appointment?", a: "Use the Book an Appointment page or call 09169067009. Online requests are not confirmed until the clinic responds." },
    { q: "Where is Trinity Medical Centre located?", a: "Street address is to be confirmed by TMC administration. Please call for directions." },
    { q: "What are your operating hours?", a: "Hours are pending clinic confirmation." },
    { q: "Do you offer emergency care?", a: "Accident & Emergency triage is provisional pending clinic confirmation." },
    { q: "Is my data private?", a: "Yes. See our Privacy Policy for details." },
  ];
  return (
    <div>
      <PageHero title="Frequently Asked Questions" subtitle="Quick answers to help you." image={stock.recordsLaptop} imageAlt="FAQ" />
      <div className="container-tmc py-16">
        <div className="divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold text-navy">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
