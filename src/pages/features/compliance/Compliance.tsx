import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  FileCheck, Award, FileText, Download, TrendingUp,
  AlertTriangle, Clock, Database
} from 'lucide-react'

const CompliancePage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<FileCheck className="w-32 h-32 text-white" />}
      heroTitle="Compliance & Audit"
      heroSubtitle="Automated Compliance Reporting for SOC 2, HIPAA, ISO 27001, and More"
      heroGradient="from-amber-900 via-gray-900 to-gray-900"
      heroImage="/Compliance.jpeg"
      
      overview="Transform weeks of audit preparation into hours with automated compliance reporting, continuous monitoring, and evidence collection. Pre-built templates for SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, NIST 800-53, GDPR, and FedRAMP with one-click report generation and real-time compliance dashboards."
      
      problem="Manual compliance reporting takes weeks of effort. Evidence collection is tedious and error-prone. Continuous compliance monitoring is impossible manually. Audit prep disrupts normal operations and requires dedicated resources. Gap between audits creates blind spots."
      
      benefit="Achieve continuous compliance with automated evidence collection, real-time monitoring, and instant report generation. Pass audits with confidence using pre-built templates and comprehensive audit trails. Reduce audit prep time from 4 weeks to 2 days with 100% evidence completeness."
      
      keyFeatures={[
        {
          icon: <FileText className="w-10 h-10 text-amber-400" />,
          title: "Pre-Built Compliance Templates",
          description: "Ready-to-use templates for SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, NIST 800-53, GDPR, FedRAMP, and more. Each template includes all required controls, evidence types, and audit procedures."
        },
        {
          icon: <Database className="w-10 h-10 text-amber-400" />,
          title: "Automated Evidence Collection",
          description: "Continuously collect compliance evidence from all security systems. Access logs, session recordings, policy changes, approval workflows, rotation records, and risk assessments automatically aggregated."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-amber-400" />,
          title: "Real-Time Compliance Dashboard",
          description: "Live compliance score (0-100%) with control-level status tracking. Visual indicators for compliant (green), at-risk (yellow), and non-compliant (red) controls. Drill-down to specific evidence and gaps."
        },
        {
          icon: <Download className="w-10 h-10 text-amber-400" />,
          title: "One-Click Report Generation",
          description: "Generate complete audit reports in seconds. Export to PDF, Excel, JSON, or HTML formats. Includes executive summary, control evidence, gap analysis, and remediation recommendations."
        },
        {
          icon: <Clock className="w-10 h-10 text-amber-400" />,
          title: "Continuous Compliance Monitoring",
          description: "24/7 monitoring of compliance posture with automatic alerts for policy violations, configuration drift, and control failures. Proactive gap detection before audits with remediation guidance."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Gap Analysis & Remediation",
          description: "AI identifies compliance gaps with severity ratings and impact assessments. Provides step-by-step remediation plans with estimated effort and priority scores. Track remediation progress to completion."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Select Framework",
          description: "Choose compliance framework(s) relevant to your organization (SOC 2, HIPAA, PCI-DSS, etc.). System automatically maps existing controls and identifies gaps requiring attention.",
          icon: <FileCheck className="w-6 h-6 text-amber-400" />
        },
        {
          number: 2,
          title: "Automatic Evidence Collection",
          description: "System continuously collects evidence from PAM, Secrets, ServiceFort, Remote Access, and all integrated systems. Evidence tagged with control mappings and timestamps.",
          icon: <Database className="w-6 h-6 text-amber-400" />
        },
        {
          number: 3,
          title: "Continuous Monitoring",
          description: "Real-time compliance dashboard tracks control status, evidence completeness, and overall compliance score. Automatic alerts for violations or gaps with immediate remediation guidance.",
          icon: <TrendingUp className="w-6 h-6 text-amber-400" />
        },
        {
          number: 4,
          title: "Gap Remediation",
          description: "AI-powered gap analysis identifies non-compliant controls with severity ratings. Follow step-by-step remediation plans to achieve compliance. Track progress with automated validation.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 5,
          title: "Report Generation",
          description: "Generate comprehensive audit reports with one click. Include executive summary, control evidence, audit trails, and gap analysis. Export in auditor-friendly formats (PDF, Excel).",
          icon: <FileText className="w-6 h-6 text-amber-400" />
        },
        {
          number: 6,
          title: "Audit Readiness",
          description: "Maintain audit-ready state 365 days per year with continuous evidence collection and validation. Reduce audit prep from weeks to hours with pre-collected, organized evidence.",
          icon: <Award className="w-6 h-6 text-amber-400" />
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
            "FedRAMP (Federal Risk and Authorization Management)",
            "Custom frameworks via policy builder"
          ]
        },
        {
          title: "Evidence Types Collected",
          items: [
            "Access control logs (who accessed what, when)",
            "Session recordings and activity logs",
            "Credential rotation records and schedules",
            "Approval workflows and decision audit trails",
            "Policy changes and configuration history",
            "Risk assessment reports and scores",
            "Incident response logs and resolution",
            "User training and acknowledgment records",
            "System availability and uptime metrics",
            "Encryption and security control validation"
          ]
        },
        {
          title: "Report Formats",
          items: [
            "PDF reports with executive summary and detailed evidence",
            "Excel spreadsheets with control matrices and evidence links",
            "JSON exports for programmatic access and integration",
            "HTML reports for web-based review and sharing",
            "CSV exports for data analysis",
            "Auditor packages with all evidence organized by control"
          ]
        },
        {
          title: "Integration & API",
          items: [
            "REST API for programmatic report generation",
            "Webhook notifications for compliance events",
            "SIEM integration (Splunk, Datadog, ELK)",
            "GRC platform integration (ServiceNow, OneTrust, Vanta)",
            "Ticketing system integration (Jira, ServiceNow)",
            "Automated evidence export to auditor portals"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - SOC 2 Type II Certification",
          scenario: "Startup needed SOC 2 Type II for enterprise sales. Manual audit prep would take 8 weeks and cost $200K. Implemented Shield Vault with automated compliance reporting and continuous monitoring.",
          impact: "SOC 2 certified in 3 weeks with 2 days audit prep, saved $150K in consulting fees, 98% compliance score, zero findings"
        },
        {
          industry: "Healthcare - HIPAA Continuous Compliance",
          scenario: "Hospital required HIPAA compliance for 500+ employees accessing PHI. Annual audits took 6 weeks of manual evidence collection. Deployed continuous compliance monitoring with automated reporting.",
          impact: "100% HIPAA compliance maintained continuously, 6 weeks audit prep reduced to 4 hours, zero violations in 2 years"
        },
        {
          industry: "E-Commerce - PCI-DSS Quarterly Reports",
          scenario: "Payment processor needed quarterly PCI-DSS reports. Manual compilation took 2 weeks per quarter (8 weeks/year). Automated evidence collection and one-click report generation implemented.",
          impact: "Quarterly reports generated in 1 hour, 100% evidence completeness, passed all 4 quarterly audits, 8 weeks saved annually"
        },
        {
          industry: "FinTech - Multi-Framework Compliance",
          scenario: "Financial services firm required SOC 2, ISO 27001, and PCI-DSS compliance simultaneously. Overlapping controls managed manually. Unified compliance platform with cross-framework mapping deployed.",
          impact: "Single evidence collection for multiple frameworks, 70% reduction in compliance overhead, all certifications achieved"
        }
      ]}
      
      metrics={[
        {
          value: "4 weeks → 2 days",
          label: "Audit prep time reduction",
          color: "text-amber-400"
        },
        {
          value: "100%",
          label: "Evidence completeness",
          color: "text-amber-400"
        },
        {
          value: "98%",
          label: "Average compliance score",
          color: "text-amber-400"
        },
        {
          value: "365 days",
          label: "Audit-ready state",
          color: "text-amber-400"
        },
        {
          value: "8+",
          label: "Compliance frameworks supported",
          color: "text-amber-400"
        },
        {
          value: "< 1 min",
          label: "Report generation time",
          color: "text-amber-400"
        },
        {
          value: "Zero",
          label: "Manual evidence collection",
          color: "text-amber-400"
        },
        {
          value: "$150K+",
          label: "Savings per audit",
          color: "text-amber-400"
        }
      ]}
      
      integrations={[
        { name: "ServiceNow GRC" },
        { name: "Vanta" },
        { name: "OneTrust" },
        { name: "Drata" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Jira" },
        { name: "Confluence" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Google Workspace" },
        { name: "AWS" },
        { name: "Azure" },
        { name: "GCP" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Immutable audit logs with tamper detection and blockchain verification",
        "Encrypted evidence storage with AES-256-GCM",
        "Role-based access control for compliance data",
        "Retention policies aligned with regulatory requirements",
        "Secure evidence sharing with auditors (time-limited access)",
        "Complete audit trail of who viewed/modified compliance data",
        "SOC 2 Type II certified compliance infrastructure",
        "GDPR and CCPA compliant evidence handling"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "HIPAA",
        "PCI-DSS",
        "NIST 800-53",
        "GDPR",
        "FedRAMP",
        "CCPA"
      ]}
    />
  )
}

export default CompliancePage

