/**
 * Facility images using verified equipment and clinical room photography.
 */
export const facilityImages = [
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", caption: "Monitoring equipment", alt: "Monitoring equipment" },
  { src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80", caption: "Laboratory", alt: "Laboratory" },
  { src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80", caption: "Operating theatre", alt: "Operating theatre" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", caption: "MRI suite", alt: "MRI suite" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", caption: "Clinical corridor", alt: "Clinical corridor" },
  { src: "https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?auto=format&fit=crop&w=1200&q=80", caption: "Hospital bed", alt: "Hospital bed" },
  { src: "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?auto=format&fit=crop&w=1200&q=80", caption: "Hospital bed", alt: "Hospital bed" },
  { src: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Clinical room", alt: "Clinical room" },
  { src: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Laboratory", alt: "Laboratory" },
  { src: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Monitoring equipment", alt: "Monitoring equipment" },
  { src: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Operating theatre", alt: "Operating theatre" },
  { src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Clinical corridor", alt: "Clinical corridor" },
];

export const tmcPhotos = {
  logo: "/images/tmc-logo.svg",
};

const placeholder = (name: string) => `/images/${name}.svg`;

export const stock = {
  medication: placeholder('stock-medication'),
  receptionDesk: placeholder('stock-reception-desk'),
  womanPortrait: placeholder('stock-woman-portrait'),
  surgeryTheatre: placeholder('stock-surgery-theatre'),
  newborn: placeholder('stock-newborn'),
  eyeglasses: placeholder('stock-eyeglasses'),
  recordsLaptop: placeholder('stock-records-laptop'),
  surgicalTeam: placeholder('stock-surgical-team'),
  doctorConsult: placeholder('stock-doctor-consult'),
  compassionateCare: placeholder('stock-compassionate-care'),
  stethoscope: placeholder('stock-stethoscope'),
  facilityExterior: placeholder('stock-facility-exterior'),
  nursePortrait: placeholder('stock-nurse-portrait'),
  doctorMale: placeholder('stock-doctor-male'),
  clinicianSmile: placeholder('stock-clinician-smile'),
  doctorWhiteCoat: placeholder('stock-doctor-white-coat'),
  nursePatient: placeholder('stock-nurse-patient'),
  labMicroscope: placeholder('stock-lab-microscope'),
  labSamples: placeholder('stock-lab-samples'),
};
