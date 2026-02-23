import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Brain, AlertTriangle, Activity, Target, Shield,
  Eye, BarChart3, Search
} from 'lucide-react'

const SecretsThreatAnalyticsPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Brain className="w-32 h-32 text-purple-600" />}
      heroTitle="Secrets Threat Analytics"
      heroSubtitle="AI-Powered Detection of Secret Abuse, Anomalous Access Patterns, and Credential Compromise"
      heroGradient="from-purple-50 via-white to-purple-50"
      heroImage="/SecretManagement.jpeg"
      
      overview="Detect secret abuse, anomalous access patterns, and credential compromise in real-time with AI-powered threat analytics. Behavioral analysis establishes normal secret access patterns and identifies deviations with 96% confidence. Real-time alerts for bulk secret access, off-hours usage, and exfiltration indicators."
      
      problem="Secret abuse goes undetected because there's no behavioral analysis of access patterns. A compromised API key could be used for weeks before anyone notices. Insider threats extract secrets without triggering any alerts. No correlation between secret access and other security events."
      
      benefit="Detect secret compromise in seconds with AI behavioral analytics. 96% confidence in threat identification. Real-time alerts with automated response. Correlate secret access patterns with user behavior for comprehensive threat detection."
      
      keyFeatures={[
        {
          icon: <Activity className="w-10 h-10 text-purple-400" />,
          title: "Access Pattern Analysis",
          description: "AI establishes baseline access patterns for each secret and user. Detects anomalies: unusual access times, unexpected users, bulk secret retrieval, and geographic anomalies."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Real-Time Threat Detection",
          description: "Instant detection of credential abuse indicators: API key used from new IP, secret accessed 500x in 1 hour, bulk secret export, off-hours production access, and simultaneous multi-location use."
        },
        {
          icon: <Target className="w-10 h-10 text-purple-400" />,
          title: "Risk Scoring",
          description: "Dynamic risk scoring for each secret and access event based on behavior deviation, context analysis, and threat intelligence. Configurable thresholds trigger automated response actions."
        },
        {
          icon: <Eye className="w-10 h-10 text-purple-400" />,
          title: "Leak Monitoring",
          description: "Continuous scanning of public repositories, paste sites, dark web, and breach databases for exposed credentials. AI matches leaked data against your secret inventory with 97.2% accuracy."
        },
        {
          icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
          title: "Threat Intelligence Dashboard",
          description: "Comprehensive dashboard showing active threats, risk trends, top anomalies, and AI confidence scores. Drill-down from alerts to specific access events. Historical threat timeline."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "Automated Response",
          description: "Configure automatic responses: revoke compromised secrets, rotate credentials, block suspicious IPs, notify security team, create incident tickets. Response playbooks for common scenarios."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Baseline Establishment",
          description: "AI observes secret access patterns for 7-14 days. Learns normal usage: which users access which secrets, at what times, from what locations, and at what frequency. Builds per-secret and per-user baselines.",
          icon: <Brain className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Real-Time Monitoring",
          description: "Every secret access event evaluated against baselines in real-time. Sub-100ms analysis identifies anomalies before access completes. Continuous monitoring across all platforms.",
          icon: <Activity className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Threat Detection",
          description: "AI correlates multiple signals to detect threats: unusual access + new IP + off-hours = high-confidence threat. Reduces false positives by 70% compared to rule-based detection.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Automated Response",
          description: "Detected threats trigger automated response based on severity: revoke secret, rotate credential, block IP, notify team. Critical threats escalated to security team immediately.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Investigation & Learning",
          description: "Security team reviews threat details with full context. AI learns from feedback (confirmed/false positive). Models improve accuracy over time. Investigation timeline with all evidence.",
          icon: <Search className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Detection Capabilities",
          items: [
            "Bulk secret access (retrieving many secrets in short timeframe)",
            "Off-hours access (outside normal working patterns)",
            "Geographic anomalies (access from new/unusual locations)",
            "Frequency anomalies (500x normal access rate)",
            "Cross-account access (user accessing secrets from wrong context)",
            "Exfiltration patterns (systematic secret enumeration)"
          ]
        },
        {
          title: "AI/ML Models",
          items: [
            "Behavioral analysis with per-user and per-secret baselines",
            "Anomaly detection using isolation forests and autoencoders",
            "Pattern matching for known attack signatures",
            "Correlation engine for multi-signal threat detection",
            "Leak detection with regex, entropy, and NLP classification",
            "Continuous learning with federated privacy preservation"
          ]
        },
        {
          title: "Response Automation",
          items: [
            "Automatic secret revocation on high-confidence threats",
            "Immediate credential rotation with zero-downtime",
            "IP blocking and access restriction",
            "Incident ticket creation in Jira/ServiceNow",
            "Team notification via Slack/Teams/PagerDuty",
            "Configurable response playbooks per threat type"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - Compromised API Key",
          scenario: "Production API key used from 3 different countries in 10 minutes. AI detected geographic impossibility with 98% confidence. Key auto-revoked, rotated, and team notified in 15 seconds.",
          impact: "API key compromise contained in 15 seconds, zero unauthorized data access, automatic remediation"
        },
        {
          industry: "E-Commerce - Insider Threat",
          scenario: "Departing employee accessed 50 production secrets in 2 hours (normal: 2-3 per day). AI detected exfiltration pattern with 94% confidence. Access revoked and investigation initiated.",
          impact: "Insider threat detected and contained, zero secrets exfiltrated, complete evidence for investigation"
        },
        {
          industry: "FinTech - Breach Detection",
          scenario: "Attacker gained access via compromised SSO session and began systematically accessing payment API keys. AI detected the enumeration pattern after 5th secret access and terminated the session.",
          impact: "Breach contained after 5 accesses (vs. estimated 200+ without detection), payment keys protected, attacker blocked"
        },
        {
          industry: "Healthcare - PHI Credential Monitoring",
          scenario: "Monitoring all access to PHI database credentials for HIPAA compliance. AI detected after-hours access from personal device. Flagged for review—turned out to be authorized emergency access.",
          impact: "100% access monitoring, zero false-positive lockouts due to context-aware analysis, HIPAA compliance maintained"
        }
      ]}
      
      metrics={[
        {
          value: "96%",
          label: "Threat detection confidence",
          color: "text-purple-400"
        },
        {
          value: "70%",
          label: "False positive reduction",
          color: "text-purple-400"
        },
        {
          value: "< 15 sec",
          label: "Automated response time",
          color: "text-purple-400"
        },
        {
          value: "97.2%",
          label: "Leak detection accuracy",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Sumo Logic" },
        { name: "CrowdStrike" },
        { name: "SentinelOne" },
        { name: "PagerDuty" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Real-time behavioral analysis for all secret access events",
        "Privacy-preserving federated learning for model training",
        "On-premise AI deployment option for sensitive environments",
        "Model explainability for audit and compliance requirements",
        "Automated response with configurable thresholds and safeguards",
        "Correlation with SIEM for comprehensive threat detection",
        "Zero data sharing with external parties",
        "Continuous model improvement with feedback loops"
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

export default SecretsThreatAnalyticsPage
