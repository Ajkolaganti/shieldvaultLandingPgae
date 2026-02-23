import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Clock, Shield, CheckCircle, AlertTriangle, Lock,
  Workflow, Zap, Users
} from 'lucide-react'

const JITActivationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Clock className="w-32 h-32 text-blue-600" />}
      heroTitle="Just-In-Time (JIT) Activation"
      heroSubtitle="Eliminate Standing Privileges with Temporary, On-Demand Access That Automatically Expires"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Eliminate standing privileges by granting temporary, on-demand access that automatically expires. Self-service access requests, multi-level approval workflows, time-bound access from minutes to days, and automatic privilege revocation. Average JITA request approval: 30 seconds. Auto-revocation success rate: 98.5%. Standing privilege reduction: 90%+."
      
      problem="Standing privileged access creates permanent security risks. Over-privileged users can access critical systems 24/7 even when not needed. Orphaned privileges persist after role changes. Manual provisioning takes 2-3 days, causing productivity bottlenecks."
      
      benefit="Achieve zero standing privileges with just-in-time access that's provisioned in 30 seconds and automatically cleaned up. 90% reduction in attack surface, 98.5% auto-revocation success rate, and break-glass emergency access when needed."
      
      keyFeatures={[
        {
          icon: <Clock className="w-10 h-10 text-blue-400" />,
          title: "Time-Bound Access",
          description: "Configure access duration from minutes to days. Automatic expiration ensures no privilege persists beyond need. Extensible with approval for additional time. Countdown timer visible to users during active sessions."
        },
        {
          icon: <Users className="w-10 h-10 text-blue-400" />,
          title: "Self-Service Access Portal",
          description: "Users request access through intuitive self-service portal. Select target system, access level, duration, and provide justification. Previous requests saved as templates for frequent access patterns."
        },
        {
          icon: <Workflow className="w-10 h-10 text-blue-400" />,
          title: "Multi-Level Approval",
          description: "Configurable approval workflows with manager, security team, and resource owner approval stages. Risk-based routing: auto-approve low-risk, require approval for medium/high risk."
        },
        {
          icon: <Zap className="w-10 h-10 text-blue-400" />,
          title: "Automatic Privilege Escalation",
          description: "On approval, system automatically provisions exact permissions needed—no more, no less. Integration with AD, Azure AD, Okta, and cloud IAM for real-time privilege assignment."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Automatic Revocation",
          description: "98.5% success rate in automatic privilege revocation on session expiry. Multi-method cleanup: API revocation, group removal, token invalidation, and session termination. Verification confirms cleanup."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Break-Glass Emergency Access",
          description: "Designated emergency accounts bypass approval workflows for critical situations. All break-glass actions are logged, flagged, and require post-incident review. Automatic escalation to security team."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Request Access",
          description: "User requests privileged access through self-service portal. Specifies target system, access level needed, duration, and justification. System evaluates risk score and determines workflow.",
          icon: <Users className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Policy Evaluation",
          description: "System evaluates request against policies: user risk score, target sensitivity, time of day, device compliance, and location. Determines auto-approve, require approval, or deny based on policy.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Approval (If Required)",
          description: "Request routed to appropriate approver(s) based on workflow configuration. Approver receives notification with full context and risk assessment. Average approval time: 30 seconds.",
          icon: <Workflow className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Privilege Activation",
          description: "On approval, exact permissions provisioned automatically via API integration with identity providers. Session starts with time-bound access. User receives confirmation with expiry countdown.",
          icon: <Zap className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Active Session Monitoring",
          description: "All activities during JIT session are recorded and monitored. AI analyzes behavior for anomalies. Session can be extended (with approval) or terminated early (by user or admin).",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 6,
          title: "Automatic Revocation",
          description: "On session expiry or manual termination, all privileges automatically revoked. Multi-method cleanup verified. Audit trail records complete session lifecycle from request to revocation.",
          icon: <Lock className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Access Duration Options",
          items: [
            "Minutes: 15, 30, 45, 60 minutes",
            "Hours: 1, 2, 4, 8 hours (most common)",
            "Days: 1, 3, 7 days (requires additional approval)",
            "Custom: Any duration with approval workflow",
            "Extensible: Request additional time before expiry",
            "Break-glass: Immediate access with post-hoc review"
          ]
        },
        {
          title: "Revocation Methods",
          items: [
            "AD group membership removal (instant)",
            "Azure AD role assignment removal",
            "AWS IAM policy detachment",
            "SSH key revocation on target systems",
            "Database permission revocation",
            "Session token invalidation",
            "Kubernetes RBAC removal",
            "Multi-method verification confirms complete cleanup"
          ]
        },
        {
          title: "Integration Points",
          items: [
            "Active Directory (group-based JIT)",
            "Azure AD (PIM integration, role assignment)",
            "AWS IAM (temporary STS credentials, role assumption)",
            "GCP IAM (temporary role grants)",
            "Okta (group membership JIT)",
            "Kubernetes RBAC (temporary ClusterRole bindings)",
            "Database engines (temporary grant/revoke)"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "FinTech - Zero Standing Privileges",
          scenario: "Financial services company eliminated all standing admin accounts. Developers request 4-hour production access through JIT portal. Auto-expires after task completion. 95% reduction in privileged account abuse.",
          impact: "Zero standing privileges, 30-second average provisioning, 98.5% auto-revocation success, eliminated standing admin risk"
        },
        {
          industry: "Healthcare - Emergency PHI Access",
          scenario: "Emergency room doctors need immediate access to patient records not in their department. Break-glass JIT provides instant access with automatic 2-hour expiry and mandatory post-access review.",
          impact: "Zero patient care delays, 100% access audit trail, automatic cleanup, HIPAA compliant emergency access"
        },
        {
          industry: "Technology - Production Incident Response",
          scenario: "On-call engineers need production database access during incidents. JIT provides 2-hour admin access with immediate approval for on-call roster members. Session recorded for post-mortem review.",
          impact: "Instant access for on-call engineers, 100% session recording, automatic revocation, zero standing production access"
        },
        {
          industry: "Government - Classified System Access",
          scenario: "Contractors need temporary access to classified systems for specific projects. JIT enforces project-duration access with multi-level approval and automatic revocation on project completion.",
          impact: "Project-scoped access only, multi-level approval enforcement, complete audit trail, zero access persistence after project end"
        }
      ]}
      
      metrics={[
        {
          value: "30 sec",
          label: "Average request approval",
          color: "text-blue-400"
        },
        {
          value: "98.5%",
          label: "Auto-revocation success",
          color: "text-blue-400"
        },
        {
          value: "90%+",
          label: "Standing privilege reduction",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Standing admin accounts",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "Okta" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "Kubernetes" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Zero standing privileges architecture",
        "Multi-method privilege revocation with verification",
        "Complete session recording during JIT access",
        "Break-glass emergency access with mandatory review",
        "Risk-based approval routing and MFA enforcement",
        "Immutable audit trail for complete access lifecycle",
        "Automatic revocation on anomaly detection",
        "Integration with SIEM for real-time monitoring"
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

export default JITActivationPage
