export type EmployeeOfMonth = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  month: string;
  createdAt: number;
};

export type AdminProfile = {
  name: string;
  role: string;
  bio: string;
  image: string;
  phone?: string;
  whatsapp?: string;
};

export type SiteSettings = {
  slogan: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
};

const KEY_EMP = "tmc_employee_of_month";
const KEY_ADMIN = "tmc_admin_profile";
const KEY_SETTINGS = "tmc_site_settings";
const KEY_AUTH = "tmc_admin_auth";

export const defaultSettings: SiteSettings = {
  slogan: "Accessible. Affordable. Reliable Healthcare",
  tagline: "Compassionate, gold-standard care for every patient and family.",
  heroTitle: "Accessible. Affordable. Reliable Healthcare",
  heroSubtitle: "Compassionate, gold-standard care for every patient and family.",
};

export const defaultAdmin: AdminProfile = {
  name: "Clinic Administrator",
  role: "Administrator",
  bio: "Managing operations to ensure quality care for our community.",
  image: "",
};

export function getEmployees(): EmployeeOfMonth[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY_EMP);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveEmployees(items: EmployeeOfMonth[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_EMP, JSON.stringify(items));
}

export function getAdmin(): AdminProfile {
  if (typeof window === "undefined") return defaultAdmin;
  try {
    const raw = localStorage.getItem(KEY_ADMIN);
    return raw ? { ...defaultAdmin, ...JSON.parse(raw) } : defaultAdmin;
  } catch {
    return defaultAdmin;
  }
}

export function saveAdmin(a: AdminProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_ADMIN, JSON.stringify(a));
}

export function getSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    const raw = localStorage.getItem(KEY_SETTINGS);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(s: SiteSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_SETTINGS, JSON.stringify(s));
}

export function isAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY_AUTH) === "1";
}

export function login(pw: string) {
  if (typeof window === "undefined") return false;
  // Simple client-side auth - change as needed
  if (pw === "admin123" || pw === "tmcadmin") {
    localStorage.setItem(KEY_AUTH, "1");
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY_AUTH);
}
