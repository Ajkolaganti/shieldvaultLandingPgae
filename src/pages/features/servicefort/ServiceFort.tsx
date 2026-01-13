import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Server, Shield, Users, Activity, Lock, AlertCircle,
  CheckCircle, RefreshCw, Eye, Zap
} from 'lucide-react'

const ServiceFortPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Server className="w-32 h-32 text-white" />}
      heroTitle="ServiceFort - Service Account Vaulting"
      heroSubtitle="Secure and Manage Non-Human Accounts at Enterprise Scale"
      heroGradient="from-blue-900 via-gray-900 to-gray-900"
      heroImage="/SAV.jpeg"
      
      overview="Manage 340+ service accounts with boundary-based access control, automated credential rotation, and real-time monitoring. Eliminate service account sprawl with AI-powered risk scoring, privilege escalation detection, and comprehensive audit trails for non-human identity security."
      
      problem="Service accounts are often over-privileged, unmonitored, and never rotated. 80% of organizations have orphaned service accounts with excessive access. Manual management is impossible at scale, leading to security gaps, compliance violations, and unauthorized access risks."
      
      benefit="Gain complete visibility and control over service accounts with automated provisioning, boundary enforcement, credential refresh, and AI-powered anomaly detection. Reduce service account risks by 95% with 99.8% automation success."
      
      keyFeatures={[
        {
          icon: <Users className="w-10 h-10 text-blue-400" />,
          title: "Service Account Inventory",
          description: "Centralized management of 340+ service accounts with account type classification (API, Database, Application, System). Track ownership, purpose, server access, and last usage with complete metadata."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Boundary-Based Access Control",
          description: "Define granular boundaries limiting which servers each service account can access. Enforce least privilege with boundary templates and automatic violation detection with real-time alerts."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
          title: "Automated Credential Refresh",
          description: "Policy-based credential rotation with configurable schedules (30/60/90 days). Zero-downtime rotation with automatic propagation to all dependent services. 98.5% success rate with rollback support."
        },
        {
          icon: <Activity className="w-10 h-10 text-blue-400" />,
          title: "Real-Time Activity Monitoring",
          description: "Track all service account activities with server access logs, authentication attempts, privilege escalation detection, and behavioral analytics. Anomaly alerts for suspicious patterns like 156 servers accessed in 2 hours."
        },
        {
          icon: <AlertCircle className="w-10 h-10 text-red-400" />,
          title: "AI-Powered Risk Assessment",
          description: "Machine learning calculates risk scores (1-100) based on privilege level, access patterns, idle time, and boundary violations. Identifies over-privileged accounts with 100+ server access automatically."
        },
        {
          icon: <Lock className="w-10 h-10 text-blue-400" />,
          title: "Privilege Escalation Detection",
          description: "Real-time detection of unauthorized privilege escalation attempts. Automatic account quarantine on suspicious activity with 96% confidence anomaly classification and immediate SOC team notification."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Discovery & Import",
          description: "Automatically discover service accounts across Windows, Linux, databases, APIs, and cloud services. Import with metadata including purpose, owner, and access requirements.",
          icon: <Eye className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Boundary Configuration",
          description: "Define access boundaries specifying which servers, databases, and resources each service account can access. Use templates for common patterns (DB service accounts, API accounts, etc.).",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Policy Setup",
          description: "Configure rotation policies, access controls, and monitoring rules. Set credential refresh schedules, idle timeout policies, and maximum privilege levels.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Automated Management",
          description: "System automatically rotates credentials, enforces boundaries, monitors activity, and calculates risk scores. AI detects anomalies and triggers automated responses.",
          icon: <Zap className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Continuous Monitoring",
          description: "Real-time monitoring of all service account activities with behavioral analytics, anomaly detection, and compliance reporting. Immutable audit logs for every action.",
          icon: <Activity className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Service Account Types",
          items: [
            "API Service Accounts (OAuth, JWT, API Keys)",
            "Database Service Accounts (MySQL, PostgreSQL, Oracle, MongoDB)",
            "Application Service Accounts (Web apps, microservices)",
            "System Service Accounts (Linux daemons, Windows services)",
            "Cloud Service Accounts (AWS IAM roles, Azure managed identities)",
            "Integration Accounts (CI/CD, monitoring, backup systems)"
          ]
        },
        {
          title: "Boundary Enforcement",
          items: [
            "Server-level access restrictions (IP, hostname, FQDN)",
            "Resource-level boundaries (databases, files, APIs)",
            "Time-based access windows (business hours only)",
            "Geographic restrictions (region-based access)",
            "Protocol restrictions (SSH, RDP, HTTP/S only)",
            "Real-time violation detection and blocking"
          ]
        },
        {
          title: "Credential Management",
          items: [
            "Automated password rotation with complexity enforcement",
            "SSH key rotation and propagation",
            "API token refresh and distribution",
            "Certificate renewal for service accounts",
            "Zero-downtime rotation with blue-green deployment",
            "Automatic rollback on rotation failures",
            "Credential versioning and history tracking"
          ]
        },
        {
          title: "AI & Analytics",
          items: [
            "Behavioral baseline establishment (7-14 days)",
            "Anomaly detection with 96% confidence scores",
            "Risk scoring based on 20+ factors",
            "Privilege escalation pattern recognition",
            "Dormant account identification (idle > 90 days)",
            "Over-privilege detection (100+ server access)",
            "Predictive risk modeling and forecasting"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Microservices Security",
          scenario: "Managing 150+ service accounts across microservices architecture. Accounts had excessive permissions and were never rotated. ServiceFort implemented with boundary-based access and 30-day rotation.",
          impact: "95% reduction in over-privileged accounts, zero credential-related incidents, automated rotation for 150+ accounts monthly"
        },
        {
          industry: "Financial Services - SOC 2 Compliance",
          scenario: "Audit required proof of service account management, rotation, and access control. No visibility into service account usage or lifecycle. Deployed ServiceFort with full audit trails and automated reporting.",
          impact: "Passed SOC 2 audit with zero findings, 100% service account visibility, continuous compliance monitoring"
        },
        {
          industry: "Healthcare - HIPAA Service Accounts",
          scenario: "Service accounts accessing PHI databases were unmonitored and over-privileged. Needed HIPAA-compliant access control and audit trails. Implemented boundary-based access and activity monitoring.",
          impact: "100% HIPAA compliance for service accounts, detected 3 unauthorized access attempts, complete audit trails"
        },
        {
          industry: "E-Commerce - Breach Prevention",
          scenario: "AI detected service account accessing 156 servers in 2 hours (96% confidence anomaly). Account was compromised and used for lateral movement. ServiceFort automatically quarantined the account.",
          impact: "Breach contained in 12 seconds, prevented data exfiltration, saved estimated $2M+ in breach costs"
        }
      ]}
      
      metrics={[
        {
          value: "340+",
          label: "Service accounts managed",
          color: "text-blue-400"
        },
        {
          value: "95%",
          label: "Reduction in over-privileged accounts",
          color: "text-blue-400"
        },
        {
          value: "98.5%",
          label: "Credential rotation success",
          color: "text-blue-400"
        },
        {
          value: "96%",
          label: "Anomaly detection confidence",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Service account visibility",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Downtime during rotation",
          color: "text-blue-400"
        },
        {
          value: "< 30 sec",
          label: "Boundary violation detection",
          color: "text-blue-400"
        },
        {
          value: "24/7",
          label: "Continuous monitoring",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "LDAP" },
        { name: "AWS IAM" },
        { name: "Azure AD" },
        { name: "Google Cloud IAM" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Kubernetes" },
        { name: "Docker" },
        { name: "Jenkins" },
        { name: "GitLab" },
        { name: "Ansible" },
        { name: "Terraform" }
      ]}
      
      securityFeatures={[
        "AES-256 encryption for service account credentials at rest",
        "TLS 1.3 for all credential transmissions",
        "Hardware Security Module (HSM) support for key storage",
        "Immutable audit logs with tamper detection",
        "Real-time boundary violation detection and blocking",
        "Automatic account quarantine on anomaly detection",
        "Zero-knowledge architecture option for maximum security",
        "Multi-factor authentication for administrative access"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "NIST 800-53",
        "HIPAA",
        "PCI-DSS",
        "GDPR"
      ]}
    />
  )
}

export default ServiceFortPage

