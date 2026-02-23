import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

// PAM Pages
import AccountsManagementPage from './pages/features/pam/AccountsManagement'
import SessionsPage from './pages/features/pam/Sessions'
import PolicyEnginePage from './pages/features/pam/PolicyEngine'
import ApprovalsWorkflowPage from './pages/features/pam/ApprovalsWorkflow'
import DiscoveryPage from './pages/features/pam/Discovery'
import ComplianceReportsPage from './pages/features/pam/ComplianceReports'
import ThreatAnalyticsPage from './pages/features/pam/ThreatAnalytics'
import PAMAIAutomationPage from './pages/features/pam/PAMAIAutomation'
import MasterReconcilePage from './pages/features/pam/MasterReconcile'
import JITActivationPage from './pages/features/pam/JITActivation'

// Secrets Management Pages
import SecretsManagementPage from './pages/features/secrets/SecretsManagement'
import VaultManagementPage from './pages/features/secrets/VaultManagement'
import CloudDiscoveryPage from './pages/features/secrets/CloudDiscovery'
import CICDDiscoveryPage from './pages/features/secrets/CICDDiscovery'
import RotationPoliciesPage from './pages/features/secrets/RotationPolicies'
import SecretsIntegrationsPage from './pages/features/secrets/SecretsIntegrations'
import SecretsAccessControlPage from './pages/features/secrets/SecretsAccessControl'
import SecretsAuditCompliancePage from './pages/features/secrets/SecretsAuditCompliance'
import SecretsAIAutomationPage from './pages/features/secrets/SecretsAIAutomation'
import SecretsThreatAnalyticsPage from './pages/features/secrets/SecretsThreatAnalytics'

// ServiceFort (Service Account Vaulting) Pages
import ServiceFortPage from './pages/features/servicefort/ServiceFort'
import AccountLifecyclePage from './pages/features/servicefort/AccountLifecycle'
import AutoProvisioningPage from './pages/features/servicefort/AutoProvisioning'
import PermissionManagementPage from './pages/features/servicefort/PermissionManagement'
import ThreatDetectionPage from './pages/features/servicefort/ThreatDetection'
import ServiceFortAIAutomationPage from './pages/features/servicefort/ServiceFortAIAutomation'

// Personal Vault Pages
import PersonalVaultPage from './pages/features/personal-vault/PersonalVault'
import SecureStoragePage from './pages/features/personal-vault/SecureStorage'
import PVSecretManagementPage from './pages/features/personal-vault/PVSecretManagement'
import PasswordGeneratorPage from './pages/features/personal-vault/PasswordGenerator'
import VersionHistoryPage from './pages/features/personal-vault/VersionHistory'
import PVRotationPoliciesPage from './pages/features/personal-vault/PVRotationPolicies'
import DiscoveryScanningPage from './pages/features/personal-vault/DiscoveryScanning'
import PVSessionRecordingPage from './pages/features/personal-vault/PVSessionRecording'

// Remote Secure Access Pages
import RemoteAccessPage from './pages/features/remote-access/RemoteAccess'
import ZeroTrustAccessPage from './pages/features/remote-access/ZeroTrustAccess'
import RASessionManagementPage from './pages/features/remote-access/RASessionManagement'
import DeviceCompliancePage from './pages/features/remote-access/DeviceCompliance'
import MFAIntegrationPage from './pages/features/remote-access/MFAIntegration'
import GeofencingPage from './pages/features/remote-access/Geofencing'
import RAAIAutomationPage from './pages/features/remote-access/RAAIAutomation'

// AI & Automation
import AIAutomationPage from './pages/features/ai-automation/AIAutomation'

