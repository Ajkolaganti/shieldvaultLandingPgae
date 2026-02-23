import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Key, Lock, Shield, RefreshCw, Share2,
  CheckCircle, Database, Tag
} from 'lucide-react'

const PVSecretManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Key className="w-32 h-32 text-indigo-600" />}
      heroTitle="Secret Management"
      heroSubtitle="Personal Secret Lifecycle Management with Versioning, Sharing, and Expiration Tracking"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      
      overview="Manage the complete lifecycle of your personal secrets: API keys, tokens, certificates, and sensitive data. Track creation, usage, rotation, and expiration for every secret. Secure sharing with team members. Version history with one-click rollback. Never lose track of a credential again."
      
      problem="Developers have dozens of API keys, tokens, and certificates with different expiration dates, rotation requirements, and sharing needs. No way to track which are still valid, who they're shared with, or when they expire. Expired credentials cause production outages."
      
      benefit="Complete lifecycle visibility for every personal secret. Expiration tracking with proactive alerts. Secure sharing with audit trails. Version history for every change. Zero expired credentials in production."
      
      keyFeatures={[
        {
          icon: <Database className="w-10 h-10 text-indigo-400" />,
          title: "Secret Inventory",
          description: "Comprehensive inventory of all your secrets with type classification, expiration dates, usage tracking, and health status. Dashboard shows secrets by status: active, expiring soon, expired, and shared."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-indigo-400" />,
          title: "Expiration Tracking",
          description: "Track expiration dates for all time-limited secrets: API keys, tokens, certificates, and trial credentials. Proactive alerts at 30/14/7/1 days before expiration. Calendar view of upcoming expirations."
        },
        {
          icon: <Share2 className="w-10 h-10 text-indigo-400" />,
          title: "Secure Sharing",
          description: "Share secrets with specific team members or groups. Time-limited sharing with automatic revocation. View-only or copy-enabled permissions. Complete audit trail of who accessed what."
        },
        {
          icon: <Lock className="w-10 h-10 text-indigo-400" />,
          title: "Version History",
          description: "Every secret change tracked with version history: who changed it, when, and what changed. One-click rollback to any previous version. Compare versions side-by-side."
        },
        {
          icon: <Tag className="w-10 h-10 text-indigo-400" />,
          title: "Smart Organization",
          description: "Organize secrets by project, environment, service, or custom categories. Auto-tagging based on secret type and content. Quick filters and saved views for daily workflows."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Health Monitoring",
          description: "Continuous health monitoring for stored secrets: strength analysis, reuse detection, breach checking, and age tracking. Security score with actionable improvement recommendations."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Add Secrets",
          description: "Add secrets manually, import from files, or capture during daily use. Auto-detection of secret type (API key, token, certificate). Set expiration dates and metadata for tracking.",
          icon: <Key className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Organize & Classify",
          description: "Organize into projects and environments. Auto-classification by type. Apply custom tags. Set priority levels for critical credentials. Group related secrets together.",
          icon: <Tag className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Set Up Tracking",
          description: "Configure expiration alerts and rotation reminders. Set review schedules for long-lived secrets. Enable breach monitoring. Configure health check thresholds.",
          icon: <RefreshCw className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Share Securely",
          description: "Share secrets with team members via secure links. Set permissions (view-only, copy-enabled). Set expiration for shared access. Revoke access instantly when needed.",
          icon: <Share2 className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Monitor & Maintain",
          description: "Dashboard shows secret health: expiring soon, weak, reused, or breached. Act on recommendations. Track sharing activity. Review version history. Maintain zero expired credentials.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Secret Types",
          items: [
            "API keys with provider detection (AWS, GCP, Azure, etc.)",
            "OAuth/JWT tokens with expiration tracking",
            "TLS/SSL certificates with chain validation",
            "SSH keys with fingerprint tracking",
            "Database connection strings with component parsing",
            "Custom secrets with user-defined fields"
          ]
        },
        {
          title: "Lifecycle Features",
          items: [
            "Expiration tracking with configurable alert windows",
            "Version history with unlimited retention",
            "One-click rollback to any previous version",
            "Sharing with time-limited access and permissions",
            "Usage tracking with last-accessed timestamps",
            "Health scoring with actionable recommendations"
          ]
        },
        {
          title: "Security",
          items: [
            "End-to-end encryption for all operations",
            "Breach monitoring against known databases",
            "Password strength analysis with zxcvbn",
            "Reuse detection across all stored credentials",
            "Clipboard auto-clear after configurable timeout",
            "Secure deletion with memory wiping"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - API Key Lifecycle",
          scenario: "Managing 50+ API keys across GitHub, Stripe, Twilio, SendGrid, and AWS. Expiration tracking prevented 3 production outages in first month. Version history saved 4 hours recovering rotated keys.",
          impact: "3 outages prevented, 4 hours saved, zero expired API keys in production"
        },
        {
          industry: "Team Lead - Credential Sharing",
          scenario: "Sharing staging credentials with 8 team members. Time-limited access for contractors. Instant revocation when team members change. Audit trail for security reviews.",
          impact: "Zero credentials shared via insecure channels, automatic expiration, complete sharing audit trail"
        },
        {
          industry: "DevOps - Certificate Management",
          scenario: "Tracking 30+ TLS certificates with different expiration dates. Calendar view shows upcoming expirations. Alerts 30 days before expiry prevent website downtime.",
          impact: "30+ certificates tracked, zero expired certificates, proactive renewal 30 days ahead"
        },
        {
          industry: "Freelancer - Multi-Client Secrets",
          scenario: "Freelancer managing credentials for 15 clients. Organized by client project. Shared access revoked instantly when project ends. Version history for credential handover.",
          impact: "15 client credential sets organized, instant revocation on project end, clean credential handover"
        }
      ]}
      
      metrics={[
        {
          value: "Zero",
          label: "Expired credentials in use",
          color: "text-indigo-400"
        },
        {
          value: "100%",
          label: "Secret lifecycle visibility",
          color: "text-indigo-400"
        },
        {
          value: "30 days",
          label: "Advance expiration alerts",
          color: "text-indigo-400"
        },
        {
          value: "1-Click",
          label: "Version rollback",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "AWS" },
        { name: "Azure" },
        { name: "GCP" },
        { name: "Stripe" },
        { name: "Twilio" },
        { name: "SendGrid" },
        { name: "Slack" },
        { name: "Chrome" },
        { name: "Firefox" },
        { name: "CLI" }
      ]}
      
      securityFeatures={[
        "End-to-end encryption for all secret operations",
        "Breach monitoring against known credential databases",
        "Password strength and reuse analysis",
        "Secure sharing with time-limited access",
        "Complete audit trail for all secret access",
        "Automatic clipboard clearing after use",
        "Secure deletion with memory wiping",
        "Version history with tamper-proof records"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "CCPA"
      ]}
    />
  )
}

export default PVSecretManagementPage
