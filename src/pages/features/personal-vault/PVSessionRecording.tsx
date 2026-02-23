import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Video, Monitor, Shield, Lock, Eye,
  CheckCircle, Play
} from 'lucide-react'

const PVSessionRecordingPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Video className="w-32 h-32 text-indigo-600" />}
      heroTitle="Session Recording"
      heroSubtitle="Record and Audit Personal Vault Access Sessions for Compliance and Security"
      heroGradient="from-indigo-50 via-white to-indigo-50"
      
      overview="Record vault access sessions for security auditing and compliance. Track every action within your personal vault: secrets viewed, copied, shared, modified, and deleted. Session replays provide visual timeline of vault interactions. Perfect for compliance evidence and security investigations."
      
      problem="No visibility into how personal vault credentials are used after access. Compliance requires proof of appropriate credential handling. Security incidents need investigation of credential access patterns. No way to demonstrate proper credential management to auditors."
      
      benefit="Complete session recording of all vault interactions. Visual timeline of every access event. Compliance evidence for credential management. Security investigation support with detailed session replays."
      
      keyFeatures={[
        {
          icon: <Video className="w-10 h-10 text-indigo-400" />,
          title: "Session Recording",
          description: "Every vault session recorded with detailed activity log: items accessed, actions performed (view, copy, edit, share, delete), duration, and context. Timestamped event chain for full reconstruction."
        },
        {
          icon: <Play className="w-10 h-10 text-indigo-400" />,
          title: "Session Replay",
          description: "Visual replay of vault sessions showing exactly what happened step-by-step. Timeline scrubbing for quick navigation. Event filtering by action type. Export sessions for external review."
        },
        {
          icon: <Monitor className="w-10 h-10 text-indigo-400" />,
          title: "Activity Dashboard",
          description: "Real-time dashboard showing vault activity: most accessed secrets, usage patterns, sharing activity, and session statistics. Weekly and monthly activity reports."
        },
        {
          icon: <Eye className="w-10 h-10 text-indigo-400" />,
          title: "Access Analytics",
          description: "Analytics on credential usage patterns: which secrets are accessed most, peak access times, sharing frequency, and credential lifecycle metrics. Identify unused secrets for cleanup."
        },
        {
          icon: <Lock className="w-10 h-10 text-indigo-400" />,
          title: "Privacy Controls",
          description: "You control what's recorded. Disable recording for specific items. Session recordings encrypted and accessible only to you. Configurable retention periods. Self-service deletion."
        },
        {
          icon: <Shield className="w-10 h-10 text-indigo-400" />,
          title: "Compliance Export",
          description: "Export session records for compliance audits. Pre-formatted for SOC 2, ISO 27001 evidence requirements. Tamper-proof records with cryptographic integrity verification."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Enable Recording",
          description: "Enable session recording from vault settings. Choose recording level: basic (actions only), standard (actions + timing), or detailed (full session reconstruction). Set retention period.",
          icon: <Video className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 2,
          title: "Use Vault Normally",
          description: "Recording happens automatically in the background. No performance impact. All vault interactions captured: viewing, editing, sharing, generating, and rotating credentials.",
          icon: <Monitor className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 3,
          title: "Review Activity",
          description: "Access activity dashboard to see vault usage patterns. Review individual sessions with timeline view. Filter by action type, secret, or time period. Spot unusual patterns.",
          icon: <Eye className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 4,
          title: "Replay Sessions",
          description: "Replay any session to see exactly what happened. Step through events with timestamp precision. Useful for security investigations and compliance demonstrations.",
          icon: <Play className="w-6 h-6 text-indigo-400" />
        },
        {
          number: 5,
          title: "Export for Compliance",
          description: "Export session records in auditor-friendly formats. Include in compliance evidence packages. Tamper-proof export with cryptographic signatures. Share with auditors via secure links.",
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Recording Levels",
          items: [
            "Basic: Action type + secret name + timestamp",
            "Standard: Basic + duration + context + device info",
            "Detailed: Standard + full session reconstruction",
            "Custom: User-defined recording scope",
            "Per-item override: disable recording for specific secrets",
            "All levels encrypted with user's vault key"
          ]
        },
        {
          title: "Activity Tracking",
          items: [
            "Secret viewed (with duration)",
            "Secret copied to clipboard",
            "Secret edited (fields changed)",
            "Secret shared (recipient, permissions)",
            "Secret generated (type, strength)",
            "Secret rotated (old → new)"
          ]
        },
        {
          title: "Storage & Retention",
          items: [
            "Encrypted session storage with user's vault key",
            "Configurable retention: 30/90/180/365 days",
            "Efficient compression for minimal storage impact",
            "Automatic cleanup after retention period",
            "Export before deletion for long-term archival",
            "Self-service deletion for privacy control"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Enterprise - Compliance Evidence",
          scenario: "SOC 2 audit required evidence of credential management practices. Session recordings showed proper credential handling, rotation, and access patterns for all team members.",
          impact: "Complete SOC 2 evidence, zero manual documentation, auditor satisfaction with tamper-proof records"
        },
        {
          industry: "Security - Incident Investigation",
          scenario: "Security incident required investigation of which credentials were accessed in past 48 hours. Session recordings showed exact access timeline, enabling rapid scope assessment.",
          impact: "Incident scope determined in minutes, precise credential access timeline, no credentials overlooked"
        },
        {
          industry: "Developer - Usage Analytics",
          scenario: "Developer wanted to optimize vault organization. Activity analytics showed most-used secrets, rarely accessed items, and access patterns. Reorganized vault for efficiency.",
          impact: "Vault reorganized by usage patterns, 30% faster credential access, unused secrets identified for cleanup"
        },
        {
          industry: "Team Lead - Team Activity Monitoring",
          scenario: "Team lead needed visibility into team vault usage for governance. Activity dashboard showed sharing patterns, rotation compliance, and access trends across the team.",
          impact: "Complete team activity visibility, sharing governance, rotation compliance tracking"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Action coverage",
          color: "text-indigo-400"
        },
        {
          value: "Zero",
          label: "Performance impact",
          color: "text-indigo-400"
        },
        {
          value: "365 days",
          label: "Maximum retention",
          color: "text-indigo-400"
        },
        {
          value: "Encrypted",
          label: "Session storage",
          color: "text-indigo-400"
        }
      ]}
      
      integrations={[
        { name: "SOC 2" },
        { name: "ISO 27001" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Jira" },
        { name: "ServiceNow" },
        { name: "Webhooks" },
        { name: "REST API" },
        { name: "CSV Export" }
      ]}
      
      securityFeatures={[
        "All session data encrypted with user's vault key",
        "Privacy controls: disable recording per item",
        "Self-service deletion for privacy rights",
        "Tamper-proof records with cryptographic integrity",
        "Role-based access: only you see your recordings",
        "Configurable retention with automatic cleanup",
        "Encrypted export with time-limited access",
        "No server-side access to session contents"
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

export default PVSessionRecordingPage
