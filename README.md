# Shield Vault Landing Page

A modern, long-scrolling landing page for Shield Vault - an Enterprise Security Platform SaaS application.

## Features

- 🎨 Modern design with glassmorphism effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth scroll animations using Intersection Observer
- 🎭 Parallax effects on hero section
- 🌈 Beautiful gradient backgrounds
- 🎯 Interactive dropdown menus in header
- ⚡ Performance optimized with lazy loading
- 🎪 Micro-interactions and hover effects

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
landingpage2.0/
├── src/
│   ├── App.tsx          # Main app component
│   ├── LandingPage.tsx  # Landing page component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── vite.config.ts       # Vite config
```

## Sections

1. **Header** - Sticky navigation with expandable dropdowns
2. **Hero** - Main value proposition with statistics
3. **Core Modules** - 6 feature cards in grid layout
4. **AI & Automation** - AI-powered features showcase
5. **Threat Analytics** - Security monitoring features
6. **Compliance & Audit** - Compliance certifications
7. **Integrations Ecosystem** - Third-party integrations
8. **Technical Metrics** - Performance statistics
9. **Customer Testimonials** - Social proof
10. **Pricing Tiers** - Three pricing plans
11. **CTA Section** - Lead generation form
12. **Footer** - Links and copyright

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

All content is defined in `src/LandingPage.tsx`. Modify the data arrays to update:
- Navigation items
- Feature cards
- Testimonials
- Pricing plans
- Footer links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

