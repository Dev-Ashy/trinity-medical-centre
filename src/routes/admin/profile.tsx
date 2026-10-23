import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminProfile, getAdmin, isAuthed, saveAdmin } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/profile")({
  component: Profile,
});

function Profile() {
  const nav = useNavigate();
  const [form, setForm] = useState<AdminProfile>({ name: "", role: "", bio: "", image: "" });

  useEffect(() => {
    if (!isAuthed()) { nav({ to: "/admin/login" }); return; }
    setForm(getAdmin());
  }, [nav]);

  const save = () => {
    saveAdmin(form);
    alert("Saved");
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  return (
    <div className="container-tmc py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy">Admin / Co-owner Profile</h1>
        <Button variant="outline" onClick={() => nav({ to: "/admin" })}>Back</Button>
      </div>
      <div className="mt-8 max-w-2xl rounded-2xl border bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-1"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div className="space-y-1"><Label>Role (e.g., Co-owner, Administrator)</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
          <div className="space-y-1"><Label>Bio</Label><Textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
          <div className="space-y-1"><Label>Photo</Label><Input type="file" accept="image/*" onChange={handleFile} /></div>
          {form.image && <img src={form.image} alt="preview" className="h-40 w-40 rounded-full object-cover" />}
          <Button onClick={save} className="bg-navy">Save</Button>
        </div>
      </div>
    </div>
  );
}
