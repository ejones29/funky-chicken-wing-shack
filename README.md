# 🐔 Funky Chicken Wing Shack

A funky, neon-lit, flavor-packed wing ordering experience.

**Live site** → https://funky-chicken-wing-shack.netlify.app/

---

## 🚀 Overview

**Funky Chicken Wing Shack** is a modern, mobile-first web application built with **Gatsby**, **React**, **TypeScript**, **CSS Modules**, and **Sanity CMS**.

The project combines a bold, neon-inspired visual identity with a clean and highly interactive user interface. The design emphasizes fun, personality, and fast browsing—perfect for an energetic wing brand with strong character.

### The app features:

- A funky, illustrated home screen
- Custom neon-style SVG iconography
- A mobile Bottom Tab Bar with animated glows
- A desktop Header navigation variant
- A dynamic Flavors Explorer with heat-level filtering
- CMS-powered flavors, specials, and menu content
- Fully responsive screen layouts
- Light & Dark mode support

---

## 🛠️ Tech Stack

### Frontend

- **Gatsby** (React-based framework with great performance and routing)
- **React 18**
- **TypeScript**
- **CSS Modules** (scoped styling per component)
- **SVG Icon Components** (custom, neon-inspired art)

### CMS / Backend

- **Sanity.io** (schema-driven, real-time content studio)

Schema types include:

- **Flavors** (heat level, description, image, type: wet/dry)
- **Menu Items**
- **Specials**, etc.

### Deployment

- **Netlify**  
  Automatic builds on push, environment variables support, and blazing-fast CDN delivery.

---

## 🎨 Branding & Visual Style

The **Funky Chicken** brand uses:

- Neon gradients (`#FFC700` → `#FF7A2F`)
- Energetic purple/orange/pink backgrounds
- Custom illustrated chicken mascots
- Playful typography with bold shapes
- Animated glows, soft shadows, and rounded UI containers
- Mobile-first layout inspired by real food ordering apps

### Key reusable visuals:

- `<PageBackground />` component using radial gradients
- Neon-style icon set (outline + filled)
- On-brand Bottom Tab Bar for mobile
- Header with logo for desktop

---

## 📱 Responsive Navigation

### Mobile (< 1200px)

**Bottom Tab Bar** with:

- Home
- Menu
- Account

Active tab includes neon glow animation and filled icon version.

### Desktop (≥ 1200px)

- Hidden Bottom Tab Bar
- Header navigation with logo and menu links

---

## 🌶 Features

### Flavor Explorer

A fully interactive screen featuring:

- Two-thumb heat range slider
- Wet/Dry toggle
- Flavor cards with:
  - Custom illustrated images
  - Brand-colored borders
  - Description
- Automatic filtering & animations

### Dynamic Background System

`<PageBackground />` supports:

- Light/dark backgrounds based on `prefers-color-scheme`
- Neon radial gradients
- Reusable across pages

---

## 📂 Project Structure (high-level)

```
src/
  components/
    ActionButton/
    BottomTabBar/
    FlavorCard/
    Header/
    PageBackground/
    Icons/ (custom SVGs)
  pages/
    index.tsx
    menu.tsx
    flavors.tsx
    account.tsx
  assets/
    images/
    icons/
  styles/
  sanity/
```

---

## ▶️ Running the Project Locally

```bash
npm install
npm run develop
```

Gatsby will start a dev server at:

**http://localhost:8000**

---

## 🧪 Building for Production

```bash
npm run build
npm run serve
```

---

## 🌎 Deployment

This site is deployed on **Netlify**:

https://funky-chicken-wing-shack.netlify.app/

Every push to `main` triggers a new build and deploy.

---

## 🐣 Future Enhancements (Roadmap)

- [ ] Add cart functionality
- [ ] Add Brews section & Track Order icons + screens
- [ ] Integrate Sanity live preview
- [ ] Expand mascot illustrations
- [ ] Add animations + micro-interactions to buttons & cards
- [ ] Implement checkout flow (Stripe or Shopify)
