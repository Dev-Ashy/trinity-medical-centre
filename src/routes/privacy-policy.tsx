import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy | Trinity Medical Centre" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div>
      <PageHero title="Privacy Policy" subtitle="How we protect your information." image="" imageAlt="" />
      <div className="container-tmc py-16 prose prose-neutral max-w-none">
        <p>Trinity Medical Centre respects your privacy. This policy outlines how we collect, use, and protect personal health information.</p>
        <h2>Collection</h2>
        <p>We collect information necessary to provide care, as required by law.</p>
        <h2>Use</h2>
        <p>Information is used solely for clinical care, billing, and communications.</p>
        <h2>Security</h2>
        <p>We maintain reasonable safeguards to protect your data.</p>
        <p className="text-xs text-muted-foreground">This is a template policy. Final legal review by TMC is required.</p>
      </div>
    </div>
  );
}
