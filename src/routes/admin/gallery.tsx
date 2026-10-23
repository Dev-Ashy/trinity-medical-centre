import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Image as ImageIcon, Trash2, CheckCircle, AlertCircle } from "lucide-react";
import { addGalleryItem, getGalleryItems, removeGalleryItem, GalleryItem } from "@/lib/gallery-store";
import { facilityImages } from "@/data/images";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryAdmin,
});

export function GalleryAdmin() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [form, setForm] = useState({ caption: "", src: "", section: "gallery" as "gallery" | "homepage" | "hero" });
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    setItems(getGalleryItems());
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setStatus(null);
    try {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((f) => ({ ...f, src: reader.result as string }));
        setUploading(false);
        setStatus({ type: "success", msg: "Image loaded successfully" });
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setUploading(false);
      setStatus({ type: "error", msg: "Failed to load image" });
    }
  };

  const add = () => {
    if (!form.src) {
      setStatus({ type: "error", msg: "Please select an image" });
      return;
    }
    if (!form.caption) {
      setStatus({ type: "error", msg: "Please add a caption" });
      return;
    }
    addGalleryItem({
      src: form.src,
      caption: form.caption,
      section: form.section,
      order: items.length,
    });
    loadItems();
    setForm({ caption: "", src: "", section: "gallery" });
    setStatus({ type: "success", msg: "Image added successfully! It will appear on the selected section." });
    setTimeout(() => setStatus(null), 3000);
  };

  const remove = (id: string) => {
    removeGalleryItem(id);
    loadItems();
    setStatus({ type: "success", msg: "Image removed" });
    setTimeout(() => setStatus(null), 2000);
  };

  const galleryItems = items.filter((i) => i.section === "gallery");
  const homepageItems = items.filter((i) => i.section === "homepage");
  const heroItems = items.filter((i) => i.section === "hero");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Gallery & Image Management</h1>
        <p className="text-muted-foreground">Upload images and choose where they appear on your website</p>
      </div>

      {status && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {status.type === "success" ? <CheckCircle className="size-5" /> : <AlertCircle className="size-5" />}
          {status.msg}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Upload className="size-4" />
            Upload Image
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Select Image</Label>
              <Input type="file" accept="image/*" onChange={handleFile} disabled={uploading} />
            </div>
            {form.src && (
              <div className="rounded-lg overflow-hidden border">
                <img src={form.src} alt="preview" className="w-full h-48 object-cover" />
              </div>
            )}
            <div className="space-y-2">
              <Label>Caption</Label>
              <Input value={form.caption} onChange={(e) => setForm({ ...form, caption: e.target.value })} placeholder="e.g., Clinical room" />
            </div>
            <div className="space-y-2">
              <Label>Display Location</Label>
              <Select value={form.section} onValueChange={(v: any) => setForm({ ...form, section: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gallery">Gallery Page (/gallery)</SelectItem>
                  <SelectItem value="homepage">Homepage Facility Section</SelectItem>
                  <SelectItem value="hero">Hero Slideshow</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {form.section === "gallery" && "Appears on the full gallery page"}
                {form.section === "homepage" && "Appears in the Facility & Experience section on homepage"}
                {form.section === "hero" && "Appears in the hero image slideshow"}
              </p>
            </div>
            <Button onClick={add} disabled={uploading || !form.src || !form.caption} className="bg-navy w-full">
              {uploading ? "Loading..." : "Upload & Publish"}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4">Quick Stats</h2>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Gallery Page</span>
              <span className="font-semibold text-navy">{galleryItems.length}</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Homepage Facility</span>
              <span className="font-semibold text-navy">{homepageItems.length}</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Hero Slideshow</span>
              <span className="font-semibold text-navy">{heroItems.length}</span>
            </div>
            <div className="flex justify-between p-3 bg-navy/5 rounded-lg">
              <span className="text-sm font-medium">Total Custom Images</span>
              <span className="font-semibold text-navy">{items.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <ImageIcon className="size-4" />
            Gallery Page Images ({galleryItems.length})
          </h2>
          {galleryItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No images uploaded for gallery page</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((it) => (
                <div key={it.id} className="flex gap-3 p-3 border rounded-lg">
                  <img src={it.src} alt={it.caption} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{it.caption}</p>
                    <Button variant="destructive" size="sm" className="mt-2" onClick={() => remove(it.id)}>
                      <Trash2 className="size-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4">Homepage Facility Images ({homepageItems.length})</h2>
          {homepageItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No images uploaded for homepage</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {homepageItems.map((it) => (
                <div key={it.id} className="flex gap-3 p-3 border rounded-lg">
                  <img src={it.src} alt={it.caption} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{it.caption}</p>
                    <Button variant="destructive" size="sm" className="mt-2" onClick={() => remove(it.id)}>
                      <Trash2 className="size-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4">Hero Slideshow Images ({heroItems.length})</h2>
          {heroItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No images uploaded for hero</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {heroItems.map((it) => (
                <div key={it.id} className="flex gap-3 p-3 border rounded-lg">
                  <img src={it.src} alt={it.caption} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{it.caption}</p>
                    <Button variant="destructive" size="sm" className="mt-2" onClick={() => remove(it.id)}>
                      <Trash2 className="size-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4">Default Facility Images ({facilityImages.length})</h2>
          <p className="text-sm text-muted-foreground mb-4">These always appear as fallback images</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {facilityImages.map((img, i) => (
              <div key={i} className="flex gap-2 p-2 border rounded-lg">
                <img src={img.src} alt={img.caption} className="h-10 w-10 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-navy truncate">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
