import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Brain, AlertTriangle, Activity, Target, Shield,
  BarChart3, Eye, TrendingUp
} from 'lucide-react'

const ThreatAnalyticsPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Brain className="w-32 h-32 text-blue-600" />}
      heroTitle="AI-Powered Threat Analytics"
      heroSubtitle="Machine Learning Algorithms Detect Anomalous Behavior, Credential Abuse, and Insider Threats in Real-Time"
      heroGradient="from-blue-50 via-white to-blue-50"
      heroImage="/PAM.jpeg"
      
      overview="Detect threats 10x faster than manual monitoring with AI-powered behavioral analytics. Machine learning algorithms analyze user behavior, entity patterns, and contextual data to identify anomalies with 95%+ accuracy. Real-time risk scoring (0-100), predictive threat modeling, and automated response actions protect against insider threats and credential abuse."
      
      problem="Security teams can't manually monitor hundreds of privileged sessions in real-time. Insider threats go undetected for months. Traditional rule-based detection generates 70% false positives, causing alert fatigue. By the time threats are detected, damage is already done."
      
      benefit="Detect threats in seconds, not days, with 96% confidence in threat identification. Reduce false positives by 70% with AI-powered behavioral analytics. Prevent breaches before they happen with predictive threat modeling and automated response actions."
      
      keyFeatures={[
        {
          icon: <Activity className="w-10 h-10 text-blue-400" />,
          title: "Behavioral Analytics (UEBA)",
          description: "User and Entity Behavioral Analytics establishes baselines for normal behavior and detects deviations. Monitors access patterns, command execution, file operations, and session timing with continuous learning."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "Anomaly Detection",
          description: "95%+ accuracy anomaly detection using unsupervised machine learning. Identifies off-hours access, new location logins, bulk server access, privilege escalation, and unusual command patterns in real-time."
        },
        {
          icon: <Target className="w-10 h-10 text-blue-400" />,
          title: "Risk Scoring (0-100)",
          description: "Real-time risk calculation combining behavior analysis, context (location, time, device), historical patterns, and threat intelligence. Scores trigger automated response actions at configurable thresholds."
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
          title: "Predictive Threat Modeling",
          description: "Forecast potential security incidents before they occur. Identify accounts likely to be compromised based on behavior trajectories. Proactive alerts enable preventive action, not just reactive response."
        },
        {
          icon: <Shield className="w-10 h-10 text-blue-400" />,
          title: "Automated Response Actions",
          description: "Configure automatic responses based on risk thresholds: require MFA step-up, terminate sessions, lock accounts, notify SOC team, create incident tickets. Automated playbooks for common threat scenarios."
        },
        {
          icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
          title: "Threat Intelligence Dashboard",
          description: "Comprehensive dashboard with real-time threat map, risk score trends, top anomalies, active investigations, and AI confidence scores. Drill-down from alerts to session recordings for forensic analysis."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Baseline Establishment",
          description: "AI observes user and entity behavior for 7-14 days to establish normal baselines. Learns typical access patterns, working hours, command vocabulary, and resource usage for each user.",
          icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
          number: 2,
          title: "Continuous Monitoring",
          description: "Real-time analysis of all privileged activities against established baselines. Every session, command, and access event is evaluated for anomalies with sub-second processing.",
          icon: <Eye className="w-6 h-6 text-blue-400" />
        },
        {
          number: 3,
          title: "Anomaly Detection",
          description: "ML models identify deviations from normal behavior with confidence scores. Types: off-hours access, new locations, bulk operations, privilege escalation, unusual commands, data exfiltration patterns.",
          icon: <AlertTriangle className="w-6 h-6 text-red-400" />
        },
        {
          number: 4,
          title: "Risk Assessment",
          description: "Combine multiple signals into a composite risk score (0-100). Consider behavior anomalies, contextual factors, historical risk, and threat intelligence for accurate risk quantification.",
          icon: <Target className="w-6 h-6 text-blue-400" />
        },
        {
          number: 5,
          title: "Automated Response",
          description: "Risk score triggers configured response actions: session termination (>90), MFA step-up (>70), SOC notification (>50), enhanced monitoring (>30). Automated playbooks for rapid response.",
          icon: <Shield className="w-6 h-6 text-blue-400" />
        },
        {
          number: 6,
          title: "Continuous Learning",
          description: "AI improves accuracy over time with feedback loops. Flag false positives to train models. Adapt to organizational changes and new normal patterns. Model retraining on weekly schedule.",
          icon: <TrendingUp className="w-6 h-6 text-blue-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "AI/ML Models",
          items: [
            "Unsupervised learning for anomaly detection (clustering, isolation forests)",
            "Supervised learning for threat classification (random forests, neural networks)",
            "Sequential analysis for session behavior modeling (LSTM networks)",
            "Graph analysis for lateral movement detection",
            "Natural language processing for command analysis",
            "Ensemble models for risk score aggregation"
          ]
        },
        {
          title: "Detection Capabilities",
          items: [
            "Off-hours access from unusual locations (IP, geo, device)",
            "Bulk server access patterns (lateral movement indicators)",
            "Privilege escalation attempts and unauthorized sudo/admin usage",
            "Data exfiltration patterns (large downloads, unusual file access)",
            "Credential abuse (shared accounts, token replay, pass-the-hash)",
            "Insider threat behavioral indicators (pre-exit behavior)"
          ]
        },
        {
          title: "Performance & Privacy",
          items: [
            "Real-time inference: <100ms per event evaluation",
            "Processing capacity: 10,000+ events per second",
            "On-premise model training option for sensitive environments",
            "Privacy-preserving federated learning available",
            "Model explainability for audit and compliance",
            "Zero data sharing with external parties"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Insider Threat Detection",
          scenario: "AI detected a senior DBA accessing 156 customer database tables in 2 hours—96% anomaly confidence. Normal pattern was 5-10 tables per day. Account was compromised via phishing. Session auto-terminated.",
          impact: "Breach contained in 12 seconds, prevented exfiltration of 2M+ customer records, saved estimated $4.45M breach cost"
        },
        {
          industry: "Healthcare - Off-Hours Access",
          scenario: "Night shift doctor's account was accessing radiology systems at 3 AM from an IP in a different country. AI flagged 92% anomaly with credential abuse indicators. Account locked, MFA forced on next login.",
          impact: "Compromised account contained in 8 seconds, zero patient data exposed, credential phishing attack prevented"
        },
        {
          industry: "Technology - Privilege Escalation",
          scenario: "Developer escalated from read-only to admin on production Kubernetes cluster. AI detected the privilege escalation was not through approved workflow. Risk score jumped to 94. Session terminated immediately.",
          impact: "Unauthorized access prevented, production environment protected, incident investigated with session recording"
        },
        {
          industry: "Government - Data Exfiltration",
          scenario: "Contractor downloaded 50GB from classified file server, 500x their normal daily volume. AI detected data exfiltration pattern with 98% confidence. Transfer blocked and account suspended within 15 seconds.",
          impact: "Classified data protected, contractor investigated, security policies strengthened based on AI recommendations"
        }
      ]}
      
      metrics={[
        {
          value: "96%",
          label: "Threat detection confidence",
          color: "text-blue-400"
        },
        {
          value: "10x",
          label: "Faster than manual monitoring",
          color: "text-blue-400"
        },
        {
          value: "70%",
          label: "Reduction in false positives",
          color: "text-blue-400"
        },
        {
          value: "< 100ms",
          label: "Real-time threat evaluation",
          color: "text-blue-400"
        }
      ]}
      
      integrations={[
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "ELK Stack" },
        { name: "Sumo Logic" },
        { name: "PagerDuty" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "CrowdStrike" },
        { name: "SentinelOne" },
        { name: "Webhooks" }
      ]}
      
      securityFeatures={[
        "Privacy-preserving federated learning for model training",
        "On-premise AI model deployment option available",
        "Model explainability for compliance and audit trails",
        "Encrypted model artifacts and training data (AES-256)",
        "Zero data sharing with third parties",
        "Automated false positive feedback loop for accuracy improvement",
        "Human-in-the-loop for critical automated actions",
        "GDPR and CCPA compliant data processing"
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

export default ThreatAnalyticsPage
