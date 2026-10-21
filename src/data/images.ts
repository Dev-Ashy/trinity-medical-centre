/**
 * Real Trinity Medical Centre facility photography.
 * Images are served from public/images for reliability on Vercel.
 * Replace placeholder SVGs with real photos when provided.
 */
export const tmcPhotos = {
  logo: "/images/tmc-logo.svg",
  grounds: "/images/tmc-grounds.svg",
  entrance: "/images/tmc-entrance.svg",
  ward: "/images/tmc-ward.svg",
  receptionHall: "/images/tmc-reception-hall.svg",
  waitingLounge: "/images/tmc-waiting-lounge.svg",
};

/**
 * Generic healthcare stock illustrations.
 * Placeholder SVGs used until real stock assets are provided.
 */
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
