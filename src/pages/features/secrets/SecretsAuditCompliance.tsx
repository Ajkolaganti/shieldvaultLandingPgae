import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  FileCheck, Database, Download, TrendingUp, Shield,
  Clock, AlertTriangle, BarChart3
} from 'lucide-react'

const SecretsAuditCompliancePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<FileCheck className="w-32 h-32 text-purple-600" />}
      heroTitle="Secrets Audit & Compliance"
      heroSubtitle="Automated Secret Lifecycle Compliance Reporting for SOC 2, HIPAA, PCI-DSS, and More"
      heroGradient="from-purple-50 via-white to-purple-50"
      heroImage="/SecretManagement.jpeg"
      
      overview="Demonstrate secret lifecycle management compliance with automated evidence collection, continuous monitoring, and one-click report generation. Track secret creation, access, rotation, and retirement across all platforms with immutable audit trails that satisfy the most rigorous auditors."
      
      problem="Proving secrets management compliance is manual and painful. Evidence scattered across platforms. No centralized audit trail for secret lifecycle. Audit prep takes weeks. Gaps between audits create compliance blind spots."
      
      benefit="Continuous compliance monitoring with automated evidence collection. One-click audit reports for SOC 2, HIPAA, PCI-DSS. 365-day audit-ready state. Reduce audit prep from weeks to hours with 100% evidence completeness."
      
      keyFeatures={[
        {
          icon: <Database className="w-10 h-10 text-purple-400" />,
          title: "Immutable Audit Trails",
          description: "Every secret operation logged with tamper-proof records: creation, access, modification, rotation, sharing, and deletion. Millisecond timestamps, user attribution, and source IP tracking."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-purple-400" />,
          title: "Compliance Dashboard",
          description: "Real-time compliance score for secret management controls. Framework-specific views for SOC 2, HIPAA, PCI-DSS. Visual indicators for compliant, at-risk, and non-compliant controls."
        },
        {
          icon: <Download className="w-10 h-10 text-purple-400" />,
          title: "One-Click Reports",
          description: "Generate auditor-ready compliance reports in seconds. Pre-mapped to SOC 2, HIPAA, PCI-DSS, ISO 27001 controls. Export to PDF, Excel, JSON. Includes evidence links and gap analysis."
        },
        {
          icon: <Clock className="w-10 h-10 text-purple-400" />,
          title: "Rotation Compliance Tracking",
          description: "Track rotation adherence across all secrets. Identify secrets overdue for rotation. Compliance scoring for rotation policies. Automated alerts for upcoming rotation deadlines."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Policy Violation Alerts",
          description: "Real-time alerts for compliance violations: missed rotations, unauthorized access, policy changes without approval, and secret exposure. Automatic incident creation for violations."
        },
        {
          icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
          title: "Compliance Analytics",
          description: "Trend analysis showing compliance improvement over time. Most common violations, remediation effectiveness, and framework comparison. Executive dashboards for board reporting."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Enable Audit Logging",
          description: "Activate comprehensive audit logging for all secret operations. Configure retention periods per compliance requirements (90 days to 7 years). Enable tamper detection for log integrity.",
          icon: <Database className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Map Compliance Controls",
          description: "Select applicable compliance frameworks. System automatically maps secret management controls to framework requirements. Identify gaps for remediation.",
          icon: <FileCheck className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Continuous Monitoring",
          description: "Real-time monitoring of secret management compliance posture. Automatic alerts for violations. Proactive gap detection before audits. Dashboard shows live compliance score.",
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Remediate Gaps",
          description: "AI identifies compliance gaps with severity ratings and remediation guidance. Track remediation progress. Automated validation confirms gaps are resolved.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Generate Reports",
          description: "One-click generation of comprehensive compliance reports. Export in auditor-friendly formats. Share securely with time-limited access. Maintain year-round audit readiness.",
          icon: <Download className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Audit Log Details",
          items: [
            "Secret creation: user, timestamp, metadata, classification",
            "Secret access: user, timestamp, source IP, access type",
            "Secret modification: user, timestamp, diff, approval record",
            "Secret rotation: trigger, timestamp, success/failure, propagation",
            "Secret sharing: sender, recipient, permissions, expiration",
            "Secret deletion: user, timestamp, approval, retention policy"
          ]
        },
        {
          title: "Compliance Frameworks",
          items: [
            "SOC 2: CC6.1 (Logical Access), CC6.3 (System Operations)",
            "HIPAA: 164.312(d) (Authentication), 164.312(a)(1) (Access Control)",
            "PCI-DSS: Req 3 (Protect Stored Data), Req 8 (Authentication)",
            "ISO 27001: A.9 (Access Control), A.10 (Cryptography)",
            "NIST 800-53: IA (Identification), AC (Access Control)",
            "GDPR: Article 32 (Security of Processing)"
          ]
        },
        {
          title: "Retention & Storage",
          items: [
            "Configurable retention: 90 days to 7 years",
            "Immutable storage with write-once-read-many (WORM)",
            "Encrypted at rest with AES-256-GCM",
            "Geographic storage options for data residency",
            "Automatic archival to cold storage after retention period",
            "Tamper detection with cryptographic hash chains"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - SOC 2 Secret Controls",
          scenario: "Annual SOC 2 audit required evidence of secret management controls: rotation, access control, and lifecycle management. Automated compliance reporting with continuous evidence collection.",
          impact: "SOC 2 audit completed in 2 days (vs. 4 weeks), 100% evidence completeness, zero findings related to secrets"
        },
        {
          industry: "E-Commerce - PCI-DSS Secret Compliance",
          scenario: "PCI-DSS requires demonstration of credential rotation, access controls, and encryption for payment secrets. Quarterly compliance reports generated automatically with complete evidence.",
          impact: "100% PCI-DSS compliance for secrets, quarterly reports in minutes, zero manual evidence collection"
        },
        {
          industry: "Healthcare - HIPAA Audit Trail",
          scenario: "HIPAA requires complete audit trails for all PHI database credential access. Implemented immutable logging with 7-year retention and automated compliance reporting.",
          impact: "100% HIPAA audit trail compliance, 7-year evidence retention, zero PHI credential access violations"
        },
        {
          industry: "FinTech - Multi-Framework Compliance",
          scenario: "Required simultaneous SOC 2, PCI-DSS, and ISO 27001 compliance for secret management. Unified compliance platform with cross-framework control mapping and single evidence collection.",
          impact: "Single evidence collection for 3 frameworks, 70% reduction in compliance overhead, all certifications maintained"
        }
      ]}
      
      metrics={[
        {
          value: "100%",
          label: "Audit trail completeness",
          color: "text-purple-400"
        },
        {
          value: "365 days",
          label: "Audit-ready state",
          color: "text-purple-400"
        },
        {
          value: "< 1 min",
          label: "Report generation time",
          color: "text-purple-400"
        },
        {
          value: "7 years",
          label: "Maximum log retention",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "ServiceNow GRC" },
        { name: "Vanta" },
        { name: "Drata" },
        { name: "OneTrust" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Immutable audit logs with cryptographic hash chains",
        "WORM (Write Once Read Many) storage for compliance",
        "Encrypted evidence storage with AES-256-GCM",
        "Role-based access to audit logs and reports",
        "Geographic data residency options",
        "Tamper detection with automatic alerting",
        "Secure auditor access with time-limited tokens",
        "Regular third-party audit of logging infrastructure"
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

export default SecretsAuditCompliancePage
