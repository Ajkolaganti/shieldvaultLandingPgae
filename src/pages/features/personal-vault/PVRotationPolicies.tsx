import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  RefreshCw, Clock, Shield, AlertTriangle, CheckCircle,
  Settings, Bell
} from 'lucide-react'

const PVRotationPoliciesPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<RefreshCw className="w-32 h-32 text-indigo-600" />}
      heroTitle="Rotation Policies"
      heroSubtitle="Automated Personal Credential Rotation with Smart Scheduling and Zero-Disruption Updates"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      
      overview="Set up automated rotation policies for your personal credentials. Schedule rotation for passwords, API keys, and tokens with smart timing that avoids disruption. Proactive reminders before expiration. One-click rotation with automatic vault update and auto-fill sync."
      
      problem="Personal credentials get stale. Passwords unchanged for years. API keys never rotated. Tokens expire causing unexpected failures. No systematic way to keep personal credentials fresh and secure."
      
      benefit="Automated rotation reminders and scheduling. One-click rotation with instant vault update. Zero disruption with pre-rotation validation. Credential freshness score for your entire vault. Never have a stale credential again."
      
      keyFeatures={[
        {
          icon: <Clock className="w-10 h-10 text-indigo-400" />,
          title: "Smart Scheduling",
          description: "Set rotation schedules per credential: weekly, monthly, quarterly, or custom intervals. AI recommends rotation frequency based on credential type, sensitivity, and industry best practices."
        },
        {
          icon: <Bell className="w-10 h-10 text-indigo-400" />,
          title: "Proactive Reminders",
          description: "Reminders before scheduled rotation: 7 days, 3 days, 1 day, and day-of notifications. Custom reminder windows. Snooze with reason tracking. Escalation for critical credentials."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-indigo-400" />,
          title: "One-Click Rotation",
          description: "For supported services, one-click rotation generates new credential, updates the service, and saves to vault automatically. For manual services, guided rotation with clipboard and save assistance."
        },
        {
          icon: <Settings className="w-10 h-10 text-indigo-400" />,
          title: "Policy Templates",
          description: "Pre-configured rotation policies: Critical (30 days), Standard (90 days), Low-risk (180 days). Custom policies with specific rotation windows and requirements."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Freshness Scoring",
          description: "Vault-wide freshness score based on credential age, rotation compliance, and breach status. Per-credential scoring with improvement recommendations. Track improvement over time."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Rotation History",
          description: "Complete rotation history for every credential: dates, method (auto/manual), success status, and any issues. Compliance reporting for organizations requiring rotation evidence."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Assess Current State",
          description: "Vault health check analyzes all credentials: age, rotation history, and risk level. Dashboard shows freshness score with breakdown by category. Identifies most urgent rotation needs.",
          icon: <AlertTriangle className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Apply Policies",
          description: "Assign rotation policies to credentials individually or by category. Use templates (Critical, Standard, Low-risk) or create custom policies. Policies inherited by new credentials automatically.",
          icon: <Settings className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Configure Reminders",
          description: "Set reminder preferences: notification channels (push, email, Slack), timing (days before due), and snooze options. Configure escalation for overdue rotations.",
          icon: <Bell className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Execute Rotations",
          description: "When rotation is due, one-click for supported services or guided manual process. New credential generated, saved, and synced across devices. Previous version preserved in history.",
          icon: <RefreshCw className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Track Compliance",
          description: "Dashboard shows rotation compliance: on-time, overdue, and upcoming. Freshness score trends over time. Export rotation reports for organizational compliance.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Policy Options",
          items: [
            "Critical: 30-day rotation for high-sensitivity credentials",
            "Standard: 90-day rotation for regular credentials",
            "Low-risk: 180-day rotation for low-sensitivity items",
            "Custom: user-defined intervals and requirements",
            "Event-based: rotate after security event or breach alert",
            "AI-recommended: based on credential type and usage"
          ]
        },
        {
          title: "Supported Auto-Rotation",
          items: [
            "AWS IAM access keys (automatic rotation)",
            "GitHub personal access tokens (guided rotation)",
            "Database passwords (automatic for supported DBs)",
            "Cloud service credentials (AWS, Azure, GCP)",
            "API keys for major SaaS providers",
            "Custom services via rotation scripts"
          ]
        },
        {
          title: "Notification System",
          items: [
            "Push notifications on mobile and desktop",
            "Email reminders with action links",
            "Slack/Teams direct messages",
            "In-app notification center",
            "Calendar integration (iCal export)",
            "Snooze with reason tracking (max 3 snoozes)"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - API Key Rotation",
          scenario: "50+ API keys with various expiration policies. Rotation policies set per provider. Proactive reminders prevent expired key outages. One-click rotation for AWS and GitHub.",
          impact: "Zero expired API key outages, automated rotation for major services, compliance with provider policies"
        },
        {
          industry: "Enterprise - Password Hygiene",
          scenario: "Organization mandated 90-day password rotation for all employee credentials. Personal vault rotation policies ensure compliance. Freshness score tracked per employee.",
          impact: "100% rotation compliance, freshness score improved from 45% to 95%, zero forced lockouts"
        },
        {
          industry: "Security Engineer - Credential Freshness",
          scenario: "Security engineer maintaining 200+ credentials. Freshness scoring identified 45 credentials unchanged in 12+ months. Prioritized rotation with guided process.",
          impact: "45 stale credentials rotated, freshness score from 60% to 98%, systematic rotation schedule maintained"
        },
        {
          industry: "Freelancer - Client Credential Management",
          scenario: "Freelancer receiving temporary client credentials. Rotation policies with client-defined intervals. Automatic reminders prevent access issues. Clean rotation history for client reporting.",
          impact: "Client credential compliance, proactive rotation, professional credential management evidence"
        }
      ]}
      
      metrics={[
        {
          value: "95%+",
          label: "Rotation compliance",
          color: "text-indigo-400"
        },
        {
          value: "Zero",
          label: "Expired credential outages",
          color: "text-indigo-400"
        },
        {
          value: "1-Click",
          label: "Auto-rotation for supported services",
          color: "text-indigo-400"
        },
        {
          value: "30 days",
          label: "Minimum recommended cycle",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "AWS IAM" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Azure" },
        { name: "GCP" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Email" },
        { name: "Google Calendar" },
        { name: "Apple Calendar" },
        { name: "CLI" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Cryptographically secure credential generation during rotation",
        "Previous versions preserved in encrypted version history",
        "Rotation verification confirms new credential works",
        "Breach checking for newly generated credentials",
        "Audit trail for all rotation events",
        "Escalation for overdue critical credential rotation",
        "Freshness scoring with continuous monitoring",
        "Organization-wide rotation compliance reporting"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "NIST 800-63B",
        "GDPR",
        "CCPA"
      ]}
    />
  )
}

export default PVRotationPoliciesPage
