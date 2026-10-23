import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import { facilityImages } from "@/data/images";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryAdmin,
});

type GalleryImg = {
  id: string;
  src: string;
  caption: string;
};

export function GalleryAdmin() {
  const [custom, setCustom] = useState<GalleryImg[]>([]);
  const [form, setForm] = useState({ caption: "", src: "" });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tmc_gallery");
      if (saved) {
        setCustom(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const save = (next: GalleryImg[]) => {
    setCustom(next);
    localStorage.setItem("tmc_gallery", JSON.stringify(next));
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, src: reader.result as string }));
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const add = () => {
    if (!form.src) return;
    const item: GalleryImg = { id: Date.now().toString(), src: form.src, caption: form.caption || "Gallery image" };
    save([item, ...custom]);
    setForm({ caption: "", src: "" });
  };

  const remove = (id: string) => {
    save(custom.filter((i) => i.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Gallery Management</h1>
        <p className="text-muted-foreground">Manage all gallery images shown on the website</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Upload className="size-4" />
            Upload New Image
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Image File</Label>
              <Input type="file" accept="image/*" onChange={handleFile} />
              <p className="text-xs text-muted-foreground">Upload images to add to the gallery. They will appear on /gallery and homepage.</p>
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
            <Button onClick={add} disabled={uploading || !form.src} className="bg-navy">
              Add to Gallery
            </Button>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <ImageIcon className="size-4" />
            Custom Uploaded Images ({custom.length})
          </h2>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {custom.length === 0 && <p className="text-sm text-muted-foreground">No custom images uploaded yet.</p>}
            {custom.map((it) => (
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
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-navy mb-4">Default Facility Images ({facilityImages.length})</h2>
        <p className="text-sm text-muted-foreground mb-4">These are the default equipment/room images used across the site</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilityImages.map((img, i) => (
            <div key={i} className="flex gap-2 p-2 border rounded-lg">
              <img src={img.src} alt={img.caption} className="h-12 w-12 rounded object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-navy truncate">{img.caption}</p>
                <p className="text-xs text-muted-foreground">Default</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
