import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  GitBranch, Search, Shield, AlertTriangle, Code,
  CheckCircle, Lock
} from 'lucide-react'

const CICDDiscoveryPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<GitBranch className="w-32 h-32 text-purple-600" />}
      heroTitle="CI/CD Discovery"
      heroSubtitle="Discover and Secure Secrets Across GitHub, GitLab, Jenkins, and All CI/CD Pipelines"
      heroGradient="from-purple-50 via-white to-purple-50"
      heroImage="/SecretManagement.jpeg"
      
      overview="Scan CI/CD pipelines, Git repositories, and build systems for exposed secrets, hardcoded credentials, and misconfigured secret variables. Supports GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Azure DevOps, and more. Detect secrets before they reach production with 97.2% accuracy."
      
      problem="67% of companies have leaked secrets in Git repositories. CI/CD pipelines often contain hardcoded credentials, exposed API keys, and misconfigured secret variables. Average time to detect a leaked secret: 97 days. One leaked credential can compromise entire infrastructure."
      
      benefit="Discover 100% of secrets in CI/CD pipelines and repositories. Prevent leaks before they happen with pre-commit hooks and pipeline scanning. Detect and auto-revoke exposed credentials in seconds, not months."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-purple-400" />,
          title: "Repository Scanning",
          description: "Scan Git repositories (GitHub, GitLab, Bitbucket) for exposed secrets using regex patterns, entropy analysis, and AI classification. Historical commit scanning catches secrets in old commits."
        },
        {
          icon: <GitBranch className="w-10 h-10 text-purple-400" />,
          title: "Pipeline Secret Detection",
          description: "Analyze CI/CD pipeline configurations for hardcoded secrets, insecure environment variables, and misconfigured secret injection. Support for GitHub Actions, GitLab CI, Jenkins, CircleCI, and Azure DevOps."
        },
        {
          icon: <Code className="w-10 h-10 text-purple-400" />,
          title: "Pre-Commit Hooks",
          description: "Block commits containing secrets before they reach the repository. Developer-friendly CLI tool that scans staged changes. Instant feedback with specific file and line number references."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Leak Detection & Auto-Revoke",
          description: "Real-time monitoring of repositories for newly committed secrets. Automatic secret revocation within seconds of detection. Developer notification with remediation guidance."
        },
        {
          icon: <Lock className="w-10 h-10 text-purple-400" />,
          title: "Secure Secret Injection",
          description: "Replace hardcoded secrets with dynamic injection from Shield Vault. Native plugins for all major CI/CD platforms. Secrets never stored in pipeline configs or build logs."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Developer Education",
          description: "In-context feedback teaches developers about secure secret handling. Link to documentation and best practices. Track team improvement in secret hygiene over time."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Connect Repositories",
          description: "Connect GitHub, GitLab, Bitbucket organizations. Authorize with OAuth or deploy tokens. Select repositories for scanning. Configure scan scope (all branches, main only, PRs).",
          icon: <GitBranch className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Initial Scan",
          description: "Full historical scan of all commits, branches, and pipeline configurations. Identifies existing leaked secrets with classification and severity scoring. Complete scan in minutes.",
          icon: <Search className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Remediate Findings",
          description: "Review discovered secrets with severity and type classification. Auto-revoke exposed credentials. Replace hardcoded secrets with Shield Vault injection. Rewrite Git history if needed.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Enable Prevention",
          description: "Deploy pre-commit hooks for developer workstations. Configure pipeline scanning for CI/CD checks. Set up branch protection rules requiring secret scan approval.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Continuous Monitoring",
          description: "Real-time monitoring of all repository activity. Instant alerts for new secret exposures. Weekly reports on team secret hygiene. Continuous improvement tracking.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported CI/CD Platforms",
          items: [
            "GitHub Actions (workflows, secrets, variables)",
            "GitLab CI/CD (pipelines, variables, includes)",
            "Jenkins (Jenkinsfile, credentials, shared libraries)",
            "CircleCI (config, contexts, environment variables)",
            "Azure DevOps (pipelines, variable groups, libraries)",
            "Bitbucket Pipelines (configuration, variables)",
            "Travis CI, Bamboo, TeamCity, and more via API"
          ]
        },
        {
          title: "Detection Methods",
          items: [
            "Regex patterns for known secret formats (AWS keys, tokens, etc.)",
            "Entropy analysis for high-randomness strings",
            "AI-powered secret classification with 97.2% accuracy",
            "Historical commit scanning across all branches",
            "Pipeline configuration analysis for misconfigured variables",
            "Build log scanning for accidentally printed secrets"
          ]
        },
        {
          title: "Prevention Tools",
          items: [
            "Pre-commit hooks for local development (Git hooks)",
            "PR/MR scanning with required status checks",
            "Pipeline scanning as CI/CD step",
            "IDE plugins for real-time detection while coding",
            "Slack/Teams notifications for team awareness",
            "Automatic PR comments with remediation guidance"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Preventing Public Leaks",
          scenario: "Developer committed AWS access key to public GitHub repo. CI/CD Discovery detected the leak in 8 seconds, auto-revoked the key, notified the developer, and created a security incident ticket.",
          impact: "AWS key revoked in 8 seconds (vs. 97-day average detection), zero unauthorized AWS usage, developer trained on secure practices"
        },
        {
          industry: "E-Commerce - Pipeline Hardening",
          scenario: "Security audit found 45 hardcoded secrets across 20 Jenkins pipelines. CI/CD Discovery cataloged all secrets, replaced with Shield Vault injection, and deployed pre-commit prevention.",
          impact: "45 hardcoded secrets eliminated, zero new hardcoded secrets in 6 months, 100% pipeline compliance"
        },
        {
          industry: "FinTech - Compliance Evidence",
          scenario: "SOC 2 audit required evidence of secret scanning in development lifecycle. CI/CD Discovery provided complete scanning logs, detection rates, and remediation records for all repositories.",
          impact: "SOC 2 evidence for secret scanning controls, 97.2% detection accuracy documented, zero unremediated findings"
        },
        {
          industry: "Technology - DevSecOps Integration",
          scenario: "Engineering team of 200+ developers needed secret scanning integrated into workflow without slowing development. Pre-commit hooks and PR scanning added <2 seconds to commit time.",
          impact: "200+ developers protected, <2 second overhead, 150+ secrets caught before commit in first month"
        }
      ]}
      
      metrics={[
        {
          value: "97.2%",
          label: "Leak detection accuracy",
          color: "text-purple-400"
        },
        {
          value: "< 12 sec",
          label: "Auto-revocation time",
          color: "text-purple-400"
        },
        {
          value: "Zero",
          label: "Secrets in source code",
          color: "text-purple-400"
        },
        {
          value: "6+",
          label: "CI/CD platforms supported",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Bitbucket" },
        { name: "Jenkins" },
        { name: "CircleCI" },
        { name: "Azure DevOps" },
        { name: "Travis CI" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Jira" },
        { name: "PagerDuty" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Secrets never stored in plaintext during scanning",
        "Read-only repository access for scanning operations",
        "Automatic secret revocation on detection",
        "Pre-commit hooks prevent secrets from reaching repos",
        "Complete audit trail of all scanning and detection events",
        "Encrypted scan results with role-based access",
        "Integration with SIEM for security event correlation",
        "Regular scanner updates for new secret pattern detection"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "GDPR",
        "FedRAMP"
      ]}
    />
  )
}

export default CICDDiscoveryPage
