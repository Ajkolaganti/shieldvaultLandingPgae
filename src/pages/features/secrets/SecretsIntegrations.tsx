import FeaturePageTemplate from '../../../components/FeaturePageTemplate'
import { 
  Puzzle, Cloud, GitBranch, Server, Shield,
  Code, CheckCircle, Zap
} from 'lucide-react'

const SecretsIntegrationsPage = () => {
  return (
    <FeaturePageTemplate
      heroIcon={<Puzzle className="w-32 h-32 text-purple-600" />}
      heroTitle="Secrets Integrations"
      heroSubtitle="Seamlessly Inject Secrets into 50+ Platforms Including CI/CD, Kubernetes, Cloud, and Infrastructure"
      heroGradient="from-purple-50 via-white to-purple-50"
      
      overview="Connect Shield Vault to 50+ platforms for seamless secret injection without hardcoding credentials. Native plugins for GitHub Actions, GitLab CI, Jenkins, Kubernetes, Terraform, Ansible, and all major cloud providers. Dynamic secret injection per run with audit trails and zero secrets in repos."
      
      problem="Developers hardcode secrets in pipeline configs, Kubernetes manifests, and Terraform files. Each platform has its own secret management, creating fragmented security. No unified audit trail of secret usage across platforms."
      
      benefit="Zero hardcoded secrets across all platforms. Dynamic secret injection with audit trails. Single integration point for all secret consumption. Automatic rotation without pipeline or manifest changes."
      
      keyFeatures={[
        {
          icon: <GitBranch className="w-10 h-10 text-purple-400" />,
          title: "CI/CD Native Plugins",
          description: "Native plugins for GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps, and Bitbucket Pipelines. One-line integration with dynamic secret injection per pipeline run."
        },
        {
          icon: <Server className="w-10 h-10 text-purple-400" />,
          title: "Kubernetes Integration",
          description: "Kubernetes Secrets Store CSI Driver, External Secrets Operator, and direct Secret object syncing. Multi-cluster support with namespace-based secret distribution and RBAC alignment."
        },
        {
          icon: <Cloud className="w-10 h-10 text-purple-400" />,
          title: "Cloud Platform SDKs",
          description: "SDKs for Python, Node.js, Go, Java, and .NET. REST API for any language. Terraform provider for infrastructure-as-code. Ansible modules for configuration management."
        },
        {
          icon: <Code className="w-10 h-10 text-purple-400" />,
          title: "CLI Tool",
          description: "Command-line interface for automation scripts, local development, and CI/CD integration. Supports environment variable injection, file-based secrets, and exec mode wrapping."
        },
        {
          icon: <Zap className="w-10 h-10 text-purple-400" />,
          title: "Webhook & Event Integration",
          description: "Webhook notifications for secret events (rotation, access, expiration). Event-driven integration with any platform via REST webhooks. Real-time secret change propagation."
        },
        {
          icon: <Shield className="w-10 h-10 text-purple-400" />,
          title: "SIEM Integration",
          description: "Forward secret access logs and security events to Splunk, Datadog, ELK Stack, Sumo Logic, and other SIEM platforms. Correlation with other security data sources."
        }
      ]}
      
      steps={[
        {
          number: 1,
          title: "Choose Integration",
          description: "Select the platform or tool to integrate with Shield Vault. Browse 50+ pre-built integrations with step-by-step setup guides. Most integrations take under 5 minutes to configure.",
          icon: <Puzzle className="w-6 h-6 text-purple-400" />
        },
        {
          number: 2,
          title: "Configure Authentication",
          description: "Set up secure authentication between your platform and Shield Vault. Options: API keys, service tokens, OAuth, OIDC federation, and IAM roles. Least-privilege access enforced.",
          icon: <Shield className="w-6 h-6 text-purple-400" />
        },
        {
          number: 3,
          title: "Map Secrets",
          description: "Define which secrets are available to each integration. Map vault paths to environment variables, file mounts, or API parameters. Configure access policies per integration.",
          icon: <Server className="w-6 h-6 text-purple-400" />
        },
        {
          number: 4,
          title: "Deploy & Test",
          description: "Deploy integration and verify secrets are injected correctly. Test with non-production secrets first. Validate access logs show expected patterns. Confirm rotation propagates correctly.",
          icon: <CheckCircle className="w-6 h-6 text-purple-400" />
        },
        {
          number: 5,
          title: "Monitor & Audit",
          description: "Monitor secret usage across all integrations from unified dashboard. Track which platforms access which secrets. Audit trails for compliance. Alert on unusual access patterns.",
          icon: <Code className="w-6 h-6 text-purple-400" />
        }
      ]}
      
      technicalSpecs={[
        {
          title: "CI/CD Integrations",
          items: [
            "GitHub Actions: shieldvault/secrets-action@v1",
            "GitLab CI: include: shieldvault-secrets.yml",
            "Jenkins: Shield Vault Credentials Plugin",
            "CircleCI: shieldvault/secrets-orb@1.0",
            "Azure DevOps: Shield Vault Pipeline Extension",
            "Bitbucket: shieldvault-pipe:secrets"
          ]
        },
        {
          title: "Infrastructure Integrations",
          items: [
            "Kubernetes: CSI Driver, External Secrets Operator",
            "Terraform: shieldvault/secrets provider",
            "Ansible: shieldvault.secrets collection",
            "Docker: secret injection via sidecar or init container",
            "Helm: Chart values from Shield Vault",
            "CloudFormation: Custom resource integration"
          ]
        },
        {
          title: "Developer SDKs & APIs",
          items: [
            "Python SDK: pip install shieldvault",
            "Node.js SDK: npm install @shieldvault/sdk",
            "Go SDK: go get github.com/shieldvault/go-sdk",
            "Java SDK: Maven Central artifact",
            ".NET SDK: NuGet package",
            "REST API: OpenAPI 3.0 specification"
          ]
        }
      ]}
      
      useCases={[
        {
          industry: "SaaS Company - GitHub Actions Integration",
          scenario: "50+ microservices using GitHub Actions with hardcoded secrets in workflows. Replaced all hardcoded secrets with Shield Vault Action integration. Secrets dynamically injected per run.",
          impact: "Zero hardcoded secrets in 50+ repos, dynamic per-run injection, complete audit trail of CI/CD secret usage"
        },
        {
          industry: "E-Commerce - Kubernetes Secret Sync",
          scenario: "15 Kubernetes clusters with secrets managed manually via kubectl. Deployed External Secrets Operator syncing from Shield Vault. Automatic rotation propagated to all clusters.",
          impact: "15 clusters synced automatically, 290 secrets managed centrally, zero-downtime rotation across clusters"
        },
        {
          industry: "FinTech - Terraform IaC Integration",
          scenario: "Infrastructure provisioned with Terraform using hardcoded credentials. Shield Vault Terraform provider injects secrets at plan/apply time. No credentials in state files.",
          impact: "Zero credentials in Terraform state, dynamic secret injection, infrastructure secrets audited and rotated automatically"
        },
        {
          industry: "Technology - Multi-Platform Integration",
          scenario: "Engineering team using GitHub Actions, Kubernetes, and Terraform. Unified all secret management through Shield Vault with native integrations for each platform.",
          impact: "Single source of truth for all secrets, unified audit trail, 80% reduction in secret management overhead"
        }
      ]}
      
      metrics={[
        {
          value: "50+",
          label: "Platform integrations",
          color: "text-purple-400"
        },
        {
          value: "< 5 min",
          label: "Integration setup time",
          color: "text-purple-400"
        },
        {
          value: "Zero",
          label: "Hardcoded secrets",
          color: "text-purple-400"
        },
        {
          value: "100%",
          label: "Secret usage audit trail",
          color: "text-purple-400"
        }
      ]}
      
      integrations={[
        { name: "GitHub Actions" },
        { name: "GitLab CI" },
        { name: "Jenkins" },
        { name: "CircleCI" },
        { name: "Azure DevOps" },
        { name: "Kubernetes" },
        { name: "Terraform" },
        { name: "Ansible" },
        { name: "Docker" },
        { name: "Helm" },
        { name: "Splunk" },
        { name: "Datadog" }
      ]}
      
      securityFeatures={[
        "Short-lived authentication tokens for integrations",
        "Least-privilege access per integration endpoint",
        "Secret injection without persistence in pipeline logs",
        "OIDC federation for cloud-native authentication",
        "Complete audit trail of all secret access via integrations",
        "IP whitelisting for integration endpoints",
        "Rate limiting per integration (1000 req/min)",
        "Automatic token rotation for long-lived integrations"
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

export default SecretsIntegrationsPage
