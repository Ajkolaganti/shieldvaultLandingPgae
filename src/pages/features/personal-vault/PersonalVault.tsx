import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Lock, Key, Share2, Smartphone, Globe, Shield,
  CheckCircle, Fingerprint, Cloud
} from 'lucide-react'

const PersonalVaultPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Lock className="w-32 h-32 text-white" />}
      heroTitle="Personal Vault"
      heroSubtitle="Enterprise-Grade Password Management for Individuals and Teams"
      heroGradient="from-indigo-900 via-gray-900 to-gray-900"
      heroImage="/PersonalVault.jpeg"
      
      overview="Secure password manager with military-grade encryption, biometric unlock, cross-device sync, and secure sharing. Store unlimited passwords, credit cards, notes, and documents with zero-knowledge architecture. Browser extensions, mobile apps, and desktop clients for seamless access across all devices."
      
      problem="People reuse weak passwords across dozens of accounts, creating massive security risks. Password reset requests waste 30+ minutes per week. Shared credentials sent via insecure channels (email, Slack). No secure way to store credit cards, IDs, and sensitive documents."
      
      benefit="Never forget another password. Generate strong unique passwords for every account with autofill. Securely share credentials with family and team members. Store credit cards, IDs, and documents encrypted with AES-256. Cross-device sync with biometric unlock for instant access."
      
      keyFeatures={[
        {
          icon: <Key className="w-10 h-10 text-indigo-400" />,
          title: "Unlimited Password Storage",
          description: "Store unlimited passwords, usernames, URLs, and notes with zero-knowledge encryption. Organize with folders, tags, and favorites. Full-text search across all vaults. Import from any password manager (1Password, LastPass, Dashlane, Chrome)."
        },
        {
          icon: <Globe className="w-10 h-10 text-indigo-400" />,
          title: "Browser & Mobile Autofill",
          description: "Browser extensions for Chrome, Firefox, Safari, Edge with intelligent autofill. Mobile apps for iOS and Android with biometric unlock. Desktop apps for Windows, Mac, Linux. Autofill works on apps and websites seamlessly."
        },
        {
          icon: <Share2 className="w-10 h-10 text-indigo-400" />,
          title: "Secure Sharing",
          description: "Share passwords, cards, and notes with family, friends, or team members with end-to-end encryption. Granular permissions (view only, use only, edit). Revoke access anytime. Shared vaults for teams and families."
        },
        {
          icon: <Fingerprint className="w-10 h-10 text-indigo-400" />,
          title: "Biometric Unlock",
          description: "Unlock vault with fingerprint, Face ID, Touch ID, or Windows Hello. No need to remember master password for daily use. Biometric data never leaves your device. Master password required for sensitive operations."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Security Dashboard",
          description: "Password health score with weak, reused, and compromised password detection. Dark web monitoring alerts if your credentials are leaked. Security recommendations with one-click password updates."
        },
        {
          icon: <Cloud className="w-10 h-10 text-indigo-400" />,
          title: "Cross-Device Sync",
          description: "Automatic sync across unlimited devices (phone, tablet, computer, smartwatch). Real-time updates within seconds. Offline access with local encryption. Conflict resolution for simultaneous edits."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Create Master Password",
          description: "Choose a strong master password (or generate with passphrase builder). This is the only password you'll need to remember. Master password never sent to servers - used locally for encryption.",
          icon: <Lock className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Install Apps & Extensions",
          description: "Install browser extension, mobile app, or desktop client. Available for Chrome, Firefox, Safari, Edge, iOS, Android, Windows, Mac, Linux. Sign in with master password and enable biometric unlock.",
          icon: <Smartphone className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Import Existing Passwords",
          description: "Import passwords from other managers (1Password, LastPass, Dashlane) or browsers (Chrome, Firefox, Safari). One-click import with automatic organization. Review and update weak passwords detected during import.",
          icon: <Key className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Add Items & Organize",
          description: "Add passwords, credit cards, secure notes, and documents. Organize with folders (Work, Personal, Banking, etc.) and tags. Set favorites for frequently used items.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Autofill & Use",
          description: "Browser extension and mobile apps automatically detect login forms and offer to autofill. Generate strong passwords when creating accounts. Autofill credit cards at checkout.",
          icon: <Globe className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 6,
          title: "Share Securely",
          description: "Share passwords and items with trusted contacts. Create shared vaults for families or teams. Set permissions and revoke access anytime. All sharing is end-to-end encrypted.",
          icon: <Share2 className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Security & Encryption",
          items: [
            "Zero-knowledge architecture (we never see your data)",
            "AES-256-GCM encryption for data at rest",
            "TLS 1.3 for data in transit",
            "PBKDF2-SHA256 (100,000 iterations) for key derivation",
            "Local encryption/decryption (data never sent unencrypted)",
            "Secure random password generator (cryptographically secure)",
            "Two-factor authentication (TOTP, SMS, Email, Hardware keys)",
            "Emergency access for trusted contacts"
          ]
        },
        {
          title: "Supported Platforms",
          items: [
            "Web browser (any modern browser)",
            "Chrome extension",
            "Firefox extension",
            "Safari extension",
            "Microsoft Edge extension",
            "iOS app (iPhone and iPad)",
            "Android app",
            "Windows desktop app",
            "macOS desktop app",
            "Linux desktop app",
            "Command-line interface (CLI)"
          ]
        },
        {
          title: "Item Types Supported",
          items: [
            "Login credentials (username, password, URL, notes)",
            "Credit/debit cards (number, CVV, expiry, billing address)",
            "Bank accounts (routing number, account number)",
            "Secure notes (encrypted text, markdown support)",
            "Documents (PDFs, images, up to 1GB per file)",
            "Identity information (passport, driver's license, SSN)",
            "Software licenses (product keys, registration codes)",
            "Custom fields (flexible schema)"
          ]
        },
        {
          title: "Features & Capabilities",
          items: [
            "Unlimited password storage",
            "Password generator (12-64 characters, configurable)",
            "Passphrase generator (memorable multi-word passwords)",
            "Password health dashboard with strength scoring",
            "Dark web monitoring for leaked credentials",
            "Breach alerts for compromised accounts",
            "Autofill for logins, credit cards, and forms",
            "Secure password sharing with permissions",
            "Emergency access for trusted contacts",
            "Activity log for security auditing"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Individual Users - Personal Security",
          scenario: "Using same password for Gmail, banking, and social media. Password reset emails every week. Storing credit cards in browser (unencrypted). No backup if phone lost. Personal Vault deployed with strong unique passwords.",
          impact: "250+ unique passwords generated, zero password resets, all accounts secured, cross-device access with biometric unlock"
        },
        {
          industry: "Families - Shared Accounts",
          scenario: "Family sharing Netflix, Amazon, utilities, banking passwords via text messages. No secure way to share credit cards for online purchases. Created family vault with shared access.",
          impact: "Secure sharing for 45+ family accounts, no insecure text messages, granular permissions, emergency access configured"
        },
        {
          industry: "Small Business - Team Credentials",
          scenario: "10-person team sharing social media, CRM, and tool credentials via Slack and Google Docs. Security nightmare with no audit trail. Deployed team vaults with role-based access.",
          impact: "100+ business credentials secured, complete audit trail, permission management, zero credential leaks"
        },
        {
          industry: "Freelancers - Client Access",
          scenario: "Freelancer managing access to 50+ client systems. Storing passwords in spreadsheet. Difficult to revoke access after projects end. Shared vaults for each client with time-limited access.",
          impact: "Clean access management for 50+ clients, easy revocation after project completion, professional credential handling"
        }
      ]}
      
      metrics={[
        {
          value: "Unlimited",
          label: "Passwords stored",
          color: "text-indigo-400"
        },
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
          value: "10+ Platforms",
          label: "Browser, mobile, desktop",
          color: "text-indigo-400"
        },
        {
          value: "Real-time",
          label: "Cross-device sync",
          color: "text-indigo-400"
        },
        {
          value: "99.9%",
          label: "Uptime SLA",
          color: "text-indigo-400"
        },
        {
          value: "2FA",
          label: "Multi-factor authentication",
          color: "text-indigo-400"
        },
        {
          value: "30+ min/week",
          label: "Time saved on resets",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "Chrome" },
        { name: "Firefox" },
        { name: "Safari" },
        { name: "Edge" },
        { name: "iOS" },
        { name: "Android" },
        { name: "Windows" },
        { name: "macOS" },
        { name: "Linux" },
        { name: "1Password (import)" },
        { name: "LastPass (import)" },
        { name: "Dashlane (import)" },
        { name: "Chrome (import)" },
        { name: "Firefox (import)" },
        { name: "TOTP Authenticator" },
        { name: "YubiKey" }
      ]}
      
      securityFeatures={[
        "Zero-knowledge architecture - we can't see your passwords",
        "AES-256-GCM encryption with PBKDF2-SHA256 key derivation",
        "Local encryption/decryption - data never sent unencrypted",
        "Biometric unlock (fingerprint, Face ID, Windows Hello)",
        "Two-factor authentication (TOTP, hardware keys, SMS)",
        "Dark web monitoring for leaked credentials",
        "Password health dashboard with breach alerts",
        "Emergency access for trusted family members",
        "Activity log with IP tracking and device identification",
        "Automatic logout on inactivity",
        "Secure password sharing with end-to-end encryption"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "CCPA",
        "HIPAA Ready",
        "Privacy Shield"
      ]}
    />
  )
}

export default PersonalVaultPage

