import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { stock } from "@/data/images";

export const Route = createFileRoute("/patient-information")({
  head: () => ({
    meta: [
      { title: "Patient Information & Visiting Guidelines | Trinity Medical Centre" },
      { name: "description", content: "Guidelines for patients visiting Trinity Medical Centre." },
    ],
  }),
  component: PatientInfo,
});

function PatientInfo() {
  return (
    <div>
      <PageHero title="Patient Information & Visiting Guidelines" subtitle="What to know before your visit." image={stock.nursePatient} imageAlt="Patient info" />
      <div className="container-tmc py-16 prose prose-neutral max-w-none">
        <h2>Before you arrive</h2>
        <ul>
          <li>Bring valid ID and any referral letters.</li>
          <li>Bring a list of current medications.</li>
          <li>Arrive 15 minutes early for registration.</li>
        </ul>
        <h2>Visiting guidelines</h2>
        <p>Visiting hours and policies are to be confirmed by TMC administration.</p>
        <h2>Privacy & safety</h2>
        <p>Your data is handled in accordance with our Privacy Policy. For questions, contact the clinic.</p>
      </div>
    </div>
  );
}
