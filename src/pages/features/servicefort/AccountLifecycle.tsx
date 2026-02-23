import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  RefreshCw, Settings, Shield, AlertTriangle, CheckCircle,
  Clock, Users, Database
} from 'lucide-react'

const AccountLifecyclePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<RefreshCw className="w-32 h-32 text-blue-600" />}
      heroTitle="Account Lifecycle"
      heroSubtitle="Automated Service Account Lifecycle Management from Provisioning to Decommissioning"
      heroGradient="from-blue-50 via-white to-blue-50"
      
      overview="Manage the complete lifecycle of service accounts from creation to decommissioning with automated workflows. Track 1,247+ service accounts across Active Directory, cloud IAM, databases, and applications. Enforce policies for creation, review, rotation, and retirement."
      
      problem="Service accounts proliferate without oversight. 40% of service accounts in a typical enterprise have excessive privileges. 30% haven't been reviewed in over a year. Orphaned accounts after application decommission create persistent security risks."
      
      benefit="Complete visibility into all service accounts with automated lifecycle management. Reduce orphaned accounts by 90%. Enforce mandatory reviews. Automate provisioning and decommissioning. Maintain compliance with zero manual effort."
      
      keyFeatures={[
        {
          icon: <Settings className="w-10 h-10 text-blue-400" />,
          title: "Automated Provisioning",
          description: "Standardized service account creation with pre-approved templates. Enforce naming conventions, password policies, and permission baselines. Automatic documentation and ownership assignment."
        },
        {
          icon: <Clock className="w-10 h-10 text-blue-400" />,
          title: "Periodic Review Workflows",
          description: "Automated review cycles: 30/60/90-day reviews based on account sensitivity. Owners notified to certify continued need. Accounts not reviewed within SLA escalated and eventually suspended."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
          title: "Credential Rotation",
          description: "Automated credential rotation per policy. Coordinate rotation with dependent applications. Zero-downtime rotation with blue-green deployment. Verification after every rotation."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Orphan Detection",
          description: "AI identifies orphaned service accounts: no active application dependency, no recent usage, owner departed organization. Automated notification and decommission workflow."
        },
        {
          icon: <Users className="w-10 h-10 text-blue-400" />,
          title: "Ownership Tracking",
          description: "Every service account has a designated owner and backup owner. Automatic ownership transfer on personnel changes. Escalation chain for unresponsive owners."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Secure Decommissioning",
          description: "Structured decommission process: dependency validation, credential revocation, access removal, and archival. Reversible decommission with 30-day grace period. Complete audit trail."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Discovery & Inventory",
          description: "Discover all existing service accounts across AD, cloud IAM, databases, and applications. Create comprehensive inventory with ownership, purpose, and dependency mapping.",
          icon: <Database className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Assign Ownership",
          description: "Assign owners to all discovered accounts. AI recommends owners based on application dependency and team structure. Backup owners designated for continuity.",
          icon: <Users className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Enable Lifecycle Policies",
          description: "Apply lifecycle policies: review cadence, rotation schedule, maximum lifetime, and privilege boundaries. Templates for different sensitivity levels (critical, standard, low-risk).",
          icon: <Settings className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Automate Reviews",
          description: "Automated review notifications sent to owners. Certification or decertification recorded. Non-responsive owners escalated. Accounts failing review suspended per policy.",
          icon: <Clock className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Continuous Management",
          description: "Ongoing lifecycle management: new account provisioning, scheduled reviews, rotation execution, orphan detection, and decommissioning. Dashboard shows lifecycle health metrics.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Lifecycle Stages",
          items: [
            "Request: Standardized request with business justification",
            "Approval: Multi-level approval based on privilege level",
            "Provisioning: Automated creation with policy enforcement",
            "Active: Monitored with scheduled reviews and rotation",
            "Suspended: Temporarily disabled pending review",
            "Decommissioned: Credentials revoked, access removed, archived"
          ]
        },
        {
          title: "Supported Platforms",
          items: [
            "Active Directory (on-premises and Azure AD)",
            "AWS IAM (users, roles, service accounts)",
            "Azure AD (applications, service principals)",
            "GCP IAM (service accounts, keys)",
            "Database service accounts (Oracle, SQL Server, PostgreSQL)",
            "Application service accounts (SAP, ServiceNow, custom)"
          ]
        },
        {
          title: "Review & Rotation",
          items: [
            "Configurable review cycles: 30/60/90/180 days",
            "Automated notifications via email, Slack, Teams",
            "Escalation chains with configurable timeouts",
            "Credential rotation with zero-downtime coordination",
            "Post-rotation health checks for dependent systems",
            "Compliance reporting for review adherence"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Service Account Governance",
          scenario: "Bank had 3,000+ service accounts with no lifecycle management. 800 orphaned, 500 with excessive privileges. Implemented lifecycle management with automated reviews and decommissioning.",
          impact: "800 orphaned accounts decommissioned, 500 accounts right-sized, 100% review compliance within 90 days"
        },
        {
          industry: "Healthcare - HIPAA Service Account Compliance",
          scenario: "Service accounts accessing PHI databases had no regular review process. Implemented 90-day review cycles with ownership tracking and compliance reporting.",
          impact: "100% HIPAA review compliance, all PHI service accounts tracked, automated evidence for auditors"
        },
        {
          industry: "Technology - Cloud Service Account Management",
          scenario: "Multi-cloud environment with 1,200+ cloud service accounts across AWS, Azure, GCP. No central inventory or lifecycle management. Unified discovery and lifecycle automation.",
          impact: "1,200+ accounts inventoried, 250 orphaned decommissioned, automated rotation for all active accounts"
        },
        {
          industry: "Retail - PCI-DSS Service Account Controls",
          scenario: "PCI-DSS required evidence of service account controls for payment processing systems. Lifecycle management with 90-day reviews and credential rotation satisfied requirements.",
          impact: "PCI-DSS service account compliance, automated 90-day reviews, credential rotation evidence for auditors"
        }
      ]}
      
      metrics={[
        {
          value: "1,247+",
          label: "Service accounts managed",
          color: "text-blue-400"
        },
        {
          value: "90%",
          label: "Orphaned account reduction",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Review compliance rate",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Unowned service accounts",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Oracle" },
        { name: "SQL Server" },
        { name: "SAP" },
        { name: "Splunk" }
      ]}
      
      securityFeatures={[
        "Mandatory ownership for all service accounts",
        "Automated periodic reviews with escalation",
        "Orphan detection with AI-powered analysis",
        "Zero-downtime credential rotation",
        "Structured decommissioning with dependency validation",
        "Complete audit trail for all lifecycle events",
        "Reversible decommission with 30-day grace period",
        "Compliance reporting for regulatory frameworks"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "NIST 800-53",
        "FedRAMP"
      ]}
    />
  )
}

export default AccountLifecyclePage
