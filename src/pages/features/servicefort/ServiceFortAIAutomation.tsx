import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Bot, Zap, Brain, RefreshCw, Shield,
  Settings, TrendingUp
} from 'lucide-react'

const ServiceFortAIAutomationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Bot className="w-32 h-32 text-blue-600" />}
      heroTitle="ServiceFort AI Automation"
      heroSubtitle="AI-Powered Service Account Management with Autonomous Agents and Smart Automation Rules"
      heroGradient="from-blue-50 via-white to-blue-50"
      
      overview="Automate 80% of service account management with AI-powered rules and autonomous agents. Auto-provision new accounts, rotate credentials, review permissions, detect orphans, and decommission unused accounts—all without human intervention. Reduce management overhead from 20+ hours/week to under 4 hours."
      
      problem="Service account management is labor-intensive: provisioning, reviews, rotation, decommissioning, and troubleshooting consume 20+ hours/week for a typical team. Human errors cause security incidents. Scale makes manual management impossible."
      
      benefit="Deploy AI automation that manages service accounts 24/7. Auto-provision with policy compliance, rotate credentials on schedule, review permissions intelligently, and decommission orphans automatically. 80% reduction in management overhead."
      
      keyFeatures={[
        {
          icon: <Zap className="w-10 h-10 text-blue-400" />,
          title: "Automation Rules",
          description: "Pre-built rules: auto-provision from approved templates, rotate credentials approaching expiration, flag idle accounts for review, decommission orphans after grace period. Custom rules with triggers and actions."
        },
        {
          icon: <Bot className="w-10 h-10 text-blue-400" />,
          title: "Autonomous Agents",
          description: "Credential Rotation Agent: manages rotation for 1,247+ accounts. Permission Review Agent: analyzes and recommends right-sizing. Lifecycle Agent: handles provisioning to decommissioning."
        },
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "Intelligent Recommendations",
          description: "AI analyzes the service account estate and recommends: consolidate 15 duplicate accounts, decommission 45 orphaned accounts, right-size 200 over-privileged accounts, rotate 30 stale credentials."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
          title: "Auto-Remediation",
          description: "Automatically remediate common issues: rotate expiring credentials, suspend accounts failing review, restrict permissions exceeding policy, and alert on anomalous behavior."
        },
        {
          icon: <Settings className="w-10 h-10 text-blue-400" />,
          title: "Workflow Automation",
          description: "Automate complex workflows: new employee → create service accounts → assign permissions → schedule reviews. Employee departure → validate dependencies → rotate credentials → decommission."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Compliance Automation",
          description: "Automatically enforce compliance policies: 90-day rotation for PCI-DSS, quarterly reviews for SOC 2, minimum privilege for HIPAA. Continuous monitoring with automated evidence collection."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Rules",
          description: "Select from pre-built automation rules or create custom rules. Define triggers (time, event, threshold), conditions (account type, environment), and actions (rotate, review, decommission).",
          icon: <Settings className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Deploy Agents",
          description: "Activate autonomous agents: Credential Rotation, Permission Review, and Lifecycle Management. Configure scope, schedules, and escalation policies. Agents begin learning your environment.",
          icon: <Bot className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "AI Learning",
          description: "AI agents analyze your service account estate over 14 days: patterns, dependencies, risks, and optimization opportunities. Builds models for intelligent automation decisions.",
          icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Autonomous Operation",
          description: "Rules and agents execute continuously. Credentials rotated, permissions reviewed, orphans detected, and compliance enforced—all automatically. Human intervention only for exceptions.",
          icon: <Zap className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Monitor & Optimize",
          description: "Dashboard shows automation metrics: actions taken, time saved, compliance posture, and optimization recommendations. Continuous improvement through AI learning and feedback.",
          icon: <TrendingUp className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Automation Rules",
          items: [
            "Auto-provision: On approved request from templates",
            "Auto-rotate: Credentials approaching expiration",
            "Auto-review: Schedule periodic permission reviews",
            "Auto-decommission: Orphaned accounts after grace period",
            "Auto-alert: Anomalous behavior or policy violations",
            "Custom rules: User-defined triggers, conditions, actions"
          ]
        },
        {
          title: "AI Agents",
          items: [
            "Credential Rotation Agent: 1,247+ accounts managed",
            "Permission Review Agent: AI-powered right-sizing",
            "Lifecycle Management Agent: Provisioning to retirement",
            "Orphan Detection Agent: Continuous orphan identification",
            "24/7 operation with 99.99% uptime",
            "Auto-scaling based on workload"
          ]
        },
        {
          title: "Integration Points",
          items: [
            "HR systems for employee lifecycle triggers",
            "ITSM for ticket creation and workflow automation",
            "SIEM for security event-driven actions",
            "CI/CD for deployment-triggered provisioning",
            "Identity providers for access lifecycle",
            "Communication tools for notifications and approvals"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Scale Management",
          scenario: "3,000+ service accounts with 20+ hours/week management overhead. AI automation reduced manual work by 80%. Credential rotation, permission reviews, and decommissioning fully automated.",
          impact: "80% reduction in management hours (20 → 4 per week), zero missed rotations, 100% review compliance"
        },
        {
          industry: "Technology - Employee Lifecycle",
          scenario: "Employee departure required manual identification and handling of 15+ service accounts on average. Automated workflow handles dependency validation, credential rotation, and decommissioning.",
          impact: "Employee offboarding for service accounts reduced from 2 days to 30 minutes, zero orphaned accounts from departures"
        },
        {
          industry: "Healthcare - Compliance Automation",
          scenario: "HIPAA compliance required quarterly reviews and 90-day rotation for PHI service accounts. AI automation handles reviews, rotation, and compliance evidence collection automatically.",
          impact: "100% HIPAA compliance, zero manual evidence collection, quarterly reviews fully automated"
        },
        {
          industry: "Retail - Seasonal Scaling",
          scenario: "Holiday season required 200+ temporary service accounts for seasonal applications. Auto-provisioning created accounts, and auto-decommissioning retired them after the season.",
          impact: "200+ accounts auto-provisioned and decommissioned, zero orphaned seasonal accounts, 100% policy compliance"
        }
      ]}
      
      metrics={[
        {
          value: "80%",
          label: "Reduction in manual work",
          color: "text-blue-400"
        },
        {
          value: "1,247+",
          label: "Accounts managed by AI",
          color: "text-blue-400"
        },
        {
          value: "99.99%",
          label: "Agent uptime",
          color: "text-blue-400"
        },
        {
          value: "4 hrs/wk",
          label: "Remaining manual effort",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "ServiceNow" },
        { name: "Workday" },
        { name: "Splunk" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Jira" },
        { name: "PagerDuty" },
        { name: "Jenkins" }
      ]}
      
      securityFeatures={[
        "AI agents operate with least-privilege access",
        "All automated actions logged with complete audit trail",
        "Human-in-the-loop for high-risk automated actions",
        "Configurable automation boundaries and safeguards",
        "Rollback capability for all automated changes",
        "Compliance enforcement built into every automation",
        "Regular third-party audit of automation logic",
        "Privacy-preserving AI model training"
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

export default ServiceFortAIAutomationPage
