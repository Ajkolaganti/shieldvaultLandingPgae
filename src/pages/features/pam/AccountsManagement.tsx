import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Shield, Search, Target, RefreshCw, Database, Network,
  CheckCircle, AlertTriangle, Users, Lock
} from 'lucide-react'

const AccountsManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Shield className="w-32 h-32 text-white" />}
      heroTitle="Accounts Management"
      heroSubtitle="Discover, manage, and secure privileged accounts across your entire infrastructure with zero manual intervention"
      heroGradient="from-gray-900 via-gray-800 to-gray-900"
      heroImage="/PAM.jpeg"
      
      overview="Automatically discover, classify, and manage privileged accounts across Windows, Linux, Oracle, AWS, Azure, and GCP environments. Our AI-powered system identifies high-risk accounts, tracks usage patterns, and enforces lifecycle management with complete automation."
      
      problem="Organizations struggle with shadow privileged accounts, manual discovery processes, and lack of visibility into who has access to what. This creates security gaps and compliance risks."
      
      benefit="Gain 100% visibility across your infrastructure with automated discovery, real-time risk scoring, and intelligent lifecycle management that reduces manual work by 87%."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-gray-400" />,
          title: "Automated Discovery",
          description: "Scan Windows, Linux, Oracle, AWS, Azure, GCP environments with AI-powered account classification and duplicate detection. Manage 200+ accounts per organization."
        },
        {
          icon: <Target className="w-10 h-10 text-gray-400" />,
          title: "Risk Scoring & Assessment",
          description: "Real-time risk calculation (1-100 scale) with account type classification, last usage tracking, and compliance status monitoring."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-gray-400" />,
          title: "Lifecycle Management",
          description: "Automated onboarding/offboarding with approval workflows, ownership assignment, and department-based organization."
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-gray-400" />,
          title: "Master Reconciliation",
          description: "Bulk reconcile operations with password version tracking and detailed failure diagnostics for all accounts."
        },
        {
          icon: <Database className="w-10 h-10 text-gray-400" />,
          title: "Multi-Store Architecture",
          description: "Support for AWS, Azure, GCP, On-Premises, and Hybrid stores with workspace segregation and permission-based access."
        },
        {
          icon: <Network className="w-10 h-10 text-gray-400" />,
          title: "Access Flow Visualization",
          description: "Interactive 6-stage flow diagram showing Request → Authentication → Policy → Approval → Access → Audit with real-time metrics."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Discovery",
          description: "Agent-based or agentless scanning automatically finds all privileged accounts across your infrastructure in under 2 minutes.",
          icon: <Search className="w-6 h-6 text-gray-400" />
        },
        {
          number: 2,
          title: "Classification",
          description: "AI categorizes accounts by type (Root, Admin, Service, Privileged, Standard), risk level, and ownership with 98% accuracy.",
          icon: <Target className="w-6 h-6 text-gray-400" />
        },
        {
          number: 3,
          title: "Management",
          description: "Centralized dashboard for lifecycle operations with bulk actions, CSV import/export, and multi-dimensional filtering.",
          icon: <Shield className="w-6 h-6 text-gray-400" />
        },
        {
          number: 4,
          title: "Monitoring",
          description: "Real-time usage tracking with anomaly detection, behavioral analysis, and automatic alerting for suspicious activity.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 5,
          title: "Reporting",
          description: "Automated compliance reports and immutable audit trails with millisecond timestamps for SOC 2, ISO 27001, and NIST compliance.",
          icon: <CheckCircle className="w-6 h-6 text-gray-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Database & Storage",
          items: [
            "Supabase PostgreSQL with real-time subscriptions",
            "Row-level security (RLS) for multi-tenant isolation",
            "Encrypted at rest and in transit (AES-256)",
            "Auto-scaling with 99.9% uptime SLA"
          ]
        },
        {
          title: "API Capabilities",
          items: [
            "REST endpoints for full CRUD operations",
            "GraphQL support for complex queries",
            "Webhook integrations for real-time events",
            "Rate limiting: 1000 requests/minute"
          ]
        },
        {
          title: "Search & Filtering",
          items: [
            "Full-text search with fuzzy matching",
            "Multi-dimensional filtering (risk, type, platform, store)",
            "Advanced query builder with saved searches",
            "Export results to CSV, JSON, or PDF"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services",
          scenario: "Manage 500+ privileged banking accounts across hybrid cloud infrastructure with automated rotation policies and real-time compliance monitoring.",
          impact: "87% reduction in manual operations, 100% audit compliance"
        },
        {
          industry: "Healthcare",
          scenario: "Track HIPAA-compliant access to patient data systems with detailed session logs and automatic access revocation for terminated employees.",
          impact: "Zero security incidents, full HIPAA compliance achieved"
        },
        {
          industry: "E-commerce",
          scenario: "Secure production database admin accounts with JIT access, session recording, and automatic credential rotation every 90 days.",
          impact: "98% reduction in credential-related incidents"
        },
        {
          industry: "Government",
          scenario: "Federal compliance (NIST 800-53) for classified systems with multi-factor authentication and complete audit trails.",
          impact: "100% compliance with federal security standards"
        }
      ]}
      
      metrics={[
        {
          value: "87%",
          label: "Reduction in manual work"
        },
        {
          value: "98%",
          label: "Accuracy in privilege detection"
        },
        {
          value: "100%",
          label: "Infrastructure visibility"
        },
        {
          value: "< 2 min",
          label: "Account discovery time"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "LDAP" },
        { name: "AWS IAM" },
        { name: "Azure AD" },
        { name: "Google Cloud IAM" },
        { name: "Okta" },
        { name: "OneLogin" },
        { name: "PingIdentity" },
        { name: "CyberArk" },
        { name: "HashiCorp Vault" },
        { name: "ServiceNow" },
        { name: "Jira" }
      ]}
      
      securityFeatures={[
        "AES-256 encryption for credentials at rest",
        "TLS 1.3 for data in transit",
        "Multi-factor authentication (MFA) enforcement",
        "Role-based access control (RBAC)",
        "Immutable audit logs with tamper detection",
        "Zero-knowledge architecture option",
        "Regular penetration testing and security audits",
        "SOC 2 Type II certified infrastructure"
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

export default AccountsManagementPage

