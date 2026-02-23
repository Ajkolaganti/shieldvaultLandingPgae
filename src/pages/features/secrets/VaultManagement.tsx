import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Database, Lock, Shield, RefreshCw, Search,
  CheckCircle, Cloud, Key
} from 'lucide-react'

const VaultManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Database className="w-32 h-32 text-purple-600" />}
      heroTitle="Vault Management"
      heroSubtitle="Centralized Secret Vault with Multi-Platform Synchronization and Zero-Knowledge Architecture"
      heroGradient="from-purple-50 via-white to-purple-50"
      heroImage="/SecretManagement.jpeg"
      
      overview="Manage all your secrets from a single, unified vault with multi-platform synchronization across AWS, Azure, GCP, and on-premises systems. Zero-knowledge architecture ensures your secrets are never visible to anyone—not even Shield Vault. Import, organize, version, and share secrets securely with RBAC and complete audit trails."
      
      problem="Secrets scattered across 20+ platforms create management nightmares. No single source of truth. Inconsistent security policies across platforms. Manual synchronization is error-prone and time-consuming. No centralized audit trail for compliance."
      
      benefit="Single pane of glass for all secrets across all platforms. 99.8% sync success rate with real-time status monitoring. Reduce secrets sprawl by 90% with centralized organization, automated synchronization, and policy enforcement."
      
      keyFeatures={[
        {
          icon: <Database className="w-10 h-10 text-purple-400" />,
          title: "Unified Secret Store",
          description: "Single dashboard for managing secrets across AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, HashiCorp Vault, and custom stores. Search, filter, and manage all secrets from one interface."
        },
        {
          icon: <Cloud className="w-10 h-10 text-purple-400" />,
          title: "Multi-Platform Sync",
          description: "Real-time synchronization of secrets across platforms with 99.8% success rate. Bi-directional sync or one-way push. Conflict resolution with configurable merge strategies."
        },
        {
          icon: <Lock className="w-10 h-10 text-purple-400" />,
          title: "Zero-Knowledge Architecture",
          description: "Secrets encrypted client-side before storage. Shield Vault never has access to plaintext secrets. AES-256-GCM encryption with customer-managed keys. HSM support for key storage."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-purple-400" />,
          title: "Secret Versioning",
          description: "Complete version history for every secret. One-click rollback to any previous version. Diff comparison between versions. Change attribution with user, timestamp, and reason tracking."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Organization & Tagging",
          description: "Organize secrets with folders, projects, environments (dev/staging/prod), and custom tags. Template-based secret creation for consistent naming and metadata. Bulk operations for large-scale management."
        },
        {
          icon: <Search className="w-10 h-10 text-purple-400" />,
          title: "Import & Export",
          description: "Import secrets from any source: CSV, JSON, other vault tools, environment files, and cloud providers. Export for backup or migration. Automatic deduplication during import."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Connect Secret Stores",
          description: "Connect your existing secret stores (AWS, Azure, GCP, HashiCorp, custom) to Shield Vault. Secure API authentication with least-privilege access. Health check confirms connectivity.",
          icon: <Cloud className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Import & Organize",
          description: "Import existing secrets from all connected stores. Automatic deduplication and classification. Organize into folders, projects, and environments. Apply tags for easy filtering.",
          icon: <Database className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Configure Sync",
          description: "Set up synchronization rules: bi-directional, one-way push, or manual sync. Configure conflict resolution policies. Enable real-time sync or scheduled intervals.",
          icon: <RefreshCw className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Manage Secrets",
          description: "Create, update, rotate, and retire secrets from the unified dashboard. Apply policies for rotation, access control, and expiration. Track all changes with complete version history.",
          icon: <Key className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Monitor & Audit",
          description: "Real-time dashboard showing secret health, sync status, access patterns, and compliance posture. Complete audit trail for every secret operation across all platforms.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported Secret Stores",
          items: [
            "AWS Secrets Manager with cross-account support",
            "Azure Key Vault with managed identity integration",
            "GCP Secret Manager with workload identity",
            "HashiCorp Vault (Community and Enterprise)",
            "Kubernetes Secrets with namespace isolation",
            "Custom vaults via REST API or SDK"
          ]
        },
        {
          title: "Encryption & Security",
          items: [
            "AES-256-GCM encryption for secrets at rest",
            "TLS 1.3 for all secret transmissions",
            "Zero-knowledge architecture (client-side encryption)",
            "Customer-managed encryption keys (CMEK)",
            "HSM support for key storage and operations",
            "Envelope encryption with key rotation"
          ]
        },
        {
          title: "Synchronization Engine",
          items: [
            "Real-time event-driven synchronization",
            "Scheduled sync intervals (1 min to 24 hours)",
            "Conflict resolution: last-write-wins, vault-priority, manual",
            "Delta sync for efficient bandwidth usage",
            "Retry logic with exponential backoff",
            "99.8% sync success rate"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Multi-Cloud Consolidation",
          scenario: "Secrets scattered across AWS, Azure, and HashiCorp Vault with no central management. Unified all 500+ secrets in Shield Vault with bi-directional sync to all platforms.",
          impact: "90% reduction in secrets sprawl, single source of truth, 15 hours/week saved in management overhead"
        },
        {
          industry: "E-Commerce - Environment Promotion",
          scenario: "Needed to safely promote secrets from dev to staging to production with proper controls. Vault management with environment-based folders and approval workflows for production promotions.",
          impact: "Zero production secrets exposure, automated environment promotion, complete audit trail for compliance"
        },
        {
          industry: "FinTech - Compliance Centralization",
          scenario: "Audit required proof of centralized secret management with access controls. Unified vault with RBAC, version history, and audit logs satisfied SOC 2 and PCI-DSS requirements.",
          impact: "Passed dual SOC 2 and PCI-DSS audits, 100% secret visibility, automated compliance evidence collection"
        },
        {
          industry: "Healthcare - PHI Secret Management",
          scenario: "Credentials for PHI databases managed separately across teams with no oversight. Centralized in vault with HIPAA-compliant access controls and complete access audit trails.",
          impact: "100% HIPAA compliance for credential management, eliminated shared credential practices, full audit trail"
        }
      ]}
      
      metrics={[
        {
          value: "99.8%",
          label: "Sync success rate",
          color: "text-purple-400"
        },
        {
          value: "90%",
          label: "Secrets sprawl reduction",
          color: "text-purple-400"
        },
        {
          value: "AES-256",
          label: "Zero-knowledge encryption",
          color: "text-purple-400"
        },
        {
          value: "50+",
          label: "Platforms supported",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "AWS Secrets Manager" },
        { name: "Azure Key Vault" },
        { name: "GCP Secret Manager" },
        { name: "HashiCorp Vault" },
        { name: "Kubernetes" },
        { name: "Docker" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Jenkins" },
        { name: "Terraform" },
        { name: "Ansible" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Zero-knowledge architecture—Shield Vault never sees plaintext secrets",
        "AES-256-GCM encryption with customer-managed keys",
        "HSM support for key storage and cryptographic operations",
        "Immutable audit logs for all secret operations",
        "Role-based access control with fine-grained permissions",
        "TLS 1.3 for all data in transit",
        "Automatic secret expiration and cleanup policies",
        "Regular third-party penetration testing and security audits"
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

export default VaultManagementPage
