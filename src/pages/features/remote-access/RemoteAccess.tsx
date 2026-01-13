import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Monitor, Shield, Lock, Wifi, Video, Globe,
  CheckCircle, AlertTriangle, Fingerprint, Clock
} from 'lucide-react'

const RemoteAccessPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Monitor className="w-32 h-32 text-white" />}
      heroTitle="Remote Secure Access"
      heroSubtitle="Zero-Trust Remote Connections with Complete Session Control"
      heroGradient="from-green-900 via-gray-900 to-gray-900"
      heroImage="/RemoteAccess.jpeg"
      
      overview="Enable secure remote access to servers, databases, and applications without VPN complexity. Zero-trust architecture with MFA, session recording, real-time monitoring, and automatic session termination on risk detection. Support for SSH, RDP, HTTP/S protocols with clientless browser-based access."
      
      problem="Traditional VPNs provide network-level access (too broad), are complex to manage, and lack visibility into user activities. Remote workers need secure access without exposing entire networks. IT teams spend hours troubleshooting VPN issues and managing client installations."
      
      benefit="Provide just-in-time remote access with zero VPN overhead. Users connect via browser with MFA, all sessions are recorded and monitored, and access automatically expires. 99.9% uptime with sub-100ms latency worldwide."
      
      keyFeatures={[
        {
          icon: <Globe className="w-10 h-10 text-green-400" />,
          title: "Clientless Browser Access",
          description: "No VPN client installation required. Users access servers, databases, and applications directly through browser with WebRTC-based connections. Works on any device (Windows, Mac, Linux, iOS, Android)."
        },
        {
          icon: <Fingerprint className="w-10 h-10 text-green-400" />,
          title: "Multi-Factor Authentication",
          description: "Enforce MFA for all remote access with TOTP authenticators, SMS/Email codes, hardware tokens (YubiKey), biometric authentication, and adaptive MFA based on user risk score and access context."
        },
        {
          icon: <Video className="w-10 h-10 text-green-400" />,
          title: "Session Recording & Playback",
          description: "Record all remote sessions (video + keystrokes) with searchable playback, redaction controls for sensitive data, and automatic session archival. Export sessions for forensic analysis and compliance audits."
        },
        {
          icon: <Shield className="w-10 h-10 text-green-400" />,
          title: "Zero-Trust Architecture",
          description: "Verify every access request with identity, device, location, and risk-based policies. Never trust, always verify with continuous authentication throughout session. Automatic session termination on policy violation."
        },
        {
          icon: <Clock className="w-10 h-10 text-green-400" />,
          title: "Just-In-Time Access",
          description: "Grant temporary remote access that auto-expires after configured time (minutes to hours). Self-service access requests with approval workflows. Break-glass emergency access with complete audit trails."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Real-Time Monitoring & Alerts",
          description: "Monitor all active remote sessions in real-time with AI-powered anomaly detection. Automatic alerts for suspicious activities (bulk downloads, privilege escalation, off-hours access from new locations)."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Access Policies",
          description: "Define who can access which resources, from where, and when. Set MFA requirements, session duration limits, and allowed protocols (SSH, RDP, HTTP/S). Configure approval workflows for sensitive systems.",
          icon: <Shield className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Request Access",
          description: "Users request remote access through self-service portal. System evaluates risk score, checks policies, and triggers approval workflow if required. MFA challenge presented based on risk context.",
          icon: <CheckCircle className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "Authenticate & Connect",
          description: "User completes MFA authentication. System creates time-bound connection token and establishes encrypted WebRTC tunnel. No VPN client needed - access directly via browser.",
          icon: <Fingerprint className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Session Monitoring",
          description: "All activities recorded and monitored in real-time. AI analyzes behavior for anomalies. Security team can view live sessions and terminate if suspicious activity detected.",
          icon: <Video className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Automatic Expiration",
          description: "Session automatically terminates when time limit expires or risk threshold exceeded. All activities logged for audit and compliance. Session recording archived with metadata for forensic analysis.",
          icon: <Clock className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported Protocols",
          items: [
            "SSH (Secure Shell) for Linux/Unix servers",
            "RDP (Remote Desktop Protocol) for Windows servers",
            "HTTP/S for web applications and admin panels",
            "Database protocols (MySQL, PostgreSQL, Oracle, MongoDB)",
            "Kubernetes API access",
            "Custom protocols via proxy configuration"
          ]
        },
        {
          title: "Authentication Methods",
          items: [
            "TOTP authenticator apps (Google Authenticator, Authy)",
            "SMS and Email verification codes",
            "Hardware tokens (YubiKey, FIDO2)",
            "Biometric authentication (fingerprint, face ID)",
            "Adaptive MFA based on risk score",
            "Integration with Okta, Azure AD, Auth0"
          ]
        },
        {
          title: "Network & Performance",
          items: [
            "WebRTC-based P2P connections for low latency",
            "Global edge network with 99.9% uptime SLA",
            "Sub-100ms latency worldwide",
            "Automatic failover and redundancy",
            "End-to-end encryption (TLS 1.3)",
            "Session compression for bandwidth optimization",
            "IPv4 and IPv6 support"
          ]
        },
        {
          title: "Recording & Audit",
          items: [
            "Full session recording (video + keystrokes + metadata)",
            "Configurable retention (30 days to 7 years)",
            "Searchable playback with timestamp navigation",
            "Export to MP4, JSON logs, PDF reports",
            "Redaction controls for PII and sensitive data",
            "Immutable audit logs with tamper detection",
            "Integration with SIEM tools (Splunk, Datadog)"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Healthcare - HIPAA Remote Access",
          scenario: "Doctors and IT staff need secure remote access to EHR systems and patient databases from home. VPN too complex and broad access violates HIPAA. Implemented clientless access with MFA and session recording.",
          impact: "100% HIPAA compliance, zero VPN support tickets, complete audit trails for all PHI access, 99% user satisfaction"
        },
        {
          industry: "Financial Services - PCI-DSS Compliance",
          scenario: "Third-party contractors need temporary access to payment systems for maintenance. Traditional VPN provides too much access. Deployed JITA remote access with 4-hour expiration and full recording.",
          impact: "Passed PCI-DSS audit with zero findings, 95% reduction in contractor access risks, automatic access cleanup"
        },
        {
          industry: "SaaS Company - Global Remote Workforce",
          scenario: "200+ remote employees accessing production infrastructure from 30 countries. VPN performance issues and security concerns. Migrated to browser-based zero-trust access with MFA.",
          impact: "85% reduction in VPN support tickets, sub-100ms global latency, 99.9% uptime, detected 2 compromised accounts"
        },
        {
          industry: "Government - Classified Systems Access",
          scenario: "Federal employees need secure remote access to classified systems with NIST 800-53 compliance. Clientless access with hardware token MFA, session recording, and geographic restrictions implemented.",
          impact: "Full NIST 800-53 compliance, zero security incidents, complete audit trails, geographic access enforcement"
        }
      ]}
      
      metrics={[
        {
          value: "99.9%",
          label: "Uptime SLA",
          color: "text-green-400"
        },
        {
          value: "< 100ms",
          label: "Global latency",
          color: "text-green-400"
        },
        {
          value: "Zero",
          label: "VPN client installations",
          color: "text-green-400"
        },
        {
          value: "100%",
          label: "Session recording coverage",
          color: "text-green-400"
        },
        {
          value: "85%",
          label: "Reduction in support tickets",
          color: "text-green-400"
        },
        {
          value: "99%",
          label: "User satisfaction score",
          color: "text-green-400"
        },
        {
          value: "TLS 1.3",
          label: "End-to-end encryption",
          color: "text-green-400"
        },
        {
          value: "24/7",
          label: "Real-time monitoring",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "AWS" },
        { name: "Azure" },
        { name: "Google Cloud" },
        { name: "Kubernetes" },
        { name: "Active Directory" },
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "Auth0" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "PagerDuty" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Zero-trust architecture - never trust, always verify",
        "End-to-end TLS 1.3 encryption for all connections",
        "Multi-factor authentication with adaptive risk-based policies",
        "Session recording with tamper-proof audit logs",
        "Real-time anomaly detection and automatic session termination",
        "Geographic access restrictions and device fingerprinting",
        "IP whitelisting and network segmentation support",
        "SOC 2 Type II certified infrastructure"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "HIPAA",
        "PCI-DSS",
        "NIST 800-53",
        "FedRAMP"
      ]}
    />
  )
}

export default RemoteAccessPage

