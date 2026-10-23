export type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  section: "gallery" | "homepage" | "hero";
  order: number;
  createdAt: number;
};

const KEY = "tmc_gallery_items";

export function getGalleryItems(): GalleryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveGalleryItems(items: GalleryItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addGalleryItem(item: Omit<GalleryItem, "id" | "createdAt">) {
  const items = getGalleryItems();
  const newItem: GalleryItem = {
    ...item,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    createdAt: Date.now(),
  };
  saveGalleryItems([newItem, ...items]);
  return newItem;
}

export function removeGalleryItem(id: string) {
  const items = getGalleryItems();
  saveGalleryItems(items.filter((i) => i.id !== id));
}

export function updateGalleryItem(id: string, updates: Partial<GalleryItem>) {
  const items = getGalleryItems();
  saveGalleryItems(items.map((i) => (i.id === id ? { ...i, ...updates } : i)));
}
