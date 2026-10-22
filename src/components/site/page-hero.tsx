import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ title, subtitle, image, imageAlt = "" }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-navy py-16 text-white">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-royal/80 to-navy/90" />
        </>
      )}
      <div className="container-tmc relative z-10">
        <h1 className="text-balance-tight text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="mt-3 h-1 w-16 rounded bg-tmc-gold" />
        {subtitle && <p className="mt-4 max-w-[60ch] text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
