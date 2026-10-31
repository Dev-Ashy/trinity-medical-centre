type FacilityImage = {
  src: string;
  caption: string;
  alt: string;
};

export const facilityImages = [
  {
    src: "/images/tmc-inpatient-ward.jpeg",
    caption: "Inpatient ward",
    alt: "Patient beds and blue chairs in an inpatient ward.",
  },
  {
    src: "/images/tmc-bathing-room.jpeg",
    caption: "Bathing room",
    alt: "A tiled bathing room with a built-in bath and shower curtain.",
  },
  {
    src: "/images/tmc-childrens-ward.jpeg",
    caption: "Children's ward",
    alt: "Beds and chairs inside the children's ward.",
  },
  {
    src: "/images/tmc-consultation-room.jpeg",
    caption: "Consultation room",
    alt: "A consultation room with a desk and visitor chairs.",
  },
] satisfies [FacilityImage, FacilityImage, FacilityImage, FacilityImage];

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
