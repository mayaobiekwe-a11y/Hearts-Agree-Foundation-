# Hearts Agree Foundation

Static website for Hearts Agree Foundation, a diaspora-led 501(c)(3) nonprofit mobilizing Nigerians abroad to invest in the people and communities of Nigeria.

Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Project structure

```
index.html          Home
about.html           Origin, name, mission, vision, philosophy, founder, board
programs.html        We Remember You, Entrepreneur Fund, Task Force, Infrastructure Partnerships
contact.html         Donate, City Champion, Task Force, Fund, Partnership contact points
assets/css/style.css Design system (shared across all pages)
assets/js/main.js    Mobile nav toggle + active nav-link highlighting
assets/img/          Photos (none checked in yet — see placeholders below)
```

## Local preview

No build step required. From this directory:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Repo Settings → Pages → Source: **Deploy from a branch**
2. Branch: `main`, folder: `/ (root)`
3. Save — the site publishes to `https://<owner>.github.io/hearts-agree-foundation-/`

The repo must be **public** for free GitHub Pages hosting (private repos require GitHub Pro/Team/Enterprise).

## Known placeholders to swap in

- **Email address** — `info@heartsagreefoundation.org` is used sitewide (footer, all Contact-page CTAs) as a placeholder. Swap for the real inbox once one exists.
- **Domain** — `heartsagreefoundation.org` shown in the footer is a placeholder; update once a domain is registered.
- **Donation portal** — the Contact page currently routes "Donate" to an email CTA with a note that the portal is "launching soon." Replace with a real donation processor (Stripe, Givebutter, PayPal Giving Fund, etc.) once one is set up.
- **Social links** — no Instagram/Discord/social handles were provided for this org yet; none are included. Add them to the footer and Contact page once they exist.
- **Founder / board photos** — no headshots included yet; About page is text-only for now.
- **Impact numbers** — the We Remember You growth stats (25 women in Dec 2023, 50 in Dec 2024, Enugu & Lagos shelters) are real, sourced from the existing Vanede site. The other three programs (Entrepreneur Fund, Task Force, Infrastructure Partnerships) have no impact numbers yet since they haven't launched — update the Home and Programs pages with real stats as those programs go live.
- **Entrepreneur Fund launch date** — currently states "launching 2027" per the source content; update if the timeline changes.

## Design

Shares a design language with the Black Women Rising site (Fraunces + Inter type pairing, forest green / cream / gold palette) since both fall under the same Vanede umbrella, with a terracotta accent in place of BWR's oxblood to give Hearts Agree its own identity.
