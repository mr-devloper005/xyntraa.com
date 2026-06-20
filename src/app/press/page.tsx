import Image from 'next/image'
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { Footer } from "@/components/shared/footer";
import { mockPressCoverage } from '@/data/mock-data'
import { PressKitClient } from './press-kit-client'

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Press & Media
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                Access our press kit, brand assets, and latest news coverage. Everything you need for media coverage and brand partnerships.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
                >
                  Contact PR Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.magnific.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
                  alt="Press and media"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Press Kit
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Download logos, product screenshots, and brand guidelines for media use.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <PressKitClient />

            <div className="space-y-4">
              {mockPressCoverage.map((item) => (
                <div key={item.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <Globe className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-red-600">{item.outlet}</span>
                      </div>
                      <p className="text-sm text-gray-900 leading-relaxed">{item.headline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Media Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Press Media
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with our latest announcements and company news.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Press Media 1 */}
            <Link href="/press/global-tech-leader-announces-revolutionary-ai-platform" className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&crop=center"
                  alt="Global Tech Leader Announces Revolutionary AI Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                  Technology
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Global Tech Leader Announces Revolutionary AI Platform
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Introduction to Advanced AI Technology Artificial intelligence represents a fundamental shift in how enterprises operate and make decisions.
                </p>
              </div>
            </Link>

            {/* Press Media 2 */}
            <Link href="/press/healthcare-innovation-breakthrough-new-treatment-shows-promise" className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&crop=center"
                  alt="Healthcare Innovation Breakthrough: New Treatment Shows Promise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                  Healthcare
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Healthcare Innovation Breakthrough: New Treatment Shows Promise
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Revolutionary medical treatment offers new hope for patients worldwide with unprecedented success rates in clinical trials.
                </p>
              </div>
            </Link>

            {/* Press Media 3 */}
            <Link href="/press/sustainable-energy-initiative-launched-by-global-consortium" className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1473341303174-971c2164b37a?w=800&h=600&fit=crop&crop=center"
                  alt="Sustainable Energy Initiative Launched by Global Consortium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                  Sustainability
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Sustainable Energy Initiative Launched by Global Consortium
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Major international partnership aims to accelerate transition to renewable energy sources with $10 billion investment commitment.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Media Assistance?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Our PR team is ready to help with your media inquiries and press coverage needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Contact PR Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
