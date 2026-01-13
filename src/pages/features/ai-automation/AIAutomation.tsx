import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Brain, Zap, Bot, TrendingUp, Target, BarChart3,
  AlertTriangle, RefreshCw
} from 'lucide-react'

const AIAutomationPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Brain className="w-32 h-32 text-white" />}
      heroTitle="AI & Automation"
      heroSubtitle="Intelligent Security That Works While You Sleep"
      heroGradient="from-purple-900 via-gray-900 to-gray-900"
      heroImage="/AiAutomations.jpeg"
      
      overview="Eliminate 87% of manual security tasks with AI-powered automation, predictive threat detection, and autonomous security agents. From 6 hours of manual work per day to 15 minutes of strategic oversight with 98.5% automation success rate across 156+ rules executing monthly."
      
      problem="Security teams overwhelmed with manual, repetitive tasks. Threats detected too late (hours or days after occurrence). Credential rotation taking hours every single day. No predictive capabilities - only reactive security. Alert fatigue from 70% false positives."
      
      benefit="Deploy 8 autonomous AI agents that work 24/7 to optimize policies, detect threats, rotate credentials, and maintain security posture with 96% confidence in threat detection and real-time response in seconds."
      
      keyFeatures={[
        {
          icon: <Zap className="w-10 h-10 text-purple-400" />,
          title: "Automated Security Rules",
          description: "156+ smart automation rules executing monthly with 98.5% success rate. PAM, Secrets, and ServiceFort automation for auto-revoke, rotation, policy enforcement, and anomaly response."
        },
        {
          icon: <Brain className="w-10 h-10 text-purple-400" />,
          title: "AI-Powered Insights",
          description: "Machine learning with 85-100% confidence scores analyzing patterns across 50,000+ data points. Risk detection, optimization recommendations, compliance monitoring, and behavioral anomaly detection."
        },
        {
          icon: <Bot className="w-10 h-10 text-purple-400" />,
          title: "8 Autonomous Security Agents",
          description: "Policy Optimization, Compliance Auditor, Anomaly Detection, Secret Rotation, API Keys Update, Service Account Provisioning, Risk Assessment, and Certificate Renewal agents working 24/7."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-purple-400" />,
          title: "Predictive Analytics",
          description: "Forecast security risks, predict rotation needs, anticipate compliance gaps 7-90 days ahead. Account compromise probability scores and cost optimization opportunities."
        },
        {
          icon: <Target className="w-10 h-10 text-purple-400" />,
          title: "Smart Recommendations",
          description: "AI suggests security improvements based on your environment, usage patterns, and industry best practices. Policy optimizations, access right-sizing, and secret consolidation."
        },
        {
          icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
          title: "Behavioral Analytics",
          description: "UEBA (User & Entity Behavioral Analytics) with unsupervised learning for anomaly detection, pattern recognition, and continuous model training across your entire security landscape."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Environment Analysis",
          description: "AI analyzes your environment (accounts, secrets, access patterns) and establishes behavioral baselines for users and systems over 7-14 days.",
          icon: <Brain className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Rule Activation",
          description: "Automation rules monitor for trigger conditions 24/7. Configure triggers, conditions, and actions for PAM, Secrets, and ServiceFort automation.",
          icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Anomaly Detection",
          description: "AI detects anomalies and generates insights with confidence scores. Real-time threat hunting correlates suspicious patterns across 50+ accounts.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Autonomous Execution",
          description: "8 autonomous agents execute security tasks without human intervention. Policy optimization, compliance auditing, secret rotation, and risk assessment run continuously.",
          icon: <Bot className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Predictive Modeling",
          description: "Predictive models forecast future risks, secret expiration (7-90 days ahead), compliance deadlines, and resource utilization with data-driven accuracy.",
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />
        },
        {
          number: 6,
          title: "Smart Recommendations",
          description: "System provides actionable recommendations for policy improvements, cost reductions, and security enhancements based on continuous learning.",
          icon: <Target className="w-6 h-6 text-purple-400" />
        },
        {
          number: 7,
          title: "Continuous Learning",
          description: "AI improves accuracy over time with continuous model training, federated learning for privacy, and adaptation to your unique environment patterns.",
          icon: <RefreshCw className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "AI/ML Stack",
          items: [
            "Supervised learning for threat classification",
            "Unsupervised learning for anomaly detection",
            "Reinforcement learning for agent optimization",
            "Natural language processing for insights generation",
            "Real-time inference (<100ms latency)",
            "Privacy-preserving federated learning"
          ]
        },
        {
          title: "Automation Rules Engine",
          items: [
            "PAM: Auto-revoke high-risk sessions (Risk > 80)",
            "Secrets: Auto-rotate expiring secrets (< 7 days)",
            "ServiceFort: Revoke unused accounts (Idle > 30 days)",
            "Configurable triggers, conditions, and actions",
            "Multi-level approval workflows",
            "Webhook notifications and integrations"
          ]
        },
        {
          title: "8 Autonomous Agents",
          items: [
            "Policy Optimization Agent (200+ accounts analyzed)",
            "Compliance Auditor Agent (SOC 2, ISO 27001, HIPAA)",
            "Anomaly Detection Agent (50+ account correlation)",
            "Secret Rotation Agent (234 secrets, zero-downtime)",
            "API Keys Update Agent (156 keys across services)",
            "Service Account Provisioning Agent (340+ accounts)",
            "Risk Assessment Agent (predictive threat modeling)",
            "Certificate Renewal Agent (TLS auto-renewal)"
          ]
        },
        {
          title: "Performance & Privacy",
          items: [
            "99.99% agent uptime with auto-scaling",
            "Batch processing for large datasets",
            "On-premise model training option available",
            "Zero data sharing with third parties",
            "Encrypted model artifacts (AES-256)",
            "GDPR and CCPA compliant",
            "Model explainability for audit trails"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "FinTech - Scaling Security Operations",
          scenario: "Security team couldn't scale with 300% company growth. Manual operations becoming bottleneck. Deployed all 8 autonomous agents with 15 automation rules and AI insights.",
          impact: "Managed 3x more accounts with same team size, 90% reduction in manual operations, zero security incidents during scaling period"
        },
        {
          industry: "Healthcare - HIPAA Compliance Automation",
          scenario: "Manual compliance checks taking 8 hours per week. Risk of missing compliance gaps. Implemented Compliance Auditor Agent with automated evidence collection and predictive gap detection.",
          impact: "Continuous compliance monitoring (vs. weekly manual checks), 100% compliance maintained, 8 hours per week saved"
        },
        {
          industry: "E-Commerce - Threat Prevention",
          scenario: "Security team overwhelmed with alerts, missing real threats in noise. 70% false positive rate causing alert fatigue. Deployed AI anomaly detection and automated session termination.",
          impact: "70% reduction in false positives, detected and prevented 3 account compromises, mean time to respond: 12 seconds (vs. 4 hours)"
        },
        {
          industry: "SaaS Company - Credential Automation",
          scenario: "DevOps team spending 2-3 hours daily on manual credential rotation across 50+ microservices. Secret Rotation Agent deployed with risk-based scheduling.",
          impact: "100% automated rotation with 98.5% success rate, 250+ rotations per month, zero credential-related incidents"
        }
      ]}
      
      metrics={[
        {
          value: "87%",
          label: "Reduction in manual work",
          color: "text-purple-400"
        },
        {
          value: "98.5%",
          label: "Automation success rate",
          color: "text-purple-400"
        },
        {
          value: "96%",
          label: "AI threat detection confidence",
          color: "text-purple-400"
        },
        {
          value: "156+",
          label: "Rules executing monthly",
          color: "text-purple-400"
        },
        {
          value: "8 Agents",
          label: "Working 24/7 autonomously",
          color: "text-purple-400"
        },
        {
          value: "< 100ms",
          label: "Real-time AI inference",
          color: "text-purple-400"
        },
        {
          value: "70%",
          label: "False positive reduction",
          color: "text-purple-400"
        },
        {
          value: "$750K+",
          label: "Annual savings per team",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "Active Directory" },
        { name: "AWS" },
        { name: "Azure" },
        { name: "GCP" },
        { name: "Okta" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "PagerDuty" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Sumo Logic" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Webhooks" },
        { name: "REST API" }
      ]}
      
      securityFeatures={[
        "Privacy-preserving federated learning (no data leaves your environment)",
        "On-premise model training option for sensitive environments",
        "Encrypted AI model artifacts with AES-256",
        "Model explainability for compliance and audit trails",
        "Zero data sharing with third parties or other customers",
        "GDPR and CCPA compliant data handling",
        "Automated rollback on high-confidence false positives",
        "Human-in-the-loop for critical automated actions"
      ]}
      
      complianceBadges={[
        "SOC 2 Type II",
        "ISO 27001",
        "GDPR",
        "CCPA",
        "HIPAA",
        "FedRAMP"
      ]}
    />
  )
}

export default AIAutomationPage

