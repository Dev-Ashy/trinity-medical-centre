import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { EmployeeOfMonth, getEmployees, saveEmployees } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Plus } from "lucide-react";

export const Route = createFileRoute("/admin/employees")({
  component: Employees,
});

function Employees() {
  const [items, setItems] = useState<EmployeeOfMonth[]>([]);
  const [form, setForm] = useState({ name: "", role: "", bio: "", image: "", month: "" });

  useEffect(() => {
    setItems(getEmployees());
  }, []);

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
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Employee of the Month</h1>
        <p className="text-muted-foreground">Add and manage featured employees</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Plus className="size-4" />
            Add Employee
          </h2>
          <div className="space-y-3">
            <div className="space-y-1"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div className="space-y-1"><Label>Role/Position</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            <div className="space-y-1"><Label>Month</Label><Input value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} placeholder="October 2026" /></div>
            <div className="space-y-1"><Label>Bio</Label><Textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></div>
            <div className="space-y-1"><Label>Photo</Label><Input type="file" accept="image/*" onChange={handleFile} /></div>
            {form.image && <img src={form.image} alt="preview" className="h-32 w-32 rounded-full object-cover" />}
            <Button onClick={add} className="bg-navy w-full">Add Employee</Button>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Users className="size-4" />
            Current Employees ({items.length})
          </h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {items.length === 0 && <p className="text-sm text-muted-foreground">No employees added yet.</p>}
            {items.map((it) => (
              <div key={it.id} className="flex gap-3 p-3 border rounded-lg">
                {it.image ? <img src={it.image} alt={it.name} className="h-16 w-16 rounded-full object-cover" /> : <div className="h-16 w-16 rounded-full bg-navy/10 flex items-center justify-center font-bold text-navy">{it.name[0]}</div>}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-navy">{it.name}</p>
                  <p className="text-xs text-muted-foreground">{it.role} {it.month && `• ${it.month}`}</p>
                  {it.bio && <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{it.bio}</p>}
                  <Button variant="destructive" size="sm" className="mt-2" onClick={() => remove(it.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
