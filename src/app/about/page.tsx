import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Globe, BarChart3, CheckCircle, Target, Zap, Shield } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";

export default function AboutPage() {
  const stats = [
    { number: "250K+", label: "Companies Trust Us" },
    { number: "5M+", label: "Press Releases Distributed" },
    { number: "180+", label: "Countries Reached" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven Distribution",
      description: "We help organizations share their stories with the world through strategic press release distribution that reaches the right audiences at the right time."
    },
    {
      icon: Shield,
      title: "Trusted by Industry Leaders",
      description: "From startups to Fortune 500 companies, organizations trust Xyntraa for reliable, professional press release distribution that delivers results."
    },
    {
      icon: Zap,
      title: "Innovation at Heart",
      description: "We continuously evolve our platform to meet the changing needs of modern communications, ensuring our clients stay ahead in the digital landscape."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former PR executive with 15+ years of experience in media relations and corporate communications.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech visionary focused on building scalable distribution platforms that connect businesses with global media networks.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Communications",
      bio: "Award-winning communications strategist helping brands tell their stories with impact and authenticity.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=center"
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
                About Xyntraa
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                We're on a mission to help organizations share their stories with the world through powerful, reliable press release distribution.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.magnific.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
                  alt="About Xyntraa team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 sm:text-5xl">{stat.number}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Xyntraa was founded with a simple mission: to make press release distribution accessible, effective, and measurable for organizations of all sizes. We saw a gap in the market for a platform that combined the reach of traditional wire services with the precision of modern digital marketing.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of organizations worldwide, helping them share their news, announcements, and stories with audiences that matter. Our platform continues to evolve, driven by innovation and a deep understanding of what modern communications teams need.
              </p>
            </div>
            <div className="lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.magnific.com/free-photo/people-taking-part-business-event_23-2149346610.jpg"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The people behind Xyntraa's success
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Share Your Story?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Join thousands of organizations using Xyntraa for professional press release distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
