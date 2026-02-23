import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Database, Lock, Shield, FolderOpen, Share2,
  CheckCircle, Cloud, Search
} from 'lucide-react'

const SecureStoragePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Database className="w-32 h-32 text-indigo-600" />}
      heroTitle="Secure Storage"
      heroSubtitle="Military-Grade Encrypted Personal Vault for Passwords, Keys, Certificates, and Sensitive Documents"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      heroImage="/PersonalVault.jpeg"
      
      overview="Store and manage all your personal credentials, API keys, certificates, SSH keys, and sensitive documents in a military-grade encrypted vault. AES-256 encryption with zero-knowledge architecture—only you can access your data. Cross-platform access from browser, desktop, mobile, and CLI."
      
      problem="Developers store credentials in plain text files, sticky notes, browser storage, and shared spreadsheets. One compromised device exposes everything. No encryption, no access control, no audit trail. Lost credentials cause hours of recovery work."
      
      benefit="One secure vault for everything. AES-256 encryption with zero-knowledge architecture. Cross-platform access with biometric unlock. Instant search across all stored items. Share securely without exposing plaintext."
      
      keyFeatures={[
        {
          icon: <Lock className="w-10 h-10 text-indigo-400" />,
          title: "Zero-Knowledge Encryption",
          description: "All data encrypted client-side before storage using AES-256-GCM. Shield Vault never sees your plaintext data. Master key derived from your password with Argon2id. Optional hardware key support."
        },
        {
          icon: <FolderOpen className="w-10 h-10 text-indigo-400" />,
          title: "Organize Everything",
          description: "Organize secrets into folders, categories, and tags. Support for passwords, API keys, SSH keys, certificates, secure notes, credit cards, licenses, and custom fields. Template-based item creation."
        },
        {
          icon: <Search className="w-10 h-10 text-indigo-400" />,
          title: "Instant Search",
          description: "Encrypted search across all stored items. Find any credential in milliseconds. Search by name, URL, tag, category, or custom field. Recent items and favorites for quick access."
        },
        {
          icon: <Share2 className="w-10 h-10 text-indigo-400" />,
          title: "Secure Sharing",
          description: "Share credentials with team members without exposing plaintext. Time-limited sharing links with access controls. Revoke access instantly. Complete audit trail of shared access."
        },
        {
          icon: <Cloud className="w-10 h-10 text-indigo-400" />,
          title: "Cross-Platform Sync",
          description: "Access your vault from any device: browser extension, desktop app (Mac/Win/Linux), mobile app (iOS/Android), and CLI. Real-time sync with end-to-end encryption."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Biometric Unlock",
          description: "Unlock your vault with Face ID, Touch ID, Windows Hello, or fingerprint. Master password as fallback. Optional hardware security key (YubiKey, FIDO2) for maximum security."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Create Your Vault",
          description: "Set up your personal vault with a strong master password. Optional hardware key registration. Choose encryption preferences and recovery options. Setup takes under 2 minutes.",
          icon: <Lock className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Import Existing Data",
          description: "Import from browsers (Chrome, Firefox, Safari), other password managers (1Password, LastPass, Bitwarden), CSV files, and JSON exports. Automatic deduplication during import.",
          icon: <Database className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Organize & Tag",
          description: "Organize imported items into folders and categories. Apply tags for easy filtering. Set favorites for frequently used credentials. Create custom categories for specific workflows.",
          icon: <FolderOpen className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Install Extensions",
          description: "Install browser extension for auto-fill. Download desktop and mobile apps. Configure CLI for automation scripts. Set up biometric unlock on supported devices.",
          icon: <Cloud className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Use Daily",
          description: "Auto-fill credentials in browsers and apps. Generate strong passwords for new accounts. Share securely with colleagues. Access from any device with instant sync.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Encryption & Security",
          items: [
            "AES-256-GCM encryption for all stored data",
            "Argon2id key derivation (100k iterations)",
            "Zero-knowledge architecture: server never sees plaintext",
            "End-to-end encryption for sync and sharing",
            "FIDO2/WebAuthn hardware key support",
            "Biometric unlock on supported devices"
          ]
        },
        {
          title: "Supported Item Types",
          items: [
            "Passwords with URL matching and auto-fill",
            "API keys and tokens with environment labels",
            "SSH keys (public/private with passphrase)",
            "TLS/SSL certificates with expiration tracking",
            "Secure notes with markdown formatting",
            "Custom fields with encrypted storage"
          ]
        },
        {
          title: "Cross-Platform Access",
          items: [
            "Browser extensions: Chrome, Firefox, Safari, Edge",
            "Desktop apps: macOS, Windows, Linux",
            "Mobile apps: iOS, Android",
            "CLI tool for automation and scripting",
            "REST API for programmatic access",
            "Real-time sync across all devices"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - Credential Management",
          scenario: "Developer managing 200+ credentials across GitHub, AWS, Azure, databases, and APIs. All stored in secure vault with auto-fill and organized by project. No more plain text files.",
          impact: "200+ credentials secured, instant access with auto-fill, zero credentials in plain text files"
        },
        {
          industry: "DevOps - SSH Key Management",
          scenario: "DevOps engineer managing SSH keys for 50+ servers. All keys stored with labels and access from any device. Automatic key rotation reminders based on age.",
          impact: "50+ SSH keys organized and secured, cross-device access, rotation reminders prevent stale keys"
        },
        {
          industry: "Team Lead - Secure Credential Sharing",
          scenario: "Team lead sharing API keys and service credentials with 10 team members. Time-limited sharing with automatic revocation. Audit trail shows who accessed which credentials.",
          impact: "Zero credentials shared via Slack/email, time-limited sharing, complete access audit trail"
        },
        {
          industry: "Security Engineer - Personal Security",
          scenario: "Security engineer using hardware key (YubiKey) for vault access with biometric fallback. All security tool credentials, vulnerability scanner tokens, and pentest certificates in one vault.",
          impact: "Maximum security with hardware key, all security credentials centralized, biometric quick access"
        }
      ]}
      
      metrics={[
        {
          value: "AES-256",
          label: "Military-grade encryption",
          color: "text-indigo-400"
        },
        {
          value: "Zero",
          label: "Knowledge architecture",
          color: "text-indigo-400"
        },
        {
          value: "6+",
          label: "Platform support",
          color: "text-indigo-400"
        },
        {
          value: "< 50ms",
          label: "Search response time",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "Chrome" },
        { name: "Firefox" },
        { name: "Safari" },
        { name: "Edge" },
        { name: "macOS" },
        { name: "Windows" },
        { name: "Linux" },
        { name: "iOS" },
        { name: "Android" },
        { name: "YubiKey" },
        { name: "FIDO2" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "AES-256-GCM encryption with Argon2id key derivation",
        "Zero-knowledge architecture: server never accesses plaintext",
        "End-to-end encryption for all sync and sharing",
        "Biometric and hardware key authentication",
        "Automatic vault lock after configurable timeout",
        "Clipboard auto-clear after 30 seconds",
        "Breach monitoring for stored credentials",
        "Emergency access with trusted contacts"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "CCPA",
        "FIDO Alliance Certified"
      ]}
    />
  )
}

export default SecureStoragePage
