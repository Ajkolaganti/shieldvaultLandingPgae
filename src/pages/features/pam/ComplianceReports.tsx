import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  FileCheck, Download, TrendingUp, Shield, Database,
  Clock, BarChart3, FileText
} from 'lucide-react'

const ComplianceReportsPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<FileCheck className="w-32 h-32 text-blue-600" />}
      heroTitle="PAM Compliance Reports"
      heroSubtitle="Automated Compliance Report Generation for SOC 2, HIPAA, PCI-DSS, ISO 27001, and More"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Generate comprehensive PAM compliance reports for SOC 2, HIPAA, PCI-DSS, ISO 27001, GDPR, NIST 800-53, and FedRAMP with one click. Pre-built templates, automated evidence collection, real-time compliance dashboards, and export to PDF, Excel, and JSON. Reduce audit prep from weeks to hours."
      
      problem="Manual compliance reporting for privileged access takes weeks of effort. Evidence collection across PAM systems is tedious and error-prone. Gaps between audits create blind spots. Compliance teams spend 80% of their time on data gathering rather than analysis."
      
      benefit="Transform weeks of audit preparation into hours with automated PAM compliance reporting. Continuous compliance monitoring ensures 365-day audit-ready state with complete evidence collection and one-click report generation."
      
      keyFeatures={[
        {
          icon: <FileText className="w-10 h-10 text-blue-400" />,
          title: "Pre-Built Compliance Templates",
          description: "Ready-to-use templates mapping PAM controls to SOC 2, HIPAA, PCI-DSS, ISO 27001, NIST 800-53, GDPR, and FedRAMP requirements. Each template includes all required evidence types and audit procedures."
        },
        {
          icon: <Database className="w-10 h-10 text-blue-400" />,
          title: "Automated Evidence Collection",
          description: "Continuously collect PAM evidence: access logs, session recordings, approval records, policy changes, credential rotations, and risk assessments. Automatic evidence tagging with control mappings."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
          title: "Real-Time Compliance Dashboard",
          description: "Live compliance score tracking with control-level status. Visual indicators for compliant, at-risk, and non-compliant controls. Drill down to specific evidence and remediation guidance."
        },
        {
          icon: <Download className="w-10 h-10 text-blue-400" />,
          title: "One-Click Export",
          description: "Generate complete audit reports in seconds. Export to PDF (executive summary), Excel (detailed evidence matrix), JSON (programmatic access), or HTML (web-based review). Auditor-ready packages."
        },
        {
          icon: <Clock className="w-10 h-10 text-blue-400" />,
          title: "Continuous Monitoring",
          description: "24/7 PAM compliance monitoring with automatic alerts for policy violations, configuration drift, and control failures. Proactive gap detection before audits with remediation guidance."
        },
        {
          icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
          title: "Compliance Analytics",
          description: "Trend analysis showing compliance score over time, most common violations, remediation effectiveness, and framework comparison. Board-ready executive summaries with actionable insights."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Select Framework",
          description: "Choose compliance framework(s) for reporting. System maps existing PAM controls and identifies gaps. Support for multi-framework reporting with overlapping control deduplication.",
          icon: <FileCheck className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Evidence Collection",
          description: "System continuously collects PAM evidence: access logs, session recordings, approval workflows, credential rotation records, and policy configurations. Automatic control-to-evidence mapping.",
          icon: <Database className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Gap Analysis",
          description: "AI identifies PAM compliance gaps with severity ratings. Provides step-by-step remediation plans with estimated effort. Prioritizes gaps by regulatory impact and risk.",
          icon: <TrendingUp className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Report Generation",
          description: "Generate comprehensive audit reports with one click. Includes executive summary, control evidence, audit trails, gap analysis, and remediation status. Export in auditor-friendly formats.",
          icon: <Download className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Audit Support",
          description: "Share reports securely with auditors. Answer auditor questions with evidence links. Track audit findings and remediation progress. Maintain continuous audit-ready state year-round.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Supported Frameworks",
          items: [
            "SOC 2 Type II (Trust Services Criteria)",
            "HIPAA (Health Insurance Portability and Accountability Act)",
            "PCI-DSS (Payment Card Industry Data Security Standard)",
            "ISO 27001 (Information Security Management)",
            "NIST 800-53 (Federal Information Security)",
            "GDPR (General Data Protection Regulation)",
            "FedRAMP (Federal Risk and Authorization Management)"
          ]
        },
        {
          title: "PAM Evidence Types",
          items: [
            "Privileged access request and approval logs",
            "Session recording and monitoring records",
            "Credential rotation history and schedules",
            "Policy configuration and change history",
            "MFA enforcement and authentication logs",
            "Risk assessment reports and scores",
            "Just-in-time access provisioning records",
            "Account lifecycle management audit trails"
          ]
        },
        {
          title: "Export Formats",
          items: [
            "PDF with executive summary and detailed evidence",
            "Excel with control matrices and evidence links",
            "JSON for programmatic access and automation",
            "HTML for web-based review and sharing",
            "CSV for data analysis and custom reporting",
            "Auditor packages with organized evidence bundles"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - SOC 2 Audit",
          scenario: "Bank needed to demonstrate PAM controls for annual SOC 2 audit. Manual evidence collection took 6 weeks previously. Automated reporting with continuous evidence collection.",
          impact: "Audit prep reduced from 6 weeks to 2 days, zero audit findings, 100% evidence completeness"
        },
        {
          industry: "Healthcare - HIPAA Reporting",
          scenario: "Hospital required quarterly HIPAA compliance reports for PHI access controls. Manual compilation took 2 weeks per quarter. Implemented automated PAM compliance reporting.",
          impact: "Quarterly reports in 1 hour, continuous HIPAA monitoring, zero PHI access violations"
        },
        {
          industry: "E-commerce - PCI-DSS Compliance",
          scenario: "Payment processor needed quarterly PCI-DSS evidence for privileged access to cardholder data environments. Automated evidence collection and one-click report generation.",
          impact: "100% PCI-DSS compliance, quarterly reports generated in minutes, zero manual evidence collection"
        },
        {
          industry: "Government - NIST Compliance",
          scenario: "Federal agency required continuous NIST 800-53 compliance reporting for classified system access controls. Implemented real-time compliance monitoring with automated alerting.",
          impact: "365-day audit-ready state, continuous compliance monitoring, automated evidence collection for 50+ controls"
        }
      ]}
      
      metrics={[
        {
          value: "6 weeks → 2 days",
          label: "Audit prep time reduction",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Evidence completeness",
          color: "text-blue-400"
        },
        {
          value: "8+",
          label: "Frameworks supported",
          color: "text-blue-400"
        },
        {
          value: "< 1 min",
          label: "Report generation time",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "ServiceNow GRC" },
        { name: "Vanta" },
        { name: "Drata" },
        { name: "OneTrust" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Webhooks" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Immutable compliance audit logs with tamper detection",
        "Encrypted evidence storage with AES-256-GCM",
        "Role-based access to compliance reports and data",
        "Retention policies aligned with regulatory requirements",
        "Secure evidence sharing with auditors (time-limited access)",
        "Complete audit trail of report access and modifications",
        "SOC 2 Type II certified infrastructure",
        "GDPR-compliant evidence handling and data processing"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "HIPAA",
        "PCI-DSS",
        "NIST 800-53",
        "GDPR",
        "FedRAMP"
      ]}
    />
  )
}

export default ComplianceReportsPage
