import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Search, Server, Database, Cloud, Shield,
  Target, CheckCircle, AlertTriangle
} from 'lucide-react'

const DiscoveryPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Search className="w-32 h-32 text-blue-600" />}
      heroTitle="Privileged Account Discovery"
      heroSubtitle="Automatically Discover, Classify, and Onboard Privileged Accounts Across Your Entire Infrastructure"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Agent-based and agentless scanning automatically discovers all privileged accounts across Windows, Linux, Oracle, AWS, Azure, GCP, databases, and applications in under 2 minutes. AI classifies accounts by type, risk level, and ownership with 98% accuracy, eliminating shadow admin accounts."
      
      problem="Organizations have no visibility into all privileged accounts across their infrastructure. Shadow admin accounts, orphaned credentials, and unmanaged service accounts create massive security gaps. Manual discovery is incomplete and time-consuming, taking weeks to audit even a fraction of the infrastructure."
      
      benefit="Achieve 100% visibility into privileged accounts across your infrastructure in minutes. AI-powered classification eliminates manual categorization, identifies shadow admins, and prioritizes high-risk accounts for immediate attention."
      
      keyFeatures={[
        {
          icon: <Search className="w-10 h-10 text-blue-400" />,
          title: "Automated Scanning",
          description: "Agent-based and agentless scanning discovers privileged accounts across Windows, Linux, Oracle, cloud platforms, databases, and applications. Scheduled scans or on-demand discovery in under 2 minutes."
        },
        {
          icon: <Target className="w-10 h-10 text-blue-400" />,
          title: "AI-Powered Classification",
          description: "Machine learning classifies discovered accounts by type (Root, Admin, Service, Privileged, Standard) with 98% accuracy. Automatic risk scoring and ownership attribution based on usage patterns."
        },
        {
          icon: <Server className="w-10 h-10 text-blue-400" />,
          title: "Multi-Platform Coverage",
          description: "Discover accounts across Windows servers, Linux/Unix systems, Oracle databases, AWS IAM, Azure AD, GCP IAM, Active Directory, LDAP, and custom applications. 200+ account types supported."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Shadow Admin Detection",
          description: "Identify unmanaged privileged accounts that bypass security controls. Detect accounts with elevated permissions not assigned through approved channels. Flag orphaned accounts from terminated employees."
        },
        {
          icon: <Database className="w-10 h-10 text-blue-400" />,
          title: "Duplicate Detection",
          description: "AI identifies duplicate accounts across platforms with different naming conventions. Consolidation recommendations reduce account sprawl and simplify management. Cross-reference with HR systems for validation."
        },
        {
          icon: <Cloud className="w-10 h-10 text-blue-400" />,
          title: "Continuous Discovery",
          description: "Schedule recurring scans to catch new privileged accounts as they're created. Real-time alerts for new admin accounts. Delta scanning for incremental updates without full rescans."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Scan Targets",
          description: "Define which networks, domains, cloud accounts, and applications to scan. Choose between agent-based (deeper) or agentless (lighter) scanning. Configure credentials for scan access.",
          icon: <Server className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Run Discovery Scan",
          description: "Initiate scan across all configured targets. Agent-based scans discover local accounts; agentless scans use API and protocol queries. Complete discovery in under 2 minutes for most environments.",
          icon: <Search className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "AI Classification",
          description: "Machine learning classifies discovered accounts by type, risk level, and likely ownership. Identifies shadow admins, orphaned accounts, and duplicate credentials with 98% accuracy.",
          icon: <Target className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Review & Onboard",
          description: "Review discovered accounts in the dashboard with filtering by risk, type, and platform. Bulk onboard approved accounts into PAM with one click. Flag unauthorized accounts for remediation.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Continuous Monitoring",
          description: "Schedule recurring scans for ongoing discovery. Receive alerts for new privileged accounts. Delta scanning detects changes since last scan. Full audit trail of all discoveries.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Scanning Methods",
          items: [
            "Agent-based: Installed on target systems for deep scanning",
            "Agentless: Uses WMI, SSH, LDAP, APIs for remote discovery",
            "Cloud API: AWS IAM, Azure AD, GCP IAM native integration",
            "Database: Direct connection scanning for DB admins",
            "Active Directory: Full domain enumeration with nested groups",
            "Network: Port scanning for service account detection"
          ]
        },
        {
          title: "Supported Platforms",
          items: [
            "Windows Server (2012+) with WMI and PowerShell",
            "Linux/Unix (RHEL, Ubuntu, CentOS, SUSE) with SSH",
            "Oracle Database with SQL query-based discovery",
            "AWS: IAM users, roles, service accounts, SSO",
            "Azure: AD users, managed identities, service principals",
            "GCP: IAM accounts, service accounts, Workspace users"
          ]
        },
        {
          title: "AI Classification Engine",
          items: [
            "98% accuracy in account type classification",
            "Risk scoring based on privilege level and usage patterns",
            "Ownership attribution using access patterns and HR data",
            "Duplicate detection across heterogeneous platforms",
            "Shadow admin identification with confidence scores",
            "Continuous model improvement with feedback loop"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Regulatory Audit",
          scenario: "Bank needed complete inventory of privileged accounts for SOC 2 audit. Manual audit found 200 accounts. Discovery scan found 487 accounts including 87 shadow admins and 45 orphaned accounts.",
          impact: "100% account visibility achieved, 87 unauthorized accounts remediated, passed SOC 2 with zero findings"
        },
        {
          industry: "Healthcare - HIPAA Compliance",
          scenario: "Hospital had no visibility into who had admin access to EHR systems. Discovery found 156 privileged accounts, 23 belonging to terminated employees. Immediate remediation prevented potential HIPAA violation.",
          impact: "23 orphaned accounts deactivated, 100% HIPAA compliance, ongoing discovery preventing future gaps"
        },
        {
          industry: "Technology - Cloud Account Sprawl",
          scenario: "SaaS company had AWS, Azure, and GCP accounts with unmanaged IAM users. Discovery found 340+ cloud privileged accounts across 12 cloud accounts, many with excessive permissions.",
          impact: "340+ accounts discovered and classified, 45% flagged as over-privileged, 95% remediated within 2 weeks"
        },
        {
          industry: "Manufacturing - Legacy System Discovery",
          scenario: "Factory floor systems running Windows 2012 with unknown admin accounts. Discovery found 78 local admin accounts, many shared among operators with no individual accountability.",
          impact: "78 shared accounts converted to individual accounts, full audit trail established, zero production disruption"
        }
      ]}
      
      metrics={[
        {
          value: "< 2 min",
          label: "Discovery scan time",
          color: "text-blue-400"
        },
        {
          value: "98%",
          label: "Classification accuracy",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Infrastructure visibility",
          color: "text-blue-400"
        },
        {
          value: "200+",
          label: "Account types supported",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "LDAP" },
        { name: "Oracle" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "VMware" },
        { name: "Kubernetes" },
        { name: "ServiceNow" }
      ]}
      
      securityFeatures={[
        "Encrypted scan credentials stored in HSM",
        "Scan operations use least-privilege access only",
        "Complete audit trail of all discovery operations",
        "Network segmentation support for isolated scanning",
        "Agentless scanning option for sensitive environments",
        "Results encrypted at rest and in transit",
        "Role-based access to discovery results",
        "Automatic credential rotation for scan accounts"
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

export default DiscoveryPage
