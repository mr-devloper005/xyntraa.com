import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Database, Eye, Lock, Settings } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data We Collect",
      body: "Account information, usage analytics, and content you submit. We collect only the information necessary to provide our press release distribution services.",
      details: [
        "Account registration information (name, email, company)",
        "Press release content and distribution preferences",
        "Usage analytics and platform interaction data",
        "Payment and billing information for paid services"
      ]
    },
    {
      title: "How We Use Data",
      body: "To personalize your experience, improve search, and keep the platform secure. Your data helps us provide better press release distribution services.",
      details: [
        "Process and distribute your press releases",
        "Provide customer support and service improvements",
        "Analyze platform usage to enhance features",
        "Ensure security and prevent fraudulent activities"
      ]
    },
    {
      title: "Data Sharing",
      body: "We share your press releases with media outlets and distribution partners as part of our service. We do not sell your personal information.",
      details: [
        "Press releases are shared with approved media partners",
        "Analytics data may be shared in aggregate form",
        "We comply with legal requests for information",
        "Third-party service providers have limited access"
      ]
    },
    {
      title: "Data Security",
      body: "We implement industry-standard security measures to protect your information. Your data is encrypted and stored securely.",
      details: [
        "SSL encryption for all data transmissions",
        "Regular security audits and updates",
        "Limited employee access to sensitive data",
        "Secure data storage with backup systems"
      ]
    },
    {
      title: "Your Choices",
      body: "You can manage email preferences and delete your account at any time. You have control over your personal information.",
      details: [
        "Update account information anytime",
        "Manage email notification preferences",
        "Export or delete your data on request",
        "Opt-out of marketing communications"
      ]
    },
    {
      title: "Cookies and Tracking",
      body: "We use cookies to improve your experience and analyze platform usage. You can control cookie preferences in your browser.",
      details: [
        "Essential cookies for platform functionality",
        "Analytics cookies to understand usage patterns",
        "Marketing cookies for personalized content",
        "You can disable cookies in browser settings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      {/* Hero Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                How we collect, use, and protect your information on Xyntraa's press release distribution platform.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop&crop=center"
                  alt="Privacy policy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500">Last updated: March 16, 2026</p>
          </div>
          
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                      {index === 0 && <Database className="h-6 w-6" />}
                      {index === 1 && <Eye className="h-6 w-6" />}
                      {index === 2 && <Shield className="h-6 w-6" />}
                      {index === 3 && <Lock className="h-6 w-6" />}
                      {index === 4 && <Settings className="h-6 w-6" />}
                      {index === 5 && <Eye className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{section.body}</p>
                    
                    {section.details && (
                      <div className="space-y-3">
                        {section.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-600 mt-2"></div>
                            <p className="text-gray-600 text-sm">{detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions About Your Privacy?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions about our Privacy Policy or how we handle your data, please contact our privacy team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white hover:bg-red-700 transition-colors"
            >
              Contact Privacy Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/terms"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
