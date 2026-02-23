import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  ShieldCheck, Lock, Globe, Users, CheckCircle,
  Fingerprint, Network, Target
} from 'lucide-react'

const ZeroTrustAccessPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<ShieldCheck className="w-32 h-32 text-green-600" />}
      heroTitle="Zero-Trust Access"
      heroSubtitle="Never Trust, Always Verify—Continuous Authentication and Authorization for Every Remote Session"
      heroGradient="from-green-50 via-white to-green-50"
      heroImage="/RemoteAccess.jpeg"
      
      overview="Implement true zero-trust architecture for all remote access. Every session continuously verified: user identity, device health, network context, and behavioral patterns. No implicit trust—even authenticated users re-verified throughout their session. Microsegmentation ensures access to only authorized resources."
      
      problem="Traditional VPNs grant broad network access once authenticated. One compromised credential = full network access. No continuous verification during sessions. Lateral movement after initial access is trivial. Perimeter-based security doesn't work for remote workforces."
      
      benefit="Zero implicit trust with continuous session verification. Microsegmented access to only authorized resources. 98% reduction in attack surface vs. traditional VPN. Real-time session risk scoring with automatic step-up authentication."
      
      keyFeatures={[
        {
          icon: <Fingerprint className="w-10 h-10 text-green-400" />,
          title: "Continuous Authentication",
          description: "User identity verified continuously throughout the session: behavioral biometrics, keystroke dynamics, and periodic re-authentication. Anomalous behavior triggers step-up authentication."
        },
        {
          icon: <Lock className="w-10 h-10 text-green-400" />,
          title: "Microsegmentation",
          description: "Users access only the specific resources they're authorized for—not entire networks. Per-application, per-server, and per-database access control. No lateral movement possible."
        },
        {
          icon: <Network className="w-10 h-10 text-green-400" />,
          title: "Context-Aware Access",
          description: "Access decisions based on full context: user identity, device health, location, time, network, and risk score. Same user may get different access levels based on context."
        },
        {
          icon: <Target className="w-10 h-10 text-green-400" />,
          title: "Dynamic Risk Scoring",
          description: "Real-time risk score calculated for every session: device compliance, user behavior, location, and threat intelligence. Score changes trigger access adjustments in real-time."
        },
        {
          icon: <Users className="w-10 h-10 text-green-400" />,
          title: "Identity-First Security",
          description: "Strong identity verification before any resource access: MFA, SSO, certificate-based authentication. Integration with all major identity providers. FIDO2/WebAuthn support."
        },
        {
          icon: <Globe className="w-10 h-10 text-green-400" />,
          title: "VPN-Less Access",
          description: "No VPN required. Users connect directly to authorized resources through encrypted tunnels. Faster than VPN with better security. Works from any network without client software."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Define Access Policies",
          description: "Define zero-trust access policies: who can access what resources, under what conditions. Per-application policies with context-based rules. Import from existing RBAC or create new.",
          icon: <Lock className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Register Resources",
          description: "Register protected resources: servers, databases, applications, and services. Define access requirements per resource: authentication level, device compliance, and network restrictions.",
          icon: <Network className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "User Authentication",
          description: "Users authenticate with MFA through their identity provider. Device health check validates compliance. Context assessment evaluates risk. Access granted based on policy evaluation.",
          icon: <Fingerprint className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Continuous Verification",
          description: "During session, user behavior continuously monitored. Risk score updated in real-time. Step-up authentication triggered for sensitive actions. Session terminated on policy violation.",
          icon: <ShieldCheck className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Monitor & Adapt",
          description: "Real-time dashboard shows active sessions, risk levels, and policy violations. AI recommends policy adjustments based on access patterns. Continuous improvement of zero-trust posture.",
          icon: <CheckCircle className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Authentication Methods",
          items: [
            "SAML/OIDC SSO with all major identity providers",
            "FIDO2/WebAuthn passwordless authentication",
            "Certificate-based mutual TLS authentication",
            "Behavioral biometrics for continuous verification",
            "Step-up MFA for sensitive resource access",
            "Emergency break-glass access with audit trail"
          ]
        },
        {
          title: "Policy Engine",
          items: [
            "ABAC (Attribute-Based Access Control) policies",
            "Context conditions: user, device, location, time, risk",
            "Dynamic policy evaluation on every request",
            "Policy versioning and change audit trail",
            "Test mode for policy validation before enforcement",
            "Policy templates for common zero-trust scenarios"
          ]
        },
        {
          title: "Network Architecture",
          items: [
            "Software-defined perimeter (SDP) architecture",
            "Encrypted micro-tunnels per session",
            "No network-level access—application-level only",
            "Global edge network for low-latency access",
            "Split tunneling for optimal performance",
            "IPv4 and IPv6 support"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Remote Trading Floor",
          scenario: "Traders accessing trading systems from home. Zero-trust ensures each trader accesses only their authorized instruments and markets. Continuous verification prevents session hijacking.",
          impact: "100% authorized access, zero unauthorized trading system access, continuous session verification"
        },
        {
          industry: "Healthcare - Remote PHI Access",
          scenario: "Clinicians accessing EHR systems remotely. Zero-trust verifies identity, device health, and location before granting PHI access. Step-up MFA for high-sensitivity records.",
          impact: "HIPAA-compliant remote access, microsegmented PHI access, continuous authentication"
        },
        {
          industry: "Technology - Contractor Access",
          scenario: "External contractors need access to specific development resources. Zero-trust provides microsegmented access to only contracted project resources with time-bound sessions.",
          impact: "Contractors limited to specific resources, time-bound access, zero lateral movement capability"
        },
        {
          industry: "Government - Classified Access",
          scenario: "Government employees accessing classified systems remotely. Zero-trust with CAC/PIV authentication, device compliance, and continuous monitoring. FedRAMP-compliant architecture.",
          impact: "FedRAMP-compliant remote access, CAC/PIV integration, continuous monitoring for classified systems"
        }
      ]}
      
      metrics={[
        {
          value: "98%",
          label: "Attack surface reduction",
          color: "text-green-400"
        },
        {
          value: "Zero",
          label: "Implicit trust",
          color: "text-green-400"
        },
        {
          value: "Real-time",
          label: "Continuous verification",
          color: "text-green-400"
        },
        {
          value: "< 50ms",
          label: "Policy evaluation time",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "Auth0" },
        { name: "Ping Identity" },
        { name: "CrowdStrike" },
        { name: "Microsoft Intune" },
        { name: "Jamf" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ServiceNow" },
        { name: "Slack" },
        { name: "PagerDuty" }
      ]}
      
      securityFeatures={[
        "Continuous authentication throughout every session",
        "Microsegmented access—no lateral movement",
        "Dynamic risk scoring with real-time access adjustments",
        "Device health verification before and during access",
        "Encrypted micro-tunnels for every connection",
        "No VPN—no broad network exposure",
        "FIDO2/WebAuthn passwordless authentication support",
        "Complete audit trail for all access decisions"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "FedRAMP",
        "NIST 800-207"
      ]}
    />
  )
}

export default ZeroTrustAccessPage
