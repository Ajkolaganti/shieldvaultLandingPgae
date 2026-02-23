import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  RefreshCw, Clock, Shield, AlertTriangle, CheckCircle,
  Target, Database, Zap
} from 'lucide-react'

const RotationPoliciesPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<RefreshCw className="w-32 h-32 text-purple-600" />}
      heroTitle="Rotation Policies"
      heroSubtitle="Automated Secret Rotation with Policy-Based Schedules, Zero-Downtime Updates, and 99.8% Success Rate"
      heroGradient="from-purple-50 via-white to-purple-50"
      
      overview="Schedule or trigger automatic secret rotation with zero-downtime updates across all integrated platforms. Support for time-based (30/60/90 day), event-based (breach detection), usage-based (after N accesses), and compliance-based rotation. 250+ automated rotations per month with 99.8% success rate."
      
      problem="Manual credential rotation takes 2-3 hours per rotation across multiple platforms. Organizations have secrets that haven't been rotated in years. Rotation causes service disruptions when dependent applications aren't updated simultaneously."
      
      benefit="Automate 100% of secret rotation with zero-downtime updates. 99.8% success rate with automatic rollback on failures. Reduce rotation time from 2-3 hours to 15 minutes per secret across all platforms simultaneously."
      
      keyFeatures={[
        {
          icon: <Clock className="w-10 h-10 text-purple-400" />,
          title: "Time-Based Rotation",
          description: "Configure rotation schedules: every 30, 60, or 90 days, or custom intervals. Calendar-aware scheduling avoids rotations during maintenance windows or peak hours."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Event-Based Rotation",
          description: "Trigger immediate rotation on security events: breach detection, employee termination, credential exposure, or compliance violation. Emergency rotation completes in minutes."
        },
        {
          icon: <Target className="w-10 h-10 text-purple-400" />,
          title: "Risk-Based Rotation",
          description: "AI recommends rotation schedules based on secret sensitivity, access frequency, exposure risk, and compliance requirements. Higher-risk secrets rotate more frequently."
        },
        {
          icon: <Zap className="w-10 h-10 text-purple-400" />,
          title: "Zero-Downtime Updates",
          description: "Blue-green rotation ensures zero service disruption. New credential activated, verified across all dependent services, then old credential deactivated. Automatic rollback on any failure."
        },
        {
          icon: <Database className="w-10 h-10 text-purple-400" />,
          title: "Multi-Platform Propagation",
          description: "Rotation automatically propagates to all platforms where the secret is used. AWS, Azure, GCP, Kubernetes, CI/CD pipelines, and applications updated simultaneously."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Rotation Verification",
          description: "Post-rotation verification confirms new credentials work across all dependent services. Health checks validate connectivity. Failed verifications trigger automatic rollback."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Create Rotation Policy",
          description: "Define rotation schedule, trigger conditions, and target secrets. Select pre-built policy templates or create custom policies. Assign policies to individual secrets or groups.",
          icon: <RefreshCw className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Map Dependencies",
          description: "System maps all services and applications dependent on each secret. Identifies propagation targets for rotation. Verifies connectivity to all dependent systems before first rotation.",
          icon: <Database className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Execute Rotation",
          description: "On schedule or trigger, system generates new credential, provisions on target system, and begins blue-green propagation to all dependent services. Real-time progress tracking.",
          icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Verify & Activate",
          description: "Post-rotation health checks verify new credentials work everywhere. If verification passes, old credential deactivated. If fails, automatic rollback to previous credential.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Report & Audit",
          description: "Rotation results logged with timestamps, success/failure status, and propagation details. Compliance reporting shows rotation adherence. Failure diagnostics for troubleshooting.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Rotation Policy Types",
          items: [
            "Time-based: Every 30/60/90 days or custom intervals",
            "Event-based: On breach, termination, or exposure",
            "Usage-based: After N accesses or time since last use",
            "Compliance-based: Per regulatory requirements (PCI-DSS 90-day)",
            "Risk-based: AI-recommended schedule per secret sensitivity",
            "Manual: On-demand rotation with approval workflow"
          ]
        },
        {
          title: "Supported Secret Types",
          items: [
            "Database passwords (MySQL, PostgreSQL, Oracle, MongoDB, Redis)",
            "API keys and tokens (REST, GraphQL, OAuth, JWT)",
            "SSH keys and certificates",
            "Cloud service credentials (AWS IAM, Azure, GCP)",
            "TLS/SSL certificates",
            "Service account passwords",
            "Custom secret types via SDK"
          ]
        },
        {
          title: "Zero-Downtime Mechanism",
          items: [
            "Blue-green rotation: new credential activated before old is removed",
            "Dual-credential window for safe transition period",
            "Parallel propagation to all dependent services",
            "Health check verification at each propagation point",
            "Automatic rollback within 30 seconds on failure",
            "Retry logic with exponential backoff for transient issues"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Automated Rotation at Scale",
          scenario: "500+ secrets across 50 microservices needed regular rotation. Manual rotation took 15 hours/week. Implemented policy-based rotation with zero-downtime propagation.",
          impact: "250+ rotations automated monthly, 15 hours/week saved, 99.8% success rate, zero service disruptions"
        },
        {
          industry: "E-Commerce - PCI-DSS 90-Day Rotation",
          scenario: "PCI-DSS requires 90-day rotation for payment system credentials. Manual process was error-prone and created compliance gaps. Automated 90-day rotation with compliance reporting.",
          impact: "100% PCI-DSS rotation compliance, zero missed rotations, automated compliance evidence"
        },
        {
          industry: "FinTech - Emergency Rotation",
          scenario: "Security breach detected. Needed to rotate 200+ potentially compromised credentials immediately. Event-based rotation triggered emergency rotation across all systems in 18 minutes.",
          impact: "200+ credentials rotated in 18 minutes (vs. estimated 40 hours manual), breach contained, zero service disruption"
        },
        {
          industry: "Healthcare - HIPAA Credential Rotation",
          scenario: "HIPAA requires regular rotation of PHI database credentials with complete audit trails. Automated rotation with verification and compliance reporting for 50+ database credentials.",
          impact: "100% HIPAA rotation compliance, automated audit evidence, zero credential-related PHI exposure"
        }
      ]}
      
      metrics={[
        {
          value: "99.8%",
          label: "Rotation success rate",
          color: "text-purple-400"
        },
        {
          value: "250+",
          label: "Monthly automated rotations",
          color: "text-purple-400"
        },
        {
          value: "Zero",
          label: "Downtime during rotation",
          color: "text-purple-400"
        },
        {
          value: "15 min",
          label: "Average rotation time",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "AWS Secrets Manager" },
        { name: "Azure Key Vault" },
        { name: "GCP Secret Manager" },
        { name: "HashiCorp Vault" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Kubernetes" },
        { name: "GitHub" },
        { name: "Jenkins" },
        { name: "Terraform" }
      ]}
      
      securityFeatures={[
        "Zero-downtime rotation with blue-green deployment strategy",
        "Automatic rollback on rotation failure within 30 seconds",
        "Post-rotation verification across all dependent services",
        "Encrypted credential generation using cryptographic RNG",
        "Complete audit trail for every rotation operation",
        "Compliance reporting for regulatory rotation requirements",
        "Emergency rotation capability for breach response",
        "HSM-backed credential generation for maximum security"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "PCI-DSS",
        "HIPAA",
        "GDPR",
        "FedRAMP"
      ]}
    />
  )
}

export default RotationPoliciesPage
