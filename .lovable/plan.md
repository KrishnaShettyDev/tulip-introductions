

# Navbar — Always Transparent

The navbar should remain **completely transparent** at all times, regardless of scroll position. No background color, no blur, no border — ever. The second screenshot shows it scrolled on the linen section and it still looks clean with dark text on linen.

## Changes to `src/components/landing/Navbar.tsx`

- Remove the `scrolled` state, `useEffect`, and all scroll-dependent styling
- Navbar is always `bg-transparent` with no border, no backdrop-blur
- Logo and button text: use `text-[hsl(var(--ink))]` always (dark ink color) — this works on both the hero image (which has enough contrast) and linen sections
- Button: keep the glassmorphic style but with ink-colored border/text always (matching the scrolled-state look from screenshot 2: `border border-[hsl(var(--ink))]/15 bg-[hsl(var(--ink))]/8`)

Looking at screenshot 1, the hero has the logo/button visible against the dark image. The text appears light/white there. So we actually need scroll detection just for **color switching** (white on hero, ink on linen) but **no background** either way.

**Revised approach:**
- Keep scroll detection for text color only
- `nav` is always `bg-transparent` — no blur, no border, no background
- On hero (not scrolled): white text, white/transparent button
- On scroll past hero: ink text, ink/transparent button
- No `backdrop-blur`, no `bg-[hsl(var(--background))]`, no `border-b`

## File
- `src/components/landing/Navbar.tsx`

