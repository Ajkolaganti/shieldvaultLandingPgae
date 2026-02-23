# Shield Vault - Everything You Need to Know

## What Is This Project?

Shield Vault is a **marketing landing page** for an Enterprise Security Platform SaaS product. It is not the security product itself — it is the front-facing website that showcases what Shield Vault offers, explains its features to potential customers, and converts visitors into leads through demo request forms.

Think of it like the **Salesforce.com website** (not the Salesforce app itself) — a polished, modern, single-page-application that presents an enterprise software product to decision-makers, security teams, and IT leaders.

The target audience is **enterprise organizations** — companies with 500+ employees, CISOs, IT directors, DevOps leads, and security-conscious industries like finance, healthcare, and government.

---

## What Is Shield Vault (The Product Being Marketed)?

Shield Vault is pitched as a **holistic Identity and Access Management (IAM) platform** that unifies six major security disciplines under one roof:

| Module | What It Does |
|--------|-------------|
| **Privileged Access Management (PAM)** | Controls who can access sensitive systems, monitors privileged sessions, and prevents unauthorized access to critical infrastructure |
| **Secrets Management** | Discovers, stores, rotates, and audits API keys, database passwords, tokens, certificates, and other secrets across cloud and CI/CD environments |
| **Service Account Vaulting (ServiceFort)** | Manages non-human/service accounts — the automated accounts that applications use to talk to each other |
| **Personal Vault** | Enterprise-grade password manager for individuals and teams, similar to 1Password or LastPass but built into the platform |
| **Remote Secure Access** | Zero-trust remote connectivity that replaces VPNs with browser-based access, MFA, geofencing, and device compliance |
| **Compliance & Audit** | Automated compliance reporting for SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST 800-53, and FedRAMP |

On top of these, there is a cross-cutting **AI & Automation** layer that powers intelligent threat detection, behavioral analytics, automated remediation, and predictive security insights across all modules.

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI framework — renders all components and manages state |
| **TypeScript** | 5.3.3 | Type safety on top of JavaScript — catches bugs at compile time |
| **React Router DOM** | 6.20.0 | Client-side routing — handles page navigation without full page reloads |
| **Vite** | 5.0.8 | Build tool and development server — fast HMR (Hot Module Replacement), optimized production builds |

### Styling

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 3.3.6 | Utility-first CSS framework — all styling is done with utility classes directly in JSX |
| **PostCSS** | 8.4.32 | CSS processing pipeline |
| **Autoprefixer** | 10.4.16 | Automatically adds vendor prefixes for cross-browser compatibility |
| **clsx** | 2.0.0 | Utility for conditionally joining class names |
| **tailwind-merge** | 2.0.0 | Intelligently merges Tailwind classes without conflicts |
| **class-variance-authority** | 0.7.0 | Creates component variants (e.g., button sizes, card styles) |

### UI Components & Icons

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Radix UI Navigation Menu** | 1.1.2 | Accessible, unstyled navigation menu primitive from Radix |
| **Lucide React** | 0.294.0 | Icon library — provides all icons used throughout the site (Shield, Key, Lock, etc.) |

### Dev Tooling

| Technology | Purpose |
|-----------|---------|
| **@vitejs/plugin-react** | Vite plugin that enables React Fast Refresh and JSX transform |
| **@types/react** | TypeScript type definitions for React |
| **@types/react-dom** | TypeScript type definitions for React DOM |

### How to Run It

