import { createFileRoute } from "@tanstack/react-router";
import { Users, Image, UserCircle, Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Trinity Medical Centre Admin Portal</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/admin/gallery" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <Image className="size-8 text-navy mb-3" />
          <h2 className="font-semibold text-navy">Gallery</h2>
          <p className="text-sm text-muted-foreground mt-1">Upload images</p>
        </Link>
        <Link to="/admin/employees" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <Users className="size-8 text-royal mb-3" />
          <h2 className="font-semibold text-navy">Employee of Month</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage staff</p>
        </Link>
        <Link to="/admin/profile" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <UserCircle className="size-8 text-tmc-gold mb-3" />
          <h2 className="font-semibold text-navy">Admin Profile</h2>
          <p className="text-sm text-muted-foreground mt-1">Update profile</p>
        </Link>
        <Link to="/admin/settings" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <Settings className="size-8 text-tmc-red mb-3" />
          <h2 className="font-semibold text-navy">Settings</h2>
          <p className="text-sm text-muted-foreground mt-1">Site content</p>
        </Link>
      </div>
    </div>
  );
}
