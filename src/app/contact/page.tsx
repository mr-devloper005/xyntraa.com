import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send, Globe, Users, Clock } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { Footer } from "@/components/shared/footer";

export default function ContactPage() {
  const services = [
    {
      icon: Globe,
      title: "Press Media Distribution",
      description: "Get your news distributed to thousands of media outlets worldwide."
    },
    {
      icon: Users,
      title: "Account Support",
      description: "Help with account setup, billing, and subscription management."
    },
    {
      icon: Clock,
      title: "Technical Support",
      description: "Assistance with platform features, integrations, and troubleshooting."
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
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                Have questions about press media distribution? We're here to help you amplify your message and reach your audience.
              </p>
            </div>
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Send us a Message
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="Tell us more about your needs..."
                />
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 transition-colors"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Can Help
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert support for all your press media distribution needs
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
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
            Join thousands of companies using Xyntraa for professional press media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/register"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
