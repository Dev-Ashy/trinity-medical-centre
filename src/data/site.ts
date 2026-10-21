export const site = {
  name: "Trinity Medical Centre",
  shortName: "TMC",
  established: "17 August 2023",
  phone: "09169067009",
  phoneHref: "tel:09169067009",
  whatsappDisplay: "08186124468",
  whatsappUrl: "https://wa.me/2348186124468",
  address: null as string | null, // [Clinic address — to be confirmed by TMC]
  credit: "© 2026 Devashy Limited",
  tagline: "Accessible. Affordable. Reliable.",
};

export type ServiceInfo = {
  slug: string;
  path: string;
  title: string;
  navTitle: string;
  short: string;
  provisional?: boolean;
};

export const services: ServiceInfo[] = [
  {
    slug: "outpatient-family-medicine",
    path: "/services/outpatient-family-medicine",
    title: "General Outpatient & Family Medicine",
    navTitle: "Outpatient & Family Medicine",
    short:
      "First-contact clinical evaluations, routine health assessments, blood pressure & glucose screenings, and chronic condition management for all ages.",
  },
  {
    slug: "laboratory",
    path: "/services/laboratory",
    title: "Diagnostic Laboratory Services",
    navTitle: "Diagnostic Laboratory",
    short:
      "Precise clinical testing including haematology, lipid panels, malaria microscopy, urinalysis, serum biochemistry, and infectious disease markers.",
  },
  {
    slug: "antenatal-maternity",
    path: "/services/antenatal-maternity",
    title: "Antenatal, Maternity & Postnatal Care",
    navTitle: "Antenatal & Maternity",
    short:
      "Complete maternal welfare covering fetal assessments, gestational screening, delivery pathway guidance, and postpartum care.",
    provisional: true,
  },
  {
    slug: "child-health-paediatrics",
    path: "/services/child-health-paediatrics",
    title: "Child Health & Paediatrics",
    navTitle: "Child Health & Paediatrics",
    short:
      "Child health monitoring, infant growth tracking, nutritional checks, acute paediatric illness triage, and developmental milestone assessments.",
  },
  {
    slug: "gynecology-womens-health",
    path: "/services/gynecology-womens-health",
    title: "Gynecology & Women's Health",
    navTitle: "Gynecology & Women's Health",
    short:
      "Confidential consultations for women across all reproductive and life stages, in a safe and compassionate environment.",
  },
  {
    slug: "eye-care",
    path: "/services/eye-care",
    title: "General Eye Care & Optical Services",
    navTitle: "General Eye Care & Optical",
    short:
      "Visual acuity screenings, refractive assessments for eyeglasses, ocular tension checks, and early management of common ocular discomforts.",
  },
  {
    slug: "surgical-eye-care",
    path: "/services/surgical-eye-care",
    title: "Surgical Eye Care & Ophthalmology",
    navTitle: "Surgical Eye Care",
    short:
      "Advanced evaluations for cataracts, glaucoma surveillance, pterygium assessment, and surgical ophthalmic intervention plans.",
    provisional: true,
  },
  {
    slug: "accident-emergency",
    path: "/services/accident-emergency",
    title: "Accident & Emergency Triage",
    navTitle: "Accident & Emergency",
    short:
      "Rapid initial assessment, stabilization protocols, and priority triage before tertiary transfer or ambulatory discharge.",
    provisional: true,
  },
  {
    slug: "pharmacy",
    path: "/services/pharmacy",
    title: "Pharmacy & Medication Services",
    navTitle: "Pharmacy & Medication",
    short:
      "Essential prescription medications, anti-malarial therapies, paediatric formulations, and professional dosage counseling.",
    provisional: true,
  },
];

export type NavItem = { label: string; to: string };

export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Health Tips", to: "/health-tips" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];
