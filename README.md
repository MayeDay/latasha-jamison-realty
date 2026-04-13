# LaTasha Jamison — Real Estate Website

A professional single-page React application for LaTasha Jamison, real estate agent serving the Greater Cleveland area.

## Project Structure

```
latasha-jamison-realty/
├── index.html                  # Vite HTML entry point
├── vite.config.js              # Vite + React config
├── package.json
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Page assembly — all sections in order
    ├── index.css               # Global CSS variables, resets, shared utilities
    ├── assets/
    │   └── images.js           # All photos exported as base64 data URIs
    ├── data/
    │   └── agent.js            # All content: agent info, services, listings
    └── components/
        ├── Navbar.jsx/.css     # Fixed top nav with smooth-scroll links
        ├── Hero.jsx/.css       # Full-screen hero with headshot
        ├── About.jsx/.css      # About section with headshot + contact info
        ├── Services.jsx/.css   # 3-card services grid
        ├── Testimonial.jsx/.css# Dark pull-quote strip
        ├── Listings.jsx/.css   # Tabbed listings (For Sale / Sold / Rentals)
        ├── Affiliations.jsx/.css # EHO + ORA logo strip
        ├── Contact.jsx/.css    # Contact info + validated form with React state
        └── Footer.jsx/.css     # Footer with EHO logo + copyright
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Customization

### Update agent info, services, or listings
Edit **`src/data/agent.js`** — all content is centralized here. No need to touch individual components.

### Replace photos
Swap out the base64 strings in **`src/assets/images.js`**:
- `headshot` — LaTasha's professional photo (used in Hero + About)
- `ehoLogo`  — Equal Housing Opportunity logo
- `oraLogo`  — Ohio Realtist Association logo

To use real image files instead of base64, move images into `src/assets/` and change the imports to:
```js
import headshot from './headshot.jpg';
import ehoLogo  from './eho.jpg';
import oraLogo  from './ora.png';
```

## Production Deployment

For a production site you would add:
- **Backend / email service** (e.g. EmailJS, Resend, or Formspree) to wire up the contact form
- **Custom domain** (e.g. `latashasoldit.com`) via Netlify, Vercel, or similar
- **MLS integration** to pull live listings instead of the placeholder data in `agent.js`
- **Analytics** (Google Analytics or Plausible)
