import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Key, Users, Shield, Lock, AlertTriangle,
  CheckCircle, Settings, Eye
} from 'lucide-react'

const PermissionManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Key className="w-32 h-32 text-blue-600" />}
      heroTitle="Permission Management"
      heroSubtitle="Enforce Least Privilege for Service Accounts with Continuous Permission Monitoring"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/SAV.jpeg"
      
      overview="Monitor and enforce least-privilege permissions for all service accounts. AI analyzes actual usage patterns to identify over-privileged accounts and recommend right-sizing. 347 permission violations detected and remediated. Continuous monitoring ensures accounts never accumulate unnecessary privileges."
      
      problem="Service accounts accumulate excessive permissions over time ('privilege creep'). 40% of service accounts have admin-level access when they only need read access. Over-privileged accounts are prime targets for attackers—one compromised service account with admin rights can lead to full domain takeover."
      
      benefit="Right-size every service account based on actual usage. Detect and remediate 347+ permission violations. AI recommends permission reduction with confidence scores. Enforce least privilege continuously."
      
      keyFeatures={[
        {
          icon: <Eye className="w-10 h-10 text-blue-400" />,
          title: "Permission Analysis",
          description: "AI analyzes actual permission usage vs. granted permissions for every service account. Identifies over-privileged accounts with specific recommendations for right-sizing."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Violation Detection",
          description: "Real-time detection of permission violations: privilege escalation attempts, unused admin permissions, cross-boundary access, and policy non-compliance. 347+ violations detected monthly."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Least Privilege Enforcement",
          description: "Automatically enforce maximum permission boundaries per service account type. Block privilege escalation. Alert on permission changes outside approved workflows."
        },
        {
          icon: <Lock className="w-10 h-10 text-blue-400" />,
          title: "Permission Reviews",
          description: "Scheduled permission reviews with AI pre-analysis. Owners review AI recommendations for permission reduction. One-click approval to right-size permissions."
        },
        {
          icon: <Users className="w-10 h-10 text-blue-400" />,
          title: "Cross-Platform Visibility",
          description: "Unified view of permissions across AD, Azure AD, AWS IAM, GCP IAM, databases, and applications. Identify accounts with admin access across multiple platforms."
        },
        {
          icon: <Settings className="w-10 h-10 text-blue-400" />,
          title: "Permission Policies",
          description: "Define maximum allowable permissions per service account type and environment. Production accounts restricted to minimum required. Development accounts with broader but bounded access."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Permission Discovery",
          description: "Discover all permissions granted to service accounts across all platforms. Create comprehensive permission inventory. Identify admin accounts, cross-platform privileges, and unused permissions.",
          icon: <Eye className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Usage Analysis",
          description: "AI analyzes actual permission usage over 30-90 days. Identifies permissions granted but never used. Calculates permission utilization ratio for each account. Ranks accounts by over-privilege severity.",
          icon: <Settings className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Right-Sizing Recommendations",
          description: "AI generates specific recommendations: 'Remove admin access from svc-monitoring (only uses read access).' Confidence scores for each recommendation. Impact analysis showing affected services.",
          icon: <AlertTriangle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Apply Changes",
          description: "Owner reviews and approves recommendations. Permissions reduced with optional rollback period. Post-change validation confirms services still function correctly.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Continuous Monitoring",
          description: "Ongoing permission monitoring detects privilege creep. New permission grants evaluated against policies. Alerts for unapproved permission changes. Regular AI re-analysis for optimization.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Analysis Capabilities",
          items: [
            "Permission-to-usage ratio analysis per account",
            "Admin access identification across all platforms",
            "Cross-platform permission correlation",
            "Unused permission detection (30/60/90-day windows)",
            "Privilege escalation path detection",
            "Blast radius analysis for compromised accounts"
          ]
        },
        {
          title: "Enforcement Mechanisms",
          items: [
            "Maximum permission boundaries per account type",
            "Real-time privilege escalation blocking",
            "Approval workflows for permission changes",
            "Automatic permission revocation for policy violations",
            "Conditional access based on context and behavior",
            "Just-in-time permission elevation with time limits"
          ]
        },
        {
          title: "Supported Platforms",
          items: [
            "Active Directory: Group memberships, ACLs, GPO assignments",
            "AWS IAM: Policies, roles, permission boundaries",
            "Azure AD: App roles, API permissions, directory roles",
            "GCP IAM: Roles, bindings, custom roles",
            "Databases: GRANT/REVOKE analysis for major DBMSs",
            "Applications: Custom RBAC integration via API"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Privilege Right-Sizing",
          scenario: "3,000 service accounts, 40% with admin-level access. AI analysis found 1,200 accounts needed only read access. 6-month program reduced admin accounts by 85%.",
          impact: "85% reduction in admin service accounts, attack surface reduced by 60%, zero service disruption"
        },
        {
          industry: "Healthcare - HIPAA Privilege Controls",
          scenario: "Service accounts accessing PHI databases needed minimum necessary access per HIPAA. Permission analysis identified 30 accounts with excessive database privileges. Right-sized within 2 weeks.",
          impact: "100% HIPAA minimum necessary compliance, 30 accounts right-sized, zero impact on clinical operations"
        },
        {
          industry: "Technology - Multi-Cloud Permission Governance",
          scenario: "Engineering team had service accounts with different privilege levels across AWS, Azure, and GCP for the same applications. Unified permission policy with cross-platform consistency.",
          impact: "Consistent permissions across 3 clouds, 200+ accounts normalized, unified policy enforcement"
        },
        {
          industry: "Retail - PCI-DSS Privilege Management",
          scenario: "PCI-DSS required evidence of least-privilege for payment processing service accounts. Permission analysis and enforcement provided continuous compliance evidence.",
          impact: "PCI-DSS least-privilege compliance, continuous evidence, zero audit findings for service account privileges"
        }
      ]}
      
      metrics={[
        {
          value: "347+",
          label: "Violations detected monthly",
          color: "text-blue-400"
        },
        {
          value: "85%",
          label: "Over-privilege reduction",
          color: "text-blue-400"
        },
        {
          value: "60%",
          label: "Attack surface reduction",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Service disruptions",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "Oracle" },
        { name: "SQL Server" },
        { name: "PostgreSQL" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Slack" },
        { name: "Splunk" },
        { name: "Datadog" }
      ]}
      
      securityFeatures={[
        "AI-powered over-privilege detection with confidence scoring",
        "Real-time privilege escalation blocking",
        "Blast radius analysis for compromised accounts",
        "Cross-platform permission correlation",
        "Automated right-sizing with rollback capability",
        "Continuous permission monitoring and alerting",
        "Just-in-time elevation for temporary privilege needs",
        "Complete audit trail for all permission changes"
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

export default PermissionManagementPage
