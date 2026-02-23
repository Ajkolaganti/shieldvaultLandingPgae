import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Lock, Users, Shield, Key, CheckCircle,
  Eye, Workflow, Clock
} from 'lucide-react'

const SecretsAccessControlPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Lock className="w-32 h-32 text-purple-600" />}
      heroTitle="Secrets Access Control"
      heroSubtitle="Granular RBAC with Secret-Level Permissions, Approval Workflows, and Complete Version History"
      heroGradient="from-purple-50 via-white to-purple-50"
      
      overview="Control who can access, rotate, or view secrets with fine-grained role-based access control. Secret-level permissions, time-bound access, approval workflows for sensitive secrets, and complete audit logs of every access event. Enforce least privilege for secrets across your entire organization."
      
      problem="Too many people have access to too many secrets. No granular control over who can read, write, or rotate specific secrets. Shared credentials without accountability. No approval process for accessing high-sensitivity secrets."
      
      benefit="Enforce least privilege for all secrets. Every access event audited. Approval workflows for sensitive secrets. Time-bound secret access with automatic revocation. Complete version history with one-click rollback."
      
      keyFeatures={[
        {
          icon: <Users className="w-10 h-10 text-purple-400" />,
          title: "Role-Based Access Control",
          description: "Define roles with precise secret permissions: read, write, rotate, delete, share. Assign users to roles with inheritance. Support for team-based, project-based, and environment-based access control."
        },
        {
          icon: <Key className="w-10 h-10 text-purple-400" />,
          title: "Secret-Level Permissions",
          description: "Set permissions on individual secrets or secret groups. Different users can have different access levels to the same secret. Support for read-only, rotate-only, and full-access permission sets."
        },
        {
          icon: <Clock className="w-10 h-10 text-purple-400" />,
          title: "Time-Bound Access",
          description: "Grant temporary access to secrets with automatic expiration. Perfect for contractors, temporary projects, or incident response. Self-service requests with configurable durations."
        },
        {
          icon: <Workflow className="w-10 h-10 text-purple-400" />,
          title: "Approval Workflows",
          description: "Require approval before granting access to sensitive secrets (production credentials, encryption keys). Multi-level approval chains with automatic escalation and Slack/Teams integration."
        },
        {
          icon: <Eye className="w-10 h-10 text-purple-400" />,
          title: "Access Audit Trail",
          description: "Complete log of every secret access: who accessed, what secret, when, from where, and why. Tamper-proof audit logs for compliance. Real-time alerts for unauthorized access attempts."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Version History & Rollback",
          description: "Complete secret history with every version tracked. One-click rollback to any previous version. Version comparison showing what changed. Change attribution with user and timestamp."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Define Roles",
          description: "Create roles matching your organizational structure: DevOps (rotate access), Developers (read-only), Security (full access), Auditors (read logs only). Import from identity providers.",
          icon: <Users className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Set Secret Permissions",
          description: "Assign permissions at secret, folder, or environment level. Production secrets require approval workflow. Development secrets available to all developers. Encryption keys restricted to security team.",
          icon: <Lock className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Configure Workflows",
          description: "Set up approval workflows for sensitive secrets. Define approvers, escalation rules, and timeout policies. Enable Slack/Teams approval for quick response times.",
          icon: <Workflow className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Enable Monitoring",
          description: "Turn on real-time access monitoring and alerting. Configure alerts for unauthorized access attempts, bulk access patterns, and off-hours activity. SIEM integration for correlation.",
          icon: <Eye className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Audit & Review",
          description: "Regular access reviews to ensure least privilege. AI recommends permission reductions based on actual usage. Generate compliance reports for auditors. Track access trends over time.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Permission Model",
          items: [
            "RBAC with role hierarchy and inheritance",
            "Secret-level, folder-level, and environment-level permissions",
            "Permission types: read, write, rotate, delete, share, admin",
            "Deny rules override allow rules (explicit deny)",
            "Conditional access based on IP, time, device",
            "Emergency break-glass access with audit trail"
          ]
        },
        {
          title: "Identity Integration",
          items: [
            "Active Directory group-to-role mapping",
            "Azure AD with conditional access policies",
            "Okta with universal directory sync",
            "SCIM provisioning and deprovisioning",
            "SAML/OAuth SSO integration",
            "Just-in-time user provisioning"
          ]
        },
        {
          title: "Versioning System",
          items: [
            "Immutable version chain for every secret",
            "Metadata: version number, user, timestamp, reason",
            "Diff comparison between any two versions",
            "One-click rollback with automatic propagation",
            "Version retention policies (configurable)",
            "Encrypted version storage with per-version access logs"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Developer Access Control",
          scenario: "100+ developers needed access to secrets for different environments. Production secrets restricted to senior engineers with approval. Development secrets freely available. Staging requires team lead approval.",
          impact: "Zero unauthorized production secret access, self-service for dev/staging, complete audit trail for compliance"
        },
        {
          industry: "FinTech - Contractor Secret Access",
          scenario: "External contractors needed temporary access to specific API keys during project engagement. Time-bound access with 30-day expiration and automatic revocation on project completion.",
          impact: "Zero secrets persisted after contract end, automatic cleanup, complete access audit for SOC 2"
        },
        {
          industry: "Healthcare - PHI Credential Control",
          scenario: "Access to PHI database credentials restricted to authorized personnel with mandatory approval workflow. Every access logged for HIPAA compliance. Quarterly access reviews automated.",
          impact: "100% HIPAA compliance for PHI credentials, zero unauthorized access, automated quarterly reviews"
        },
        {
          industry: "E-Commerce - PCI-DSS Access Control",
          scenario: "Payment gateway credentials restricted to payment team with dual approval. Rotation requires security team and payment team sign-off. Complete audit trail for PCI-DSS evidence.",
          impact: "PCI-DSS access control compliance, dual approval for payment secrets, complete evidence for auditors"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Access audit coverage",
          color: "text-purple-400"
        },
        {
          value: "Zero",
          label: "Unauthorized access events",
          color: "text-purple-400"
        },
        {
          value: "< 30 sec",
          label: "Approval workflow time",
          color: "text-purple-400"
        },
        {
          value: "1-Click",
          label: "Version rollback",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "Okta" },
        { name: "Auth0" },
        { name: "LDAP" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "PagerDuty" }
      ]}
      
      securityFeatures={[
        "Fine-grained RBAC with explicit deny rules",
        "Immutable access audit logs with tamper detection",
        "Time-bound access with automatic revocation",
        "Multi-level approval workflows for sensitive secrets",
        "Break-glass emergency access with mandatory review",
        "Quarterly automated access reviews with AI recommendations",
        "SIEM integration for access event correlation",
        "Encrypted version history with per-version access controls"
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

export default SecretsAccessControlPage
