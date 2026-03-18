# Figma ↔ Code Sync — Motor City Mobile Food Ordering

This doc links **Figma frames and components** to **this codebase** so design and code can be edited in sync.

## Figma file

- **File:** [Motor City Casino Design](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design)
- **File key:** `FVEwdLiKvgmZvw23MU4CKq`

---

## Node → Code mapping

| Figma node | Name | Code location | Notes |
|------------|------|----------------|-------|
| **140:39** | Menu Categories (restaurant menu wireframe) | `venue.html` (banner + “Menu” + category cards) | Full screen layout; hero = `#venue-banner`, cards = `.mc-category-card` |
| **204:39463** | Top Nav | Every HTML page: `<header class="mc-top-nav">` | Hamburger, logo, Login/Cart. Styled in `css/motor-city.css` (`.mc-top-nav`) |
| **205:40309** | GRDBLogo / Venue banner | `venue.html` — `#venue-banner`, `.mc-venue-banner` | Venue-specific hero; CSS uses `.mc-venue-banner` |
| **205:40308** | Food category card | `venue.html` — `.mc-category-card`, `.card.mc-category-card` | Image + label; border, radius, typography in `motor-city.css` |
| **212:478** | Components (frame) | N/A (container) | Contains Top Nav, Toggles, checkboxes, radio buttons, icons. Use sub-nodes for specific UI. |

---

## Design tokens (code → Figma)

When updating **Figma**, keep these in sync with `css/motor-city.css`:

- **Colors:** `:root` — `--mc-teal`, `--mc-navy`, `--mc-green`, `--mc-orange`, `--mc-red`, `--mc-black`, etc. (from brand Section 4.3).
- **Top nav height:** `--mc-nav-height: 100px` (matches Figma Top Nav 204:39463).
- **Card radius:** `--mc-card-radius: 16px` (category cards 205:40308).
- **Typography:** Akzidenz Grotesk / Verdana; condensed for headings, regular for body.

---

## Screen flow (Figma prototype ↔ pages)

| Screen | Figma reference | HTML page |
|--------|-----------------|-----------|
| Home / Venue list | — | `index.html` |
| Restaurant detail + Menu | 140:39 | `venue.html` |
| Menu item list | — | `menu-items.html` |
| Item detail | — | `item-detail.html` |
| Cart | — | `cart.html` |
| Checkout / Payment | — | `checkout.html` |
| Order confirmation | — | `confirmation.html` |
| Account | — | `account.html` |
| Error states | — | `error.html` (?type=network | unavailable | validation | faq) |

---

## How to pull from Figma into this project

1. **Get design context (code + screenshot)**  
   In Cursor/IDE with Figma MCP, use `get_design_context` with:
   - `fileKey`: `FVEwdLiKvgmZvw23MU4CKq`
   - `nodeId`: e.g. `140:39` or `204:39463`  
   Then adapt the returned code to **HTML + Bootstrap 5.3.7 + `motor-city.css`** (no React/Tailwind).

2. **Get a screenshot only**  
   Use `get_screenshot` with the same `fileKey` and `nodeId` to compare layout with the live site.

3. **Component set (212:478)**  
   The Components frame is large. Call `get_design_context` on **sublayer IDs** (e.g. `204:39463` for Top Nav, `204:38531` for Toggle) to get smaller chunks.

---

## How to push code into Figma (Code Connect)

**Note:** Code Connect requires a Figma Developer seat (Organization or Enterprise). If you don’t have access, use the node → code table above and `get_design_context` for handoff.

To show **this repo’s components** inside Figma:

1. In Figma: **Resources → Code Connect** (or plugin).
2. Add mappings from **Figma node** → **file path + component name**.
3. Example mapping (conceptual):
   - **Node:** 204:39463 (Top Nav)
   - **Source:** `index.html` (or a shared snippet)
   - **Component name:** Top Nav
   - **Label:** Javascript

Exact steps depend on your Figma team plan and whether you use the Code Connect plugin or the MCP `add_code_connect_map` / `send_code_connect_mappings` tools with this file key.

---

## Quick links

- [Figma — Motor City Casino Design](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design)
- [Figma — Restaurant menu (140:39)](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design?node-id=140-39)
- [Figma — Components (212:478)](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design?node-id=212-478)
