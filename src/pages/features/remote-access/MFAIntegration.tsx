import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Fingerprint, Shield, Smartphone, Key, CheckCircle,
  Lock, Users, AlertTriangle
} from 'lucide-react'

const MFAIntegrationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Fingerprint className="w-32 h-32 text-green-600" />}
      heroTitle="MFA Integration"
      heroSubtitle="Adaptive Multi-Factor Authentication with Step-Up Verification for Sensitive Resources"
      heroGradient="from-green-50 via-white to-green-50"
      
      overview="Enforce multi-factor authentication for all remote access with adaptive policies. Support for TOTP, push notifications, FIDO2 hardware keys, biometrics, and SMS. Adaptive MFA adjusts requirements based on risk: low-risk access uses simple MFA, high-risk triggers additional factors."
      
      problem="Single-factor authentication is trivially bypassed. Static MFA creates friction for low-risk access and insufficient protection for high-risk access. Phishing attacks bypass traditional TOTP. No adaptive policies based on risk context."
      
      benefit="Phishing-resistant MFA with FIDO2/WebAuthn support. Adaptive policies reduce friction for low-risk while maximizing security for high-risk. 99.9% phishing resistance with hardware keys. Step-up authentication for sensitive actions."
      
      keyFeatures={[
        {
          icon: <Fingerprint className="w-10 h-10 text-green-400" />,
          title: "Adaptive MFA",
          description: "Risk-based MFA that adjusts requirements dynamically: trusted device from usual location = simple push, new device from new location = FIDO2 key + biometric. Reduce friction while maximizing security."
        },
        {
          icon: <Key className="w-10 h-10 text-green-400" />,
          title: "FIDO2/WebAuthn",
          description: "Phishing-resistant authentication with hardware security keys (YubiKey, Titan) and platform authenticators (Touch ID, Windows Hello). 99.9% phishing resistance. Passwordless capable."
        },
        {
          icon: <Smartphone className="w-10 h-10 text-green-400" />,
          title: "Push Notifications",
          description: "One-tap approval via mobile app. Number matching to prevent MFA fatigue attacks. Location and device info displayed for informed approval. Deny option with automatic security alert."
        },
        {
          icon: <Shield className="w-10 h-10 text-green-400" />,
          title: "Step-Up Authentication",
          description: "Additional verification for sensitive actions during an active session: accessing production, modifying security settings, or viewing highly sensitive data. Configurable per resource."
        },
        {
          icon: <Users className="w-10 h-10 text-green-400" />,
          title: "Multiple Factor Support",
          description: "Support all major MFA methods: TOTP (Google Authenticator, Authy), push notifications, FIDO2/WebAuthn, biometrics, SMS (as fallback), and email OTP. User choice within policy."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "MFA Fatigue Protection",
          description: "Protect against MFA fatigue attacks: number matching required for push, rate limiting on MFA prompts, automatic lockout after failed attempts, and anomaly detection for suspicious MFA patterns."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure MFA Policies",
          description: "Define MFA requirements per resource sensitivity: standard resources (push or TOTP), sensitive resources (FIDO2 required), and critical resources (FIDO2 + biometric). Configure adaptive thresholds.",
          icon: <Shield className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Register Factors",
          description: "Users register MFA factors: scan QR for TOTP, register hardware keys for FIDO2, enable biometrics, install push notification app. Minimum two factors required for recovery.",
          icon: <Fingerprint className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "Authenticate",
          description: "On access request, adaptive engine determines required MFA level. User completes authentication with appropriate factor. Step-up triggered for sensitive actions during session.",
          icon: <Lock className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Monitor & Adapt",
          description: "Real-time monitoring of MFA events: successes, failures, and anomalies. AI adjusts risk thresholds based on organization patterns. MFA fatigue detection for compromised accounts.",
          icon: <AlertTriangle className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Report",
          description: "MFA adoption and compliance dashboard. Success rates by factor type. Failed authentication analysis. Compliance reporting for MFA requirements across regulatory frameworks.",
          icon: <CheckCircle className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported MFA Methods",
          items: [
            "FIDO2/WebAuthn: YubiKey, Titan, Touch ID, Windows Hello",
            "TOTP: Google Authenticator, Authy, Microsoft Authenticator",
            "Push notifications: Shield Vault mobile app with number matching",
            "Biometrics: Face ID, Touch ID, fingerprint, Windows Hello",
            "SMS OTP: As backup/fallback only (not recommended as primary)",
            "Email OTP: As backup/fallback for account recovery"
          ]
        },
        {
          title: "Adaptive Policies",
          items: [
            "Risk scoring: device trust + location + time + behavior",
            "Low risk (trusted device, usual location): push notification",
            "Medium risk (new location or unusual time): TOTP + push",
            "High risk (new device + new location): FIDO2 required",
            "Critical access: FIDO2 + biometric (step-up)",
            "Custom risk rules per organizational requirements"
          ]
        },
        {
          title: "Security Features",
          items: [
            "Number matching for push (anti-fatigue)",
            "Rate limiting: max 3 MFA prompts per 5 minutes",
            "Automatic lockout after 5 failed MFA attempts",
            "Anomaly detection for MFA prompt flooding",
            "Backup codes stored encrypted with limited use",
            "Recovery workflow with identity verification"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Phishing-Resistant MFA",
          scenario: "Bank mandated phishing-resistant MFA for all privileged access after targeted phishing attack. FIDO2 hardware keys deployed to all admins. 99.9% phishing resistance achieved.",
          impact: "Zero phishing-based account compromise, FIDO2 for all admins, 99.9% phishing resistance"
        },
        {
          industry: "Healthcare - Adaptive PHI Access",
          scenario: "Clinicians need quick access to EHR from trusted devices but strong MFA for new devices. Adaptive MFA: push from hospital devices, FIDO2 from personal devices. Zero friction for routine access.",
          impact: "Clinician workflow preserved, strong MFA for untrusted devices, HIPAA MFA compliance"
        },
        {
          industry: "Technology - Developer Experience",
          scenario: "Developers frustrated with MFA prompts for low-risk development access. Adaptive MFA: remembered device for 24 hours on trusted network. Step-up for production access only.",
          impact: "80% fewer MFA prompts for routine development, full MFA for production, developer satisfaction improved"
        },
        {
          industry: "Government - CAC/PIV Integration",
          scenario: "Government agency required CAC/PIV card authentication for all access. MFA integrated with certificate-based authentication from smart cards. Biometric fallback for lost cards.",
          impact: "CAC/PIV compliance, biometric fallback, FedRAMP MFA requirements met"
        }
      ]}
      
      metrics={[
        {
          value: "99.9%",
          label: "Phishing resistance (FIDO2)",
          color: "text-green-400"
        },
        {
          value: "80%",
          label: "Fewer prompts with adaptive",
          color: "text-green-400"
        },
        {
          value: "< 3 sec",
          label: "Average MFA completion",
          color: "text-green-400"
        },
        {
          value: "Zero",
          label: "MFA fatigue compromises",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "YubiKey" },
        { name: "Google Titan" },
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "Duo Security" },
        { name: "Auth0" },
        { name: "Ping Identity" },
        { name: "RSA SecurID" },
        { name: "Google Authenticator" },
        { name: "Microsoft Authenticator" },
        { name: "Authy" },
        { name: "Active Directory" }
      ]}
      
      securityFeatures={[
        "FIDO2/WebAuthn phishing-resistant authentication",
        "Adaptive risk-based MFA with dynamic adjustment",
        "Number matching for push notification anti-fatigue",
        "Rate limiting and automatic lockout on failures",
        "Anomaly detection for MFA attack patterns",
        "Step-up authentication for sensitive actions",
        "Encrypted backup code storage",
        "Complete MFA event audit trail"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "FedRAMP",
        "NIST 800-63B"
      ]}
    />
  )
}

export default MFAIntegrationPage
