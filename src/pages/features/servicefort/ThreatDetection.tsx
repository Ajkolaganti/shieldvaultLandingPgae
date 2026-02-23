import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  AlertTriangle, Brain, Activity, Shield, Target,
  Eye, BarChart3, Bell
} from 'lucide-react'

const ThreatDetectionPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<AlertTriangle className="w-32 h-32 text-blue-600" />}
      heroTitle="Threat Detection"
      heroSubtitle="AI-Powered Behavioral Analysis for Service Account Abuse and Compromise Detection"
      heroGradient="from-blue-50 via-white to-blue-50"
      
      overview="Detect service account compromise and abuse in real-time with AI behavioral analytics. Establish baselines for normal service account behavior and instantly identify deviations: lateral movement, unusual data access, off-hours activity, and privilege escalation attempts. 96% detection accuracy with automated response."
      
      problem="Compromised service accounts are the #1 attack vector for lateral movement. Service accounts are ideal targets: always running, high privileges, no MFA. Traditional monitoring can't distinguish normal automation from malicious use. Mean time to detect: 287 days."
      
      benefit="Detect service account compromise in seconds with 96% accuracy. AI behavioral analysis reduces false positives by 70%. Automated response contains threats before damage. Reduce MTTD from 287 days to minutes."
      
      keyFeatures={[
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "Behavioral Baselines",
          description: "AI establishes unique behavioral baselines for each service account: normal access patterns, data volumes, timing, network behavior, and API usage. Detects deviations with confidence scoring."
        },
        {
          icon: <Activity className="w-10 h-10 text-blue-400" />,
          title: "Real-Time Monitoring",
          description: "Every service account action monitored in real-time: authentication events, data access, API calls, network connections, and privilege usage. Sub-100ms analysis per event."
        },
        {
          icon: <Target className="w-10 h-10 text-red-400" />,
          title: "Attack Pattern Detection",
          description: "Detect known attack patterns: Kerberoasting, golden ticket, lateral movement, data exfiltration, cryptojacking, and supply chain attacks. ML models updated weekly with new threat intelligence."
        },
        {
          icon: <Eye className="w-10 h-10 text-blue-400" />,
          title: "Lateral Movement Detection",
          description: "Track service account usage across systems. Detect unusual cross-system access patterns indicative of lateral movement. Map potential attack paths for proactive remediation."
        },
        {
          icon: <Bell className="w-10 h-10 text-blue-400" />,
          title: "Smart Alerting",
          description: "Context-aware alerts with severity scoring, affected assets, and recommended response actions. Filter noise: 70% fewer false positives than rule-based systems. Escalation based on confidence level."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Automated Response",
          description: "Pre-configured response playbooks: suspend account, rotate credentials, isolate affected systems, create incident ticket, notify SOC team. Automatic execution for high-confidence threats."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Deploy Monitoring",
          description: "Deploy monitoring agents across all platforms: AD, cloud IAM, databases, and applications. Configure log collection for all service account events. Real-time streaming to analysis engine.",
          icon: <Eye className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Baseline Learning",
          description: "AI learns normal behavior for each service account over 14-21 days. Establishes baselines for timing, access patterns, data volumes, and network behavior. Continuous baseline refinement.",
          icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Threat Detection",
          description: "Real-time analysis of all service account events against baselines and attack patterns. Multi-signal correlation for high-confidence threat identification. Priority scoring for response.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Automated Response",
          description: "High-confidence threats trigger automated response: account suspension, credential rotation, system isolation. Security team notified with full context. Investigation timeline generated.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Investigation & Learning",
          description: "SOC team investigates with full event timeline, affected assets, and attack path visualization. Feedback improves model accuracy. Post-incident review updates response playbooks.",
          icon: <BarChart3 className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Detection Capabilities",
          items: [
            "Kerberoasting and golden ticket attacks",
            "Lateral movement across systems and networks",
            "Data exfiltration (unusual data volumes or destinations)",
            "Cryptojacking (unusual CPU/resource usage)",
            "Privilege escalation attempts",
            "Supply chain attacks via compromised service accounts"
          ]
        },
        {
          title: "AI/ML Models",
          items: [
            "Per-account behavioral baselines (timing, access, data, network)",
            "Anomaly detection using isolation forests and LSTM networks",
            "Attack pattern matching with regularly updated signatures",
            "Multi-signal correlation engine for high-confidence detection",
            "Graph analysis for lateral movement path detection",
            "Continuous learning with privacy-preserving federated training"
          ]
        },
        {
          title: "Response Automation",
          items: [
            "Account suspension within 5 seconds of detection",
            "Emergency credential rotation with zero-downtime coordination",
            "Network isolation of affected systems",
            "Incident ticket creation in ServiceNow/Jira",
            "SOC notification via PagerDuty/Slack/Teams",
            "Evidence preservation for forensic investigation"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Lateral Movement Detection",
          scenario: "Attacker compromised a monitoring service account and began lateral movement to payment systems. AI detected unusual cross-system access pattern after 3rd hop and suspended the account.",
          impact: "Lateral movement stopped at 3rd hop (vs. 15+ without detection), payment systems protected, attack contained in 12 seconds"
        },
        {
          industry: "Technology - Kerberoasting Prevention",
          scenario: "Attacker attempted to extract service account password hashes via Kerberoasting. AI detected unusual TGS request pattern and blocked further requests. Security team notified with full context.",
          impact: "Kerberoasting attempt blocked, zero password hashes extracted, attack attribution completed"
        },
        {
          industry: "Healthcare - PHI Exfiltration Prevention",
          scenario: "Compromised service account began extracting PHI data outside normal patterns. AI detected 10x normal data volume from EHR database and suspended the account in 8 seconds.",
          impact: "PHI exfiltration stopped after minimal data exposure, HIPAA breach reporting minimized, incident contained"
        },
        {
          industry: "E-Commerce - Supply Chain Attack",
          scenario: "Compromised CI/CD service account used to inject malicious code during builds. AI detected unusual code repository access and build artifact modification. Account suspended and builds quarantined.",
          impact: "Supply chain attack prevented, malicious builds quarantined, zero customer impact, CI/CD restored in 2 hours"
        }
      ]}
      
      metrics={[
        {
          value: "96%",
          label: "Detection accuracy",
          color: "text-blue-400"
        },
        {
          value: "70%",
          label: "False positive reduction",
          color: "text-blue-400"
        },
        {
          value: "< 12 sec",
          label: "Automated response time",
          color: "text-blue-400"
        },
        {
          value: "287→0",
          label: "Days MTTD reduction",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "CrowdStrike" },
        { name: "SentinelOne" },
        { name: "Microsoft Sentinel" },
        { name: "PagerDuty" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "Active Directory" },
        { name: "AWS CloudTrail" }
      ]}
      
      securityFeatures={[
        "AI behavioral analysis for every service account",
        "Real-time monitoring with sub-100ms analysis",
        "Automated response for high-confidence threats",
        "Attack path visualization and blast radius analysis",
        "Privacy-preserving model training on customer data",
        "On-premise deployment option for sensitive environments",
        "SIEM integration for comprehensive security correlation",
        "Evidence preservation for forensic investigation"
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

export default ThreatDetectionPage
