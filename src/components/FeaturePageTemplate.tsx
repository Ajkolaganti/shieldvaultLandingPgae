import { ReactNode } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface Step {
  number: number
  title: string
  description: string
  icon: ReactNode
}

interface UseCase {
  industry: string
  scenario: string
  impact: string
}

interface Metric {
  value: string
  label: string
  color: string
}

interface Integration {
  name: string
  logo?: string
}

interface FeaturePageProps {
  // Hero Section
  heroIcon: ReactNode
  heroTitle: string
  heroSubtitle: string
  heroGradient: string

  // What It Does
  overview: string
  problem: string
  benefit: string

  // Key Features
  keyFeatures: Feature[]

  // How It Works
  steps: Step[]

  // Technical Capabilities
  technicalSpecs: {
    title: string
    items: string[]
  }[]

  // Use Cases
  useCases: UseCase[]

  // Benefits & Metrics
  metrics: Metric[]

  // Integrations
  integrations: Integration[]

  // Security & Compliance
  securityFeatures: string[]
  complianceBadges: string[]
}

const FeaturePageTemplate = ({
  heroIcon,
  heroTitle,
  heroSubtitle,
  heroGradient,
  overview,
  problem,
  benefit,
  keyFeatures,
  steps,
  useCases,
  metrics,
  integrations,
  securityFeatures,
  complianceBadges
}: FeaturePageProps) => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F4F7FB 0%, #EEF2F8 50%, #FFFFFF 100%)', backgroundAttachment: 'fixed' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">← Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm">
                Request Demo
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br ${heroGradient}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-block animate-float">
              {heroIcon}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all transform hover:scale-105 shadow-md">
                Try It Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What It Does</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{overview}</p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Problem</h3>
                <p className="text-gray-600">{problem}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
                <p className="text-gray-600">{benefit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center space-x-2 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-sm border border-blue-100">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    {step.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>
                <p className="text-gray-600 mb-4">{useCase.scenario}</p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-blue-700 font-semibold">{useCase.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits & Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {metrics.map((metric, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compatibility */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Integration & Compatibility</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
                  <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{integration.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Security & Compliance</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Features</h3>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Standards</h3>
                <div className="grid grid-cols-2 gap-4">
                  {complianceBadges.map((badge, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm">
                      <div className="text-gray-900 font-semibold">{badge}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Start using {heroTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join hundreds of companies securing their infrastructure
            </p>
            <form className="bg-white rounded-xl p-8 space-y-4 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Work Email"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 hover:scale-105 transition-all text-lg shadow-md"
              >
                Start Free Trial
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required • 14-day free trial • Setup in minutes
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Shield Vault. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default FeaturePageTemplate

