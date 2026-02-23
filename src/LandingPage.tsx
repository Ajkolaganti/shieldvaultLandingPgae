import { useState, useEffect, useRef } from 'react'
import {
  Shield, Key, UserCog, Lock, Radio, Puzzle,
  Check, Star,
  Zap, BarChart3,
  AlertTriangle, Globe, FileCheck, Users, TrendingUp, Clock,
  Award, ArrowRight, Database, FileText, CreditCard
} from 'lucide-react'
import {
  AWSIcon, AzureIcon, GCPIcon, GitHubIcon, GitLabIcon, JenkinsIcon,
  CircleCIIcon, BitbucketIcon, SlackIcon, MicrosoftTeamsIcon, PagerDutyIcon,
  OnPremisesIcon, HybridIcon, SIEMIcon, SAMLIcon, WebhooksIcon
} from './components/TechIcons'
import DemoForm from './components/ui/enterprise-demo-form'
import FloatingNavbar from './components/FloatingNavbar'

interface DropdownItem {
  title: string
  items: { name: string; link?: string }[]
}

const navigationItems: { title: string; dropdown?: DropdownItem }[] = [
  {
    title: 'Privilege Access Management (PAM)',
    dropdown: {
      title: 'PAM Features',
      items: [
        { name: 'Accounts Management', link: '/features/pam/accounts-management' },
        { name: 'Session Recording', link: '/features/pam/sessions' },
        { name: 'Policy Engine', link: '/features/pam/policy-engine' },
        { name: 'Approvals Workflow', link: '/features/pam/approvals-workflow' },
        { name: 'Discovery', link: '/features/pam/discovery' },
        { name: 'Compliance Reports', link: '/features/pam/compliance-reports' },
        { name: 'Threat Analytics', link: '/features/pam/threat-analytics' },
        { name: 'AI Automation', link: '/features/pam/ai-automation' },
        { name: 'Master Reconcile', link: '/features/pam/master-reconcile' },
        { name: 'JIT Activation', link: '/features/pam/jit-activation' }
      ]
    }
  },
  {
    title: 'Secrets Management',
    dropdown: {
      title: 'Secrets Features',
      items: [
        { name: 'Secrets Control Plane', link: '/features/secrets/management' },
        { name: 'Vault Management', link: '/features/secrets/vault-management' },
        { name: 'Cloud Discovery (AWS/Azure/GCP)', link: '/features/secrets/cloud-discovery' },
        { name: 'CI/CD Discovery', link: '/features/secrets/cicd-discovery' },
        { name: 'Rotation Policies', link: '/features/secrets/rotation-policies' },
        { name: 'Integrations', link: '/features/secrets/integrations' },
        { name: 'Access Control', link: '/features/secrets/access-control' },
        { name: 'Audit & Compliance', link: '/features/secrets/audit-compliance' },
        { name: 'AI Automation', link: '/features/secrets/ai-automation' },
        { name: 'Threat Analytics', link: '/features/secrets/threat-analytics' }
      ]
    }
  },
  {
    title: 'Service Account Vaulting',
    dropdown: {
      title: 'Service Account Features',
      items: [
        { name: 'Account Lifecycle', link: '/features/servicefort/account-lifecycle' },
        { name: 'Auto-provisioning', link: '/features/servicefort/auto-provisioning' },
        { name: 'Permission Management', link: '/features/servicefort/permission-management' },
        { name: 'Threat Detection', link: '/features/servicefort/threat-detection' },
        { name: 'AI Automation', link: '/features/servicefort/ai-automation' }
      ]
    }
  },
  {
    title: 'Personal Vault',
    dropdown: {
      title: 'Personal Vault Features',
      items: [
        { name: 'Secure Storage', link: '/features/personal-vault/secure-storage' },
        { name: 'Secret Management', link: '/features/personal-vault/secret-management' },
        { name: 'Password Generator', link: '/features/personal-vault/password-generator' },
        { name: 'Version History', link: '/features/personal-vault/version-history' },
        { name: 'Rotation Policies', link: '/features/personal-vault/rotation-policies' },
        { name: 'Discovery & Scanning', link: '/features/personal-vault/discovery-scanning' },
        { name: 'Session Recording', link: '/features/personal-vault/session-recording' }
      ]
    }
  },
  {
    title: 'Remote Secure Access',
    dropdown: {
      title: 'Remote Access Features',
      items: [
        { name: 'Zero-Trust Access', link: '/features/remote-access/zero-trust' },
        { name: 'Session Management', link: '/features/remote-access/session-management' },
        { name: 'Device Compliance', link: '/features/remote-access/device-compliance' },
        { name: 'MFA Integration', link: '/features/remote-access/mfa-integration' },
        { name: 'Geofencing', link: '/features/remote-access/geofencing' },
        { name: 'AI Automation', link: '/features/remote-access/ai-automation' }
      ]
    }
  },
  {
    title: 'Integrations',
    dropdown: {
      title: 'Integration Options',
      items: [
        { name: 'Cloud Platforms' },
        { name: 'CI/CD Tools' },
        { name: 'SIEM' },
        { name: 'SSO/SAML' },
        { name: 'Webhooks' }
      ]
    }
  }
]

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isVisible
}

