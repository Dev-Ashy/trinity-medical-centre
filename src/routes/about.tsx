import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/data/site";
import { tmcPhotos } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trinity Medical Centre | Our Mission & Values" },
      { name: "description", content: "Learn about Trinity Medical Centre's mission, establishment date, and commitment to accessible, affordable, reliable healthcare." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHero
        title="About Trinity Medical Centre"
        subtitle="Established 17 August 2023. Quality care rooted in compassion and community trust."
        image={tmcPhotos.grounds}
        imageAlt="TMC grounds"
      />
      <div className="container-tmc py-16">
        <div className="prose prose-neutral max-w-none">
          <h2>Our Mission</h2>
          <p>
            Trinity Medical Centre exists to deliver accessible, affordable, and reliable healthcare to individuals and families. We combine clinical competence with respectful, patient-centred communication.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Compassion:</strong> Caring for each patient with dignity.</li>
            <li><strong>Excellence:</strong> Evidence-based practice and continuous improvement.</li>
            <li><strong>Accessibility:</strong> Timely access and clear information.</li>
            <li><strong>Integrity:</strong> Transparent communication with patients and families.</li>
          </ul>
          <h2>History</h2>
          <p>
            Trinity Medical Centre was established on {site.established}. Since then, we have grown to offer a comprehensive range of primary and specialist services under one roof.
          </p>
          <p className="text-sm text-muted-foreground">
            Note: Street address, operating hours, and team biographies are to be confirmed by TMC administration and will be published here once verified.
          </p>
        </div>
      </div>
    </div>
  );
}
