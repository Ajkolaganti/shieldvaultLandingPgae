import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Key, Lock, RefreshCw, Cloud, GitBranch, Shield,
  Search, Zap, CheckCircle, AlertTriangle
} from 'lucide-react'

const SecretsManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Key className="w-32 h-32 text-white" />}
      heroTitle="Secrets Management"
      heroSubtitle="Centralized control plane for discovering, rotating, and managing secrets across cloud, CI/CD, and infrastructure"
      heroGradient="from-gray-900 via-gray-800 to-gray-900"
      heroImage="/SecretManagement.jpeg"
      
      overview="Automatically discover secrets across AWS, Azure, GCP, and CI/CD pipelines. Enforce rotation policies, track secret usage, and eliminate hardcoded credentials with our centralized secrets control plane managing 12,847+ secrets with 98% rotation success rate."
      
      problem="Organizations have secrets scattered across cloud providers, CI/CD tools, and codebases. Manual rotation is error-prone, secrets sprawl creates security gaps, and lack of visibility makes compliance impossible."
      
      benefit="Achieve complete secrets visibility with automated discovery, policy-based rotation, and centralized management that eliminates 99% of hardcoded credentials and reduces security incidents by 94%."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-gray-400" />,
          title: "Cloud & CI/CD Discovery",
          description: "Automatically scan AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, GitHub, GitLab, Jenkins, and more. Discover 12,847+ secrets in minutes."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-gray-400" />,
          title: "Automated Rotation",
          description: "Policy-based rotation with 98% success rate. Support for databases, APIs, cloud services, and custom secret types with zero-downtime rotation."
        },
        {
          icon: <Lock className="w-10 h-10 text-gray-400" />,
          title: "Secrets Control Plane",
          description: "Unified interface for managing secrets across all platforms. Create, update, delete, and audit secrets from one central location."
        },
        {
          icon: <Cloud className="w-10 h-10 text-gray-400" />,
          title: "Multi-Cloud Support",
          description: "Native integrations with AWS, Azure, GCP, On-Premises vaults, and hybrid deployments. Sync secrets across environments."
        },
        {
          icon: <Shield className="w-10 h-10 text-gray-400" />,
          title: "Access Control & Policies",
          description: "Fine-grained RBAC with policy engine. Control who can access, rotate, or view secrets with approval workflows and MFA enforcement."
        },
        {
          icon: <Zap className="w-10 h-10 text-gray-400" />,
          title: "AI-Powered Insights",
          description: "ML detects unused secrets, expiring credentials, weak passwords, and rotation anomalies. Automatic remediation recommendations."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Discovery",
          description: "Agents scan cloud providers, CI/CD tools, and codebases to discover all secrets. AI classifies by type, risk, and usage patterns.",
          icon: <Search className="w-6 h-6 text-gray-400" />
        },
        {
          number: 2,
          title: "Centralization",
          description: "Import secrets into the control plane with encryption, versioning, and metadata tracking. Map dependencies and applications.",
          icon: <Key className="w-6 h-6 text-gray-400" />
        },
        {
          number: 3,
          title: "Policy Configuration",
          description: "Define rotation policies, access controls, and approval workflows. Set retention periods and compliance requirements.",
          icon: <Shield className="w-6 h-6 text-gray-400" />
        },
        {
          number: 4,
          title: "Automated Rotation",
          description: "System automatically rotates secrets based on policies. Updates all dependent applications and services with zero downtime.",
          icon: <RefreshCw className="w-6 h-6 text-gray-400" />
        },
        {
          number: 5,
          title: "Monitoring & Compliance",
          description: "Continuous monitoring of secret usage, access patterns, and rotation status. Generate compliance reports and audit trails.",
          icon: <CheckCircle className="w-6 h-6 text-gray-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported Secret Types",
          items: [
            "Database credentials (MySQL, PostgreSQL, MongoDB, Oracle, etc.)",
            "API keys and tokens (REST, GraphQL, OAuth)",
            "SSH keys and certificates",
            "Cloud service credentials (AWS, Azure, GCP)",
            "Encryption keys and certificates",
            "Service account credentials",
            "Custom secret types with SDK"
          ]
        },
        {
          title: "Rotation Capabilities",
          items: [
            "Zero-downtime rotation with rollback support",
            "Configurable rotation schedules (daily, weekly, monthly, custom)",
            "Rotation validation and testing before deployment",
            "Automatic dependency updates across services",
            "98% success rate with detailed failure diagnostics",
            "Emergency rotation for compromised secrets"
          ]
        },
        {
          title: "Integration APIs",
          items: [
            "REST API for programmatic access",
            "SDKs for Python, Node.js, Go, Java, .NET",
            "CLI tool for automation scripts",
            "Terraform provider for IaC",
            "Kubernetes Secrets Store CSI driver",
            "Webhook notifications for secret events"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Companies",
          scenario: "Manage API keys across 50+ microservices with automatic rotation every 30 days. Eliminate hardcoded credentials in source code with dynamic secret injection.",
          impact: "99% reduction in hardcoded secrets, zero security incidents related to exposed credentials"
        },
        {
          industry: "E-commerce",
          scenario: "Rotate payment gateway credentials, database passwords, and third-party API keys automatically. Ensure PCI-DSS compliance with detailed audit trails.",
          impact: "PCI-DSS compliance achieved, 98% reduction in credential-related downtime"
        },
        {
          industry: "FinTech",
          scenario: "Manage banking API credentials, encryption keys, and cloud service accounts across multi-region deployments with SOC 2 compliance.",
          impact: "Full SOC 2 compliance, 95% reduction in manual credential management"
        },
        {
          industry: "Healthcare",
          scenario: "Secure access to PHI databases and third-party health APIs with HIPAA-compliant secret rotation and complete audit logging.",
          impact: "HIPAA compliance maintained, zero unauthorized access incidents"
        }
      ]}
      
      metrics={[
        {
          value: "12,847",
          label: "Secrets managed"
        },
        {
          value: "98%",
          label: "Rotation success rate"
        },
        {
          value: "99%",
          label: "Hardcoded secrets eliminated"
        },
        {
          value: "< 5 min",
          label: "Discovery time"
        }
      ]}
      
      integrations={[
        { name: "AWS Secrets Manager" },
        { name: "Azure Key Vault" },
        { name: "GCP Secret Manager" },
        { name: "HashiCorp Vault" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Jenkins" },
        { name: "CircleCI" },
        { name: "Azure DevOps" },
        { name: "Kubernetes" },
        { name: "Docker" },
        { name: "Terraform" }
      ]}
      
      securityFeatures={[
        "AES-256-GCM encryption for secrets at rest",
        "TLS 1.3 for all secret transmissions",
        "Zero-knowledge architecture option available",
        "Hardware Security Module (HSM) support",
        "Automatic secret scanning in code repositories",
        "Expiration and deprecation policies",
        "Secret versioning with rollback capability",
        "Immutable audit logs for all secret operations"
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

export default SecretsManagementPage

