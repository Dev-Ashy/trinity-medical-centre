import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteSettings, getSettings, isAuthed, saveSettings } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/settings")({
  component: Settings,
});

function Settings() {
  const nav = useNavigate();
  const [form, setForm] = useState<SiteSettings>({ slogan: "", tagline: "", heroTitle: "", heroSubtitle: "" });

  useEffect(() => {
    if (!isAuthed()) { nav({ to: "/admin/login" }); return; }
    setForm(getSettings());
  }, [nav]);

  const save = () => {
    saveSettings(form);
    alert("Saved");
  };

  return (
    <div className="container-tmc py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-navy">Site Content</h1>
        <Button variant="outline" onClick={() => nav({ to: "/admin" })}>Back</Button>
      </div>
      <div className="mt-8 max-w-2xl rounded-2xl border bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-1"><Label>Slogan</Label><Input value={form.slogan} onChange={(e) => setForm({ ...form, slogan: e.target.value })} /></div>
          <div className="space-y-1"><Label>Tagline</Label><Textarea value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} /></div>
          <div className="space-y-1"><Label>Hero Title</Label><Input value={form.heroTitle} onChange={(e) => setForm({ ...form, heroTitle: e.target.value })} /></div>
          <div className="space-y-1"><Label>Hero Subtitle</Label><Textarea value={form.heroSubtitle} onChange={(e) => setForm({ ...form, heroSubtitle: e.target.value })} /></div>
          <Button onClick={save} className="bg-navy">Save</Button>
        </div>
      </div>
    </div>
  );
}
