import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import {
  Shield, Lock, Clock, Brain, Fingerprint, Workflow, 
  Target, FileCheck, Search, Video, CheckCircle
} from 'lucide-react'

const PAMPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Shield className="w-32 h-32 text-blue-600" />}
      heroTitle="Privileged Access Management (PAM)"
      heroSubtitle="Zero-Trust Privileged Access with AI-Powered Security"
      heroGradient="from-blue-50 via-white to-blue-50"
      
      overview="Control, monitor, and secure privileged access to critical systems with real-time threat detection and automated policy enforcement. Reduce privileged access risks by 95% while cutting manual security tasks by 87%."
      
      problem="80% of security breaches involve compromised privileged credentials. IT teams spend 4-6 hours daily managing access requests manually. Lack of visibility into who has access to what. Compliance audits are time-consuming and error-prone. Excessive privileges lead to insider threats. No way to detect anomalous privileged behavior in real-time. Average cost of privileged account breach: $4.45M."
      
      benefit="Implement zero-trust privileged access with Just-In-Time Access (JITA), session recording, AI-powered threat analytics, and automated approval workflows. Achieve 98.5% auto-revocation success rate, 96% AI threat detection confidence, and reduce access provisioning from 2-3 days to 30 seconds."
      
      keyFeatures={[
        {
          icon: <Lock className="w-10 h-10 text-blue-400" />,
          title: "Access Control & Policies",
          description: "Granular RBAC, ABAC, Just-In-Time Access (JITA), and zero standing privileges. Policy-based automation reduces standing privileges by 90% and automates 80% of access requests with complete audit trails."
        },
        {
          icon: <Video className="w-10 h-10 text-blue-400" />,
          title: "Session Management & Recording",
          description: "Monitor, record, and analyze all privileged sessions with keystroke logging, screen recording, and searchable playback. 100% visibility, forensic evidence for incidents, and auto-termination on risk detection. SOC 2, PCI-DSS compliant."
        },
        {
          icon: <Clock className="w-10 h-10 text-blue-400" />,
          title: "Just-In-Time Access (JITA)",
          description: "Eliminate standing privileges with temporary, on-demand access that auto-expires. Self-service requests, multi-level approval workflows, time-bound access. Zero standing privileges, 90% reduced attack surface, 30-second average approval time."
        },
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "AI-Powered Threat Analytics",
          description: "ML algorithms detect anomalous behavior, credential abuse, and insider threats in real-time. 95%+ anomaly accuracy, 0-100 risk scoring, predictive threat modeling. Detect threats 10x faster, 96% confidence, 70% fewer false positives."
        },
        {
          icon: <Fingerprint className="w-10 h-10 text-blue-400" />,
          title: "Multi-Factor Authentication",
          description: "Enforce strong authentication for all privileged access: TOTP, SMS/Email, hardware tokens (YubiKey), biometrics. Adaptive MFA based on risk. Block 99.9% of automated credential attacks with flexible, seamless UX."
        },
        {
          icon: <Workflow className="w-10 h-10 text-blue-400" />,
          title: "Approval Workflows",
          description: "Configurable multi-stage approval workflows with automatic escalation. Role-based approvers, Slack/Teams integration. Average approval time: 30 seconds. 96.8% escalation success rate with complete audit trail."
        },
        {
          icon: <Target className="w-10 h-10 text-blue-400" />,
          title: "Risk-Based Access",
          description: "Dynamically adjust access based on user risk score, context (location, time, device), and behavior. Real-time risk calculation, automatic MFA triggers, continuous authentication. Adaptive security balancing UX and risk."
        },
        {
          icon: <FileCheck className="w-10 h-10 text-blue-400" />,
          title: "Compliance Reporting",
          description: "Automated reports for SOC 2, HIPAA, PCI-DSS, ISO 27001, GDPR, NIST 800-53, FedRAMP. Pre-built templates, automated evidence collection, one-click export to PDF/Excel. Reduce audit prep from weeks to hours."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "User Requests Access",
          description: "User requests privileged access through self-service portal. System evaluates risk score and policy requirements before proceeding.",
          icon: <Search className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Policy Evaluation",
          description: "System evaluates user risk score, context (location, device, time), and applicable policies. Determines if approval workflow is required.",
          icon: <Target className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Approval Workflow",
          description: "If required, multi-level approval workflow is triggered. Approvers notified via Slack, Teams, or email. Average approval time: 30 seconds.",
          icon: <Workflow className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Time-Bound Access Granted",
          description: "Access granted with configurable session duration (minutes to hours). Just-In-Time Access eliminates standing privileges. Automatic expiry built-in.",
          icon: <Clock className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Real-Time Session Monitoring",
          description: "All privileged activities recorded and monitored. AI analyzes behavior for anomalies. Session recording provides forensic evidence.",
          icon: <Video className="w-6 h-6 text-blue-400" />
        },
        {
          number: 6,
          title: "AI Threat Detection",
          description: "Machine learning detects suspicious patterns: off-hours access, new locations, bulk server access. 96% confidence with automated response actions.",
          icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
          number: 7,
          title: "Auto-Termination & Audit",
          description: "Session auto-terminates on expiry or risk detection. All activities logged for compliance. Immutable audit trail for SOC 2, HIPAA, PCI-DSS.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Policy Engine",
          items: [
            "Rule-based policy evaluation engine",
            "Integration with AD, Azure AD, Okta, LDAP",
            "API-first architecture for automation",
            "Webhook support for external workflows",
            "RBAC and ABAC support",
            "Just-In-Time Access (JITA) engine"
          ]
        },
        {
          title: "Session Recording",
          items: [
            "Full session recording (video + keystrokes)",
            "Searchable playback with timestamp navigation",
            "Redaction controls for sensitive data",
            "Configurable retention (30 days to 7 years)",
            "Server-side recording with <1% CPU overhead",
            "Export to MP4, JSON for forensics"
          ]
        },
        {
          title: "Security Features",
          items: [
            "End-to-end encryption (AES-256)",
            "Zero-knowledge architecture option",
            "Immutable audit logs with tamper detection",
            "Row-level security (RLS) for multi-tenant",
            "API key management and rotation",
            "99.99% uptime SLA (Enterprise)"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - PCI-DSS Compliance",
          scenario: "Bank needed to demonstrate privileged access controls for PCI-DSS audit. Implemented JITA for all production database access, recorded all sessions, generated automated compliance reports.",
          impact: "Passed PCI-DSS audit with zero findings, 95% reduction in privileged access incidents, audit prep reduced from 4 weeks to 2 days"
        },
        {
          industry: "SaaS Company - Insider Threat Prevention",
          scenario: "Developer had excessive privileges and could access customer data. Implemented RBAC with least privilege, session recording, and AI threat analytics.",
          impact: "Detected and prevented insider threat attempt, 90% reduction in standing privileges, real-time anomaly detection in 12 seconds"
        },
        {
          industry: "Healthcare - HIPAA Compliance",
          scenario: "Hospital needed to secure EHR system access and maintain HIPAA compliance. Implemented JITA for all EHR systems with MFA enforcement and complete session audit trails.",
          impact: "100% HIPAA compliance, zero patient data breaches, 85% reduction in access provisioning time"
        },
        {
          industry: "FinTech - Zero Standing Privileges",
          scenario: "Financial services company reduced privileged account abuse by implementing JITA. Developers request temporary admin access that auto-expires after 4 hours.",
          impact: "95% reduction in privileged account abuse, eliminated standing privileges while maintaining productivity"
        }
      ]}
      
      metrics={[
        {
          value: "95%",
          label: "Reduction in PAM risks",
          color: "text-blue-400"
        },
        {
          value: "87%",
          label: "Reduction in manual tasks",
          color: "text-blue-400"
        },
        {
          value: "98.5%",
          label: "Auto-revocation success",
          color: "text-blue-400"
        },
        {
          value: "96%",
          label: "AI threat detection confidence",
          color: "text-blue-400"
        },
        {
          value: "30 sec",
          label: "Average approval time",
          color: "text-blue-400"
        },
        {
          value: "99.9%",
          label: "MFA blocks credential attacks",
          color: "text-blue-400"
        },
        {
          value: "$4.45M",
          label: "Breach cost avoided",
          color: "text-blue-400"
        },
        {
          value: "90%",
          label: "Standing privilege reduction",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "Okta" },
        { name: "Auth0" },
        { name: "LDAP" },
        { name: "Google Workspace" },
        { name: "AWS IAM" },
        { name: "Azure RBAC" },
        { name: "GCP IAM" },
        { name: "Jira" },
        { name: "ServiceNow" },
        { name: "Zendesk" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Sumo Logic" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "End-to-end encryption (AES-256) for credentials and sessions",
        "Zero-knowledge architecture for maximum privacy",
        "Immutable audit logs with tamper detection",
        "Row-level security (RLS) for multi-tenant isolation",
        "API key management with rotation",
        "Multi-factor authentication (TOTP, hardware tokens, biometrics)",
        "Automatic session termination on risk detection",
        "Break-glass emergency access with full audit trails"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "GDPR",
        "NIST 800-53",
        "FedRAMP"
      ]}
    />
  )
}

export default PAMPage
