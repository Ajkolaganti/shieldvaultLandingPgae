import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Cloud, Search, Database, Shield, AlertTriangle,
  CheckCircle, Target, Eye
} from 'lucide-react'

const CloudDiscoveryPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Cloud className="w-32 h-32 text-purple-600" />}
      heroTitle="Cloud Discovery (AWS/Azure/GCP)"
      heroSubtitle="Automatically Discover Secrets Across AWS, Azure, and GCP Accounts and Projects"
      heroGradient="from-purple-50 via-white to-purple-50"
      
      overview="Automatically discover secrets across AWS Secrets Manager, Parameter Store, Azure Key Vault, App Configuration, GCP Secret Manager, and cloud databases. Create complete secret inventories, map ownership, assess risk, and import to centralized vault—all in minutes."
      
      problem="Organizations have secrets scattered across multiple cloud accounts and projects with no visibility. Shadow secrets in Parameter Store, App Configuration, and database connection strings go unmanaged. No inventory means no compliance."
      
      benefit="Discover 100% of cloud secrets in minutes. Identify orphaned and unused secrets. Eliminate shadow IT secrets. Complete visibility across all cloud providers from a single dashboard."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-purple-400" />,
          title: "Multi-Cloud Scanning",
          description: "Scan AWS Secrets Manager, Parameter Store, RDS credentials, Azure Key Vault, App Configuration, SQL credentials, GCP Secret Manager, and Cloud SQL credentials simultaneously."
        },
        {
          icon: <Database className="w-10 h-10 text-purple-400" />,
          title: "Secret Inventory Creation",
          description: "Automatically create a complete inventory of all discovered secrets. Classify by type (API key, password, certificate, connection string), sensitivity, and usage frequency."
        },
        {
          icon: <Target className="w-10 h-10 text-purple-400" />,
          title: "Ownership Mapping",
          description: "Map secret ownership to teams, services, and individuals using IAM policies, access patterns, and resource tags. Identify unowned secrets for immediate remediation."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Risk Assessment",
          description: "Automatic risk scoring for discovered secrets: age, rotation status, access breadth, encryption level, and compliance requirements. Prioritize high-risk secrets for immediate attention."
        },
        {
          icon: <Eye className="w-10 h-10 text-purple-400" />,
          title: "Orphaned Secret Detection",
          description: "Identify secrets no longer used by any service or application. Detect stale secrets not accessed in 90+ days. Recommend decommission or archive for unused credentials."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Import to Centralized Vault",
          description: "One-click import of discovered secrets into Shield Vault. Automatic organization by cloud provider, environment, and service. Maintain sync with source for ongoing management."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Connect Cloud Accounts",
          description: "Authenticate with AWS, Azure, and GCP using IAM roles, service principals, or service accounts. Cross-account and cross-project scanning supported. Least-privilege access only.",
          icon: <Cloud className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Run Discovery Scan",
          description: "Initiate scanning across all connected cloud accounts. Discovers secrets in managed services, databases, configuration stores, and environment variables. Complete in minutes.",
          icon: <Search className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Review Inventory",
          description: "Review discovered secrets with filtering by provider, type, risk level, and ownership. Identify orphaned, stale, and high-risk secrets. View detailed metadata for each secret.",
          icon: <Database className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Import & Organize",
          description: "Import selected secrets into centralized vault with automatic organization. Configure sync policies to keep vault in sync with cloud sources. Apply rotation and access policies.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Continuous Discovery",
          description: "Schedule recurring scans to detect new secrets as they're created. Real-time alerts for new cloud secrets. Delta scanning for efficient incremental updates.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "AWS Discovery",
          items: [
            "AWS Secrets Manager (all regions)",
            "AWS Systems Manager Parameter Store",
            "AWS RDS database credentials",
            "AWS Lambda environment variables",
            "AWS ECS task definition secrets",
            "Cross-account scanning via IAM roles"
          ]
        },
        {
          title: "Azure Discovery",
          items: [
            "Azure Key Vault (secrets, keys, certificates)",
            "Azure App Configuration",
            "Azure SQL connection strings",
            "Azure Functions application settings",
            "Azure App Service configuration",
            "Cross-subscription scanning via service principals"
          ]
        },
        {
          title: "GCP Discovery",
          items: [
            "GCP Secret Manager",
            "Cloud SQL connection credentials",
            "Cloud Functions environment variables",
            "Cloud Run environment secrets",
            "GKE Kubernetes Secrets",
            "Cross-project scanning via service accounts"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Cloud Secret Audit",
          scenario: "Company had 12 AWS accounts and 5 Azure subscriptions with no visibility into secret sprawl. Cloud discovery found 2,300+ secrets, 180 orphaned, and 45 never rotated since creation.",
          impact: "100% cloud secret visibility, 180 orphaned secrets decommissioned, all 45 stale secrets rotated, compliance gap closed"
        },
        {
          industry: "E-Commerce - PCI-DSS Cloud Compliance",
          scenario: "Payment processor needed inventory of all secrets in PCI-DSS scope across AWS and Azure. Discovery created complete inventory with ownership mapping for audit evidence.",
          impact: "Complete PCI-DSS secret inventory, 100% ownership attribution, passed audit with zero findings"
        },
        {
          industry: "FinTech - Multi-Cloud Migration",
          scenario: "During AWS-to-GCP migration, needed to discover all secrets in source accounts for migration planning. Discovery found 500+ secrets with dependency mapping to applications and services.",
          impact: "Zero-downtime secret migration, 500+ secrets migrated, no application disruption during cloud transition"
        },
        {
          industry: "Healthcare - HIPAA Secret Discovery",
          scenario: "Hospital needed to identify all cloud credentials accessing PHI databases across 3 cloud providers. Discovery found 89 database credentials, 12 without proper rotation policies.",
          impact: "89 PHI credentials identified, 12 remediated with rotation policies, HIPAA compliance achieved for cloud secrets"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Cloud secret visibility",
          color: "text-purple-400"
        },
        {
          value: "< 5 min",
          label: "Discovery scan time",
          color: "text-purple-400"
        },
        {
          value: "3 Clouds",
          label: "AWS, Azure, GCP supported",
          color: "text-purple-400"
        },
        {
          value: "2,300+",
          label: "Secrets discovered per scan",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "AWS Secrets Manager" },
        { name: "AWS Parameter Store" },
        { name: "AWS RDS" },
        { name: "Azure Key Vault" },
        { name: "Azure App Configuration" },
        { name: "Azure SQL" },
        { name: "GCP Secret Manager" },
        { name: "Cloud SQL" },
        { name: "Kubernetes" },
        { name: "Terraform" },
        { name: "CloudFormation" },
        { name: "ARM Templates" }
      ]}
      
      securityFeatures={[
        "Least-privilege IAM access for scanning operations",
        "Discovered secrets never stored in plaintext",
        "Scan credentials stored in HSM-backed vault",
        "Complete audit trail of all discovery operations",
        "Encrypted data transmission during scanning (TLS 1.3)",
        "Role-based access to discovery results",
        "Automatic credential rotation for scan service accounts",
        "Cross-account isolation with tenant separation"
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

export default CloudDiscoveryPage
