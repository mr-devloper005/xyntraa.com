import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Users, Globe, Zap, Shield, BarChart3 } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses and startups getting started with press release distribution.",
      features: [
        "Up to 5 press releases per month",
        "Basic distribution to 500+ media outlets",
        "Standard analytics and reporting",
        "Email support",
        "7-day archive access",
        "Basic SEO optimization"
      ],
      highlighted: false,
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses that need comprehensive press release distribution and advanced features.",
      features: [
        "Up to 20 press releases per month",
        "Premium distribution to 2,000+ media outlets",
        "Advanced analytics and real-time reporting",
        "Priority email and phone support",
        "30-day archive access",
        "Advanced SEO optimization",
        "Social media promotion",
        "Custom branding options"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with high-volume press release distribution needs.",
      features: [
        "Unlimited press releases",
        "Global distribution to 10,000+ media outlets",
        "Enterprise-grade analytics and insights",
        "Dedicated account manager",
        "Unlimited archive access",
        "White-glove SEO services",
        "Comprehensive social media strategy",
        "Custom integrations and API access",
        "Advanced security features",
        "Custom reporting dashboards"
      ],
      highlighted: false,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the distribution network?",
      answer: "Our distribution network includes major news outlets, industry-specific publications, journalists, bloggers, and media influencers across 180+ countries worldwide."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for new customers. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "What kind of analytics do you provide?",
      answer: "We provide comprehensive analytics including pickup rates, audience reach, engagement metrics, geographic distribution, and media outlet performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-xl leading-8 text-red-100 max-w-3xl mx-auto">
            Choose the perfect plan for your press release distribution needs. No hidden fees, no surprises.
          </p>
          <div className="mt-8 flex justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl border ${
                  plan.highlighted 
                    ? 'border-red-600 bg-red-50 shadow-xl' 
                    : 'border-gray-200 bg-white shadow-sm'
                } p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-red-600' : 'text-gray-400'
                      }`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={plan.name === "Enterprise" ? "/contact" : "/register"}
                  className={`block w-full rounded-full py-3 text-center font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features to amplify your press release distribution
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Distribution</h3>
              <p className="text-gray-600">Reach media outlets and journalists in 180+ countries worldwide with our extensive distribution network.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">Track pickup rates, engagement metrics, and ROI with comprehensive real-time analytics and reporting.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption and security features to protect your sensitive press release data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Join thousands of companies using Xyntraa for professional press release distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
