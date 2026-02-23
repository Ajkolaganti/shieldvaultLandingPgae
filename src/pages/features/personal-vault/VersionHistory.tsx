import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  History, Shield, RefreshCw, Eye,
  CheckCircle, ArrowLeftRight, Database
} from 'lucide-react'

const VersionHistoryPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<History className="w-32 h-32 text-indigo-600" />}
      heroTitle="Version History"
      heroSubtitle="Complete Change Tracking with One-Click Rollback and Side-by-Side Comparison"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      heroImage="/PersonalVault.jpeg"
      
      overview="Every change to every secret is tracked with full version history. See who changed what, when, and why. Compare any two versions side-by-side. One-click rollback to any previous version. Never lose a credential again—even accidentally overwritten or deleted items are recoverable."
      
      problem="Accidentally overwriting a credential can cause hours of downtime. No way to know what the previous value was. Team members change shared credentials without notification. Deleted items are gone forever. No accountability for credential changes."
      
      benefit="Complete version history for every secret. One-click rollback saves hours of recovery time. Side-by-side comparison shows exactly what changed. Deleted item recovery within retention period. Complete accountability for all changes."
      
      keyFeatures={[
        {
          icon: <History className="w-10 h-10 text-indigo-400" />,
          title: "Unlimited Version History",
          description: "Every change creates a new version with timestamp, user attribution, and optional change reason. Versions stored for configurable retention period (30 days to unlimited). No version limit per item."
        },
        {
          icon: <ArrowLeftRight className="w-10 h-10 text-indigo-400" />,
          title: "Side-by-Side Comparison",
          description: "Compare any two versions with highlighted differences. See exactly what fields changed: password, username, URL, notes, and custom fields. Visual diff for easy understanding."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-indigo-400" />,
          title: "One-Click Rollback",
          description: "Restore any previous version with a single click. Current version preserved as a new version for safety. Rollback confirmation with preview before applying."
        },
        {
          icon: <Database className="w-10 h-10 text-indigo-400" />,
          title: "Deleted Item Recovery",
          description: "Deleted items moved to trash with configurable retention (30/60/90 days). Full recovery with all version history preserved. Permanent deletion requires confirmation."
        },
        {
          icon: <Eye className="w-10 h-10 text-indigo-400" />,
          title: "Change Notifications",
          description: "Get notified when shared secrets are modified. Real-time notifications for critical credential changes. Digest notifications for bulk changes. Configurable per item or folder."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Audit Trail",
          description: "Immutable audit trail for all version changes. Track who accessed which version. Export change history for compliance. Integration with team audit dashboards."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Automatic Tracking",
          description: "Version history is automatic—no setup required. Every change to any field creates a new version. Timestamp and user automatically recorded. Optional change reason for important updates.",
          icon: <History className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "View History",
          description: "Access version history from any secret's detail view. See timeline of all changes with dates and authors. Filter by date range or user. Quick preview of each version.",
          icon: <Eye className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Compare Versions",
          description: "Select any two versions for side-by-side comparison. Differences highlighted with color coding. See added, removed, and modified fields. Understand exactly what changed.",
          icon: <ArrowLeftRight className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Rollback if Needed",
          description: "Click rollback on any version to restore it. Preview changes before applying. Current version preserved as a new version. Confirmation prompt prevents accidental rollbacks.",
          icon: <RefreshCw className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Recover Deleted Items",
          description: "Access trash for deleted items. Full preview before recovery. Restore to original location with all version history. Permanent deletion only after retention period or explicit confirmation.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Version Storage",
          items: [
            "Immutable version chain with cryptographic linking",
            "Each version independently encrypted",
            "Configurable retention: 30 days to unlimited",
            "No version count limit per item",
            "Deleted item retention: 30/60/90 days configurable",
            "Efficient delta storage minimizes space usage"
          ]
        },
        {
          title: "Change Tracking",
          items: [
            "Field-level change detection for all item types",
            "User attribution with timestamp precision",
            "Optional change reason (required for shared items)",
            "Side-by-side diff with syntax highlighting",
            "Change notifications via push, email, Slack",
            "Immutable audit log for compliance"
          ]
        },
        {
          title: "Recovery Options",
          items: [
            "One-click rollback to any version",
            "Current version preserved during rollback",
            "Deleted item recovery from trash",
            "Bulk rollback for multiple items",
            "Emergency recovery with admin access",
            "Export version history for backup"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Developer - Accidental Overwrite Recovery",
          scenario: "Developer accidentally overwrote production database password while updating staging. Version history showed previous value. One-click rollback restored production credential in 10 seconds.",
          impact: "Production restored in 10 seconds, zero downtime, version comparison showed the mistake"
        },
        {
          industry: "Team - Shared Credential Tracking",
          scenario: "Shared API key modified by team member without notification. Change notification alerted the team. Version comparison showed what changed. Discussion resolved the uncoordinated change.",
          impact: "Instant change awareness, clear accountability, prevented conflicting credential usage"
        },
        {
          industry: "Compliance - Change Audit Trail",
          scenario: "Auditor required evidence of credential change management. Version history export showed complete change trail with attribution, timestamps, and reasons for all credential modifications.",
          impact: "Complete compliance evidence, zero manual documentation, auditor-friendly export format"
        },
        {
          industry: "Security - Incident Recovery",
          scenario: "During security incident, multiple credentials rotated as precaution. After investigation, some rotations were unnecessary. Version history enabled selective rollback for unaffected credentials.",
          impact: "Selective rollback after incident, minimal operational disruption, complete incident timeline"
        }
      ]}
      
      metrics={[
        {
          value: "Unlimited",
          label: "Version history depth",
          color: "text-indigo-400"
        },
        {
          value: "10 sec",
          label: "Average rollback time",
          color: "text-indigo-400"
        },
        {
          value: "90 days",
          label: "Deleted item recovery",
          color: "text-indigo-400"
        },
        {
          value: "100%",
          label: "Change attribution",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Email" },
        { name: "Webhooks" },
        { name: "REST API" },
        { name: "CLI" },
        { name: "Browser Extension" },
        { name: "Desktop App" },
        { name: "Mobile App" },
        { name: "Jira" },
        { name: "ServiceNow" },
        { name: "Splunk" }
      ]}
      
      securityFeatures={[
        "Immutable version chain with cryptographic integrity",
        "Each version independently encrypted",
        "Tamper detection for version history",
        "Role-based access to version history",
        "Audit trail for all version access events",
        "Secure deletion with configurable retention",
        "Emergency recovery with admin authorization",
        "Export encryption for offline backup"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "CCPA"
      ]}
    />
  )
}

export default VersionHistoryPage
