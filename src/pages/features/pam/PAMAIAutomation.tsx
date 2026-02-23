import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Zap, Bot, Brain, RefreshCw, Target, Shield,
  TrendingUp
} from 'lucide-react'

const PAMAIAutomationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Zap className="w-32 h-32 text-blue-600" />}
      heroTitle="PAM AI Automation"
      heroSubtitle="Intelligent PAM Automation with AI-Powered Rules, Autonomous Agents, and Smart Policy Optimization"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Eliminate 87% of manual PAM operations with AI-powered automation rules, autonomous security agents, and smart policy optimization. Automated session revocation, credential rotation, approval escalation, and anomaly lockdown execute 156+ rules monthly with 98.5% success rate."
      
      problem="PAM teams spend 6-7 hours daily on repetitive manual tasks: processing access requests, rotating credentials, reviewing sessions, and generating compliance reports. Manual processes can't scale with infrastructure growth and introduce human error."
      
      benefit="Deploy PAM-specific AI automation that works 24/7 without human intervention. From automated high-risk session termination to intelligent policy optimization, reduce manual PAM operations by 87% while improving security posture."
      
      keyFeatures={[
        {
          icon: <Zap className="w-10 h-10 text-blue-400" />,
          title: "PAM Automation Rules",
          description: "Pre-configured and custom automation rules: auto-revoke high-risk sessions (Risk > 80), automatic credential rotation for expiring accounts, approval escalation for pending requests > 24 hours, and anomaly lockdown on unusual patterns."
        },
        {
          icon: <Bot className="w-10 h-10 text-blue-400" />,
          title: "Policy Optimization Agent",
          description: "AI agent continuously analyzes 200+ accounts to identify over-privileged users, recommend policy adjustments, and optimize access controls. Runs 24/7 with 4.2 hours average analysis runtime per cycle."
        },
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "Smart Access Decisions",
          description: "AI learns from historical approval patterns to suggest approve/deny decisions. Auto-approve low-risk requests matching established patterns. Escalate edge cases with confidence scores for informed decisions."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
          title: "Automated Credential Lifecycle",
          description: "AI manages the complete credential lifecycle: automatic rotation on schedule, emergency rotation on breach detection, zero-downtime updates across dependent services, and rollback on failures."
        },
        {
          icon: <Target className="w-10 h-10 text-blue-400" />,
          title: "Risk-Based Automation",
          description: "Automation triggers based on real-time risk scores. Low risk (< 30): auto-approve. Medium risk (30-70): enhanced monitoring. High risk (70-90): require MFA step-up. Critical (> 90): auto-terminate."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
          title: "Automation Analytics",
          description: "Dashboard tracking automation rule execution, success rates, time saved, incidents prevented, and ROI metrics. Identify optimization opportunities and measure automation effectiveness."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Automation Rules",
          description: "Select from pre-built PAM automation rules or create custom rules. Define triggers (risk score, time, event), conditions (user type, resource sensitivity), and actions (terminate, rotate, escalate, notify).",
          icon: <Zap className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Deploy AI Agents",
          description: "Activate PAM-specific AI agents: Policy Optimization Agent, Compliance Auditor Agent, and Risk Assessment Agent. Configure analysis scope, schedule, and notification preferences.",
          icon: <Bot className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Learning Period",
          description: "AI learns your PAM environment over 7-14 days: typical access patterns, approval workflows, credential rotation schedules, and risk profiles. Establishes baselines for intelligent automation.",
          icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Autonomous Operation",
          description: "Automation rules execute 24/7 without intervention. AI agents continuously optimize policies, assess risks, and maintain compliance. Human-in-the-loop for critical decisions only.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Monitor & Optimize",
          description: "Review automation dashboard for execution metrics, success rates, and optimization recommendations. Fine-tune rules based on results. AI continuously improves accuracy over time.",
          icon: <TrendingUp className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "PAM Automation Rules",
          items: [
            "Auto-revoke high-risk sessions (configurable threshold: Risk > 80)",
            "Automatic credential rotation (expiring within N days)",
            "Approval escalation (pending > configurable hours)",
            "Anomaly lockdown (unusual pattern detected with >90% confidence)",
            "Session timeout enforcement (max duration per resource type)",
            "MFA step-up trigger (risk increase during active session)"
          ]
        },
        {
          title: "AI Agents for PAM",
          items: [
            "Policy Optimization Agent: Analyzes 200+ accounts per cycle",
            "Compliance Auditor Agent: Generates real-time compliance status",
            "Risk Assessment Agent: Continuous risk scoring and prediction",
            "Session Analyzer Agent: Reviews session recordings for violations",
            "Access Reviewer Agent: Identifies unused privileges for removal",
            "Credential Rotation Agent: Zero-downtime automated rotation"
          ]
        },
        {
          title: "Performance Metrics",
          items: [
            "156+ automation rules executing monthly",
            "98.5% automation success rate",
            "87% reduction in manual PAM operations",
            "< 100ms rule evaluation latency",
            "24/7 autonomous operation with 99.99% uptime",
            "Automated rollback on failed actions"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "FinTech - Auto-Revoke on Risk",
          scenario: "AI automation detected risk score spike to 94 during active database session. Auto-terminated session, locked account, notified SOC, and created incident ticket—all within 12 seconds. Investigation found compromised VPN credentials.",
          impact: "Breach contained in 12 seconds, zero data exfiltration, automated incident response saved 4+ hours of manual triage"
        },
        {
          industry: "Healthcare - Credential Lifecycle",
          scenario: "Automated rotation of 500+ privileged credentials across EHR systems on 90-day schedule. Zero-downtime updates to all dependent services. Automatic rollback on any rotation failure.",
          impact: "100% automated rotation, zero downtime, HIPAA compliance maintained, 15 hours/week saved in manual rotation"
        },
        {
          industry: "E-Commerce - Policy Optimization",
          scenario: "AI Policy Optimization Agent identified 45 over-privileged accounts and recommended least-privilege policies. 18 accounts had admin access they never used. Automatic policy adjustments applied.",
          impact: "45 accounts right-sized, 40% reduction in attack surface, zero productivity impact from policy changes"
        },
        {
          industry: "SaaS - Approval Automation",
          scenario: "AI learned approval patterns over 30 days and auto-approved 78% of low-risk access requests. Remaining 22% escalated with AI confidence scores to speed human decision-making.",
          impact: "78% requests auto-approved, average approval time: 5 seconds, 95% reduction in approval backlog"
        }
      ]}
      
      metrics={[
        {
          value: "87%",
          label: "Reduction in manual PAM work",
          color: "text-blue-400"
        },
        {
          value: "98.5%",
          label: "Automation success rate",
          color: "text-blue-400"
        },
        {
          value: "156+",
          label: "Rules executing monthly",
          color: "text-blue-400"
        },
        {
          value: "24/7",
          label: "Autonomous operation",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "Okta" },
        { name: "AWS IAM" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Human-in-the-loop for critical automated actions",
        "Automated rollback on failed automation actions",
        "Complete audit trail of all automated decisions",
        "Configurable risk thresholds for each automation rule",
        "Emergency override capability for all automation",
        "AI model explainability for compliance auditing",
        "Privacy-preserving learning (no data leaves environment)",
        "98.5% success rate with continuous improvement"
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

export default PAMAIAutomationPage
