import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, Search, Calendar, Tag, Building2, TrendingUp, Globe, Users, CheckCircle, BarChart, Edit3, Send, BarChart3, Image as ImageIcon, Zap, Shield, Target } from 'lucide-react'

export function XyntraaHomepage() {
  const latestPressReleases = [
    {
      id: 1,
      slug: "global-tech-leader-announces-revolutionary-ai-platform",
      title: "Global Tech Leader Announces Revolutionary AI Platform",
      company: "TechCorp International",
      category: "News",
      summary: "Introduction to Advanced AI Technology Artificial intelligence represents a fundamental shift in how enterprises operate and make decisions.",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      slug: "healthcare-innovation-breakthrough-new-treatment-shows-promise",
      title: "Healthcare Innovation Breakthrough: New Treatment Shows Promise",
      company: "MediCare Solutions",
      category: "Healthcare",
      summary: "Revolutionary medical treatment offers new hope for patients worldwide with unprecedented success rates in clinical trials.",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      slug: "sustainable-energy-initiative-launched-by-global-consortium",
      title: "Sustainable Energy Initiative Launched by Global Consortium",
      company: "Green Energy Alliance",
      category: "Sustainability",
      summary: "Major international partnership aims to accelerate transition to renewable energy sources with $10 billion investment commitment.",
      date: "1 day ago",
      image: "https://images.unsplash.com/photo-1473341303174-971c2164b37a?w=800&h=600&fit=crop&crop=center"
    }
  ]

  const howItWorks = [
    {
      icon: Edit3,
      title: "Prepare",
      description: "Structure headlines, hero imagery, and compliance-friendly body copy in one editor."
    },
    {
      icon: Send,
      title: "Distribute",
      description: "Publish to your Xyntraa archive with categories that map cleanly to search and social previews."
    },
    {
      icon: BarChart3,
      title: "Track",
      description: "Measure pickup momentum with engagement-friendly layouts designed for scanning on mobile and desktop."
    }
  ]

  const trustedLogos = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center" },
    { name: "MediCare", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center" },
    { name: "GreenEnergy", logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100&h=100&fit=crop&crop=center" },
    { name: "FinanceHub", logo: "https://images.unsplash.com/photo-1611974789853-9c2a0a72399a?w=100&h=100&fit=crop&crop=center" },
    { name: "RetailMax", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center" },
    { name: "CloudNet", logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side */}
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white">
                Press release distribution
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Reach journalists, readers, and search with wire-ready announcements.
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                A simple newsroom-style publication for announcements, coverage, and media updates on Xyntraa.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors"
                >
                  Submit a release
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/press"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
                >
                  Browse latest news
                </Link>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.magnific.com/free-photo/documents-paperwork-business-strategy-concept_53876-120383.jpg"
                  alt="Press release distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Xyntraa works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A calm, repeatable flow from draft to distribution—without turning your newsroom into a generic feed template.
          </p>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive press release distribution solutions for every need
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Distribution</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Reach thousands of media outlets, journalists, and influencers worldwide with our comprehensive distribution network.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  10,000+ media outlets
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  180+ countries
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  Industry-specific targeting
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Track your press release performance with detailed analytics and real-time reporting dashboards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  Real-time tracking
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  Engagement metrics
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  ROI analysis
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get professional guidance from our team of PR experts to maximize your press release impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  24/7 support
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  PR consultation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  Strategy guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Xyntraa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The leading platform for professional press release distribution
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Zap className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast Distribution</h3>
                  <p className="text-gray-600">Get your press releases distributed within minutes to thousands of media outlets worldwide.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Bank-level security ensures your press releases are protected and delivered reliably every time.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Target className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeted Reach</h3>
                  <p className="text-gray-600">Advanced targeting ensures your press releases reach the right journalists and media outlets.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600">Comprehensive analytics help you track performance and optimize your press release strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">Our team of PR experts is available 24/7 to help you maximize your press release impact.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Globe className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-gray-600">Access to over 10,000 media outlets across 180+ countries worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Press Releases
            </h2>
            <Link 
              href="/press"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              View all →
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {latestPressReleases.map((release) => (
              <div key={release.id} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                    {release.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{release.summary}</p>
                  <Link 
                    href={`/press/${release.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600"
                  >
                    Read story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Feature Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Distribution without the clutter
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Xyntraa keeps the story first: readable type, confident spacing, and surfaces that feel like a modern wire—not a repurposed directory skin.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Category-aware archive with publish-window filters for busy readers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Detail pages with hero imagery, share tools, and related releases.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Pricing that maps to distribution depth—not hidden bundles.</p>
                </div>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
                  alt="Global distribution network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605851018312-38a4e3b7b5f5?w=1920&h=400&fit=crop&crop=center"
            alt="Press release distribution background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to put your next launch on the wire?
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Compare plans
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Xyntraa
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Xyntraa is a press-first distribution surface for teams that care about clarity. We bias toward legible headlines, credible metadata, and archive tooling that helps readers find the right story in seconds.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Whether you are announcing product milestones, executive moves, or policy updates, the same system powers your public record: structured posts, responsive layouts, and shareable URLs you can hand to stakeholders with confidence.
          </p>
          <p className="mt-6 text-gray-600">
            Explore the latest releases, compare pricing tiers, or{' '}
            <Link href="/contact" className="text-red-600 hover:underline font-medium">
              contact the desk
            </Link>
            {' '}for a tailored walkthrough.
          </p>
        </div>
      </section>
    </div>
  )
}
