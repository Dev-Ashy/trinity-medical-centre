import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthed } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryAdmin,
});

type GalleryImg = {
  id: string;
  src: string;
  caption: string;
};

export function GalleryAdmin() {
  const navigate = useNavigate();
  const [items, setItems] = useState<GalleryImg[]>([]);
  const [form, setForm] = useState({ caption: "", src: "" });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/admin/login" });
      return;
    }
    const saved = localStorage.getItem("tmc_gallery");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, [navigate]);

  const save = (next: GalleryImg[]) => {
    setItems(next);
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
    save([item, ...items]);
    setForm({ caption: "", src: "" });
  };

  const remove = (id: string) => {
    save(items.filter((i) => i.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Gallery Management</h1>
        <p className="text-muted-foreground">Upload and manage gallery images</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Upload className="size-4" />
            Upload New Image
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Image File</Label>
              <Input type="file" accept="image/*" onChange={handleFile} />
              <p className="text-xs text-muted-foreground">Images are stored locally in browser. For production auto-deploy, add to public/images.</p>
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
            Gallery Images ({items.length})
          </h2>
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {items.length === 0 && <p className="text-sm text-muted-foreground">No images uploaded yet.</p>}
            {items.map((it) => (
              <div key={it.id} className="flex gap-3 p-3 border rounded-lg">
                <img src={it.src} alt={it.caption} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{it.caption}</p>
                  <Button variant="destructive" size="sm" className="mt-2" onClick={() => remove(it.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
