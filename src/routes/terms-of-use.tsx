import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [{ title: "Terms of Use | Trinity Medical Centre" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div>
      <PageHero title="Terms of Use" subtitle="Website usage terms." image="" imageAlt="" />
      <div className="container-tmc py-16 prose prose-neutral max-w-none">
        <p>By using this website you agree to these terms. Content is for informational purposes only and does not constitute medical advice.</p>
        <p className="text-xs text-muted-foreground">Final legal review by TMC is required.</p>
      </div>
    </div>
  );
}