const LandingPage = () => {
  const heroRef = useRef<HTMLElement>(null)
  const modulesRef = useRef<HTMLElement>(null)
  const aiRef = useRef<HTMLElement>(null)
  const threatRef = useRef<HTMLElement>(null)
  const complianceRef = useRef<HTMLElement>(null)
  const integrationsRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroVisible = useIntersectionObserver(heroRef)
  const modulesVisible = useIntersectionObserver(modulesRef)
  const aiVisible = useIntersectionObserver(aiRef)
  const threatVisible = useIntersectionObserver(threatRef)
  const complianceVisible = useIntersectionObserver(complianceRef)
  const integrationsVisible = useIntersectionObserver(integrationsRef)
  const metricsVisible = useIntersectionObserver(metricsRef)
  const testimonialsVisible = useIntersectionObserver(testimonialsRef)
  const ctaVisible = useIntersectionObserver(ctaRef)

  return (
    <div className="min-h-screen relative">
      {/* Premium Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full opacity-[0.35]" style={{ background: 'radial-gradient(circle, rgba(191,219,254,0.4) 0%, transparent 70%)' }} />
        <div className="absolute top-[30%] -left-[300px] w-[700px] h-[700px] rounded-full opacity-[0.25]" style={{ background: 'radial-gradient(circle, rgba(199,210,254,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.2]" style={{ background: 'radial-gradient(circle, rgba(221,214,254,0.35) 0%, transparent 70%)' }} />
      </div>

      {/* Floating Navigation */}
      <FloatingNavbar navigationItems={navigationItems} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Secure Your Infrastructure.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">Effortlessly.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed">
                Enterprise-grade PAM, Secrets Management, and Zero-Trust Access in one unified platform.
              </p>
              <p className="text-lg text-gray-500 mb-10">
                Automate 87% of security operations, reduce audit prep from weeks to days, and achieve continuous compliance with AI-powered automation.
              </p>

              {/* Compliance Badges */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-400 mb-4">Enterprise-grade security and compliance</p>
                <div className="flex flex-wrap items-center gap-4">
                  {[
                    { icon: Shield, label: 'SOC 2 Type II' },
                    { icon: Award, label: 'ISO 27001' },
                    { icon: FileCheck, label: 'HIPAA' },
                    { icon: Lock, label: 'GDPR' }
                  ].map((badge, idx) => {
                    const BadgeIcon = badge.icon
                    return (
                      <div key={idx} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                        <BadgeIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-600 font-medium">{badge.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-semibold text-lg">Shield Vault</h3>
                          <p className="text-xs text-gray-500">Live Security Overview</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Real-time Activity Feed */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 bg-green-50 rounded-lg p-3 border border-green-100 animate-fade-in">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 border border-green-200">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-900">Secret Rotation Complete</span>
                            <span className="text-xs text-gray-400">2s ago</span>
                          </div>
                          <p className="text-xs text-gray-500">AWS Production DB rotated successfully</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 bg-blue-50 rounded-lg p-3 border border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 border border-blue-200">
                          <Key className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-900">New Access Request</span>
                            <span className="text-xs text-gray-400">12s ago</span>
                          </div>
                          <p className="text-xs text-gray-500">admin@company.com • Production SSH</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 bg-purple-50 rounded-lg p-3 border border-purple-100">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 border border-purple-200">
                          <Zap className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-900">AI Policy Optimized</span>
                            <span className="text-xs text-gray-400">1m ago</span>
                          </div>
                          <p className="text-xs text-gray-500">3 policies updated for better security</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
                        <div className="text-xs text-gray-500">Active Sessions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">98.5%</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">12.8K</div>
                        <div className="text-xs text-gray-500">Secrets</div>
                      </div>
                    </div>

                    {/* Security Status */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-900">Security Posture</span>
                        <span className="text-2xl font-bold text-green-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 h-full rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>Excellent</span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-green-600">+2% this week</span>
                        </span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-gray-500">Threats Blocked</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">2,847</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-gray-500">Avg Response</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">2.4s</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Core Modules */}
      <section
        ref={modulesRef}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Complete Security Platform in One Solution
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Privilege Access Management',
                features: ['200+ account management', 'Session recording', 'MFA enforcement', 'Real-time threat detection'],
                stats: '14 integrated features',
                color: 'blue',
                image: '/PAM.jpeg'
              },
              {
                icon: Key,
                title: 'Secrets Management',
                features: ['12,847 secrets managed', 'Cloud/CI/CD discovery', 'Auto-rotation (98% success)', 'Policy-based enforcement'],
                stats: '22 complete views',
                color: 'purple',
                image: '/SecretManagement.jpeg'
              },
              {
                icon: UserCog,
                title: 'Service Account Vaulting',
                features: ['Lifecycle automation', 'Permission management', 'Anomaly detection', 'Compliance monitoring'],
                stats: '90% overhead reduction',
                color: 'pink',
                image: '/SAV.jpeg'
              },
              {
                icon: Lock,
                title: 'Personal Vault',
                features: ['6 secret types', 'Password generator', 'Version history', 'Encryption at rest'],
                stats: '20 commands implemented',
                color: 'green',
                image: '/PersonalVault.jpeg'
              },
              {
                icon: Radio,
                title: 'Remote Secure Access',
                features: ['Zero-trust architecture', 'Device compliance', 'Geofencing', 'Session monitoring'],
                stats: '14 feature pages',
                color: 'indigo',
                image: '/RemoteAccess.jpeg'
              },
              {
                icon: Puzzle,
                title: 'Integrations',
                features: ['AWS/Azure/GCP', 'GitHub/GitLab/Jenkins', 'SIEM', 'SSO/SAML'],
                stats: '15+ integrations',
                color: 'orange'
              }
            ].map((module, idx) => {
              const Icon = module.icon
              return (
                <div
                  key={idx}
                  className={`group relative ${modulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-blue-400/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg border border-gray-100/80">
                    {module.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={module.image} 
                          alt={module.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute top-3 right-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white shadow-lg border border-white/20`}>
                            {module.stats}
                          </div>
                        </div>
                          <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shadow-lg border border-white/20`}>
                            <Icon className="w-6 h-6 text-gray-200" />
                          </div>
                      </div>
                    )}
                    <div className="p-6">
                      {!module.image && (
                        <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center shadow-sm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-blue-100">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 shadow-sm border border-blue-100">
                        {module.stats}
                      </div>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 transition-all">{module.title}</h3>
                      <ul className="space-y-3 mb-4">
                        {module.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-gray-600 flex items-start space-x-2 group-hover:text-gray-800 transition-colors">
                          <div className="mt-0.5">
                            <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          </div>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Learn more</span>
                        <span className="text-blue-600 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: AI & Automation */}
      <section
        ref={aiRef}
        className="py-24 relative overflow-hidden z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              AI-Powered Security Automation
            </h2>
            <p className="text-xl text-gray-500">Reduce manual operations by 87%</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`group relative transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agentic AI Agents</h3>
                <ul className="space-y-4">
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Policy Optimization Agent</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Task completion</div>
                      <div className="text-sm font-bold text-blue-600">65%</div>
                    </div>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Compliance Auditor Agent</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Report generation</div>
                      <div className="text-sm font-bold text-blue-600">100%</div>
                    </div>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Anomaly Detection Agent</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Accounts monitored</div>
                      <div className="text-sm font-bold text-blue-600">50+</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`group relative transition-all duration-1000 delay-200 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automation Rules</h3>
                <ul className="space-y-4">
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Auto-revoke risky sessions</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Success rate</div>
                      <div className="text-sm font-bold text-blue-600">98.5%</div>
                    </div>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Credential rotation</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Success rate</div>
                      <div className="text-sm font-bold text-blue-600">99.2%</div>
                    </div>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Approval escalation</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Success rate</div>
                      <div className="text-sm font-bold text-blue-600">96.8%</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`group relative transition-all duration-1000 delay-400 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Insights</h3>
                <ul className="space-y-4">
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block mb-1">Risk detection</span>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Confidence</div>
                      <div className="text-sm font-bold text-blue-600">96%</div>
                    </div>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block">Optimization recommendations</span>
                  </li>
                  <li className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900 block">Compliance gap analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-xl p-6 text-center transition-all duration-1000 delay-600 border border-gray-100 shadow-sm ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-lg text-gray-500">
              <span className="font-semibold text-gray-900">156+ rule executions/month</span> |{' '}
              <span className="font-semibold text-gray-900">6-7 hours saved</span> per team member
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Threat Analytics */}
      <section
        ref={threatRef}
        className="py-24 relative overflow-hidden z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${threatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Advanced Threat Detection & Response
            </h2>
            <p className="text-xl text-gray-500">
              AI-powered security monitoring that stops threats before they become breaches
            </p>
          </div>

          {/* Image and Features Grid */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${threatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image Side */}
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/advthreat.jpeg" 
                      alt="Advanced Threat Detection" 
                      className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Details Side */}
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Threat Intelligence</h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Our AI-powered threat detection engine analyzes millions of data points in real-time to identify and neutralize security threats before they impact your business.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Anomaly Detection',
                      description: 'AI identifies unusual patterns in login behavior, MFA failures, and privilege escalation attempts',
                      icon: AlertTriangle,
                      color: 'yellow'
                    },
                    {
                      title: 'Behavioral Analysis',
                      description: 'Machine learning models analyze user behavior to detect compromised accounts and insider threats',
                      icon: TrendingUp,
                      color: 'blue'
                    },
                    {
                      title: 'Automated Response',
                      description: 'Instantly block suspicious activity, trigger MFA, or revoke access based on risk scores',
                      icon: Zap,
                      color: 'purple'
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon
                    const getColorClasses = (color: string) => {
                      const colors: Record<string, string> = {
                        yellow: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400',
                        blue: 'bg-blue-500/20 border-blue-400/30 text-blue-400',
                        purple: 'bg-purple-500/20 border-purple-400/30 text-purple-400'
                      }
                      return colors[color] || colors.blue
                    }
                    return (
                      <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border ${getColorClasses(item.color)}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Threat Detection Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Login Pattern Analysis',
                items: ['Temporal monitoring', 'Geographic tracking', 'Device recognition', 'Risk scoring'],
                icon: Globe,
                color: 'blue'
              },
              {
                title: 'Admin Activity Monitoring',
                items: ['Complete audit trail', 'Duration tracking', 'Impact measurement', 'Session recording'],
                icon: Shield,
                color: 'purple'
              },
              {
                title: 'Geofencing',
                items: ['Location-based access', 'Distance alerts', 'Auto-blocking', 'MFA triggers'],
                icon: Radio,
                color: 'cyan'
              },
              {
                title: 'Threat Intelligence',
                items: ['Real-time feeds', 'IP reputation', 'Attack signatures', 'Zero-day detection'],
                icon: Database,
                color: 'indigo'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-1000 ${threatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:scale-[1.02] transition-all h-full">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:rotate-3 transition-transform">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm text-gray-600 flex items-start space-x-2 bg-gray-50 rounded-lg p-2 border border-gray-100 hover:border-gray-200 transition-colors">
                          <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Real-time Threat Map */}
          <div className={`transition-all duration-1000 delay-600 ${threatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Details Side */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-400 font-semibold">Live Monitoring</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Real-time Threat Intelligence</h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Monitor security events across your entire infrastructure in real-time. Our global threat intelligence network processes millions of events per second to keep you protected.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span className="text-xs text-gray-500">Blocked Threats</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">2,847</div>
                    <div className="text-xs text-gray-400 mt-1">Last 24 hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-xs text-gray-500">Active Sessions</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600">156</div>
                    <div className="text-xs text-gray-400 mt-1">Currently monitored</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <span className="text-xs text-gray-500">Anomalies Detected</span>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600">23</div>
                    <div className="text-xs text-gray-400 mt-1">Under investigation</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-gray-600" />
                      <span className="text-xs text-gray-500">Risk Score</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">Low</div>
                    <div className="text-xs text-green-600 mt-1">98% secure</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  {[
                    { icon: Globe, text: 'Global threat intelligence network', color: 'blue' },
                    { icon: Zap, text: 'Sub-second threat response time', color: 'purple' },
                    { icon: Database, text: 'Millions of events processed per second', color: 'cyan' }
                  ].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <div key={idx} className="flex items-center space-x-3 text-gray-600">
                        <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/20 border border-${item.color}-400/30 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 text-${item.color}-400`} />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/realtime.jpeg" 
                      alt="Real-time Threat Map" 
                      className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Compliance & Audit */}
      <section
        ref={complianceRef}
        className="py-32 relative overflow-hidden z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <div className="px-6 py-2 bg-blue-50 rounded-full border border-blue-100 shadow-sm">
                <span className="text-sm font-semibold text-blue-700">🏆 Industry-Leading Compliance</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
              Reduce audit prep from <span className="text-gray-900 font-bold">4 weeks to 2 days</span> with automated compliance reporting, 
              continuous monitoring, and 100% evidence completeness across all major frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 font-semibold">365 Days Audit-Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700 font-semibold">98% Compliance Score</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-gray-700 font-semibold">$150K+ Savings per Audit</span>
              </div>
            </div>
          </div>

          {/* Image and Details Section */}
          <div className={`mb-20 transition-all duration-1000 delay-200 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image Side */}
              <div className="order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/engrcomp.jpeg" 
                      alt="Enterprise-Grade Compliance Visualization" 
                      className="w-full h-auto rounded-2xl shadow-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
              
              {/* Details Side */}
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Automated Compliance at Scale</h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Transform your compliance workflow with intelligent automation that continuously monitors, collects evidence, 
                  and generates audit-ready reports across all major frameworks.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-100">
                        <Database className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Continuous Evidence Collection</h4>
                        <p className="text-sm text-gray-500">Automatically aggregate compliance evidence from all security systems with 100% completeness</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-100">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Real-Time Compliance Dashboard</h4>
                        <p className="text-sm text-gray-500">Live monitoring with 98% average compliance score across SOC 2, ISO 27001, and more</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-5 border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-100">
                        <FileText className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">One-Click Report Generation</h4>
                        <p className="text-sm text-gray-500">Generate comprehensive audit reports in under 1 minute with complete evidence trails</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Frameworks Grid */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold text-gray-900 text-center mb-10 transition-all duration-1000 delay-200 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Supported Compliance Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'SOC 2 Type II', icon: Shield, color: 'blue' },
                { name: 'ISO 27001', icon: Award, color: 'purple' },
                { name: 'PCI-DSS 3.2.1', icon: CreditCard, color: 'green' },
                { name: 'HIPAA', icon: FileCheck, color: 'red' },
                { name: 'GDPR', icon: Globe, color: 'amber' },
                { name: 'NIST 800-53', icon: Lock, color: 'indigo' }
              ].map((cert, idx) => {
                const Icon = cert.icon
                return (
                  <div
                    key={idx}
                    className={`group relative transition-all duration-1000 ${complianceVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:scale-110 transition-all shadow-sm">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-sm font-bold text-gray-900">{cert.name}</div>
                      <div className="mt-2 flex items-center justify-center space-x-1">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-500">Certified</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Key Compliance Features */}
          <div className={`mb-20 transition-all duration-1000 delay-400 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Comprehensive Compliance Capabilities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: 'Automated Evidence Collection',
                  description: 'Continuously aggregate compliance evidence from all security systems with control mappings and timestamps.',
                  stat: '100% Completeness'
                },
                {
                  icon: TrendingUp,
                  title: 'Real-Time Compliance Dashboard',
                  description: 'Live compliance scoring (0-100%) with control-level status tracking and drill-down capabilities.',
                  stat: '98% Avg Score'
                },
                {
                  icon: FileText,
                  title: 'One-Click Report Generation',
                  description: 'Generate complete audit reports in seconds. Export to PDF, Excel, JSON with executive summaries.',
                  stat: '< 1 Min Generation'
                },
                {
                  icon: Clock,
                  title: 'Continuous Monitoring',
                  description: '24/7 monitoring with automatic alerts for policy violations, drift, and control failures.',
                  stat: '365 Days Ready'
                },
                {
                  icon: AlertTriangle,
                  title: 'AI-Powered Gap Analysis',
                  description: 'Identify compliance gaps with severity ratings and step-by-step remediation plans.',
                  stat: '96% Detection'
                },
                {
                  icon: FileCheck,
                  title: 'Immutable Audit Trails',
                  description: 'Tamper-proof audit logs with millisecond timestamps and blockchain verification.',
                  stat: 'Zero Tampering'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all h-full shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                        <span className="text-xs font-bold text-blue-600">{feature.stat}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`mb-20 transition-all duration-1000 delay-600 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '4 weeks → 2 days', label: 'Audit Prep Reduction' },
                  { value: '100%', label: 'Evidence Completeness' },
                  { value: '8+', label: 'Frameworks Supported' },
                  { value: '$150K+', label: 'Savings per Audit' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className={`mb-20 transition-all duration-1000 delay-800 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Shield Vault Security Architecture
            </h3>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
                <img 
                  src="/SV_diagram.jpeg" 
                  alt="Shield Vault Architecture Diagram" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Security & Audit Features */}
          <div className={`mb-20 transition-all duration-1000 delay-1000 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Security & Audit Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Immutable audit trails with millisecond timestamps',
                'Automated compliance reporting',
                'Policy-based access control',
                'Evidence collection automation',
                'User attribution tracking',
                'Tamper detection & blockchain verification',
                'Real-time policy violation alerts',
                'Continuous compliance monitoring',
                'Role-based report access',
                'Encrypted evidence storage (AES-256)',
                'SIEM integration (Splunk, Datadog)',
                'Automated gap remediation guidance'
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg p-4 flex items-start space-x-3 hover:shadow-md transition-all border border-gray-100 hover:border-gray-200 shadow-sm"
                >
                  <FileCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className={`transition-all duration-1000 delay-1200 ${complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-12 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Achieve Continuous Compliance?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Maintain audit-ready state 365 days a year with Shield Vault's automated compliance platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  <span className="flex items-center justify-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Download Compliance Guide</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Integrations Ecosystem */}
      <section
        ref={integrationsRef}
        className="py-24 relative overflow-hidden z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${integrationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connect Your Entire Tech Stack
            </h2>
          </div>
          <div className="space-y-12">
            {[
              {
                title: 'Cloud Platforms',
                items: [
                  { name: 'AWS', icon: AWSIcon },
                  { name: 'Azure', icon: AzureIcon },
                  { name: 'GCP', icon: GCPIcon },
                  { name: 'On-Premises', icon: OnPremisesIcon },
                  { name: 'Hybrid', icon: HybridIcon }
                ],
                direction: 'left'
              },
              {
                title: 'CI/CD Tools',
                items: [
                  { name: 'GitHub', icon: GitHubIcon },
                  { name: 'GitLab', icon: GitLabIcon },
                  { name: 'Jenkins', icon: JenkinsIcon },
                  { name: 'CircleCI', icon: CircleCIIcon },
                  { name: 'Azure DevOps', icon: AzureIcon },
                  { name: 'Bitbucket', icon: BitbucketIcon }
                ],
                direction: 'right'
              },
              {
                title: 'Enterprise Tools',
                items: [
                  { name: 'SIEM', icon: SIEMIcon },
                  { name: 'SSO/SAML', icon: SAMLIcon },
                  { name: 'Slack', icon: SlackIcon },
                  { name: 'Teams', icon: MicrosoftTeamsIcon },
                  { name: 'PagerDuty', icon: PagerDutyIcon },
                  { name: 'Webhooks', icon: WebhooksIcon }
                ],
                direction: 'left'
              }
            ].map((category, catIdx) => {
              // Duplicate items for seamless infinite scroll
              const duplicatedItems = [...category.items, ...category.items, ...category.items]
              
              return (
                <div
                  key={catIdx}
                  className={`transition-all duration-1000 ${integrationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${catIdx * 200}ms` }}
                >
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  {/* Scrolling container */}
                  <div className="overflow-hidden relative">
                    <div 
                      className={`flex gap-6 ${category.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                      style={{ width: 'fit-content' }}
                    >
                      {duplicatedItems.map((item, itemIdx) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={itemIdx}
                            className="group relative flex-shrink-0"
                            style={{ width: '180px' }}
                          >
                            <div className="bg-white rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg h-full">
                              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                                <ItemIcon className="w-10 h-10 text-gray-600 group-hover:text-gray-900 transition-colors" />
                              </div>
                              <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{item.name}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Technical Metrics */}
      <section
        ref={metricsRef}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Built for Scale & Performance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: 'Secrets Managed', value: '12,847', icon: Key },
              { label: 'Rotation Success Rate', value: '98%', icon: Check },
              { label: 'Avg Approval Time', value: '2.4h', icon: Clock },
              { label: 'Modules Built', value: '1,608', icon: Puzzle },
              { label: 'Compilation Errors', value: '0', icon: Check },
              { label: 'Build Time', value: '4.26s', icon: Zap }
            ].map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-1000 ${metricsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-blue-400/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 hover:scale-[1.02] transition-all">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4 shadow-sm border border-blue-100">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Customer Testimonials */}
      <section
        ref={testimonialsRef}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Security Professionals Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Shield Vault reduced our manual security operations by 87%, allowing our team to focus on strategic initiatives.',
                author: 'Sarah Chen',
                role: 'CISO, TechCorp'
              },
              {
                quote: 'Our compliance posture improved dramatically with automated reporting and real-time threat detection.',
                author: 'Michael Rodriguez',
                role: 'Security Director, FinanceHub'
              },
              {
                quote: 'The AI-powered threat analytics caught anomalies we would have missed, preventing potential breaches.',
                author: 'David Kim',
                role: 'Head of Security, CloudScale'
              }
            ].map((testimonial, idx) => {
              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-blue-400/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:scale-[1.02] transition-all">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <section
        ref={ctaRef}
        className="py-24 relative overflow-hidden min-h-screen flex items-center justify-center z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className={`max-w-2xl mx-auto transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <DemoForm 
              onSubmit={(email, company, teamSize) => {
                console.log('Demo request:', { email, company, teamSize });
                // Handle demo request submission
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-12 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Privilege Access Management', 'Secrets Management', 'Service Account Vaulting', 'Personal Vault', 'Remote Secure Access', 'Integrations'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                {['AI Automation', 'Threat Analytics', 'Compliance', 'Integrations'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Documentation', 'API Reference', 'Blog', 'Support'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Privacy Policy'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2026 Shield Vault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

