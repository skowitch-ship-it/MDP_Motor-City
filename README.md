# Motor City Casino Hotel — Mobile Food Ordering Prototype

High-fidelity **HTML/CSS/JS (Bootstrap 5.3.7)** prototype for the mobile food ordering experience. Aligned with the [Motor City Figma design](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design) and the SOW in `markdown prompts/FIGMA_PROMPT_MotorCity_Mobile_Food_Ordering.md`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then go to `http://localhost:8080` (or the port shown).

## Stack

- **HTML5**, **CSS3**, **JavaScript** (ES5-friendly + jQuery 3.8.1)
- **Bootstrap 5.3.7** (CDN)
- Design system: `css/motor-city.css` (Motor City brand tokens, dark-first UI)

## Structure

| Path | Purpose |
|------|--------|
| `index.html` | Home — venue list (6 vendors, hours, Order Now) |
| `venue.html` | Venue detail + Menu + category cards (Figma 140:39) |
| `menu-items.html` | Menu item list by category |
| `item-detail.html` | Item detail, options, Add to Cart |
| `cart.html` | Cart, edit, Checkout CTA |
| `checkout.html` | Payment, split tender (NR-02) |
| `confirmation.html` | Order ID, summary, pickup location, estimated time (FR-04) |
| `account.html` | Member vs guest (FR-01), comp, login |
| `error.html` | Error states (NR-01) — use `?type=network|unavailable|validation|faq` |
| `css/motor-city.css` | Brand tokens, Top Nav, cards, buttons, errors |
| `js/app.js` | Cart count, shared state |
| `js/venue.js` | Venue banner title from `?id=` |
| `js/error.js` | Error copy by `?type=` |

## Figma ↔ code

See **FIGMA_SYNC.md** for:

- Figma node IDs → code locations
- Design tokens to keep in sync with Figma
- How to pull design from Figma and push code (Code Connect)

## Requirements coverage

- **FR-01:** Member vs guest — `account.html`
- **FR-02:** Menu browsing — `venue.html`, `menu-items.html`
- **FR-03:** Item selection & cart — `item-detail.html`, `cart.html`
- **FR-04:** Order confirmation — `confirmation.html`
- **OR-01:** Open/closed — `index.html` (badges, disabled Order when closed)
- **NR-01:** Error states — `error.html`
- **NR-02:** Split tender — `checkout.html`

Brand: Motor City palette and typography (Akzidenz Grotesk / Verdana) in `css/motor-city.css`.
