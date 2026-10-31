import { createFileRoute } from "@tanstack/react-router";
import { DoctorsPage } from "@/components/site/doctors-page";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our doctors and care team | Trinity Medical Centre" },
      {
        name: "description",
        content: "Meet the doctors and care team at Trinity Medical Centre.",
      },
    ],
  }),
  component: DoctorsPage,
});
