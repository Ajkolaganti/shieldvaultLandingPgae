import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Zap, Shield, CheckCircle, Settings,
  Cloud, Database
} from 'lucide-react'

const AutoProvisioningPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Zap className="w-32 h-32 text-blue-600" />}
      heroTitle="Auto-Provisioning"
      heroSubtitle="Automated Service Account Provisioning with Policy Enforcement and Zero-Touch Deployment"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/SAV.jpeg"
      
      overview="Provision service accounts automatically based on pre-approved templates and policies. Zero-touch deployment with naming conventions, password policies, minimum privileges, and documentation enforced at creation. Integrate with CI/CD and IaC for automated provisioning during application deployment."
      
      problem="Manual service account creation is inconsistent, undocumented, and slow. Developers create accounts with excessive privileges to avoid delays. No standardization in naming, password strength, or documentation. Provisioning takes days, not minutes."
      
      benefit="Provision service accounts in minutes with guaranteed policy compliance. Every account created with minimum required privileges, proper naming, strong credentials, and complete documentation. 85% faster than manual provisioning."
      
      keyFeatures={[
        {
          icon: <Settings className="w-10 h-10 text-blue-400" />,
          title: "Template-Based Provisioning",
          description: "Pre-approved templates for common service account types: database, API, CI/CD, monitoring, and application. Templates enforce naming conventions, password policies, and permission baselines."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Policy Enforcement",
          description: "Every provisioned account guaranteed compliant: minimum privilege, strong credentials, expiration date, designated owner, and documentation. Non-compliant requests blocked with specific guidance."
        },
        {
          icon: <Zap className="w-10 h-10 text-blue-400" />,
          title: "CI/CD Integration",
          description: "Provision service accounts as part of CI/CD pipelines. Terraform provider, Ansible module, and REST API for infrastructure-as-code. Accounts created during application deployment."
        },
        {
          icon: <Cloud className="w-10 h-10 text-blue-400" />,
          title: "Multi-Platform Support",
          description: "Auto-provision across Active Directory, Azure AD, AWS IAM, GCP IAM, databases, and applications. Single request creates accounts across all required platforms simultaneously."
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
          title: "Approval Workflows",
          description: "Configurable approval workflows per template and privilege level. Low-risk accounts auto-approved. High-privilege accounts require manager and security team sign-off. Slack/Teams integration."
        },
        {
          icon: <Database className="w-10 h-10 text-blue-400" />,
          title: "Auto-Documentation",
          description: "Every provisioned account automatically documented: purpose, owner, dependencies, permissions, rotation schedule, and review cadence. Documentation updated automatically on changes."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Create Templates",
          description: "Define provisioning templates for different service account types. Set naming conventions, password policies, default permissions, and required metadata. Import from existing best-practice accounts.",
          icon: <Settings className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Configure Workflows",
          description: "Set up approval workflows per template. Auto-approval for standard accounts. Multi-level approval for privileged accounts. SLA timers for approval response.",
          icon: <CheckCircle className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Request Account",
          description: "Users request service accounts via self-service portal, Slack command, CLI, or API. Select template, provide business justification, and specify target platforms. Request routed for approval.",
          icon: <Zap className="w-6 h-6 text-blue-400" />
        },
        {
          number: 4,
          title: "Auto-Provision",
          description: "On approval, account automatically provisioned across all specified platforms. Credentials securely stored in vault. Owner notified with access instructions. Documentation auto-generated.",
          icon: <Cloud className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Verify & Activate",
          description: "Automated verification confirms account created correctly on all platforms. Health checks validate connectivity. Account activated and added to lifecycle management. Monitoring begins.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Provisioning Templates",
          items: [
            "Database service accounts (read-only, read-write, admin)",
            "API service accounts (consumer, publisher, admin)",
            "CI/CD pipeline accounts (build, deploy, release)",
            "Monitoring and alerting accounts (read-only)",
            "Application service accounts (microservice, backend, frontend)",
            "Custom templates with policy inheritance"
          ]
        },
        {
          title: "Policy Enforcement",
          items: [
            "Naming conventions: {env}-{app}-{purpose}-svc",
            "Password policy: 32+ characters, crypto-random",
            "Minimum privilege: only requested permissions granted",
            "Mandatory metadata: owner, purpose, expiration, review cycle",
            "Maximum lifetime: configurable per template (1-3 years)",
            "Automatic lifecycle enrollment on creation"
          ]
        },
        {
          title: "Integration Options",
          items: [
            "Self-service web portal with template selection",
            "Slack/Teams bot: /provision-account {template}",
            "CLI tool: svault provision --template api-svc",
            "REST API: POST /api/v1/service-accounts",
            "Terraform: shieldvault_service_account resource",
            "Ansible: shieldvault.servicefort.provision module"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - DevOps Provisioning",
          scenario: "DevOps team provisioned 50+ service accounts per month manually. Took 2-3 days per account. Automated provisioning via Terraform reduced creation to 5 minutes with guaranteed compliance.",
          impact: "85% faster provisioning, 100% policy compliance, zero manual effort for standard accounts"
        },
        {
          industry: "Financial Services - Controlled Provisioning",
          scenario: "Regulatory requirements demanded approval workflows for all service accounts accessing financial systems. Multi-level approval with compliance checks satisfied regulators.",
          impact: "100% approved provisioning, complete audit trail, regulatory compliance, 4-hour SLA for approvals"
        },
        {
          industry: "E-Commerce - Microservice Accounts",
          scenario: "500+ microservices each needing service accounts across 3 environments. Automated provisioning during CI/CD deployment created accounts in seconds with proper isolation.",
          impact: "1,500+ accounts auto-provisioned, 0 seconds developer wait time, per-environment isolation enforced"
        },
        {
          industry: "Healthcare - HIPAA Provisioning",
          scenario: "Service accounts for PHI systems required security team approval and specific configuration. Template with HIPAA controls pre-configured. Auto-documentation for compliance evidence.",
          impact: "HIPAA-compliant provisioning, mandatory security approval, auto-documentation for all PHI accounts"
        }
      ]}
      
      metrics={[
        {
          value: "85%",
          label: "Faster than manual",
          color: "text-blue-400"
        },
        {
          value: "100%",
          label: "Policy compliance rate",
          color: "text-blue-400"
        },
        {
          value: "< 5 min",
          label: "Provisioning time",
          color: "text-blue-400"
        },
        {
          value: "Zero",
          label: "Non-compliant accounts",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "Azure AD" },
        { name: "AWS IAM" },
        { name: "GCP IAM" },
        { name: "Terraform" },
        { name: "Ansible" },
        { name: "Jenkins" },
        { name: "GitHub Actions" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" }
      ]}
      
      securityFeatures={[
        "Template-based provisioning with policy enforcement",
        "Minimum privilege guaranteed for every account",
        "Cryptographically strong credential generation",
        "Multi-level approval for high-privilege accounts",
        "Automatic lifecycle enrollment at creation",
        "Complete audit trail for provisioning events",
        "Auto-documentation with mandatory metadata",
        "Cross-platform consistency enforcement"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "NIST 800-53",
        "FedRAMP"
      ]}
    />
  )
}

export default AutoProvisioningPage
