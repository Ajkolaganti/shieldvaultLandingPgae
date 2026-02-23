import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  MapPin, Globe, Shield, AlertTriangle, CheckCircle,
  Target, Navigation
} from 'lucide-react'

const GeofencingPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<MapPin className="w-32 h-32 text-green-600" />}
      heroTitle="Geofencing"
      heroSubtitle="Location-Based Access Policies with Geographic Restrictions and Anomaly Detection"
      heroGradient="from-green-50 via-white to-green-50"
      heroImage="/RemoteAccess.jpeg"
      
      overview="Control remote access based on geographic location. Define allowed countries, regions, and IP ranges. Block access from high-risk countries. Detect impossible travel (user in NYC at 2:00 PM, login from London at 2:05 PM). Automatic alerts for location-based anomalies."
      
      problem="Remote access from anywhere means attacks from anywhere. No way to restrict access by geography. Credential theft from other countries goes undetected. Impossible travel scenarios indicate compromised accounts. Compliance requires geographic data residency controls."
      
      benefit="Geographic access control blocks 95% of foreign-origin attacks. Impossible travel detection catches credential sharing and theft. Compliance with data residency requirements. Automatic alerts for location anomalies."
      
      keyFeatures={[
        {
          icon: <Globe className="w-10 h-10 text-green-400" />,
          title: "Country-Level Controls",
          description: "Allow or block access by country. Whitelist approved countries for each resource. Block access from high-risk countries. Different policies for different resources (dev vs. production)."
        },
        {
          icon: <MapPin className="w-10 h-10 text-green-400" />,
          title: "Regional Geofencing",
          description: "Define geographic zones for access control: office locations, approved cities, or custom polygons. Different access levels per zone. Moving between zones triggers re-evaluation."
        },
        {
          icon: <Navigation className="w-10 h-10 text-green-400" />,
          title: "Impossible Travel Detection",
          description: "AI detects physically impossible travel: login from NYC at 2:00 PM, another login from London at 2:05 PM. Automatic session termination and security alert. 97% accuracy."
        },
        {
          icon: <AlertTriangle className="w-10 h-10 text-red-400" />,
          title: "VPN/Proxy Detection",
          description: "Detect connections through VPNs, TOR, and proxy services that could mask true location. Configurable policies: block, allow with additional MFA, or flag for review."
        },
        {
          icon: <Target className="w-10 h-10 text-green-400" />,
          title: "IP Range Restrictions",
          description: "Restrict access to specific IP ranges: office networks, approved ISPs, and cloud provider ranges. Dynamic IP list updates for cloud and CDN ranges."
        },
        {
          icon: <Shield className="w-10 h-10 text-green-400" />,
          title: "Location-Based MFA",
          description: "Adjust MFA requirements based on location: no additional MFA from office network, push notification from home, FIDO2 from new locations. Dynamic adaptation."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Define Geographic Policies",
          description: "Create location-based policies: allowed countries, approved regions, blocked locations. Different policies for different resource sensitivity levels. Import existing IP allowlists.",
          icon: <Globe className="w-6 h-6 text-green-400" />
        },
        {
          number: 2,
          title: "Configure Detection",
          description: "Enable impossible travel detection, VPN/proxy detection, and location anomaly alerting. Set sensitivity thresholds and response actions for each detection type.",
          icon: <Navigation className="w-6 h-6 text-green-400" />
        },
        {
          number: 3,
          title: "Test Policies",
          description: "Run policies in audit mode to see what would be blocked without actually blocking. Review impact report showing affected users and access patterns. Refine policies before enforcement.",
          icon: <CheckCircle className="w-6 h-6 text-green-400" />
        },
        {
          number: 4,
          title: "Enforce Policies",
          description: "Enable enforcement. Access from non-approved locations blocked with clear explanation. Impossible travel triggers automatic session termination. VPN connections flagged per policy.",
          icon: <Shield className="w-6 h-6 text-green-400" />
        },
        {
          number: 5,
          title: "Monitor & Adapt",
          description: "Geographic access dashboard shows access by location. Heat maps for usage patterns. Anomaly alerts in real-time. AI recommends policy refinements based on legitimate travel patterns.",
          icon: <MapPin className="w-6 h-6 text-green-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "Location Detection",
          items: [
            "IP geolocation with 99.5% country accuracy",
            "City-level accuracy for major population centers",
            "MaxMind GeoIP2 database (updated weekly)",
            "GPS/device location for mobile endpoints",
            "Wi-Fi network identification for office detection",
            "Custom location providers via API"
          ]
        },
        {
          title: "Anomaly Detection",
          items: [
            "Impossible travel: physics-based travel time calculation",
            "VPN detection: commercial VPN IP range databases",
            "TOR exit node detection: updated hourly",
            "Proxy detection: header analysis and behavior patterns",
            "Residential vs. data center IP classification",
            "ASN-based anomaly detection for ISP changes"
          ]
        },
        {
          title: "Policy Options",
          items: [
            "Country allow/block lists per resource",
            "Custom geographic zones with polygon boundaries",
            "IP range allowlists and blocklists",
            "Time-based geographic policies (business hours by timezone)",
            "Exception workflows for legitimate travel",
            "Audit mode for policy testing before enforcement"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "Financial Services - Geographic Trading Controls",
          scenario: "Restrict trading system access to approved countries only (US, UK, Singapore). Impossible travel detection caught credential sharing between time zones. 3 unauthorized accesses blocked in first month.",
          impact: "Trading access restricted to 3 countries, 3 unauthorized accesses blocked, credential sharing detected"
        },
        {
          industry: "Healthcare - US-Only PHI Access",
          scenario: "HIPAA compliance required PHI access only from US-based locations. Geofencing blocked all non-US access attempts. VPN detection ensured true US location, not VPN masking.",
          impact: "100% US-only PHI access, VPN masking detected, HIPAA geographic compliance"
        },
        {
          industry: "Government - Domestic-Only Access",
          scenario: "Government systems restricted to domestic access only. Geofencing with impossible travel detection. TOR and VPN blocked. CAC/PIV required for any access outside government networks.",
          impact: "Domestic-only access enforced, TOR/VPN blocked, impossible travel detected"
        },
        {
          industry: "E-Commerce - Fraud Prevention",
          scenario: "Admin portal restricted to office IP ranges during business hours. After-hours access only from approved residential locations with additional MFA. Suspicious locations blocked.",
          impact: "Admin access geographically controlled, after-hours access monitored, zero unauthorized admin access"
        }
      ]}
      
      metrics={[
        {
          value: "95%",
          label: "Foreign attack reduction",
          color: "text-green-400"
        },
        {
          value: "97%",
          label: "Impossible travel accuracy",
          color: "text-green-400"
        },
        {
          value: "99.5%",
          label: "Country detection accuracy",
          color: "text-green-400"
        },
        {
          value: "< 100ms",
          label: "Geofence evaluation time",
          color: "text-green-400"
        }
      ]}
      
      integrations={[
        { name: "MaxMind GeoIP2" },
        { name: "Okta" },
        { name: "Azure AD" },
        { name: "CrowdStrike" },
        { name: "Splunk" },
        { name: "Datadog" },
        { name: "PagerDuty" },
        { name: "Slack" },
        { name: "Microsoft Teams" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "SIEM" }
      ]}
      
      securityFeatures={[
        "Country and region-level access control",
        "Impossible travel detection with 97% accuracy",
        "VPN, TOR, and proxy detection and blocking",
        "Location-based adaptive MFA requirements",
        "IP range restrictions with dynamic updates",
        "Audit mode for policy testing before enforcement",
        "Complete geographic access audit trail",
        "Real-time alerting for location anomalies"
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

export default GeofencingPage
