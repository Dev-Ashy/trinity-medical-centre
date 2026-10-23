import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminProfile, getAdmin, saveAdmin } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserCircle } from "lucide-react";

export const Route = createFileRoute("/admin/profile")({
  component: Profile,
});

function Profile() {
  const [form, setForm] = useState<AdminProfile>({ name: "", role: "", bio: "", image: "" });

  useEffect(() => {
    setForm(getAdmin());
  }, []);

  const save = () => {
    saveAdmin(form);
    alert("Profile saved successfully");
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Admin / Co-owner Profile</h1>
        <p className="text-muted-foreground">Update your profile information</p>
      </div>
      <div className="max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-2"><Label>Full Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div className="space-y-2"><Label>Role/Position</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g., Co-owner, Administrator" /></div>
          <div className="space-y-2"><Label>Bio</Label><Textarea rows={4} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
          <div className="space-y-2"><Label>Profile Photo</Label><Input type="file" accept="image/*" onChange={handleFile} /></div>
          {form.image && (
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <img src={form.image} alt="preview" className="h-24 w-24 rounded-full object-cover" />
              <div>
                <p className="font-medium text-navy">{form.name}</p>
                <p className="text-sm text-muted-foreground">{form.role}</p>
              </div>
            </div>
          )}
          <Button onClick={save} className="bg-navy">Save Profile</Button>
        </div>
      </div>
    </div>
  );
}
