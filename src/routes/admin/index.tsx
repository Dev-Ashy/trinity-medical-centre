import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthed, logout } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/")({
  component: Admin,
});

function Admin() {
  const nav = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      nav({ to: "/admin/login" });
    } else {
      setOk(true);
    }
  }, [nav]);

  if (!ok) return null;

  return (
    <div className="container-tmc py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Admin Portal</h1>
          <p className="mt-2 text-muted-foreground">Manage employees of the month, admin profile, and site content</p>
        </div>
        <Button variant="outline" onClick={() => { logout(); nav({ to: "/admin/login" }); }}>Logout</Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/admin/employees" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-navy">Employee of the Month</h2>
          <p className="mt-2 text-sm text-muted-foreground">Upload photos and details of employees</p>
        </Link>
        <Link to="/admin/profile" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-navy">Admin / Co-owner Profile</h2>
          <p className="mt-2 text-sm text-muted-foreground">Update name, role, bio, photo</p>
        </Link>
        <Link to="/admin/settings" className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-navy">Site Content</h2>
          <p className="mt-2 text-sm text-muted-foreground">Change slogan, hero text</p>
        </Link>
      </div>
    </div>
  );
}
