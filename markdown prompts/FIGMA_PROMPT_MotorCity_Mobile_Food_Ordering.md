# High-Fidelity Figma Prototype Prompt: Motor City Casino Mobile Food Ordering Platform

Use this prompt to direct the design and build of a **high-fidelity Figma mobile food ordering platform prototype** for Motor City Casino Hotel. The prototype must align with the Statement of Work, Motor City brand identity, and UI style guide, and use the reference prototype and existing Figma wireframes/components as design foundations.

---

## 1. Project Overview & Objectives

- **Purpose:** Design a mobile-first food ordering app and web experience that lets on-property guests order from property-wide venues and pick up food with minimal friction.
- **Value:** Reduce lines at vendor windows and kiosks, support integrated payment (credit card and Club Metro comp credits), and create a stepping stone for future mobile and desktop ordering.
- **Deliverable:** A **polished, high-fidelity Figma prototype** of the mobile food ordering experience (supporting later implementation in .NET 8, ASP.NET Core, HTML5, CSS3, JavaScript, Bootstrap 5.3.7, jQuery 3.8.1).

---

## 2. Reference Materials (Required Inputs)

### 2.1 Example Working Prototype

- **URL:** [https://mobileorderingmdp2026.azurewebsites.net/index.html](https://mobileorderingmdp2026.azurewebsites.net/index.html)
- **Use it to define:**
  - **Flow:** Home → venue list (with short descriptions and hours) → "Order Now" per venue → full order cycle.
  - **Venue count:** Six food court vendors (e.g., retro diner, burgers/sandwiches, wok, pizza, pastries/Starbucks, steakhouse).
  - **Content per venue:** Name, short description, operating hours (e.g., "Daily 5PM–10PM", "Saturday & Sunday 7AM–12PM"), and a clear primary CTA (e.g., "Order Now").
  - **Information hierarchy:** Venue cards with consistent layout; hours visible; one primary action per card.

### 2.2 Existing Figma Design File

- **Figma file:** [Motor City Casino Design](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design)
- **Use these nodes as direct design references:**
  - **Wireframe / screen (node 140-39):** Restaurant menu experience (e.g., Grand River Deli & Burgers). Use for: top nav (hamburger, MotorCity logo, Login), hero/banner treatment per venue, "Menu" section, and category cards (e.g., Smash Burgers, Sandwiches) with imagery and labels.
  - **Components (node 212-478):** Reuse or align with existing components (e.g., Top Nav, toggles, checkboxes, radio buttons, icons). Keep consistency with this component set across the new prototype.

---

## 3. Statement of Work Requirements

The prototype must support and reflect the following SOW requirements so that development and validation can be traced back to the design.

### 3.1 Core Function (Reflect in Screens/Flows)

- **Venue & menu discovery:** Users can view **real-time menus** of **open** restaurants and **venue operating hours** for **six** Motor City food court vendors.
- **Order cycle:** Full path from restaurant/venue selection → menu browsing → **item selection and customization** → **cart** → **order submission** → **order confirmation**.
- **Payment:** A **payments screen** where users can **select payment method(s)** and **split tender** (e.g., credit card + Club Metro comp credits). Design must make split tender obvious and easy (≥90% of users able to split between at least two forms of payment per NR-02).
- **Order confirmation:** After submission, users receive: **order ID**, **order summary**, **restaurant name**, **pickup location**, and **estimated pickup time** (FR-04).
- **User eligibility:** The system differentiates **Club members** vs **anonymous guests** and applies correct pricing/benefits (FR-01). Show this in the UI (e.g., login state, comp balance, member-only messaging).

### 3.2 Functional Requirements to Support in the Prototype

| ID     | Requirement           | Design implication |
|--------|------------------------|--------------------|
| FR-01  | User eligibility       | Clear indication of member vs guest; correct pricing/benefits in cart and checkout. |
| FR-02  | Menu browsing          | Scrollable menus; filter; ability to switch between restaurant menus. |
| FR-03  | Item selection & cart | Tappable items, item details, add-to-cart, visible cart. |
| FR-04  | Order submission       | Confirmation screen with order ID, summary, restaurant, pickup location, estimated time. |

### 3.3 Operational Requirements to Reflect

- **OR-01 (Business hours):** Menus are visible/available only during each venue's operating hours; ordering is blocked outside those hours. In Figma, show states: "Open" vs "Closed" and disabled "Order" when closed.
- **OR-02 (Staffing):** Out of scope for the Figma prototype itself; no specific screen required, but the prototype should not contradict staffing/volume concepts.
- **OR-03 (Concurrency):** Design for both **mobile app** and **mobile web** (responsive, same core flows).

### 3.4 Nonfunctional Requirements to Embed in the Design

- **NR-01 (Error handling):** Design **error states** (e.g., network failure, unavailable restaurant, invalid input, timeout) with **clear, non-technical, actionable copy** and a recommended next step.
- **NR-02 (Payment flow):** A **clear payments page** with explicit **split tender** (e.g., "Pay with Card" + "Use Comp Credits") and a visible breakdown so ≥90% of users can split between at least two payment methods.

### 3.5 Out of Scope (No Need to Prototype in Detail)

- Time-based usability constraints (beyond showing open/closed).
- Actual payment processing.
- Direct live data from restaurants.
- 95% accurate wait-time delivery system.

---

## 4. Motor City Casino Brand Identity (Mandatory)

Apply the following from the **MCCH Brand Identity** guidelines. Do not alter wordmarks or icons; use only approved colors and type.

### 4.1 Wordmark & Icon

- **Wordmark:** Use the official MotorCity Casino Hotel wordmark. Prefer **Simple** or **Chrome** (or **Faceted** where chrome cannot be reproduced). Use **positive** on dark/black and **reversed** on light where needed for contrast.
- **Icon:** Use the official icon for app/small spaces; same versions and color rules as wordmark.
- **Clear space:** Maintain minimum clear space (0.1X from wordmark/icon); do not crowd with other elements.
- **Do not:** Redraw, distort, or change colors of wordmark/icon; do not place wordmark and icon as one combined lockup.

### 4.2 Typography

- **Primary typeface:** **Berthold Akzidenz Grotesk** (Regular, Condensed, multiple weights). Use **Condensed** for headlines; **Regular** for body.
- **Fallback:** When Akzidenz Grotesk is not available, use **Verdana**.
- Use type to create clear hierarchy (headlines vs body vs utility).

### 4.3 Color Palette (Use Only These Specifications)

Use these for backgrounds, text, CTAs, and accents so the prototype is on-brand:

| Color name / use      | PANTONE | CMYK           | RGB           | HEX       |
|-----------------------|---------|----------------|---------------|-----------|
| Teal (primary accent) | 315     | C100 M0 Y12 K43| R0 G114 B143  | **#00728F** |
| Navy                  | 296     | C100 M46 Y0 K70| R0 G45 B86   | **#002D56** |
| Green                 | 364     | C65 M0 Y100 K42| R56 G124 B43 | **#387C2B** |
| Orange                | 718     | C0 M56 Y100 K8 | R227 G127 B28| **#E37F1C** |
| Red                   | 1807    | C0 M100 Y96 K28| R179 G32 B37| **#B32025** |
| Magenta               | 226     | C0 M99 Y0 K0   | R236 G9 B141 | **#EC098D** |
| Yellow                | 110     | C0 M12 Y100 K7 | R241 G203 B0 | **#F1CB1C** |
| Blue                  | 294     | C100 M58 Y0 K21| R0 G85 B150  | **#005596** |
| Purple                | 2622    | C57 M98 Y0 K46 | R84 G7 B91   | **#54075B** |
| Gray                  | 7448    | C32 M42 Y0 K55 | R96 G82 B112| **#605270** |
| Black                 | Black   | C0 M13 Y49 K98 | R20 G16 B6   | **#141006** |
| Lime                  | 390     | C22 M0 Y100 K8 | R193 G205 B35| **#C1CD00** |

- **Imagery:** No black-and-gold (MGM) look; use full-bleed, crisp imagery with a "sparkle"/highlight where appropriate. No blurred images.

### 4.4 Chrome Trim & Visual Motif

- The **Chrome Trim** (five-line graphic) can be used as a supporting element for structure and brand feel (e.g., dividers, section accents). Use the gradient version (e.g., 5% and 50% black, 35° angle) when foil is not possible.

### 4.5 Voice & Messaging

- Tone: **Fun, witty, smart, direct.** Short, snappy copy; value-focused and action-oriented. Labels in the prototype should feel on-brand (e.g., "Order Now," "Pick up here," "Use comp").

---

## 5. General Brand & UI Style Guide (Mandatory)

Align the **UI** with the **General Style Guide** while keeping **brand colors** from Section 4. Where the style guide references "Electric Green" or "Electric Blue," map them to the approved palette (e.g., Green **#387C2B** or Teal **#00728F**, Blue **#005596**) so that both brand and UI rules are satisfied.

### 5.1 Overall Vibe

- **Bold, confident, energetic;** modern and premium but friendly.
- **Fast, intuitive, rewarding;** clarity and speed over decoration; reduce cognitive load on mobile.

### 5.2 Color System (UI)

- **Dark-first UI:** Charcoal or near-black (**#141006** or similar) as primary backgrounds where appropriate.
- **High-contrast:** Text and controls must stand out (e.g., white/off-white on dark; dark on light cards).
- **Accent roles:** Use palette colors purposefully:
  - **Success / value / confirmations:** e.g., Green **#387C2B** or Lime **#C1CD00**.
  - **Primary CTAs:** e.g., Teal **#00728F** or Blue **#005596**.
  - **Secondary text / dividers / inactive:** Gray **#605270** or neutrals.
- **Principle:** Color communicates meaning (state, action, hierarchy), not decoration.

### 5.3 Typography (UI)

- **Sans-serif,** clean, legible, strong hierarchy (size, weight, spacing).
- **Headlines:** Larger, heavier, used sparingly.
- **Body:** Easy to scan, short line lengths.
- **Utility:** Smaller for timestamps, notes, disclaimers.
- Avoid decorative fonts; ensure contrast meets accessibility standards.

### 5.4 Layout & Spacing

- **Mobile-first:** Vertical stacking, consistent padding/margins, clear section separation.
- **Content grouping:** Related info in cards/panels; **one primary action per section**; avoid clutter.
- **Rule:** If everything is emphasized, nothing is.

### 5.5 Cards & Containers

- Cards/panels on dark background; clear title; 1–2 lines of supporting copy; **one clear action** (e.g., "Add to Cart," "Order Now").
- Use for: menu items, order summary, promotions/recommendations.

### 5.6 Buttons & CTAs

- **Primary:** Solid fill, high contrast, clear labels (e.g., "Add to Cart," "Checkout," "Place Order").
- **Secondary:** Text or outline; less visual weight.
- **Interaction:** Easy one-handed tap; avoid multiple competing CTAs in one area.

### 5.7 Iconography

- Simple, recognizable; minimal detail; consistent stroke weight.
- Icons support text (e.g., nav chevrons); do not rely on color alone for meaning.

### 5.8 Feedback & States

- Clear feedback for: tap/selection, loading, success, error.
- Use color, icons, and subtle animation where appropriate (including error states per NR-01).

### 5.9 Accessibility & Usability

- High color contrast; large tap targets; clear labels for all actions; do not rely on color alone.

---

## 6. Prototype Scope (Screens & Flows to Include)

Design the following in Figma so the prototype can be used for handoff and usability testing:

1. **Home / Venue list**  
   Six vendors; per venue: name, short description, operating hours, open/closed state, "Order Now" (disabled when closed). Align with the reference [example prototype](https://mobileorderingmdp2026.azurewebsites.net/index.html) and the [Figma wireframe](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design?node-id=140-39).

2. **Restaurant / venue detail**  
   Hero or banner (branded per venue), "Menu" section, category cards (e.g., Smash Burgers, Sandwiches) with imagery and labels. Use existing Figma components where applicable.

3. **Menu item list & item detail**  
   Scrollable list of items; tap opens item detail (name, description, price, options/modifiers); **Add to Cart**.

4. **Cart**  
   List of items, quantities, prices; edit/remove; subtotal; **Checkout** CTA.

5. **Checkout / Payment**  
   **Split tender:** select payment method(s) (e.g., credit card, Club Metro comp); show breakdown; clear labels so split payment is obvious (NR-02).

6. **Order confirmation**  
   Order ID, order summary, restaurant name, **pickup location**, **estimated pickup time** (FR-04).

7. **Account / membership**  
   Indication of member vs guest (FR-01); comp balance or "Login" where relevant.

8. **Error states**  
   At least one example each: network error, restaurant unavailable, validation error. Copy must be **non-technical and actionable** (NR-01).

9. **Navigation**  
   Persistent nav (e.g., home, cart, account/orders, support/FAQ) consistent with [Figma Top Nav](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design?node-id=212-478) and the reference flow.

---

## 7. Technical & Handoff Notes (For Implementation)

- **Stack (for reference only; Figma is design only):** Backend .NET 8 / ASP.NET Core; frontend HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.3.7, jQuery 3.8.1.
- **Figma deliverable:** High-fidelity, mobile-first frames; components and styles aligned with brand + style guide; clear naming and structure for dev handoff.
- **Design tokens:** Document colors (hex from Section 4), type scale, and spacing so implementation can use the same values (e.g., in CSS variables or Bootstrap overrides).

---

## 8. One-Sentence Summary

Produce a **high-fidelity Figma prototype** for Motor City Casino's mobile food ordering platform that: (1) follows the flow and structure of the [example prototype](https://mobileorderingmdp2026.azurewebsites.net/index.html), (2) uses the [Motor City Figma wireframes and components](https://www.figma.com/design/FVEwdLiKvgmZvw23MU4CKq/Motor-City-Casino-Design) (nodes 140-39 and 212-478), (3) meets all SOW functional, operational, and nonfunctional requirements listed above, and (4) strictly adheres to the Motor City brand identity (wordmark, icon, typography, color palette) and the General UI style guide (dark-first, high-contrast, clear hierarchy, accessible, one primary action per section).
