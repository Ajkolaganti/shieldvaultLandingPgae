import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Laptop, Shield, CheckCircle, AlertTriangle, Settings,
  Smartphone, Monitor
} from 'lucide-react'

const DeviceCompliancePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Laptop className="w-32 h-32 text-green-600" />}
      heroTitle="Device Compliance"
      heroSubtitle="Enforce Device Security Posture Before and During Remote Access Sessions"
      heroGradient="from-green-50 via-white to-green-50"
      heroImage="/RemoteAccess.jpeg"
      
      overview="Verify device security posture before granting remote access and continuously during sessions. Check OS version, patch level, encryption status, antivirus, firewall, and custom compliance rules. Non-compliant devices blocked or given limited access with remediation guidance."
      
      problem="Users connect from unpatched, unencrypted, and unprotected devices. BYOD policies create inconsistent security postures. One compromised device provides attackers a foothold into the corporate network. No way to verify device health before or during remote access."
      
      benefit="Every connecting device verified for security compliance. Non-compliant devices blocked or limited automatically. Continuous device health monitoring during sessions. 100% visibility into remote device security posture."
      
      keyFeatures={[
        {
          icon: <Laptop className="w-10 h-10 text-green-400" />,
          title: "Pre-Access Device Check",
          description: "Before any remote access granted, device evaluated: OS version, patch level, disk encryption, antivirus status, firewall enabled, screen lock configured. Non-compliant devices blocked with specific remediation steps."
        },
        {
          icon: <Shield className="w-10 h-10 text-green-400" />,
          title: "Continuous Compliance",
          description: "Device compliance monitored throughout the session. If device becomes non-compliant (antivirus disabled, etc.), access restricted or terminated. Real-time compliance score updates."
        },
        {
          icon: <Settings className="w-10 h-10 text-green-400" />,
          title: "Custom Compliance Rules",
          description: "Define custom compliance rules beyond standard checks: required software installed, prohibited applications blocked, registry settings verified, and certificate validity confirmed."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Risk-Based Access",
          description: "Device compliance score affects access level. Fully compliant devices get full access. Partially compliant devices get limited access. Non-compliant devices blocked with remediation guidance."
        },
        {
          icon: <Smartphone className="w-10 h-10 text-green-400" />,
          title: "BYOD Support",
          description: "Manage compliance for company-owned and personal devices. Different policies for BYOD: more restrictive compliance requirements with privacy-preserving checks (no personal data access)."
        },
        {
          icon: <Monitor className="w-10 h-10 text-green-400" />,
          title: "Compliance Dashboard",
          description: "Real-time dashboard showing device compliance across the organization. Compliance trends, most common failures, and remediation effectiveness. Drill-down to individual device details."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Define Policies",
          description: "Create device compliance policies: OS requirements, patch levels, encryption, antivirus, and custom checks. Different policies for different resource sensitivity levels and device ownership.",
          icon: <Settings className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Deploy Agent",
          description: "Deploy lightweight compliance agent on endpoints. Agent collects device posture without accessing personal data. Agentless option for basic checks via browser. MDM integration for managed devices.",
          icon: <Laptop className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "Pre-Access Verification",
          description: "When user requests access, device automatically evaluated against applicable policy. Compliant devices proceed. Non-compliant devices receive specific remediation steps. Partial access for borderline cases.",
          icon: <CheckCircle className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Continuous Monitoring",
          description: "During active sessions, compliance continuously monitored. Status changes trigger immediate policy re-evaluation. Users notified of compliance drift with remediation guidance.",
          icon: <Shield className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Report & Improve",
          description: "Compliance dashboard shows organization-wide device health. Identify common compliance failures. Track remediation effectiveness. Generate compliance reports for auditors.",
          icon: <Monitor className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Standard Compliance Checks",
          items: [
            "Operating system version and build number",
            "Security patch level (within N days of latest)",
            "Disk encryption enabled (BitLocker, FileVault, LUKS)",
            "Antivirus installed and definitions current",
            "Firewall enabled and properly configured",
            "Screen lock enabled with timeout ≤ 5 minutes"
          ]
        },
        {
          title: "Advanced Checks",
          items: [
            "Required software installed (VPN client, EDR agent)",
            "Prohibited applications not present",
            "Certificate validity for device identity",
            "Secure boot enabled (UEFI)",
            "TPM chip present and active",
            "Jailbreak/root detection for mobile devices"
          ]
        },
        {
          title: "Integration Options",
          items: [
            "Microsoft Intune for Windows/macOS management",
            "Jamf for Apple device management",
            "CrowdStrike for endpoint detection and response",
            "VMware Workspace ONE for unified endpoint management",
            "Custom agent for Linux endpoints",
            "Agentless browser-based basic checks"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Trading Floor Security",
          scenario: "Traders connecting from home during COVID needed same security posture as office. Device compliance ensured encrypted disks, current patches, and EDR agents before granting trading system access.",
          impact: "100% device compliance for remote traders, zero security incidents, parity with office security"
        },
        {
          industry: "Healthcare - BYOD PHI Access",
          scenario: "Clinicians using personal devices to access EHR. BYOD policy required encryption, updated OS, and antivirus before PHI access. Privacy-preserving checks didn't access personal data.",
          impact: "HIPAA-compliant BYOD access, privacy preserved, 100% device encryption for PHI access"
        },
        {
          industry: "Government - Security Clearance Access",
          scenario: "Government employees accessing classified systems from approved devices only. Device compliance verified hardware integrity, secure boot, and current security patches.",
          impact: "Only approved devices access classified systems, continuous compliance monitoring, FedRAMP evidence"
        },
        {
          industry: "Technology - Contractor Device Management",
          scenario: "Contractors using their own devices. Compliance policy required minimum OS version, disk encryption, and EDR agent. Non-compliant devices given limited sandbox access only.",
          impact: "Contractor devices verified before access, non-compliant devices limited to sandbox, zero trust enforced"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Device verification coverage",
          color: "text-green-400"
        },
        {
          value: "< 5 sec",
          label: "Compliance check time",
          color: "text-green-400"
        },
        {
          value: "Real-time",
          label: "Continuous monitoring",
          color: "text-green-400"
        },
        {
          value: "Zero",
          label: "Non-compliant access",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "Microsoft Intune" },
        { name: "Jamf" },
        { name: "CrowdStrike" },
        { name: "SentinelOne" },
        { name: "VMware Workspace ONE" },
        { name: "Carbon Black" },
        { name: "Tanium" },
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "Splunk" },
        { name: "ServiceNow" },
        { name: "Slack" }
      ]}
      
      securityFeatures={[
        "Pre-access device compliance verification",
        "Continuous compliance monitoring during sessions",
        "Risk-based access levels per compliance score",
        "Privacy-preserving BYOD checks",
        "Jailbreak and root detection for mobile devices",
        "Hardware integrity verification (TPM, Secure Boot)",
        "Automatic access restriction on compliance drift",
        "Complete compliance audit trail"
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

export default DeviceCompliancePage
