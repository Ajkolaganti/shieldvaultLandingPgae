# Shield Vault Feature Pages

Individual feature detail pages for each component of the Shield Vault platform.

## 📁 Structure

```
src/
├── components/
│   └── FeaturePageTemplate.tsx    # Reusable template for all feature pages
├── pages/
│   └── features/
│       ├── pam/                   # Privilege Access Management features
│       │   ├── AccountsManagement.tsx
│       │   └── Sessions.tsx
│       └── secrets/               # Secrets Management features
│           └── SecretsManagement.tsx
```

## 🎨 Feature Page Template

The `FeaturePageTemplate` component provides a consistent structure for all feature pages:

### Sections:
1. **Hero Section** - Feature icon, title, subtitle, and CTAs
2. **What It Does** - Overview, problem, and solution
3. **Key Features** - Grid of 6-8 feature cards
4. **How It Works** - Step-by-step process with icons
5. **Use Cases** - Real-world scenarios by industry
6. **Benefits & Metrics** - Quantifiable results
7. **Integration & Compatibility** - Supported platforms
8. **Security & Compliance** - Security features and badges
9. **CTA Section** - Trial signup form

## 🚀 Created Feature Pages

### Privilege Access Management (PAM)

#### 1. Accounts Management
**Route**: `/features/pam/accounts-management`
**Color**: Blue gradients
**Description**: Discover, manage, and secure privileged accounts across entire infrastructure

**Key Metrics**:
- 87% reduction in manual work
- 98% accuracy in privilege detection
- 100% infrastructure visibility
- < 2 min account discovery time

**Supported Platforms**:
- Windows, Linux, Oracle
- AWS, Azure, GCP
- Active Directory, LDAP
- Cloud IAM services

---

#### 2. Session Recording & Monitoring
**Route**: `/features/pam/sessions`
**Color**: Cyan gradients
**Description**: Record, monitor, and analyze every privileged session in real-time

**Key Metrics**:
- 96% anomaly detection accuracy
- 100% session capture rate
- < 5s real-time alert latency
- 50MB/hr average storage per session

**Features**:
- HD video recording (up to 1080p)
- Real-time monitoring and alerts
- Searchable transcripts with regex
- AI-powered behavioral analysis
- File transfer tracking
- Session analytics and metrics

---

### Secrets Management

#### 3. Secrets Management
**Route**: `/features/secrets/management`
**Color**: Purple/Pink gradients
**Description**: Centralized control plane for discovering and rotating secrets

**Key Metrics**:
- 12,847 secrets managed
- 98% rotation success rate
- 99% hardcoded secrets eliminated
- < 5 min discovery time

**Supported Platforms**:
- AWS Secrets Manager
- Azure Key Vault
- GCP Secret Manager
- HashiCorp Vault
- GitHub, GitLab, Jenkins
- Kubernetes, Docker

**Secret Types**:
- Database credentials
- API keys and tokens
- SSH keys and certificates
- Cloud service credentials
- Encryption keys
- Service accounts

---

## 🔗 Navigation

Feature pages are accessible from the landing page's expandable header menu. Click on:
- **Privilege Access Management (PAM)** → Select feature
- **Secrets Management** → Select feature
- More features coming soon

## 🛠️ How to Add New Feature Pages

1. **Create the feature page**:
```tsx
// src/pages/features/[module]/[FeatureName].tsx
import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { YourIcon } from 'lucide-react'

const YourFeaturePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<YourIcon className="w-32 h-32 text-white" />}
      heroTitle="Your Feature"
      heroSubtitle="One-line value proposition"
      heroGradient="from-blue-900 to-purple-900"
      // ... other props
    />
  )
}

export default YourFeaturePage
```

2. **Add route in App.tsx**:
```tsx
import YourFeaturePage from './pages/features/[module]/YourFeature'

// In Routes:
<Route path="/features/[module]/[feature]" element={<YourFeaturePage />} />
```

3. **Add navigation link in LandingPage.tsx**:
```tsx
{
  title: 'Your Module',
  dropdown: {
    title: 'Module Features',
    items: [
      { name: 'Your Feature', link: '/features/[module]/[feature]' }
    ]
  }
}
```

## 📋 Planned Feature Pages

### PAM Module (Remaining):
- [ ] Policy Engine
- [ ] Approvals Workflow
- [ ] Discovery
- [ ] Compliance Reports
- [ ] Threat Analytics
- [ ] AI Automation
- [ ] Master Reconcile
- [ ] JIT Activation

### Secrets Management (Remaining):
- [ ] Vault Management
- [ ] Cloud Discovery
- [ ] CI/CD Discovery
- [ ] Rotation Policies
- [ ] Access Control
- [ ] Audit & Compliance

### Service Account Vaulting:
- [ ] Account Lifecycle
- [ ] Auto-provisioning
- [ ] Permission Management
- [ ] Threat Detection

### Personal Vault:
- [ ] Secure Storage
- [ ] Password Generator
- [ ] Version History

### Remote Secure Access:
- [ ] Zero-Trust Access
- [ ] Session Management
- [ ] Device Compliance
- [ ] MFA Integration
- [ ] Geofencing

### Integrations:
- [ ] Cloud Platforms
- [ ] CI/CD Tools
- [ ] SIEM Integration
- [ ] SSO/SAML

## 🎨 Design Guidelines

- Use module-specific color gradients
- Include real metrics and statistics
- Add industry-specific use cases
- Show compliance badges
- Maintain consistent spacing and typography
- Use high-quality images when available
- Add smooth animations and transitions
- Ensure mobile responsiveness

## 📱 Responsive Design

All feature pages are fully responsive:
- **Mobile**: Single column, stacked cards
- **Tablet**: 2-column grids
- **Desktop**: 3-column grids with full-width sections

## 🔐 Compliance Badges

Standard compliance badges used across pages:
- SOC 2 Type II
- ISO 27001
- NIST 800-53
- HIPAA
- PCI-DSS
- GDPR
- FedRAMP

