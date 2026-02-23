import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  GitPullRequest, Clock, Users, Bell, CheckCircle, 
  MessageSquare, Workflow
} from 'lucide-react'

const ApprovalsWorkflowPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<GitPullRequest className="w-32 h-32 text-blue-600" />}
      heroTitle="Approval Workflows"
      heroSubtitle="Configurable Multi-Stage Approval Workflows with Automatic Escalation and Real-Time Notifications"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Design and deploy multi-level approval chains for privileged access requests with role-based approvers, time-based auto-escalation, and Slack/Teams integration. Average approval time of 30 seconds with 96.8% escalation success rate and complete approval audit trails."
      
      problem="Manual approval processes create bottlenecks, delaying critical access for hours or days. Approvers are unavailable, escalation paths are unclear, and there's no audit trail of approval decisions. This leads to frustration, shadow IT workarounds, and compliance gaps."
      
      benefit="Streamline access approvals with intelligent routing, automatic escalation, and real-time notifications. Reduce approval time from days to 30 seconds while maintaining complete audit trails and compliance documentation."
      
      keyFeatures={[
        {
          icon: <Workflow className="w-10 h-10 text-blue-400" />,
          title: "Multi-Level Approval Chains",
          description: "Design approval workflows with multiple stages: manager approval, security team review, and executive sign-off. Configurable chain depth with parallel and sequential approval paths."
        },
        {
          icon: <Users className="w-10 h-10 text-blue-400" />,
          title: "Role-Based Approvers",
          description: "Assign approvers based on roles, departments, or resource ownership. Support for group approvers (any member can approve), backup approvers, and delegation during absences."
        },
        {
          icon: <Clock className="w-10 h-10 text-blue-400" />,
          title: "Time-Based Auto-Escalation",
          description: "Automatically escalate unanswered requests after configurable timeout periods. Multi-level escalation chains ensure no request is left unattended. 96.8% escalation success rate."
        },
        {
          icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
          title: "Slack & Teams Integration",
          description: "Approve or deny requests directly from Slack or Microsoft Teams with interactive buttons. Rich notifications with request context, risk assessment, and one-click actions."
        },
        {
          icon: <Bell className="w-10 h-10 text-blue-400" />,
          title: "Smart Notifications",
          description: "Context-rich notifications via email, Slack, Teams, SMS, and mobile push. Include requester details, resource information, risk score, and recommended action for informed decisions."
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
          title: "Approval Analytics",
          description: "Dashboard tracking approval times, bottlenecks, approver responsiveness, and workflow efficiency. Identify slow approvers, optimize chains, and measure compliance with SLAs."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Design Workflow",
          description: "Use the visual workflow builder to design approval chains. Define stages, approvers, escalation rules, and timeout policies. Apply templates for common workflows or build custom flows.",
          icon: <Workflow className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Access Request Submitted",
          description: "User submits access request through self-service portal. System evaluates policy and determines if approval is required. Low-risk requests may be auto-approved based on policy.",
          icon: <GitPullRequest className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Approver Notification",
          description: "Designated approver receives notification with full context: requester info, resource details, risk score, and recommended action. Approve or deny directly from notification.",
          icon: <Bell className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Auto-Escalation",
          description: "If approver doesn't respond within timeout, request auto-escalates to next level. Multiple escalation levels ensure no request is stuck. Emergency override for critical situations.",
          icon: <Clock className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Access Provisioned",
          description: "On approval, access is automatically provisioned with time-bound session. Complete audit trail records who approved, when, and why. Denial reasons logged for compliance.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Workflow Configuration",
          items: [
            "Visual drag-and-drop workflow builder",
            "Sequential and parallel approval paths",
            "Conditional branching based on risk score",
            "Configurable timeout per approval stage (1 min to 72 hours)",
            "Multi-level escalation chains (up to 5 levels)",
            "Approval delegation and backup approvers"
          ]
        },
        {
          title: "Notification Channels",
          items: [
            "Email with rich HTML templates",
            "Slack interactive messages with approve/deny buttons",
            "Microsoft Teams adaptive cards",
            "SMS for urgent escalations",
            "Mobile push notifications (iOS/Android)",
            "Webhook for custom notification systems",
            "PagerDuty for critical access requests"
          ]
        },
        {
          title: "Analytics & Reporting",
          items: [
            "Average approval time tracking per workflow",
            "Approver responsiveness metrics",
            "Escalation frequency and success rates",
            "Bottleneck identification and optimization",
            "SLA compliance reporting",
            "Historical approval trend analysis"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Dual Approval",
          scenario: "Bank requires dual approval for production database access. Manager and security team must both approve. Implemented parallel approval with 15-minute timeout and automatic escalation to CISO.",
          impact: "Average approval time: 45 seconds, 100% dual approval compliance, zero unauthorized database access"
        },
        {
          industry: "Healthcare - Emergency Access",
          scenario: "Hospital needs emergency override for patient care situations while maintaining audit trails. Implemented break-glass workflow with automatic approval and post-hoc review by security team.",
          impact: "Emergency access in < 10 seconds, 100% audit coverage, zero patient care delays from access bottlenecks"
        },
        {
          industry: "Technology - DevOps Access",
          scenario: "Developers need quick production access for incident response. Implemented risk-based workflow: auto-approve for known on-call engineers, require approval for others with 5-minute timeout.",
          impact: "On-call engineers get instant access, 30-second average for others, 95% reduction in access-related incident delays"
        },
        {
          industry: "Government - Multi-Level Clearance",
          scenario: "Federal agency requires multi-level approval for classified systems. Implemented 3-stage workflow with manager, security officer, and facility security officer approvals.",
          impact: "100% compliance with federal access requirements, complete audit trail, average approval: 4 minutes"
        }
      ]}
      
      metrics={[
        {
          value: "30 sec",
          label: "Average approval time",
          color: "text-blue-400"
        },
        {
          value: "96.8%",
          label: "Escalation success rate",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Approval audit trail",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Approval bottlenecks",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "Email (SMTP)" },
        { name: "SMS (Twilio)" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Active Directory" },
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "Webhooks" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Immutable approval audit logs with tamper detection",
        "Encrypted approval communications across all channels",
        "Role-based approver assignment with separation of duties",
        "Time-limited approval tokens to prevent replay attacks",
        "Multi-factor authentication for high-risk approvals",
        "Approval delegation with full audit trail",
        "Emergency override with mandatory post-hoc review",
        "Compliance reporting for all approval decisions"
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

export default ApprovalsWorkflowPage
