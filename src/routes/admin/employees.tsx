import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { EmployeeOfMonth, getEmployees, isAuthed, saveEmployees } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/employees")({
  component: Employees,
});

function Employees() {
  const nav = useNavigate();
  const [items, setItems] = useState<EmployeeOfMonth[]>([]);
  const [form, setForm] = useState({ name: "", role: "", bio: "", image: "", month: "" });

  useEffect(() => {
    if (!isAuthed()) { nav({ to: "/admin/login" }); return; }
    setItems(getEmployees());
  }, [nav]);

  const add = () => {
    if (!form.name) return;
    const item: EmployeeOfMonth = { ...form, id: Date.now().toString(), createdAt: Date.now() };
    const next = [item, ...items];
    setItems(next);
    saveEmployees(next);
    setForm({ name: "", role: "", bio: "", image: "", month: "" });
  };

  const remove = (id: string) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    saveEmployees(next);
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
        <h1 className="text-2xl font-bold text-navy">Employee of the Month</h1>
        <Button variant="outline" onClick={() => nav({ to: "/admin" })}>Back</Button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy">Add Employee</h2>
          <div className="mt-4 space-y-3">
            <div className="space-y-1"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div className="space-y-1"><Label>Role/Position</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            <div className="space-y-1"><Label>Month (e.g., October 2026)</Label><Input value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} /></div>
            <div className="space-y-1"><Label>Bio</Label><Textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
            <div className="space-y-1"><Label>Photo</Label><Input type="file" accept="image/*" onChange={handleFile} /></div>
            {form.image && <img src={form.image} alt="preview" className="h-40 w-40 rounded-full object-cover" />}
            <Button onClick={add} className="bg-navy">Add</Button>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy">Current</h2>
          <div className="mt-4 space-y-4">
            {items.length === 0 && <p className="text-sm text-muted-foreground">No employees added yet.</p>}
            {items.map((it) => (
              <div key={it.id} className="flex gap-4 rounded-xl border p-4">
                {it.image ? <img src={it.image} alt={it.name} className="h-20 w-20 rounded-full object-cover" /> : <div className="h-20 w-20 rounded-full bg-navy/10" />}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-navy">{it.name}</p>
                      <p className="text-sm text-muted-foreground">{it.role} {it.month && `• ${it.month}`}</p>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => remove(it.id)}>Remove</Button>
                  </div>
                  {it.bio && <p className="mt-2 text-sm text-muted-foreground">{it.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
