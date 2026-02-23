import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Monitor, Video, Shield, Clock, Users,
  Eye, Play, Search
} from 'lucide-react'

const RASessionManagementPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Monitor className="w-32 h-32 text-green-600" />}
      heroTitle="Session Management"
      heroSubtitle="Complete Session Lifecycle Control with Recording, Monitoring, and Real-Time Intervention"
      heroGradient="from-green-50 via-white to-green-50"
      
      overview="Manage every remote access session from start to finish. Real-time monitoring, full session recording, live intervention, and automated session controls. Track 2,847+ active sessions with AI-powered anomaly detection. Terminate suspicious sessions instantly."
      
      problem="No visibility into what happens during remote sessions. Users connect and disconnect with no accountability. Suspicious activity goes undetected. Sessions left idle create security risks. No evidence for compliance audits."
      
      benefit="Complete session visibility with real-time monitoring. Full recording for audit and compliance. Live intervention for suspicious activity. AI-powered anomaly detection. 2,847+ sessions monitored simultaneously."
      
      keyFeatures={[
        {
          icon: <Video className="w-10 h-10 text-green-400" />,
          title: "Session Recording",
          description: "Full session recording: RDP, SSH, web, and database sessions captured with video-quality replay. Keystroke logging for SSH sessions. Screen recording for GUI sessions. Searchable by content."
        },
        {
          icon: <Eye className="w-10 h-10 text-green-400" />,
          title: "Real-Time Monitoring",
          description: "Live view of all active sessions from admin dashboard. Shadow any session in real-time. Watch user activities as they happen. Multi-session monitoring for SOC teams."
        },
        {
          icon: <Shield className="w-10 h-10 text-green-400" />,
          title: "Live Intervention",
          description: "Terminate suspicious sessions immediately with one click. Send warnings to users. Take over sessions for guided remediation. Block specific commands or actions in real-time."
        },
        {
          icon: <Clock className="w-10 h-10 text-green-400" />,
          title: "Session Controls",
          description: "Automated session policies: maximum duration, idle timeout, time-of-day restrictions, and concurrent session limits. Force disconnect on policy violation."
        },
        {
          icon: <Search className="w-10 h-10 text-green-400" />,
          title: "Session Analytics",
          description: "Analytics dashboard showing session patterns: peak usage times, average duration, most accessed resources, and user activity trends. AI identifies unusual session characteristics."
        },
        {
          icon: <Users className="w-10 h-10 text-green-400" />,
          title: "Session Sharing",
          description: "Share sessions for collaboration or training. Multiple users can view the same session. Instructor mode for guided access. Recording shared sessions for future reference."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Policies",
          description: "Set session policies: maximum duration (default 8 hours), idle timeout (default 15 min), time-of-day restrictions, and concurrent session limits. Per-resource and per-user customization.",
          icon: <Clock className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Enable Recording",
          description: "Configure recording settings per session type: RDP (screen recording), SSH (keystroke + output), web (activity log), database (query log). Set retention periods per compliance requirements.",
          icon: <Video className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "Monitor Sessions",
          description: "Real-time dashboard shows all active sessions with status, duration, user, and resource. AI highlights suspicious sessions. One-click shadow mode for live viewing.",
          icon: <Eye className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Intervene When Needed",
          description: "Terminate suspicious sessions, send user warnings, or take over for guided remediation. Block dangerous commands in SSH. Command blacklists for automated blocking.",
          icon: <Shield className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Review & Audit",
          description: "Replay recorded sessions for audit and investigation. Search recordings by user, resource, date, or content. Export for compliance evidence. Analytics show session trends.",
          icon: <Play className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported Session Types",
          items: [
            "RDP: Full screen recording with audio",
            "SSH: Keystroke logging + terminal output capture",
            "VNC: Screen recording with input capture",
            "Web applications: Activity logging with screenshots",
            "Database: Query logging with result capture",
            "Custom protocols via SDK integration"
          ]
        },
        {
          title: "Session Controls",
          items: [
            "Maximum session duration: configurable per resource",
            "Idle timeout: 5-60 minutes configurable",
            "Time-of-day restrictions: business hours only option",
            "Concurrent session limits: per user and per resource",
            "Command blacklists for SSH sessions",
            "Clipboard restriction and file transfer controls"
          ]
        },
        {
          title: "Recording & Storage",
          items: [
            "H.264 video encoding for GUI sessions",
            "Text-based recording for SSH (searchable)",
            "Configurable retention: 30 days to 7 years",
            "Encrypted storage with per-recording keys",
            "Efficient compression: ~10MB per hour of SSH",
            "Fast search across all recordings"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Regulatory Compliance",
          scenario: "Regulators required proof of all privileged access to trading systems. Full session recording with retention for 7 years. Auditors can replay any session for investigation.",
          impact: "100% session recording compliance, 7-year evidence retention, auditor self-service replay access"
        },
        {
          industry: "Healthcare - PHI Access Monitoring",
          scenario: "All remote access to PHI systems monitored in real-time. Suspicious database queries flagged by AI. 3 unauthorized access attempts detected and terminated in first month.",
          impact: "100% PHI access monitoring, 3 unauthorized attempts stopped, HIPAA compliance maintained"
        },
        {
          industry: "Technology - Vendor Access Control",
          scenario: "Third-party vendors accessing production for maintenance. Sessions recorded and monitored. Commands restricted to approved operations. All activity audited.",
          impact: "Vendor sessions fully controlled, restricted to approved operations, complete audit trail"
        },
        {
          industry: "Government - Classified System Access",
          scenario: "Remote access to classified systems requires full session recording and real-time monitoring. Session management provides continuous oversight with immediate intervention capability.",
          impact: "FedRAMP-compliant session management, real-time monitoring, immediate intervention capability"
        }
      ]}
      
      metrics={[
        {
          value: "2,847+",
          label: "Concurrent sessions monitored",
          color: "text-green-400"
        },
        {
          value: "100%",
          label: "Session recording coverage",
          color: "text-green-400"
        },
        {
          value: "< 1 sec",
          label: "Session termination time",
          color: "text-green-400"
        },
        {
          value: "7 years",
          label: "Maximum recording retention",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "RDP" },
        { name: "SSH" },
        { name: "VNC" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "SIEM" }
      ]}
      
      securityFeatures={[
        "Full session recording for all access types",
        "Real-time monitoring with live intervention",
        "Command blacklists for SSH sessions",
        "Clipboard and file transfer restrictions",
        "AI-powered anomaly detection during sessions",
        "Encrypted recording storage with per-recording keys",
        "Tamper-proof audit trail for all session events",
        "Immediate session termination for security threats"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "FedRAMP",
        "NIST 800-53"
      ]}
    />
  )
}

export default RASessionManagementPage
