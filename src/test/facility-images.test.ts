import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { facilityImages } from "@/data/images";

describe("facility images", () => {
  it("uses the distinct local facility photos with descriptive captions", () => {
    expect(facilityImages).toHaveLength(4);
    expect(new Set(facilityImages.map((image) => image.src)).size).toBe(4);

    for (const image of facilityImages) {
      expect(image.src).toMatch(/^\/images\/tmc-.+\.jpeg$/);
      expect(existsSync(resolve(process.cwd(), "public", image.src.slice(1)))).toBe(true);
      expect(image.alt.length).toBeGreaterThan(0);
      expect(image.caption.length).toBeGreaterThan(0);
    }
  });
});
