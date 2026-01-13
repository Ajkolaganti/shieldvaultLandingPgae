import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Video, Clock, FileText,
  Activity, Shield, AlertCircle, Download
} from 'lucide-react'

const SessionsPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Video className="w-32 h-32 text-white" />}
      heroTitle="Session Recording & Monitoring"
      heroSubtitle="Record, monitor, and analyze every privileged session in real-time with AI-powered threat detection"
      heroGradient="from-gray-900 via-gray-800 to-gray-900"
      heroImage="/PAM.jpeg"
      
      overview="Capture complete video recordings of all privileged sessions with keystroke logging, clipboard monitoring, and file transfer tracking. Our AI analyzes session behavior in real-time to detect anomalies and potential security threats before they escalate."
      
      problem="Without session recording, organizations have no visibility into what privileged users do during their sessions, making it impossible to detect insider threats or investigate security incidents."
      
      benefit="Achieve complete session visibility with HD video recordings, searchable transcripts, and AI-powered anomaly detection that identifies suspicious behavior with 96% accuracy."
      
      keyFeatures={[
        {
          icon: <Video className="w-10 h-10 text-gray-400" />,
          title: "HD Video Recording",
          description: "Capture every session in crystal-clear quality with adjustable frame rates, automatic compression, and long-term archival storage."
        },
        {
          icon: <Activity className="w-10 h-10 text-gray-400" />,
          title: "Real-Time Monitoring",
          description: "Watch active sessions live with the ability to terminate suspicious sessions instantly and send warnings to users."
        },
        {
          icon: <FileText className="w-10 h-10 text-gray-400" />,
          title: "Searchable Transcripts",
          description: "Automatically generated text transcripts of all keystrokes and commands with full-text search and regex support."
        },
        {
          icon: <AlertCircle className="w-10 h-10 text-red-400" />,
          title: "Anomaly Detection",
          description: "AI-powered behavioral analysis detects unusual patterns, risky commands, and policy violations in real-time."
        },
        {
          icon: <Download className="w-10 h-10 text-gray-400" />,
          title: "File Transfer Tracking",
          description: "Monitor and log all file uploads/downloads during sessions with automatic malware scanning and DLP integration."
        },
        {
          icon: <Clock className="w-10 h-10 text-gray-400" />,
          title: "Session Analytics",
          description: "Detailed metrics on session duration, commands executed, resources accessed, and user productivity patterns."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Session Initiation",
          description: "User requests privileged access through the portal. System authenticates, checks policies, and routes through approval workflow if required.",
          icon: <Shield className="w-6 h-6 text-gray-400" />
        },
        {
          number: 2,
          title: "Recording Begins",
          description: "As soon as session starts, video recording, keystroke logging, and command tracking activate automatically with no user intervention.",
          icon: <Video className="w-6 h-6 text-gray-400" />
        },
        {
          number: 3,
          title: "Real-Time Analysis",
          description: "AI continuously analyzes session behavior, comparing against baselines and detecting anomalies, risky commands, or policy violations.",
          icon: <Activity className="w-6 h-6 text-gray-400" />
        },
        {
          number: 4,
          title: "Alert & Response",
          description: "Suspicious activity triggers instant alerts to security team with options to send warnings, pause session, or terminate immediately.",
          icon: <AlertCircle className="w-6 h-6 text-red-400" />
        },
        {
          number: 5,
          title: "Archive & Audit",
          description: "Complete session recordings are encrypted and archived with immutable metadata for compliance audits and forensic investigations.",
          icon: <FileText className="w-6 h-6 text-gray-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Recording Capabilities",
          items: [
            "HD video recording (up to 1080p resolution)",
            "Adjustable frame rates: 1-30 FPS",
            "Automatic compression with H.264 codec",
            "Average 50MB per hour of recording",
            "Keystroke and command logging",
            "Clipboard monitoring and tracking",
            "File transfer detection and logging"
          ]
        },
        {
          title: "Storage & Retention",
          items: [
            "Configurable retention policies (30-365+ days)",
            "Automatic archival to cold storage",
            "Encrypted storage with AES-256",
            "Deduplication to save space",
            "Compliance-friendly immutable backups"
          ]
        },
        {
          title: "Playback & Search",
          items: [
            "Fast-forward/rewind with thumbnail preview",
            "Jump to specific timestamp or command",
            "Search by username, hostname, command, or text",
            "Export to MP4 for offline viewing",
            "Redaction tools for sensitive data"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services",
          scenario: "Record all database administrator sessions with instant playback for compliance audits and investigation of suspicious transactions or data exfiltration attempts.",
          impact: "Zero data breaches, 100% audit compliance, 2-hour investigation time vs 2 days"
        },
        {
          industry: "Healthcare",
          scenario: "Monitor access to patient health records (PHI) with complete audit trails, detecting unauthorized access attempts and ensuring HIPAA compliance.",
          impact: "Full HIPAA compliance, 98% reduction in unauthorized access incidents"
        },
        {
          industry: "Technology",
          scenario: "Track production server access by DevOps teams, detecting risky commands, unauthorized changes, and potential insider threats in real-time.",
          impact: "85% faster incident response, 92% reduction in configuration errors"
        },
        {
          industry: "Retail",
          scenario: "Monitor PCI-DSS scope systems with complete session recordings, ensuring no cardholder data is mishandled or exfiltrated.",
          impact: "PCI-DSS compliance achieved, zero payment card breaches"
        }
      ]}
      
      metrics={[
        {
          value: "96%",
          label: "Anomaly detection accuracy",
          color: "text-gray-400"
        },
        {
          value: "100%",
          label: "Session capture rate",
          color: "text-gray-400"
        },
        {
          value: "< 5s",
          label: "Real-time alert latency",
          color: "text-gray-400"
        },
        {
          value: "50MB/hr",
          label: "Average storage per session",
          color: "text-gray-400"
        }
      ]}
      
      integrations={[
        { name: "Splunk" },
        { name: "Elasticsearch" },
        { name: "Datadog" },
        { name: "AWS CloudWatch" },
        { name: "Azure Monitor" },
        { name: "PagerDuty" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Sumo Logic" },
        { name: "LogRhythm" }
      ]}
      
      securityFeatures={[
        "End-to-end encryption for all recordings",
        "Tamper-proof audit logs with blockchain verification",
        "Role-based access to playback sessions",
        "Automatic PII and credentials redaction",
        "Multi-factor authentication for playback access",
        "Watermarking to prevent unauthorized sharing",
        "Secure deletion with DOD 5220.22-M compliance",
        "Regular security audits and pen testing"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "HIPAA",
        "PCI-DSS",
        "GDPR",
        "NIST 800-53"
      ]}
    />
  )
}

export default SessionsPage

