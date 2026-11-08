type FacilityImage = {
  src: string;
  caption: string;
  alt: string;
};

export const facilityImages = [
  {
    src: "/images/tmc-reception.jpg",
    caption: "Reception area",
    alt: "Modern reception desk with seating area and Trinity Medical Centre branding.",
  },
  {
    src: "/images/tmc-waiting-area.jpg",
    caption: "Waiting area",
    alt: "Comfortable waiting area with chairs and natural lighting.",
  },
  {
    src: "/images/tmc-corridor.jpg",
    caption: "Clinical corridor",
    alt: "Clean, well-lit corridor connecting clinical areas.",
  },
  {
    src: "/images/tmc-examination-room.jpg",
    caption: "Examination room",
    alt: "Fully equipped examination room with medical equipment.",
  },
  {
    src: "/images/tmc-laboratory.jpg",
    caption: "Laboratory",
    alt: "Modern laboratory with diagnostic equipment and workstations.",
  },
  {
    src: "/images/tmc-operating-theatre.jpg",
    caption: "Operating theatre",
    alt: "Sterile operating theatre with surgical lighting and equipment.",
  },
  {
    src: "/images/tmc-maternity-ward.jpg",
    caption: "Maternity ward",
    alt: "Comfortable maternity ward with bassinet and monitoring equipment.",
  },
  {
    src: "/images/tmc-pediatric-room.jpg",
    caption: "Pediatric room",
    alt: "Child-friendly pediatric examination room with colorful decor.",
  },
  {
    src: "/images/tmc-emergency-bay.jpg",
    caption: "Emergency bay",
    alt: "Emergency treatment bay with resuscitation equipment.",
  },
  {
    src: "/images/tmc-diagnostic-imaging.jpg",
    caption: "Diagnostic imaging",
    alt: "Diagnostic imaging suite with modern scanning equipment.",
  },
  {
    src: "/images/tmc-recovery-room.jpg",
    caption: "Recovery room",
    alt: "Post-operative recovery room with monitoring stations.",
  },
  {
    src: "/images/tmc-pharmacy.jpg",
    caption: "Pharmacy",
    alt: "On-site pharmacy with medication dispensing area.",
  },
  {
    src: "/images/tmc-staff-station.jpg",
    caption: "Nurses' station",
    alt: "Central nurses' station with patient monitoring screens.",
  },
  {
    src: "/images/tmc-exterior.jpg",
    caption: "Building exterior",
    alt: "Exterior view of Trinity Medical Centre building.",
  },
  {
    src: "/images/tmc-ward-1.jpg",
    caption: "General ward",
    alt: "General inpatient ward with patient beds and privacy curtains.",
  },
  {
    src: "/images/tmc-ward-2.jpg",
    caption: "General ward",
    alt: "General inpatient ward with patient beds and privacy curtains.",
  },
  {
    src: "/images/tmc-ward-3.jpg",
    caption: "General ward",
    alt: "General inpatient ward with patient beds and privacy curtains.",
  },
  {
    src: "/images/tmc-ward-4.jpg",
    caption: "General ward",
    alt: "General inpatient ward with patient beds and privacy curtains.",
  },
  {
    src: "/images/tmc-room-1.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-2.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-3.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-4.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-5.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-6.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-7.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-8.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-9.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-10.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-11.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
  {
    src: "/images/tmc-room-12.jpg",
    caption: "Clinical room",
    alt: "Clinical consultation room with medical equipment.",
  },
] satisfies FacilityImage[];

export const tmcPhotos = {
  logo: "/images/tmc-logo.svg",
  hero: [
    "/images/tmc-reception.jpg",
    "/images/tmc-waiting-area.jpg",
    "/images/tmc-corridor.jpg",
    "/images/tmc-examination-room.jpg",
  ],
};

const placeholder = (name: string) => `/images/${name}.svg`;

export const stock = {
  medication: "/images/tmc-pharmacy.jpg",
  receptionDesk: "/images/tmc-reception.jpg",
  womanPortrait: "/images/tmc-room-1.jpg",
  surgeryTheatre: "/images/tmc-operating-theatre.jpg",
  newborn: "/images/tmc-maternity-ward.jpg",
  eyeglasses: "/images/tmc-room-2.jpg",
  recordsLaptop: "/images/tmc-staff-station.jpg",
  surgicalTeam: "/images/tmc-operating-theatre.jpg",
  doctorConsult: "/images/tmc-examination-room.jpg",
  compassionateCare: "/images/tmc-ward-1.jpg",
  stethoscope: "/images/tmc-room-3.jpg",
  facilityExterior: "/images/tmc-exterior.jpg",
  nursePortrait: "/images/tmc-room-4.jpg",
  doctorMale: "/images/tmc-room-5.jpg",
  clinicianSmile: "/images/tmc-room-6.jpg",
  doctorWhiteCoat: "/images/tmc-room-7.jpg",
  nursePatient: "/images/tmc-ward-2.jpg",
  labMicroscope: "/images/tmc-laboratory.jpg",
  labSamples: "/images/tmc-laboratory.jpg",
};