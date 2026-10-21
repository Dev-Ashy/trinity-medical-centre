import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/data/site";
import { stock } from "@/data/images";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Trinity Medical Centre" },
      { name: "description", content: "Request an appointment at Trinity Medical Centre. Online requests are not confirmed until clinic responds." },
    ],
  }),
  component: BookAppointment,
});

function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // No backend configured – show truthful fallback
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Book an Appointment"
        subtitle="Send a request. We will contact you to confirm availability."
        image={stock.receptionDesk}
        imageAlt="Reception"
      />
      <div className="container-tmc py-16 max-w-2xl">
        {!submitted ? (
          <>
            <p className="mb-6 text-sm text-muted-foreground">
              An online appointment request is not confirmed until the clinic responds. You can also call {site.phone} or WhatsApp {site.whatsappDisplay}.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone / WhatsApp</label>
                <input required type="tel" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Preferred Service</label>
                <select required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2">
                  <option value="">Select...</option>
                  <option>General Outpatient & Family Medicine</option>
                  <option>Diagnostic Laboratory</option>
                  <option>Child Health & Paediatrics</option>
                  <option>Gynecology & Women's Health</option>
                  <option>General Eye Care</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2" rows={4} />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button type="submit" className="rounded-full bg-tmc-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-tmc-red/90">
                Submit Request
              </button>
              <p className="text-xs text-muted-foreground">
                No secure backend is configured. Requests are for demonstration only. For real booking, contact the clinic directly.
              </p>
            </form>
          </>
        ) : (
          <div className="rounded-2xl border border-border bg-white p-8 text-center">
            <h2 className="text-xl font-semibold text-navy">Request Received</h2>
            <p className="mt-2 text-muted-foreground">Thank you. The clinic will contact you to confirm your appointment. This is not a confirmed booking.</p>
            <p className="mt-4 text-sm">Prefer immediate help? <a href={site.phoneHref} className="text-royal underline">Call {site.phone}</a> or <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-royal underline">WhatsApp us</a>.</p>
          </div>
        )}
      </div>
    </div>
  );
}