// Compliance & Audit
import CompliancePage from './pages/features/compliance/Compliance'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* PAM Feature Pages */}
        <Route path="/features/pam/accounts-management" element={<AccountsManagementPage />} />
        <Route path="/features/pam/sessions" element={<SessionsPage />} />
        <Route path="/features/pam/policy-engine" element={<PolicyEnginePage />} />
        <Route path="/features/pam/approvals-workflow" element={<ApprovalsWorkflowPage />} />
        <Route path="/features/pam/discovery" element={<DiscoveryPage />} />
        <Route path="/features/pam/compliance-reports" element={<ComplianceReportsPage />} />
        <Route path="/features/pam/threat-analytics" element={<ThreatAnalyticsPage />} />
        <Route path="/features/pam/ai-automation" element={<PAMAIAutomationPage />} />
        <Route path="/features/pam/master-reconcile" element={<MasterReconcilePage />} />
        <Route path="/features/pam/jit-activation" element={<JITActivationPage />} />
        
        {/* Secrets Management */}
        <Route path="/features/secrets/management" element={<SecretsManagementPage />} />
        <Route path="/features/secrets/vault-management" element={<VaultManagementPage />} />
        <Route path="/features/secrets/cloud-discovery" element={<CloudDiscoveryPage />} />
        <Route path="/features/secrets/cicd-discovery" element={<CICDDiscoveryPage />} />
        <Route path="/features/secrets/rotation-policies" element={<RotationPoliciesPage />} />
        <Route path="/features/secrets/integrations" element={<SecretsIntegrationsPage />} />
        <Route path="/features/secrets/access-control" element={<SecretsAccessControlPage />} />
        <Route path="/features/secrets/audit-compliance" element={<SecretsAuditCompliancePage />} />
        <Route path="/features/secrets/ai-automation" element={<SecretsAIAutomationPage />} />
        <Route path="/features/secrets/threat-analytics" element={<SecretsThreatAnalyticsPage />} />
        
        {/* ServiceFort (Service Account Vaulting) */}
        <Route path="/features/servicefort" element={<ServiceFortPage />} />
        <Route path="/features/servicefort/account-lifecycle" element={<AccountLifecyclePage />} />
        <Route path="/features/servicefort/auto-provisioning" element={<AutoProvisioningPage />} />
        <Route path="/features/servicefort/permission-management" element={<PermissionManagementPage />} />
        <Route path="/features/servicefort/threat-detection" element={<ThreatDetectionPage />} />
        <Route path="/features/servicefort/ai-automation" element={<ServiceFortAIAutomationPage />} />
        
        {/* Personal Vault */}
        <Route path="/features/personal-vault" element={<PersonalVaultPage />} />
        <Route path="/features/personal-vault/secure-storage" element={<SecureStoragePage />} />
        <Route path="/features/personal-vault/secret-management" element={<PVSecretManagementPage />} />
        <Route path="/features/personal-vault/password-generator" element={<PasswordGeneratorPage />} />
        <Route path="/features/personal-vault/version-history" element={<VersionHistoryPage />} />
        <Route path="/features/personal-vault/rotation-policies" element={<PVRotationPoliciesPage />} />
        <Route path="/features/personal-vault/discovery-scanning" element={<DiscoveryScanningPage />} />
        <Route path="/features/personal-vault/session-recording" element={<PVSessionRecordingPage />} />
        
        {/* Remote Secure Access */}
        <Route path="/features/remote-access" element={<RemoteAccessPage />} />
        <Route path="/features/remote-access/zero-trust" element={<ZeroTrustAccessPage />} />
        <Route path="/features/remote-access/session-management" element={<RASessionManagementPage />} />
        <Route path="/features/remote-access/device-compliance" element={<DeviceCompliancePage />} />
        <Route path="/features/remote-access/mfa-integration" element={<MFAIntegrationPage />} />
        <Route path="/features/remote-access/geofencing" element={<GeofencingPage />} />
        <Route path="/features/remote-access/ai-automation" element={<RAAIAutomationPage />} />
        
        {/* AI & Automation */}
        <Route path="/features/ai-automation" element={<AIAutomationPage />} />
        
        {/* Compliance & Audit */}
        <Route path="/features/compliance" element={<CompliancePage />} />
      </Routes>
    </Router>
  )
}

export default App

