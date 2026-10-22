import { Link } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="container-tmc flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/tmc-logo.svg" alt="Trinity Medical Centre" className="h-10 w-auto" />
        </Link>
        <Button asChild className="rounded-full bg-tmc-red hover:bg-tmc-red/90 hidden md:inline-flex">
          <Link to="/book"><CalendarCheck className="size-4" /> Book Appointment</Link>
        </Button>
      </div>
    </header>
  );
}