```bash
# Install dependencies
npm install

# Start development server (typically http://localhost:5173 or 5174)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Project File Structure

Here is every directory and significant file in the project, with explanations:

```
landingpage2.0/
│
├── index.html                          # The single HTML file — Vite injects the React app here
├── package.json                        # Dependencies, scripts (dev, build, preview)
├── vite.config.ts                      # Vite configuration — React plugin, path aliases (@/ → ./src/)
├── tailwind.config.js                  # Tailwind theme — custom colors, animations, keyframes
├── postcss.config.js                   # PostCSS pipeline — loads Tailwind and Autoprefixer
├── tsconfig.json                       # TypeScript config — strict mode, ES2020 target, path aliases
├── tsconfig.node.json                  # TypeScript config for Node-side files (vite config)
│
├── public/                             # Static assets served as-is (images, favicons)
├── dist/                               # Production build output (generated by `npm run build`)
│
├── src/
│   ├── main.tsx                        # Application entry point — mounts React to the DOM
│   ├── App.tsx                         # Router configuration — maps URL paths to page components
│   ├── LandingPage.tsx                 # The main homepage (~1,380 lines) — all landing page sections
│   ├── index.css                       # Global styles — CSS variables, custom animations, glassmorphism
│   │
│   ├── lib/
│   │   └── utils.ts                    # cn() helper — merges clsx + tailwind-merge for clean class names
│   │
│   ├── components/
│   │   ├── FloatingNavbar.tsx           # Sticky floating navigation bar with dropdowns
│   │   ├── FeaturePageTemplate.tsx      # Reusable template that all feature detail pages use
│   │   ├── TechIcons.tsx               # SVG icon components for tech logos (AWS, Azure, GCP, etc.)
│   │   │
│   │   └── ui/                         # Smaller UI primitives (shadcn/ui pattern)
│   │       ├── navigation-menu.tsx     # Radix UI navigation menu wrapper with Tailwind styles
│   │       ├── enterprise-demo-form.tsx # Lead-gen form (email, company, team size)
│   │       ├── moving-dot-card.tsx     # Animated card with glowing dot border effect
│   │       ├── gaming-login.tsx        # Stylized login component
│   │       └── demo.tsx               # Demo-related component
│   │
│   └── pages/
│       └── features/                   # All feature detail pages, organized by product area
│           │
│           ├── pam/                    # Privileged Access Management
│           │   ├── AccountsManagement.tsx
│           │   ├── Sessions.tsx
│           │   ├── PAM.tsx
│           │   ├── PolicyEngine.tsx
│           │   ├── ApprovalsWorkflow.tsx
│           │   ├── Discovery.tsx
│           │   ├── ComplianceReports.tsx
│           │   ├── ThreatAnalytics.tsx
│           │   ├── PAMAIAutomation.tsx
│           │   ├── MasterReconcile.tsx
│           │   └── JITActivation.tsx
│           │
│           ├── secrets/                # Secrets Management
│           │   ├── SecretsManagement.tsx
│           │   ├── VaultManagement.tsx
│           │   ├── CloudDiscovery.tsx
│           │   ├── CICDDiscovery.tsx
│           │   ├── RotationPolicies.tsx
│           │   ├── SecretsIntegrations.tsx
│           │   ├── SecretsAccessControl.tsx
│           │   ├── SecretsAuditCompliance.tsx
│           │   ├── SecretsAIAutomation.tsx
│           │   └── SecretsThreatAnalytics.tsx
│           │
│           ├── servicefort/            # Service Account Vaulting
│           │   ├── ServiceFort.tsx
│           │   ├── AccountLifecycle.tsx
│           │   ├── AutoProvisioning.tsx
│           │   ├── PermissionManagement.tsx
│           │   ├── ThreatDetection.tsx
│           │   └── ServiceFortAIAutomation.tsx
│           │
│           ├── personal-vault/         # Personal Vault
│           │   ├── PersonalVault.tsx
│           │   ├── SecureStorage.tsx
│           │   ├── PVSecretManagement.tsx
│           │   ├── PasswordGenerator.tsx
│           │   ├── VersionHistory.tsx
│           │   ├── PVRotationPolicies.tsx
│           │   ├── DiscoveryScanning.tsx
│           │   └── PVSessionRecording.tsx
│           │
│           ├── remote-access/          # Remote Secure Access
│           │   ├── RemoteAccess.tsx
│           │   ├── ZeroTrustAccess.tsx
│           │   ├── RASessionManagement.tsx
│           │   ├── DeviceCompliance.tsx
│           │   ├── MFAIntegration.tsx
│           │   ├── Geofencing.tsx
│           │   └── RAAIAutomation.tsx
│           │
│           ├── ai-automation/          # AI & Automation
│           │   └── AIAutomation.tsx
│           │
│           └── compliance/             # Compliance & Audit
│               └── Compliance.tsx
```

**Total**: 44+ page components across 7 feature categories, plus 8+ shared components.

---

## How Routing Works

The application uses **React Router v6** with client-side routing. All routes are defined in `src/App.tsx`.

### Currently Active Routes

These are the URL paths that are wired up and functional:

| URL Path | Component | Description |
|----------|-----------|-------------|
| `/` | `LandingPage` | The main homepage with all sections |
| `/features/pam/accounts-management` | `AccountsManagementPage` | PAM accounts management detail page |
| `/features/pam/sessions` | `SessionsPage` | PAM session recording detail page |
| `/features/secrets/management` | `SecretsManagementPage` | Secrets management detail page |
| `/features/ai-automation` | `AIAutomationPage` | AI & Automation detail page |
| `/features/servicefort` | `ServiceFortPage` | ServiceFort detail page |
| `/features/remote-access` | `RemoteAccessPage` | Remote Secure Access detail page |
| `/features/compliance` | `CompliancePage` | Compliance & Audit detail page |
| `/features/personal-vault` | `PersonalVaultPage` | Personal Vault detail page |

### Pages That Exist But Are NOT Routed Yet

Many feature sub-pages have been built (the `.tsx` files exist in `src/pages/features/`) but are **not yet connected to routes** in `App.tsx`. For example, `PolicyEngine.tsx`, `Discovery.tsx`, `ThreatAnalytics.tsx`, and many others exist as files but don't have URL paths assigned. These would need route entries added to `App.tsx` and navigation links updated to become accessible.

---

## The Landing Page — Section by Section

The landing page (`src/LandingPage.tsx`) is the heart of the application. It is a single, long-scrolling page with approximately 1,380 lines of code. Here is every section it contains, in order from top to bottom:

### 1. Premium Background Glow Effects
Three large, semi-transparent radial gradient circles are positioned fixed behind all content. They create a subtle, ambient blue-indigo glow effect that gives the page depth. These are purely decorative and don't interact with the user.

### 2. Floating Navigation Bar
A fixed-position navigation bar that floats at the top of the viewport. It:
- Contains the Shield Vault logo and brand name
- Has dropdown menus for each product area (PAM, Secrets, ServiceFort, Personal Vault, Remote Access, Integrations)
- Each dropdown lists that product's sub-features as links
- Changes appearance on scroll — becomes more opaque with stronger backdrop blur
- Has a responsive mobile hamburger menu
- Uses Radix UI primitives for accessibility

### 3. Hero Section
The main value proposition area. It features:
- **Headline**: "Secure Your Infrastructure. Effortlessly." (with gradient text on "Effortlessly")
- **Subheadline**: "Enterprise-grade PAM, Secrets Management, and Zero-Trust Access in one unified platform."
- **Supporting copy**: "Automate 87% of security operations, reduce audit prep from weeks to days..."
- **Compliance badges**: SOC 2 Type II, ISO 27001, HIPAA, GDPR, PCI-DSS 3.2.1, NIST 800-53
- **Right side**: A live-looking dashboard preview (a decorative card showing simulated metrics like secrets managed, rotation success rate, and active sessions)

### 4. Core Modules Grid
Six cards in a responsive grid, each representing one of Shield Vault's product modules:
1. Privilege Access Management (PAM)
2. Secrets Management
3. Service Account Vaulting
4. Remote Secure Access
5. Personal Vault
6. Compliance & Audit

Each card has an icon, title, description, and a list of key capabilities. Cards that have detail pages link to them.

### 5. AI & Automation Section
Showcases the AI capabilities:
- Agentic AI agents (autonomous security agents)
- 156+ automation rules
- 98.5% automation success rate
- 87% reduction in manual operations
- Features like predictive analytics, smart recommendations, and behavioral analysis

### 6. Threat Analytics Section
Highlights real-time threat detection:
- 2,847 threats blocked
- 2.4s average response time
- Behavioral analysis
- Automated incident response

### 7. Compliance & Audit Section
Displays supported compliance frameworks with badges and descriptions for SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, and NIST 800-53.

### 8. Integrations Ecosystem
Three rows of technology integrations, displayed with custom SVG icons:
- **Cloud Platforms**: AWS, Azure, GCP, On-Premises, Hybrid
- **CI/CD Tools**: GitHub, GitLab, Jenkins, CircleCI, Bitbucket
- **Enterprise Tools**: SIEM, SSO/SAML, Slack, Microsoft Teams, PagerDuty, Webhooks

Uses an infinite horizontal scroll animation for visual interest.

### 9. Technical Metrics
Performance and scale statistics displayed as large numbers with labels.

### 10. Customer Testimonials
Social proof section with quotes from fictional enterprise customers, including name, title, company, and star ratings.

### 11. CTA (Call-to-Action) Section
A prominent section encouraging visitors to request a demo. Contains the `EnterpriseDemoForm` component that collects:
- Email address
- Company name
- Team size
- Has a success state with confirmation message

### 12. Footer
Standard website footer with links organized by category, copyright notice, and legal links.

---

## The Feature Page Template System

Every feature detail page (the pages you navigate to from the landing page) is built using a single reusable component: `FeaturePageTemplate.tsx`. This enforces a consistent layout and visual style across all 40+ feature pages.

### What the Template Accepts (Props)

Each feature page passes these data sections into the template:

| Prop | Type | Purpose |
|------|------|---------|
| `heroIcon` | ReactNode | The icon displayed in the hero section |
| `heroTitle` | string | Main headline |
| `heroSubtitle` | string | Supporting description |
| `heroGradient` | string | CSS gradient classes for the hero background |
| `heroImage` | string (optional) | URL to a hero illustration |
| `overview` | string | What this feature does |
| `problem` | string | What problem it solves |
| `benefit` | string | The key benefit |
| `keyFeatures` | Feature[] | Array of features with icon, title, description |
| `steps` | Step[] | How-it-works steps (numbered process) |
| `technicalSpecs` | object[] | Technical capability categories and items |
| `useCases` | UseCase[] | Industry, scenario, and impact descriptions |
| `metrics` | Metric[] | Quantitative benefits (e.g., "99.9% uptime") |
| `integrations` | Integration[] | Compatible tools and platforms |
| `securityFeatures` | string[] | Security capabilities |
| `complianceBadges` | string[] | Supported compliance standards |

### What the Template Renders (Sections)

Every feature page rendered by this template has these sections in this order:

1. **Fixed Header** — Navigation bar with back-to-home link
2. **Hero Section** — Icon, title, subtitle, gradient background, optional image
3. **What It Does** — Three-part explanation: Overview, Problem it solves, Key benefit
4. **Key Features** — Grid of feature cards (icon + title + description)
5. **How It Works** — Numbered step-by-step process
6. **Technical Specifications** — Grouped lists of technical capabilities
7. **Real-World Use Cases** — Industry-specific scenarios with impact metrics
8. **Benefits & Metrics** — Quantitative results (percentages, time savings)
9. **Integrations & Compatibility** — Logos/names of compatible platforms
10. **Security & Compliance** — Security features list + compliance badges
11. **CTA Section** — Demo request form

This means adding a new feature page only requires creating a new `.tsx` file that imports the template and passes the right data — no layout work needed.

---

## Detailed Product Features

### 1. Privileged Access Management (PAM)

The PAM module has 10 sub-feature pages:

| Sub-Feature | What It Does |
|-------------|-------------|
| **Accounts Management** | Central dashboard for managing all privileged accounts — creation, modification, deactivation, password policies |
| **Session Recording** | Records and plays back privileged user sessions for audit trails — supports RDP, SSH, database, and web sessions |
| **Policy Engine** | Defines and enforces access policies — time-based restrictions, IP whitelisting, risk-based access, role-based controls |
| **Approvals Workflow** | Multi-level approval chains for access requests — manager approval, security team approval, auto-approval rules |
| **Discovery** | Automatically scans the network to find privileged accounts that aren't being managed — discovers shadow admin accounts |
| **Compliance Reports** | Pre-built and custom compliance reports — SOC 2, ISO 27001, HIPAA evidence generation |
| **Threat Analytics** | Behavioral analysis of privileged sessions — detects anomalous behavior, lateral movement, privilege escalation |
| **AI Automation** | AI-powered automation for PAM tasks — smart policy suggestions, automated access reviews, risk scoring |
| **Master Reconcile** | Verifies that passwords stored in the vault match the actual passwords on target systems — detects drift |
| **JIT Activation** | Just-In-Time privileged access — grants temporary elevated access with automatic expiry, eliminates standing privileges |

### 2. Secrets Management

The Secrets module has 9 sub-feature pages:

| Sub-Feature | What It Does |
|-------------|-------------|
| **Secrets Control Plane** | Central management interface for all secrets across the organization — single pane of glass |
| **Vault Management** | Encrypted vault storage for secrets — access controls, versioning, namespaces |
| **Cloud Discovery** | Scans AWS, Azure, and GCP environments for exposed or unmanaged secrets — IAM keys, storage credentials |
| **CI/CD Discovery** | Scans GitHub, GitLab, Jenkins, and other CI/CD pipelines for hardcoded secrets in code and configs |
| **Rotation Policies** | Automated credential rotation on schedules — 98% rotation success rate, zero-downtime rotation |
| **Integrations** | Native integrations with 50+ platforms — Kubernetes, Terraform, Ansible, Docker, cloud providers |
| **Access Control** | RBAC (Role-Based Access Control) for secrets — who can read, write, rotate, or delete each secret |
| **Audit & Compliance** | Complete audit trail of every secret access — who accessed what, when, from where |
| **AI Automation** | AI-powered secret management — automatic classification, risk assessment, rotation recommendations |
| **Threat Analytics** | Detects unusual secret access patterns — bulk access, off-hours access, access from new locations |

### 3. Service Account Vaulting (ServiceFort)

The ServiceFort module has 5 sub-feature pages:

| Sub-Feature | What It Does |
|-------------|-------------|
| **Account Lifecycle** | Full lifecycle management of service accounts — creation, ownership assignment, review, decommissioning |
| **Auto-Provisioning** | Template-based automated provisioning of service accounts — standardized configurations, approval gates |
| **Permission Management** | Granular permission controls for service accounts — least-privilege enforcement, boundary-based access |
| **Threat Detection** | Real-time monitoring of service account activity — detects credential abuse, privilege escalation, anomalous behavior |
| **AI Automation** | AI-powered service account management — risk scoring, usage pattern analysis, orphan account detection |

### 4. Personal Vault

The Personal Vault module has 7 sub-feature pages:

| Sub-Feature | What It Does |
|-------------|-------------|
| **Secure Storage** | AES-256 encrypted vault for personal credentials — unlimited storage, cross-device sync |
| **Secret Management** | Organize and manage personal secrets — folders, tags, search, favorites |
| **Password Generator** | Cryptographically strong password generation — configurable length, complexity, memorable passwords |
| **Version History** | Track changes to stored credentials over time — rollback, compare versions |
| **Rotation Policies** | Automated personal password rotation — scheduled rotation, breach-triggered rotation |
| **Discovery & Scanning** | Scans browsers, files, and systems for stored passwords that should be vaulted |
| **Session Recording** | Records personal vault access sessions for enterprise audit requirements |

### 5. Remote Secure Access

The Remote Access module has 6 sub-feature pages:

| Sub-Feature | What It Does |
|-------------|-------------|
| **Zero-Trust Access** | Browser-based access to internal systems — no VPN required, continuous verification |
| **Session Management** | Real-time monitoring and control of remote sessions — live view, terminate, record |
| **Device Compliance** | Validates device security posture before granting access — OS updates, antivirus, encryption |
| **MFA Integration** | Multi-factor authentication enforcement — TOTP, push notifications, biometrics, hardware keys |
| **Geofencing** | Location-based access policies — restrict access by country, region, or custom zones |
| **AI Automation** | AI-powered remote access management — risk-based authentication, anomaly detection |

### 6. Compliance & Audit

A single comprehensive page covering:
- Pre-built compliance templates for SOC 2, ISO 27001, HIPAA, GDPR, PCI-DSS, NIST 800-53
- Automated evidence collection
- Real-time compliance dashboards
- One-click report generation
- Continuous monitoring
- Gap analysis and remediation guidance

### 7. AI & Automation

A single comprehensive page covering the cross-cutting AI layer:
- 8 autonomous security agents (Agentic AI)
- 156+ automation rules
- Predictive analytics
- Smart recommendations
- Behavioral analytics
- 98.5% automation success rate
- 87% reduction in manual security operations

---

## Design System & Visual Identity

### Color Palette

The application uses a **light theme** with blue-indigo accents:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue 500 | `#3b82f6` | Primary buttons, links, accents |
| Primary Blue 600 | `#2563eb` | Hover states, emphasis |
| Indigo 600 | `#6366f1` | Gradient endpoints, secondary accents |
| Gray 900 | `#111827` | Headlines, primary text |
| Gray 600 | `#4b5563` | Body text |
| Gray 400 | `#9ca3af` | Captions, muted text |
| White | `#ffffff` | Backgrounds, cards |

