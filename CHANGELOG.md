# Changelog

All notable changes to Trinity Medical Centre are documented here.

## [Unreleased]

### Changed
- Replaced the logo with a cleaner, modern wordmark + mark (deep plum, gold dot, white cross).
- Updated README with project details, scripts, structure, and deployment info.

## [2026-10-31] - VS Code / AI updates

### Added
- Added authentic facility photos (`tmc-bathing-room.jpeg`, `tmc-childrens-ward.jpeg`, `tmc-consultation-room.jpeg`, `tmc-inpatient-ward.jpeg`) to `public/images/`.
- Added `DoctorsPage` component and photo-ready care team page structure.
- Added tests for facility images and doctors page.

### Changed
- Updated gallery to showcase real facility photos with clearer copy ("Inside Trinity Medical Centre").
- Updated homepage slideshow to use uploaded clinic photos and refined the "inside the centre" section to show actual photos.
- Swapped typography to **Lora** (headings) and **Source Sans 3** (body).
- Refreshed doctors/team page to be honest and photo-ready without inventing staff details.
- Tweaked slideshow to respond more natively (checkbox + CSS state).
- Footer/header updated to reflect team navigation.

## [2026-10-24] - Major redesign

### Added
- New design system tokens, shared motion utilities (`src/lib/motion.ts`), and `SectionHeading` component.
- New logo mark (`tmc-mark.svg`).
- Richer animations across homepage, services, and gallery.

### Changed
- Clinical editorial redesign: deep ink/plum palette, gold/crimson accents, removed washed pastel tints.
- Switched fonts to **Newsreader** and **IBM Plex Sans** (later updated to Lora/Source Sans 3).
- Rebuilt header/footer with scroll-shrink, animated nav, and improved CTAs.
- Redesigned homepage, services, and gallery pages.
- Migrated animations to `motion/react`, added `MotionConfig` with `reducedMotion="user"`.
- Updated admin/gallery styling.

### Removed
- Removed dependency on `framer-motion`.
