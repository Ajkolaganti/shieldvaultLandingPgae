import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Search, AlertTriangle, Shield, Eye, Database,
  CheckCircle, Target, Globe
} from 'lucide-react'

const DiscoveryScanningPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Search className="w-32 h-32 text-indigo-600" />}
      heroTitle="Discovery & Scanning"
      heroSubtitle="Find Exposed Credentials Across Your Digital Footprint—Browsers, Files, Emails, and Code"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      heroImage="/PersonalVault.jpeg"
      
      overview="Scan your digital footprint for exposed or forgotten credentials: browser saved passwords, config files, environment variables, email attachments, and code repositories. Find credentials that should be in your vault but aren't. Breach monitoring alerts you when your credentials appear in public data breaches."
      
      problem="Credentials leak into unexpected places: browser password stores, .env files, email threads, Slack messages, and Git history. You don't know what's exposed. Breach notifications from services are delayed or missed. No comprehensive view of your credential exposure."
      
      benefit="Complete visibility into your credential exposure. Discover forgotten credentials and import into vault. Real-time breach monitoring. Actionable alerts with remediation guidance. Clean up your digital footprint."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-indigo-400" />,
          title: "Browser Scanning",
          description: "Scan browser saved passwords (Chrome, Firefox, Safari, Edge). Identify weak, reused, and breached passwords. One-click import to vault with automatic cleanup from browser storage."
        },
        {
          icon: <Eye className="w-10 h-10 text-indigo-400" />,
          title: "File System Scanning",
          description: "Scan local files for exposed credentials: .env files, config files, SSH keys, certificates, and API key files. Identify files that should be encrypted or moved to vault."
        },
        {
          icon: <Globe className="w-10 h-10 text-indigo-400" />,
          title: "Breach Monitoring",
          description: "Continuous monitoring of your email addresses and usernames against breach databases. Real-time alerts when your credentials appear in new breaches. Remediation guidance for each breach."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Dark Web Monitoring",
          description: "Scan dark web marketplaces and paste sites for your exposed credentials. AI-powered matching identifies your data even in partial or transformed leaks. Priority alerts for critical exposure."
        },
        {
          icon: <Target className="w-10 h-10 text-indigo-400" />,
          title: "Code Repository Scanning",
          description: "Scan your personal Git repositories for committed secrets. Historical commit scanning finds secrets in old commits. Pre-commit hook prevents future secret commits."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Exposure Score",
          description: "Comprehensive exposure score based on browser password health, file system findings, breach status, and dark web monitoring. Actionable improvement plan with prioritized remediation steps."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Initial Scan",
          description: "Run comprehensive scan of browser passwords, local files, and known email addresses. Scan completes in under 5 minutes. All scanning performed locally on your device.",
          icon: <Search className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Review Findings",
          description: "Review discovered credentials, exposure points, and breach matches. Prioritized by severity: breached credentials first, then weak, then reused. Clear remediation guidance for each finding.",
          icon: <Eye className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Import & Secure",
          description: "Import discovered credentials to vault with one click. Update weak and breached passwords. Remove credentials from insecure storage (browser, files). Encrypt sensitive files.",
          icon: <Database className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Enable Monitoring",
          description: "Activate continuous breach monitoring for your email addresses. Enable dark web monitoring. Set up file system monitoring for new credential files. Configure alert preferences.",
          icon: <Globe className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Maintain Hygiene",
          description: "Regular scans keep your exposure score improving. New breaches detected instantly. Credential drift from vault to insecure storage caught automatically. Track improvement over time.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Scanning Capabilities",
          items: [
            "Browser passwords: Chrome, Firefox, Safari, Edge",
            "Files: .env, .cfg, .ini, .pem, .key, .p12, .json",
            "Git repositories: commit history, all branches",
            "Config files: Docker, Kubernetes, Terraform",
            "SSH: ~/.ssh/ directory scanning",
            "Custom scan patterns via configuration"
          ]
        },
        {
          title: "Breach Monitoring",
          items: [
            "Have I Been Pwned integration (k-anonymity)",
            "Dark web marketplace monitoring",
            "Paste site monitoring (Pastebin, etc.)",
            "Credential stuffing database checking",
            "Real-time alerts for new breaches",
            "Historical breach checking for all stored emails"
          ]
        },
        {
          title: "Privacy & Security",
          items: [
            "All scanning performed locally on device",
            "Breach checking uses k-anonymity (passwords never transmitted)",
            "Dark web monitoring uses hashed identifiers",
            "Scan results encrypted and stored locally",
            "No data collection by Shield Vault during scanning",
            "Optional cloud scanning for server-side files"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - Credential Cleanup",
          scenario: "Initial scan found 145 browser passwords (30 weak, 12 reused, 5 breached), 15 .env files with API keys, and 3 secrets in Git history. All imported, rotated, and secured in vault.",
          impact: "145 credentials secured, 5 breached passwords changed, 15 exposed API keys moved to vault"
        },
        {
          industry: "Security Engineer - Exposure Assessment",
          scenario: "Security engineer needed comprehensive exposure assessment. Discovery found credentials in 8 locations outside the vault. Breach monitoring detected 2 email addresses in recent breaches.",
          impact: "Complete exposure visibility, all credential drift remediated, 2 breach exposures acted on immediately"
        },
        {
          industry: "Team Lead - Team Hygiene",
          scenario: "Team lead encouraged all 12 team members to run personal discovery scans. Aggregate results showed 50+ breached passwords and 200+ weak passwords across the team.",
          impact: "Team-wide credential hygiene improvement, 50+ breached passwords rotated, exposure score improved 40%"
        },
        {
          industry: "Freelancer - Client Credential Security",
          scenario: "Freelancer discovered client API keys stored in plain text config files and browser storage. Moved all to vault with proper organization. Cleaned up local file system.",
          impact: "All client credentials secured, local file system cleaned, professional security practices demonstrated"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Credential visibility",
          color: "text-indigo-400"
        },
        {
          value: "< 5 min",
          label: "Full scan time",
          color: "text-indigo-400"
        },
        {
          value: "Real-time",
          label: "Breach monitoring",
          color: "text-indigo-400"
        },
        {
          value: "Local",
          label: "All scanning on-device",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "Chrome" },
        { name: "Firefox" },
        { name: "Safari" },
        { name: "Edge" },
        { name: "Have I Been Pwned" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Bitbucket" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "macOS" },
        { name: "Windows" }
      ]}
      
      securityFeatures={[
        "All scanning performed locally—no data leaves your device",
        "Breach checking via k-anonymity (SHA-1 prefix only)",
        "Dark web monitoring uses hashed identifiers",
        "Scan results encrypted at rest",
        "No credential collection by Shield Vault servers",
        "Granular scan scope configuration",
        "Automatic secure deletion of scan temporary files",
        "Privacy-first architecture with zero data retention"
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

export default DiscoveryScanningPage
