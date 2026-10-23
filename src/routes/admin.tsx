import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthed, logout } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, UserCircle, Settings, Image, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/gallery", label: "Gallery Images", icon: Image },
  { to: "/admin/employees", label: "Employee of Month", icon: Users },
  { to: "/admin/profile", label: "Admin Profile", icon: UserCircle },
  { to: "/admin/settings", label: "Site Settings", icon: Settings },
];

function AdminLayout() {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/admin/login" });
    } else {
      setOk(true);
    }
  }, [navigate]);

  if (!ok) return null;

  return (
    <div className="flex min-h-screen bg-[#F8F7FC]">
      <aside className="w-64 bg-navy text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-lg font-bold">TMC Admin</h2>
          <p className="text-xs text-white/60">Clinic Administrator</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              <item.icon className="size-4" />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
            onClick={() => {
              logout();
              navigate({ to: "/admin/login" });
            }}
          >
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
