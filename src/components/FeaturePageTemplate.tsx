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
  heroImage?: string

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
  heroImage,
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
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">← Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-white/10 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/20 transition-all border border-white/20">
                Request Demo
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br ${heroGradient}`}>
        {heroImage && (
          <>
            <div className="absolute inset-0">
              <img src={heroImage} alt={heroTitle} className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60"></div>
          </>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-block animate-float">
              {heroIcon}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 drop-shadow-lg">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl border border-white/20 hover:bg-white/20">
                Try It Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2 shadow-xl">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">What It Does</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">{overview}</p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="glass rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Problem</h3>
                <p className="text-gray-300">{problem}</p>
              </div>
              <div className="glass rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                <p className="text-gray-300">{benefit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-white/10 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative glass rounded-xl p-6 border border-white/10 hover:scale-105 transition-all">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm">
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
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg border border-white/20">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow glass rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    {step.icon}
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="glass rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.scenario}</p>
                <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                  <p className="text-white font-semibold">{useCase.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Metrics */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Benefits & Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {metrics.map((metric, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-0.5 bg-white/10 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative glass rounded-xl p-6 text-center border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compatibility */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Integration & Compatibility</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur opacity-15 group-hover:opacity-35 transition duration-300"></div>
                <div className="relative glass rounded-lg p-4 text-center border border-white/10 hover:scale-105 transition-transform">
                  <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{integration.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Security & Compliance</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Security Features</h3>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Compliance Standards</h3>
                <div className="grid grid-cols-2 gap-4">
                  {complianceBadges.map((badge, idx) => (
                    <div key={idx} className="glass rounded-lg p-4 text-center border border-white/20">
                      <div className="text-white font-semibold">{badge}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start using {heroTitle}
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Join hundreds of companies securing their infrastructure
            </p>
            <form className="glass rounded-xl p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Work Email"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all text-lg border border-white/20 hover:bg-white/20"
              >
                Start Free Trial
              </button>
              <p className="text-sm text-gray-300 mt-4">
                No credit card required • 14-day free trial • Setup in minutes
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
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

