import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Settings, Shield, Lock, FileCheck, Target, Workflow,
  CheckCircle, AlertTriangle
} from 'lucide-react'

const PolicyEnginePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Settings className="w-32 h-32 text-blue-600" />}
      heroTitle="Policy Engine"
      heroSubtitle="Granular Access Controls with Role-Based Permissions, Time-Based Access, and Automated Policy Enforcement"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Implement granular access controls with role-based permissions (RBAC), attribute-based access control (ABAC), and zero standing privileges. The policy engine evaluates every access request against configurable rules, ensuring least privilege enforcement with complete automation and audit trails."
      
      problem="Organizations struggle to enforce consistent access policies across environments. Manual policy management is error-prone, standing privileges create security risks, and there's no way to dynamically adjust access based on context. 60% of organizations have orphaned privileged accounts with excessive permissions."
      
      benefit="Reduce standing privileges by 90% and automate 80% of access requests. Enforce least privilege principle across your entire infrastructure with policy-based automation, real-time evaluation, and complete audit trails for compliance."
      
      keyFeatures={[
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Role-Based Access Control (RBAC)",
          description: "Define roles with precise permissions. Assign users to roles with inheritance and delegation. Support for nested roles, group-based assignment, and custom role definitions with granular permission sets."
        },
        {
          icon: <Target className="w-10 h-10 text-blue-400" />,
          title: "Attribute-Based Access Control (ABAC)",
          description: "Create policies based on user attributes (department, location, clearance), resource attributes (sensitivity, environment), and contextual attributes (time, device, network) for dynamic access decisions."
        },
        {
          icon: <Lock className="w-10 h-10 text-blue-400" />,
          title: "Zero Standing Privileges",
          description: "Eliminate persistent privileged access entirely. All access is granted on-demand through policy evaluation with automatic expiration. Reduce attack surface by 90% with no standing admin accounts."
        },
        {
          icon: <Workflow className="w-10 h-10 text-blue-400" />,
          title: "Policy-Based Automation",
          description: "Create automated rules that evaluate access requests against policies in real-time. Auto-approve low-risk requests, escalate medium-risk, and block high-risk with configurable thresholds."
        },
        {
          icon: <FileCheck className="w-10 h-10 text-blue-400" />,
          title: "Policy Templates Library",
          description: "Pre-built policy templates for common scenarios: PCI-DSS access controls, HIPAA data access, SOC 2 privilege management, and NIST 800-53 access enforcement. Customize and deploy in minutes."
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
          title: "Policy Versioning & Rollback",
          description: "Complete version history for all policy changes with diff comparison, rollback capability, and approval workflows for policy modifications. Audit trail tracks who changed what and when."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Define Roles & Attributes",
          description: "Create roles based on job functions and define user/resource attributes. Import from Active Directory, Okta, or Azure AD for automatic role mapping.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Create Access Policies",
          description: "Use the visual policy builder to create rules combining RBAC, ABAC, and contextual conditions. Apply templates or build custom policies with drag-and-drop logic.",
          icon: <Settings className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Policy Evaluation",
          description: "Every access request is evaluated against all applicable policies in real-time. The engine determines approve, deny, or escalate based on combined risk assessment.",
          icon: <Target className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Enforcement & Automation",
          description: "Approved access is automatically provisioned with time-bound sessions. Denied access triggers notifications. Escalated requests enter approval workflows.",
          icon: <Lock className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Monitor & Optimize",
          description: "AI analyzes policy effectiveness, identifies over-permissive rules, and recommends optimizations. Continuous monitoring ensures policy compliance across all systems.",
          icon: <AlertTriangle className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Policy Engine Architecture",
          items: [
            "Rule-based evaluation with priority ordering",
            "Condition chaining with AND/OR/NOT logic",
            "Real-time policy evaluation (<50ms latency)",
            "Caching for frequently evaluated policies",
            "Webhook support for external policy providers",
            "API-first architecture for automation"
          ]
        },
        {
          title: "Identity Provider Integration",
          items: [
            "Active Directory with group-based mapping",
            "Azure AD with conditional access support",
            "Okta with universal directory sync",
            "Auth0 with custom rule integration",
            "LDAP with nested group resolution",
            "Custom SAML/OAuth providers"
          ]
        },
        {
          title: "Policy Types Supported",
          items: [
            "Access control policies (allow/deny/escalate)",
            "Session duration policies (time-based expiration)",
            "MFA enforcement policies (risk-based triggers)",
            "Network restriction policies (IP/geo-based)",
            "Device compliance policies (OS, patch level)",
            "Data access policies (sensitivity classification)"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Segregation of Duties",
          scenario: "Bank needed to enforce segregation of duties for payment processing. Policy engine ensures no single user can both initiate and approve transactions with automatic role conflict detection.",
          impact: "100% SOD compliance, zero conflicts in 12 months, automated enforcement for 500+ users"
        },
        {
          industry: "Healthcare - Context-Aware Access",
          scenario: "Hospital needed to restrict PHI access based on shift schedules, department, and patient assignment. ABAC policies ensure doctors only access their assigned patients during active shifts.",
          impact: "95% reduction in unauthorized PHI access, full HIPAA compliance, zero manual policy management"
        },
        {
          industry: "Technology - Zero Standing Privileges",
          scenario: "SaaS company eliminated all standing admin accounts. Developers request production access through policy engine with automatic 4-hour expiration and full session recording.",
          impact: "90% reduction in standing privileges, 30-second average access provisioning, zero privilege-related incidents"
        },
        {
          industry: "Government - NIST Compliance",
          scenario: "Federal agency implemented NIST 800-53 access control policies with multi-factor authentication, device compliance checks, and geographic restrictions for classified systems.",
          impact: "100% NIST 800-53 compliance, automated policy enforcement, complete audit trails for every access decision"
        }
      ]}
      
      metrics={[
        {
          value: "90%",
          label: "Reduction in standing privileges",
          color: "text-blue-400"
        },
        {
          value: "80%",
          label: "Access requests automated",
          color: "text-blue-400"
        },
        {
          value: "< 50ms",
          label: "Policy evaluation time",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Audit trail coverage",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "Okta" },
        { name: "Auth0" },
        { name: "LDAP" },
        { name: "Google Workspace" },
        { name: "AWS IAM" },
        { name: "Azure RBAC" },
        { name: "GCP IAM" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Immutable policy audit logs with tamper detection",
        "Policy version control with approval workflows",
        "Real-time policy evaluation with fail-closed defaults",
        "Separation of duties enforcement",
        "Emergency override with full audit trail",
        "Multi-tenant policy isolation with RLS",
        "Encrypted policy storage and transmission",
        "Regular policy effectiveness reviews with AI recommendations"
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

export default PolicyEnginePage
