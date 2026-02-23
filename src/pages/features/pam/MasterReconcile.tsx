import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  RefreshCw, Database, CheckCircle, AlertTriangle,
  Search, FileCheck
} from 'lucide-react'

const MasterReconcilePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<RefreshCw className="w-32 h-32 text-blue-600" />}
      heroTitle="Master Reconciliation"
      heroSubtitle="Bulk Reconcile Operations with Password Version Tracking and Detailed Failure Diagnostics"
      heroGradient="from-blue-50 via-white to-blue-50"
      
      overview="Perform bulk reconciliation of privileged account credentials across your entire infrastructure. Verify password synchronization, detect version mismatches, and resolve credential drift with one-click operations. Password version tracking with detailed failure diagnostics ensures every account is in a known, secure state."
      
      problem="Credential drift occurs when passwords in the PAM vault don't match actual passwords on target systems. Manual reconciliation of hundreds of accounts is impossible. Undetected mismatches lead to access failures, lockouts, and security gaps during credential rotation."
      
      benefit="Ensure 100% credential synchronization across all managed accounts with automated bulk reconciliation. Detect and resolve password mismatches in minutes, not days. Complete version tracking provides full history of every credential change."
      
      keyFeatures={[
        {
          icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
          title: "Bulk Reconciliation",
          description: "Reconcile hundreds of accounts in a single operation. Verify vault credentials match target system passwords. Automatic detection of mismatches with one-click resolution. Scheduled and on-demand reconciliation."
        },
        {
          icon: <Database className="w-10 h-10 text-blue-400" />,
          title: "Password Version Tracking",
          description: "Complete version history for every credential: who changed it, when, on which system, and the verification status. Compare vault versions with target system versions. Instant rollback to any previous version."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Failure Diagnostics",
          description: "Detailed failure analysis when reconciliation fails. Identifies root cause: network issues, permission errors, password policy violations, or target system changes. Remediation guidance for each failure type."
        },
        {
          icon: <Search className="w-10 h-10 text-blue-400" />,
          title: "Drift Detection",
          description: "Continuous monitoring for credential drift between vault and target systems. Automatic alerts when mismatches detected. Proactive reconciliation before drift causes access failures."
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
          title: "Verification Engine",
          description: "Automated credential verification against target systems. Support for SSH, RDP, database, cloud API, and custom protocol verification. Configurable verification schedules and success criteria."
        },
        {
          icon: <FileCheck className="w-10 h-10 text-blue-400" />,
          title: "Reconciliation Reports",
          description: "Comprehensive reports on reconciliation status, success rates, failure analysis, and remediation progress. Export for compliance audits. Track reconciliation health score over time."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Select Accounts",
          description: "Choose accounts for reconciliation: all accounts, specific platforms, risk levels, or custom filters. Support for bulk selection with CSV import and saved filter presets.",
          icon: <Database className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Initiate Reconciliation",
          description: "Start reconciliation operation. System connects to each target system and verifies vault credentials match. Parallel verification for faster processing of large account sets.",
          icon: <RefreshCw className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Mismatch Detection",
          description: "System identifies accounts where vault and target passwords differ. Categorizes mismatches by severity and likely cause. Provides context for each mismatch (last rotation date, last access).",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Resolution",
          description: "One-click resolution options: update vault to match target, rotate to new password on both, or flag for manual review. Bulk resolution for common mismatch patterns.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Verification & Reporting",
          description: "Verify all resolutions were successful. Generate reconciliation report with success rates, failure details, and compliance status. Schedule recurring reconciliation to prevent future drift.",
          icon: <FileCheck className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Reconciliation Methods",
          items: [
            "SSH-based verification for Linux/Unix systems",
            "WMI/PowerShell verification for Windows servers",
            "SQL connection verification for databases",
            "API-based verification for cloud platforms (AWS, Azure, GCP)",
            "LDAP bind verification for Active Directory",
            "Custom protocol plugins for specialized systems"
          ]
        },
        {
          title: "Version Tracking",
          items: [
            "Complete password version history with timestamps",
            "Change attribution (who, when, why, how)",
            "Vault vs. target version comparison",
            "Automatic version increment on rotation",
            "One-click rollback to any previous version",
            "Encrypted version storage with immutable logs"
          ]
        },
        {
          title: "Performance",
          items: [
            "Parallel reconciliation for 500+ accounts simultaneously",
            "Average reconciliation time: 30 seconds per account",
            "Bulk operations: 200+ accounts in under 10 minutes",
            "Retry logic with exponential backoff for transient failures",
            "Configurable concurrency limits per platform",
            "Real-time progress tracking during bulk operations"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Post-Rotation Verification",
          scenario: "After rotating 500+ credentials, 12 accounts had mismatches due to network timeouts. Master reconciliation detected all 12, identified root causes, and resolved automatically with retry logic.",
          impact: "100% credential synchronization, 12 mismatches auto-resolved, zero access disruptions for banking operations"
        },
        {
          industry: "Healthcare - Compliance Verification",
          scenario: "HIPAA audit required proof that all privileged credentials were rotated and synchronized. Master reconciliation report provided complete evidence with version tracking for 200+ accounts.",
          impact: "100% compliance evidence, zero audit findings, complete credential version history for all PHI access accounts"
        },
        {
          industry: "Technology - Multi-Cloud Sync",
          scenario: "Service accounts across AWS, Azure, and GCP had credential drift after manual emergency rotation. Bulk reconciliation detected 45 mismatches across 3 cloud providers and resolved all in 8 minutes.",
          impact: "45 mismatches detected and resolved, 8-minute resolution time, zero service disruption"
        },
        {
          industry: "Retail - Seasonal Reconciliation",
          scenario: "Pre-holiday season reconciliation of 800+ POS and payment system credentials. Identified 23 stale passwords and 7 mismatches. All resolved before peak shopping period.",
          impact: "800+ accounts verified, 30 issues resolved proactively, zero credential-related outages during peak season"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Credential synchronization",
          color: "text-blue-400"
        },
        {
          value: "< 30 sec",
          label: "Per-account reconciliation",
          color: "text-blue-400"
        },
        {
          value: "500+",
          label: "Parallel account processing",
          color: "text-blue-400"
        },
        {
          value: "99.8%",
          label: "Resolution success rate",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "LDAP" },
        { name: "AWS IAM" },
        { name: "Azure AD" },
        { name: "GCP IAM" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle" },
        { name: "MongoDB" },
        { name: "SSH (Linux/Unix)" },
        { name: "WMI (Windows)" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Encrypted credential comparison (never stored in plaintext)",
        "Verification uses least-privilege access only",
        "Complete audit trail of all reconciliation operations",
        "Immutable version history with tamper detection",
        "Secure credential transmission during verification (TLS 1.3)",
        "Role-based access to reconciliation operations",
        "Automated notification for failed reconciliations",
        "HSM support for credential storage and comparison"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "NIST 800-53",
        "HIPAA",
        "PCI-DSS",
        "GDPR"
      ]}
    />
  )
}

export default MasterReconcilePage
