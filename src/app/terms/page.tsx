import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Shield, Users, Globe } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";

export default function TermsPage() {
  const sections = [
    {
      title: "Account Usage",
      body: "Keep your account secure and follow community guidelines. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      details: [
        "Use strong, unique passwords",
        "Enable two-factor authentication when available",
        "Report unauthorized access immediately",
        "Keep your contact information up to date"
      ]
    },
    {
      title: "Content Ownership",
      body: "You own the content you publish and grant the platform a license to display it. By submitting press releases, you retain ownership of your content while allowing us to distribute it.",
      details: [
        "You retain all rights to your original content",
        "You grant us a license to distribute your press releases",
        "You are responsible for the accuracy of your content",
        "We may remove content that violates our policies"
      ]
    },
    {
      title: "Acceptable Use",
      body: "No spam, harassment, or illegal content. Our platform is designed for professional press release distribution and business communications.",
      details: [
        "Submit only legitimate business announcements",
        "Do not post misleading or false information",
        "Respect intellectual property rights",
        "Follow all applicable laws and regulations"
      ]
    },
    {
      title: "Service Availability",
      body: "We strive to maintain high service availability but cannot guarantee uninterrupted access. We may temporarily suspend service for maintenance or updates.",
      details: [
        "Service availability is subject to occasional downtime",
        "We will provide advance notice when possible",
        "We are not liable for service interruptions",
        "You should maintain backups of important content"
      ]
    },
    {
      title: "Payment Terms",
      body: "Paid services are billed in advance and are non-refundable except as required by law. Subscription fees may change with 30 days notice.",
      details: [
        "Payments are processed securely through third-party providers",
        "Subscriptions auto-renew unless cancelled",
        "Refunds are handled case by case",
        "Prices are subject to change with notice"
      ]
    },
    {
      title: "Termination",
      body: "Either party may terminate the agreement with notice. We reserve the right to suspend accounts that violate these terms.",
      details: [
        "You may close your account at any time",
        "We may suspend accounts for policy violations",
        "Terminated accounts lose access to paid features",
        "Data retention policies apply after termination"
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
                Terms of Service
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                The rules and guidelines for using Xyntraa's press release distribution platform.
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
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
                  alt="Terms of service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                      {index === 0 && <Users className="h-6 w-6" />}
                      {index === 1 && <FileText className="h-6 w-6" />}
                      {index === 2 && <Shield className="h-6 w-6" />}
                      {index === 3 && <Globe className="h-6 w-6" />}
                      {index === 4 && <FileText className="h-6 w-6" />}
                      {index === 5 && <Users className="h-6 w-6" />}
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
            Questions About Our Terms?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions about our Terms of Service, please don't hesitate to contact our support team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white hover:bg-red-700 transition-colors"
            >
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
