'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { ArrowRight, Download, Eye, Calendar, Globe, FileText } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { Footer } from "@/components/shared/footer";
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

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
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="space-y-4">
                {mockPressAssets.map((asset) => (
                  <div key={asset.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{asset.title}</p>
                        <p className="text-xs text-gray-600">{asset.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                          {asset.fileType}
                        </span>
                        <button
                          onClick={() => setActiveAssetId(asset.id)}
                          className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="h-3 w-3" />
                          Preview
                        </button>
                        <button
                          className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 transition-colors"
                        >
                          <Download className="h-3 w-3" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
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
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
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

      {/* Preview Modal */}
      {activeAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{activeAsset.title}</h3>
                <button
                  onClick={() => setActiveAssetId(null)}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              {activeAsset.previewUrl && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 mb-4">
                  <Image
                    src={activeAsset.previewUrl}
                    alt={activeAsset.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm text-gray-600 mb-6">{activeAsset.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveAssetId(null)}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download {activeAsset.fileType}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Introduction to Advanced AI Technology Artificial intelligence represents a fundamental shift in how enterprises operate and make decisions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                </div>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Revolutionary medical treatment offers new hope for patients worldwide with unprecedented success rates in clinical trials.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                </div>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Major international partnership aims to accelerate transition to renewable energy sources with $10 billion investment commitment.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                </div>
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
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
