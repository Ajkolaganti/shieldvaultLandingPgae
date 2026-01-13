import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AccountsManagementPage from './pages/features/pam/AccountsManagement'
import SessionsPage from './pages/features/pam/Sessions'
import SecretsManagementPage from './pages/features/secrets/SecretsManagement'
import AIAutomationPage from './pages/features/ai-automation/AIAutomation'
import ServiceFortPage from './pages/features/servicefort/ServiceFort'
import RemoteAccessPage from './pages/features/remote-access/RemoteAccess'
import CompliancePage from './pages/features/compliance/Compliance'
import PersonalVaultPage from './pages/features/personal-vault/PersonalVault'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* PAM Feature Pages */}
        <Route path="/features/pam/accounts-management" element={<AccountsManagementPage />} />
        <Route path="/features/pam/sessions" element={<SessionsPage />} />
        
        {/* Secrets Management */}
        <Route path="/features/secrets/management" element={<SecretsManagementPage />} />
        
        {/* AI & Automation */}
        <Route path="/features/ai-automation" element={<AIAutomationPage />} />
        
        {/* ServiceFort (Service Account Vaulting) */}
        <Route path="/features/servicefort" element={<ServiceFortPage />} />
        
        {/* Remote Secure Access */}
        <Route path="/features/remote-access" element={<RemoteAccessPage />} />
        
        {/* Compliance & Audit */}
        <Route path="/features/compliance" element={<CompliancePage />} />
        
        {/* Personal Vault */}
        <Route path="/features/personal-vault" element={<PersonalVaultPage />} />
      </Routes>
    </Router>
  )
}

export default App

