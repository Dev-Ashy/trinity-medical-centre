import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteSettings, getSettings, saveSettings } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings as SettingsIcon } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  component: Settings,
});

function Settings() {
  const [form, setForm] = useState<SiteSettings>({ slogan: "", tagline: "", heroTitle: "", heroSubtitle: "" });

  useEffect(() => {
    setForm(getSettings());
  }, []);

  const save = () => {
    saveSettings(form);
    alert("Settings saved successfully");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Site Settings</h1>
        <p className="text-muted-foreground">Edit website content and text</p>
      </div>
      <div className="max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-2"><Label>Slogan</Label><Input value={form.slogan} onChange={(e) => setForm({ ...form, slogan: e.target.value })} /></div>
          <div className="space-y-2"><Label>Tagline</Label><Textarea rows={2} value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} /></div>
          <div className="space-y-2"><Label>Hero Title</Label><Input value={form.heroTitle} onChange={(e) => setForm({ ...form, heroTitle: e.target.value })} /></div>
          <div className="space-y-2"><Label>Hero Subtitle</Label><Textarea rows={2} value={form.heroSubtitle} onChange={(e) => setForm({ ...form, heroSubtitle: e.target.value })} /></div>
          <Button onClick={save} className="bg-navy">Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