Each product area has its own gradient theme for feature pages:
- **PAM**: Blue tones (`from-blue-50 via-white to-blue-50`)
- **Secrets**: Purple tones (`from-purple-50 via-white to-purple-50`)
- **Remote Access**: Green tones (`from-green-50 via-white to-green-50`)
- **Personal Vault**: Indigo tones (`from-indigo-50 via-white to-purple-50`)
- **ServiceFort**: Blue tones

### Visual Effects

| Effect | Implementation | Where Used |
|--------|---------------|------------|
| **Glassmorphism** | `bg-white/80 backdrop-blur-xl` + gradient overlay | Navbar, cards, modals |
| **Gradient Text** | `bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600` | Hero headlines, section titles |
| **Ambient Glow** | Fixed radial gradients behind content | Full-page background |
| **Scroll Animations** | Intersection Observer + CSS transitions | Every section fades/slides in on scroll |
| **Floating Animation** | `translateY` keyframes, 6s infinite loop | Decorative elements |
| **Moving Dot Cards** | Animated gradient dot traveling along card borders | Feature cards on landing page |
| **Infinite Scroll** | CSS `@keyframes` horizontal scroll, 40s linear infinite | Integration logos |

### Custom Animations (defined in `tailwind.config.js`)

| Animation Name | Duration | Effect |
|---------------|----------|--------|
| `fade-in` | 0.6s | Opacity 0 → 1 |
| `slide-up` | 0.6s | Translate 20px up + fade in |
| `float` | 6s infinite | Gentle vertical bobbing |
| `in` | 0.2s | Scale 0.95 → 1 + fade in |
| `out` | 0.2s | Scale 1 → 0.95 + fade out |

