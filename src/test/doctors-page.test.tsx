import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DoctorsPage } from "@/components/site/doctors-page";

describe("doctors page", () => {
  it("shows photo-ready sections without inventing team profiles", () => {
    render(<DoctorsPage />);

    expect(
      screen.getByRole("heading", { name: "The people who care for you" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Doctors and clinicians" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our wider care team" })).toBeInTheDocument();
    expect(
      screen.getByText(/send each photo, include the person's name and role/i),
    ).toBeInTheDocument();
    expect(screen.queryByText("Team profile pending")).not.toBeInTheDocument();
  });
});
