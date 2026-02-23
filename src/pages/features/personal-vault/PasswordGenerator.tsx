import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Wand2, Shield, Copy, Settings, CheckCircle,
  Lock, RefreshCw, AlertTriangle
} from 'lucide-react'

const PasswordGeneratorPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Wand2 className="w-32 h-32 text-indigo-600" />}
      heroTitle="Password Generator"
      heroSubtitle="Cryptographically Secure Password Generation with Policy Compliance and Breach Checking"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      heroImage="/PersonalVault.jpeg"
      
      overview="Generate cryptographically secure passwords, passphrases, and API keys with one click. Customizable length, complexity, and character requirements. Automatic compliance with organization password policies. Real-time breach checking ensures generated passwords haven't appeared in known breaches."
      
      problem="Weak passwords are the #1 cause of credential-based breaches. Users create predictable passwords that are easily cracked. Reusing passwords across services means one breach compromises everything. Meeting different password policies for different services is tedious."
      
      benefit="Generate uncrackable passwords in one click. Every password cryptographically random and unique. Automatic policy compliance. Real-time breach verification. Save and auto-fill generated passwords instantly."
      
      keyFeatures={[
        {
          icon: <Wand2 className="w-10 h-10 text-indigo-400" />,
          title: "Smart Generation",
          description: "Cryptographically secure random generation using CSPRNG. Configurable length (8-128 characters), character sets (uppercase, lowercase, numbers, symbols), and exclusion rules. One-click generation."
        },
        {
          icon: <Settings className="w-10 h-10 text-indigo-400" />,
          title: "Passphrase Generator",
          description: "Generate memorable passphrases using curated word lists (EFF diceware). Configurable word count, separator, and capitalization. Balance between security and memorability."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Policy Compliance",
          description: "Pre-configured templates for common services (AWS, GitHub, corporate AD). Auto-detect service requirements from URL. Organization-wide policy enforcement for generated passwords."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Breach Checking",
          description: "Every generated password checked against Have I Been Pwned database using k-anonymity (password never leaves your device). Automatic regeneration if a match is found."
        },
        {
          icon: <Copy className="w-10 h-10 text-indigo-400" />,
          title: "One-Click Save & Fill",
          description: "Generated passwords automatically saved to vault with associated URL and metadata. Auto-fill on password change forms. Clipboard auto-clear after 30 seconds."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-indigo-400" />,
          title: "Bulk Generation",
          description: "Generate multiple passwords at once for batch operations. API and CLI support for automated password generation in scripts and CI/CD pipelines. Template-based generation."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Generator",
          description: "Set default generation preferences: length, character sets, exclusions, and format. Or use pre-configured templates for specific services. Passphrases for memorable needs.",
          icon: <Settings className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Generate Password",
          description: "One-click generation from browser extension, desktop app, or CLI. Strength meter shows estimated crack time. Breach check confirms password is unique. Regenerate until satisfied.",
          icon: <Wand2 className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Save to Vault",
          description: "Generated password automatically saved with associated URL, username, and metadata. Organized into appropriate folder. Previous password versioned for history.",
          icon: <Lock className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Auto-Fill",
          description: "Password auto-filled in browser or app. Clipboard cleared automatically after 30 seconds. No need to remember or type generated passwords.",
          icon: <Copy className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Monitor Health",
          description: "Ongoing monitoring of generated password health: breach status, age, reuse detection. Proactive alerts when a previously safe password appears in a breach database.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Generation Algorithms",
          items: [
            "CSPRNG (Cryptographically Secure Pseudo-Random Number Generator)",
            "Configurable character sets: [A-Z], [a-z], [0-9], [!@#$%^&*]",
            "Character exclusion rules (avoid ambiguous: 0/O, 1/l/I)",
            "EFF diceware word list for passphrases (7,776 words)",
            "Custom word lists for organizational terminology",
            "Configurable separator and capitalization for passphrases"
          ]
        },
        {
          title: "Strength Analysis",
          items: [
            "Entropy calculation in bits (128-bit = excellent)",
            "Estimated crack time at various attack speeds",
            "zxcvbn analysis for pattern detection",
            "Policy compliance validation",
            "Have I Been Pwned checking (k-anonymity, SHA-1 prefix)",
            "Real-time strength meter with visual feedback"
          ]
        },
        {
          title: "Integration",
          items: [
            "Browser extension inline generator on password fields",
            "Desktop app hotkey for quick generation",
            "CLI: svault generate --length 32 --symbols",
            "API: POST /api/v1/generate for programmatic use",
            "Organization policy templates via admin console",
            "Auto-save to vault with URL association"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - Daily Credential Creation",
          scenario: "Creating 5-10 new accounts per week for services, APIs, and tools. Password generator creates unique, strong passwords for each. All saved and auto-filled from vault.",
          impact: "Zero password reuse, unique strong password for every account, instant auto-fill"
        },
        {
          industry: "Enterprise - Policy Compliance",
          scenario: "Organization requires 16+ character passwords with specific complexity for AD accounts. Generator configured with policy template ensures 100% compliance for all generated passwords.",
          impact: "100% password policy compliance, zero rejected passwords, consistent security standards"
        },
        {
          industry: "DevOps - Automated Generation",
          scenario: "CI/CD pipeline needs unique strong passwords for test environments. CLI tool generates and injects passwords during provisioning. API used for infrastructure automation.",
          impact: "Automated password generation in CI/CD, unique passwords per environment, zero hardcoded credentials"
        },
        {
          industry: "Security Team - Breach Prevention",
          scenario: "Security audit found 30% of employee passwords appeared in breach databases. Mandated password generator for all new passwords with breach checking enabled. Reuse eliminated.",
          impact: "Zero breached passwords in use, 100% unique passwords, breach checking for every generation"
        }
      ]}
      
      metrics={[
        {
          value: "128-bit",
          label: "Minimum entropy",
          color: "text-indigo-400"
        },
        {
          value: "Zero",
          label: "Breached passwords generated",
          color: "text-indigo-400"
        },
        {
          value: "< 1 sec",
          label: "Generation time",
          color: "text-indigo-400"
        },
        {
          value: "100%",
          label: "Policy compliance",
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
        { name: "iOS" },
        { name: "Android" },
        { name: "CLI" },
        { name: "REST API" },
        { name: "Have I Been Pwned" },
        { name: "Active Directory" }
      ]}
      
      securityFeatures={[
        "Cryptographically secure random number generation (CSPRNG)",
        "Breach checking via k-anonymity (password never transmitted)",
        "Automatic clipboard clearing after 30 seconds",
        "Generated passwords encrypted before vault storage",
        "No generation logs or history stored server-side",
        "Policy enforcement prevents weak password generation",
        "Memory wiping after generation to prevent extraction",
        "Regular CSPRNG entropy source validation"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "NIST 800-63B",
        "GDPR",
        "CCPA"
      ]}
    />
  )
}

export default PasswordGeneratorPage