### Typography

System font stack — no custom fonts are loaded:
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Responsive Design

The site is **mobile-first** using Tailwind's responsive prefixes:
- Base styles target mobile
- `sm:` (640px+) for small tablets
- `md:` (768px+) for tablets
- `lg:` (1024px+) for desktops
- The navbar switches from a hamburger menu (mobile) to dropdown menus (desktop)
- Grids collapse from multi-column to single-column on small screens

---

## Key Patterns & Architecture Decisions

### 1. Template-Driven Feature Pages
Instead of building each feature page from scratch, a single `FeaturePageTemplate` component accepts structured data as props. This means:
- Every feature page looks consistent
- Adding a new feature page takes minutes (just pass different data)
- Design changes to the template propagate to all feature pages at once

### 2. Scroll-Based Animations via Intersection Observer
A custom `useIntersectionObserver` hook watches each section of the landing page. When a section enters the viewport (at 10% visibility threshold), it triggers a CSS class change that animates the section into view. This creates the "content appears as you scroll" effect.

### 3. Path Aliases
TypeScript and Vite are configured with the `@/` path alias that maps to `./src/`. So `import { cn } from '@/lib/utils'` resolves to `./src/lib/utils.ts`. This keeps imports clean and avoids relative path hell (`../../../`).

### 4. Component Composition with Radix UI
The navigation menu uses Radix UI primitives for accessibility (keyboard navigation, ARIA attributes, focus management) while all visual styling is done with Tailwind CSS. This is the "headless UI" pattern — separate behavior from presentation.

