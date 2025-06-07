# 🧪 Skip Selection Test – React + TypeScript

Hi! This is my submission for the **Skip page** test. The goal was to create an interactive and responsive UI where users can view and select different skip hire options while keeping original functionality intact.

---

## ✅ What I Built

- A responsive **grid of skip cards**, each showing key info like size, features, price, and badges (e.g. “Recommended” or “Save £X”).
- Users can **hover** or **click** on a card to highlight it, and **select a skip** using the button.
- All styling is clean, modern, and responsive across screen sizes.

---

## 🛠 Tech Stack

- **React (with TypeScript)** – for strong typing and clean component structure
- **Tailwind CSS** – for fast, utility-first styling
- **TanStack Query** – for efficient and powerful data fetching and caching
- **Lucide Icons** – for clean and consistent icons
- **Vite** – for fast builds and dev experience

---

## 💡 My Approach

- Built with a **modular, component-first mindset** — keeping logic clean and easy to scale.
- The `SkipSelectionGrid` is driven by props:
  - A list of skip items
  - Selected & hovered item IDs
  - State setters for click and hover behavior
- Designed for **smooth UX**:
  - Subtle glow effects on hover
  - Animated card transitions
  - Conditional badges for _“Recommended”_ and _“Save £X”_ stand out visually
- Each card surfaces:
  - Key info like size, popularity, features
  - **Price (incl. VAT)** with optional extras like transport/per-tonne costs
- Interaction logic is clean:
  - **Click-to-select** toggles state visually and programmatically
  - Button click uses `stopPropagation` to avoid conflict with parent click

---

## 🔄 Data Transformation

I included a `transformSkips()` function to:

- Format raw data into UI-ready shape
- Calculate price with VAT
- Add random popularity and flags for badges
- Build dynamic features list
- Support additional costs (e.g. transport, per-tonne)

---

## 🚀 Running the Project

```bash
npm install
npm run dev
```

Or open it in CodeSandbox for a live preview.

### 🎯 Goal

The goal was to create a clean, responsive UI with attention to UX detail. I focused on interactivity, code clarity, and visual feedback.

Thanks for reviewing!
