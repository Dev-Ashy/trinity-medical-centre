import { PageHero } from "@/components/site/page-hero";

export function DoctorsPage() {
  return (
    <div>
      <PageHero
        title="The people who care for you"
        subtitle="Get to know the doctors and team behind the care at Trinity Medical Centre."
      />

      <section className="bg-paper py-20 sm:py-24" aria-label="Meet the team">
        <div className="container-tmc">
          <div className="max-w-3xl">
            <p className="label-caps text-tmc-gold">Our team</p>
            <h2 className="mt-4 text-ink">Care starts with the people who listen.</h2>
            <p className="mt-5 max-w-[60ch] text-muted-foreground">
              We are preparing introductions to the people who make each visit count. When you send
              each photo, include the person&apos;s name and role; biographies and qualifications
              can be added if you provide them.
            </p>
          </div>

          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-10">
              <h3 className="text-ink md:col-span-4">Doctors and clinicians</h3>
              <div className="md:col-span-8">
                <p className="max-w-[58ch] text-muted-foreground">
                  Verified profiles and photographs will appear here once the clinic has confirmed
                  the team details.
                </p>
                <p role="status" className="mt-4 text-sm font-medium text-royal">
                  Doctor profiles are being prepared.
                </p>
              </div>
            </article>

            <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-10">
              <h3 className="text-ink md:col-span-4">Our wider care team</h3>
              <div className="md:col-span-8">
                <p className="max-w-[58ch] text-muted-foreground">
                  This space is ready to introduce the people who welcome, guide, and support
                  patients throughout their visit.
                </p>
                <p role="status" className="mt-4 text-sm font-medium text-royal">
                  Team photographs and details will be added when they are ready.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