### 5. Utility Function: `cn()`
The `cn()` function in `src/lib/utils.ts` combines `clsx` (conditional class names) and `tailwind-merge` (deduplicates conflicting Tailwind classes). It is used everywhere to compose class names safely:

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Statistics & Metrics Displayed on the Site

These are the marketing statistics shown on the landing page (decorative/aspirational, not live data):

| Metric | Value | Context |
|--------|-------|---------|
| Secrets Managed | 12,847 | Dashboard preview in hero |
| Rotation Success Rate | 98% | Dashboard preview in hero |
| Active Sessions | 156 | Dashboard preview in hero |
| Automation Success Rate | 98.5% | AI & Automation section |
| Manual Operation Reduction | 87% | AI & Automation section |
| Average Response Time | 2.4s | Threat Analytics section |
| Threats Blocked | 2,847 | Threat Analytics section |
| Automation Rules | 156+ | AI section |
| Autonomous AI Agents | 8 | AI section |

---

## What's Complete vs. What's In Progress

### Complete
- Full landing page with all sections
- Floating navigation with dropdowns
- Feature page template system
- 8 routed feature pages (PAM Accounts, PAM Sessions, Secrets, AI, ServiceFort, Remote Access, Compliance, Personal Vault)
- 36+ additional feature sub-pages (files created with content)
- Enterprise demo form
- Responsive design (mobile, tablet, desktop)
- Custom animations and visual effects
- Technology integration icons
- Production build configuration

