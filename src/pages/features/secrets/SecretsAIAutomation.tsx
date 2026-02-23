import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Zap, Bot, Brain, RefreshCw, AlertTriangle,
  Target, Shield, TrendingUp
} from 'lucide-react'

const SecretsAIAutomationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Zap className="w-32 h-32 text-purple-600" />}
      heroTitle="Secrets AI Automation"
      heroSubtitle="AI-Powered Secret Rotation, Leak Detection, and Lifecycle Automation"
      heroGradient="from-purple-50 via-white to-purple-50"
      
      overview="Automate 80% of secret management tasks with AI-powered rules and autonomous agents. Auto-rotate expiring secrets, detect and revoke leaked credentials, enforce policies, and archive unused secrets—all without human intervention. Secret Rotation Agent handles 234 secrets with zero-downtime updates."
      
      problem="Manual secret management doesn't scale. Teams spend 15 hours per week on rotation, monitoring, and compliance tasks. Expiring secrets get missed. Leaked credentials go undetected for months. Unused secrets accumulate, creating unnecessary risk."
      
      benefit="Deploy AI automation that manages secrets 24/7. Auto-rotate before expiration, detect leaks in seconds, enforce policies automatically, and clean up unused secrets. Reduce manual work by 80% with 98.5% automation success rate."
      
      keyFeatures={[
        {
          icon: <Zap className="w-10 h-10 text-purple-400" />,
          title: "Secrets Automation Rules",
          description: "Pre-built rules: auto-rotate secrets expiring in 7 days, detect and revoke leaked secrets, enforce rotation policies, archive unused secrets idle > 90 days. Custom rules with configurable triggers and actions."
        },
        {
          icon: <Bot className="w-10 h-10 text-purple-400" />,
          title: "Secret Rotation Agent",
          description: "Autonomous AI agent that manages rotation for 234+ secrets. Coordinates with CI/CD pipelines and dependent services. Zero-downtime rotation with automatic rollback. Runs continuously."
        },
        {
          icon: <Brain className="w-10 h-10 text-purple-400" />,
          title: "AI-Powered Insights",
          description: "ML detects expiration risks (47 secrets expiring in 72 hours), leak indicators (API key in public repo, 92% confidence), usage anomalies (500x normal access rate), and optimization opportunities."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Automatic Leak Response",
          description: "When a secret is detected in a repository, logs, or public source, AI automatically revokes the secret, rotates the credential, notifies the owner, and creates an incident ticket—in under 12 seconds."
        },
        {
          icon: <Target className="w-10 h-10 text-purple-400" />,
          title: "Smart Recommendations",
          description: "AI suggests: consolidate 5 AWS secrets into 1 with cross-account access, archive 45 unused secrets (save $180/month), rotate 12 secrets on risk-based schedule (improve security by 40%)."
        },
        {
          icon: <RefreshCw className="w-10 h-10 text-purple-400" />,
          title: "Lifecycle Automation",
          description: "Automated secret lifecycle: creation with policy-compliant generation, rotation on schedule, access monitoring, expiration alerting, and retirement with secure deletion."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Configure Rules",
          description: "Select from pre-built secrets automation rules or create custom rules. Define triggers (expiration, leak detection, policy violation), conditions, and automated actions.",
          icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Deploy Agents",
          description: "Activate Secret Rotation Agent and API Keys Update Agent. Configure scope (which secrets to manage), schedules, and notification preferences. Agents start learning your environment.",
          icon: <Bot className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "AI Learning Phase",
          description: "AI analyzes your secret environment over 7-14 days: rotation patterns, access frequencies, dependency maps, and risk profiles. Establishes baselines for intelligent automation.",
          icon: <Brain className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Autonomous Operation",
          description: "Rules and agents execute continuously. Secrets rotated before expiration. Leaks detected and responded to instantly. Unused secrets flagged for review. All actions audited.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Monitor & Optimize",
          description: "Dashboard shows automation metrics: rotations completed, leaks prevented, rules executed, and time saved. AI provides optimization recommendations for improving automation coverage.",
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Secrets Automation Rules",
          items: [
            "Auto-rotate: Secrets expiring within N days (default: 7)",
            "Leak response: Auto-revoke on repository/log detection",
            "Policy enforcement: Block non-compliant secret creation",
            "Archive: Unused secrets idle > N days (default: 90)",
            "Alert: Secrets accessed N times above normal (anomaly)",
            "Custom: User-defined triggers, conditions, and actions"
          ]
        },
        {
          title: "AI Agents",
          items: [
            "Secret Rotation Agent: 234 secrets, zero-downtime, 67% complete per cycle",
            "API Keys Update Agent: 156 keys across services, 57% complete per cycle",
            "Leak Detection Agent: Real-time scanning of repos and logs",
            "Lifecycle Management Agent: Creation to retirement automation",
            "All agents: 24/7 operation, 99.99% uptime, auto-scaling"
          ]
        },
        {
          title: "AI Insights Engine",
          items: [
            "Expiration prediction: 7-90 days ahead with priority scoring",
            "Leak detection: Regex, entropy, and AI classification (97.2% accuracy)",
            "Usage anomaly detection: Statistical analysis of access patterns",
            "Optimization suggestions: Consolidation, archival, and policy improvements",
            "Continuous model training with privacy-preserving learning"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Automated Rotation",
          scenario: "500+ secrets across 50 microservices with manual rotation taking 15 hours/week. Deployed Secret Rotation Agent with zero-downtime rotation. 250+ secrets auto-rotated monthly.",
          impact: "15 hours/week saved, 250+ auto-rotations monthly, 99.8% success rate, zero service disruptions"
        },
        {
          industry: "E-Commerce - Leak Prevention",
          scenario: "Developer accidentally committed payment gateway API key to GitHub. AI detected the leak in 8 seconds, auto-revoked the key, rotated the credential, and notified the team.",
          impact: "8-second leak response, zero unauthorized API usage, automatic remediation, developer awareness improved"
        },
        {
          industry: "FinTech - Secret Cleanup",
          scenario: "Accumulated 200+ unused secrets over 2 years. AI identified 145 dormant secrets (idle > 90 days), recommended archival for 120 and deletion for 25. Saved $500/month in managed secret costs.",
          impact: "145 dormant secrets cleaned up, $500/month cost savings, reduced attack surface by 45%"
        },
        {
          industry: "Healthcare - Compliance Automation",
          scenario: "HIPAA requires rotation of PHI credentials every 90 days with evidence. Automated rotation with compliance reporting ensures zero missed rotations and complete audit trails.",
          impact: "100% rotation compliance, automated evidence collection, zero HIPAA findings"
        }
      ]}
      
      metrics={[
        {
          value: "80%",
          label: "Reduction in manual work",
          color: "text-purple-400"
        },
        {
          value: "98.5%",
          label: "Automation success rate",
          color: "text-purple-400"
        },
        {
          value: "< 12 sec",
          label: "Leak response time",
          color: "text-purple-400"
        },
        {
          value: "250+",
          label: "Monthly auto-rotations",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "AWS Secrets Manager" },
        { name: "Azure Key Vault" },
        { name: "GCP Secret Manager" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Jenkins" },
        { name: "Kubernetes" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "Splunk" },
        { name: "Datadog" }
      ]}
      
      securityFeatures={[
        "Automated leak response in under 12 seconds",
        "Zero-downtime rotation with automatic rollback",
        "AI model privacy: on-premise training option available",
        "Complete audit trail for all automated actions",
        "Human-in-the-loop for high-risk automated actions",
        "Configurable automation thresholds and safeguards",
        "Encrypted model artifacts and training data",
        "98.5% automation success rate with continuous improvement"
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

export default SecretsAIAutomationPage