### In Progress / Not Yet Wired
- Many feature sub-pages exist as files but lack routes in `App.tsx` (e.g., PolicyEngine, Discovery, ThreatAnalytics, all sub-pages for Secrets/ServiceFort/Personal Vault/Remote Access)
- Navigation dropdown items for unrouted pages don't have `link` properties set
- No backend or API integration (this is a static frontend)
- No authentication or user management (it's a marketing site)
- No actual data — all statistics are hardcoded for demonstration

---

## How to Add a New Feature Page

1. **Create the file**: Add a new `.tsx` file in the appropriate `src/pages/features/<product>/` directory
2. **Import the template**: `import FeaturePageTemplate from '../../../components/FeaturePageTemplate'`
3. **Define the data**: Create objects for hero content, features, steps, use cases, metrics, integrations, security features, and compliance badges
4. **Render the template**: Export a component that returns `<FeaturePageTemplate {...yourData} />`
5. **Add the route**: Add a `<Route>` entry in `src/App.tsx` mapping a URL path to your new component
6. **Update navigation**: Add a `link` property to the corresponding item in the `navigationItems` array in `LandingPage.tsx`

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

The site uses modern CSS features (backdrop-filter, CSS Grid, CSS custom properties) which are supported in all modern browsers.

---

## Summary

Shield Vault's landing page is a professionally built, modern React + TypeScript single-page application that markets an enterprise security platform. It showcases six major product modules (PAM, Secrets, ServiceFort, Personal Vault, Remote Access, Compliance) plus AI & Automation capabilities through a polished landing page and 40+ individual feature detail pages. The codebase is well-organized with a template-driven architecture, utility-first styling via Tailwind CSS, accessible navigation via Radix UI, and scroll-triggered animations for visual polish. The project uses Vite for fast development and optimized builds.
