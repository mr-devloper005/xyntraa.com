import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Tag, Globe, Share2, Bookmark } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { Footer } from "@/components/shared/footer";
import { notFound } from "next/navigation";

// Function to generate URL-friendly slugs
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Mock data - in a real app, this would come from a database or API
const pressReleases = [
  {
    id: 1,
    slug: "global-tech-leader-announces-revolutionary-ai-platform",
    title: "Global Tech Leader Announces Revolutionary AI Platform",
    company: "TechCorp International",
    category: "Technology",
    summary: "Introduction to Advanced AI Technology Artificial intelligence represents a fundamental shift in how enterprises operate and make decisions.",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&crop=center",
    content: `
      TechCorp International, a leading innovator in enterprise technology solutions, today announced the launch of its groundbreaking AI platform designed to transform how businesses leverage artificial intelligence for strategic decision-making.

      The new platform, which has been in development for over three years, represents a significant advancement in AI technology, offering unprecedented accuracy and scalability for enterprise applications.

      "We're not just launching another AI tool," said Sarah Johnson, CEO of TechCorp International. "We're introducing a fundamentally new approach to how businesses can harness the power of artificial intelligence to drive real business value."

      Key features of the platform include advanced natural language processing capabilities, real-time data analysis, and predictive analytics that can help businesses identify trends and opportunities before they become apparent to competitors.

      The platform is already being tested by several Fortune 500 companies, with early results showing a 40% improvement in decision-making accuracy and a 60% reduction in time-to-insight compared to traditional methods.

      "What sets this platform apart is its ability to learn and adapt to each business's unique context," Johnson added. "It's not a one-size-fits-all solution, but rather a sophisticated system that evolves with your business."

      The platform will be available globally starting next month, with specialized versions for different industries including healthcare, finance, manufacturing, and retail.

      Industry analysts have praised the announcement, noting that it could represent a major shift in the enterprise AI landscape. "This could be a game-changer for how businesses approach AI adoption," said Michael Chen, lead analyst at TechResearch Partners.

      For more information about the platform or to schedule a demonstration, visit TechCorp's website or contact their press office.
    `,
    tags: ["Artificial Intelligence", "Enterprise Technology", "Innovation", "TechCorp"],
    author: "Sarah Johnson",
    authorTitle: "CEO & Founder",
    contactEmail: "press@techcorp.com"
  },
  {
    id: 2,
    slug: "healthcare-innovation-breakthrough-new-treatment-shows-promise",
    title: "Healthcare Innovation Breakthrough: New Treatment Shows Promise",
    company: "MediCare Solutions",
    category: "Healthcare",
    summary: "Revolutionary medical treatment offers new hope for patients worldwide with unprecedented success rates in clinical trials.",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&crop=center",
    content: `
      MediCare Solutions, a pioneering healthcare research company, today announced a major breakthrough in medical treatment that could revolutionize patient care across multiple conditions.

      The new treatment, which has shown remarkable success in extensive clinical trials, represents a significant advancement in medical science and offers new hope to millions of patients worldwide.

      After more than five years of rigorous research and testing, the treatment has demonstrated an 85% success rate in Phase III trials, significantly exceeding industry standards and expectations.

      "This is more than just a new treatment – it's a new paradigm in how we approach patient care," said Dr. Emily Rodriguez, Chief Medical Officer at MediCare Solutions. "We're seeing results that were previously thought impossible."

      The treatment utilizes a novel approach that combines traditional medical practices with cutting-edge biotechnology, creating a synergistic effect that enhances the body's natural healing processes.

      Clinical trials conducted across 50 medical centers in 15 countries have shown consistent positive results, with minimal side effects and rapid recovery times. Patients have reported significant improvements in quality of life and reduced dependency on additional medications.

      "What makes this treatment truly revolutionary is its versatility," explained Dr. Rodriguez. "It can be adapted to treat multiple conditions, making it a comprehensive solution rather than a single-purpose treatment."

      The company has already submitted applications for regulatory approval in major markets including the United States, European Union, and Asia-Pacific regions. Approval is expected within the next 6-12 months.

      Healthcare professionals have expressed optimism about the potential impact of this treatment. "This could change the standard of care for multiple conditions," said Dr. Michael Chen, a leading medical researcher not involved in the study.

      MediCare Solutions is working with healthcare providers worldwide to ensure the treatment is accessible and affordable once regulatory approval is obtained.

      For more information about the treatment or clinical trial results, visit the MediCare Solutions website or contact their medical affairs department.
    `,
    tags: ["Healthcare", "Medical Innovation", "Clinical Trials", "Breakthrough"],
    author: "Dr. Emily Rodriguez",
    authorTitle: "Chief Medical Officer",
    contactEmail: "press@medicaresolutions.com"
  },
  {
    id: 3,
    slug: "sustainable-energy-initiative-launched-by-global-consortium",
    title: "Sustainable Energy Initiative Launched by Global Consortium",
    company: "Green Energy Alliance",
    category: "Sustainability",
    summary: "Major international partnership aims to accelerate transition to renewable energy sources with $10 billion investment commitment.",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1473341303174-971c2164b37a?w=800&h=600&fit=crop&crop=center",
    content: `
      The Green Energy Alliance, a consortium of leading energy companies and environmental organizations, today announced a landmark initiative to accelerate the global transition to sustainable energy sources.

      The initiative, backed by a $10 billion commitment from consortium members, represents one of the largest private-sector investments in renewable energy to date and aims to significantly reduce carbon emissions over the next decade.

      "This is more than just an investment in renewable energy – it's an investment in our planet's future," said James Wilson, Chairman of the Green Energy Alliance. "We're bringing together the best minds and resources to create a sustainable energy future for generations to come."

      The initiative will focus on three key areas: solar energy expansion, wind power development, and energy storage solutions. Projects are already underway in 12 countries across five continents.

      Key components of the initiative include:
      • Development of 50 new solar farms with combined capacity of 10 gigawatts
      • Construction of 25 wind energy projects capable of powering 5 million homes
      • Investment in next-generation battery storage technology
      • Creation of research and development centers focused on energy innovation

      "What makes this initiative unique is its comprehensive approach," Wilson explained. "We're not just building infrastructure – we're creating an entire ecosystem for sustainable energy."

      The consortium has partnered with governments, academic institutions, and local communities to ensure the projects deliver maximum environmental and social benefits.

      Environmental groups have praised the initiative, noting that it could serve as a model for future sustainable energy projects. "This is exactly the kind of ambitious action we need to address climate change," said environmental advocate Maria Garcia.

      The projects are expected to create over 50,000 jobs globally and reduce carbon emissions by an estimated 100 million tons annually when fully operational.

      The Green Energy Alliance is committed to transparency and will provide regular updates on project progress and environmental impact metrics.

      For more information about the initiative or specific projects, visit the Green Energy Alliance website or contact their communications department.
    `,
    tags: ["Renewable Energy", "Sustainability", "Climate Change", "Investment"],
    author: "James Wilson",
    authorTitle: "Chairman",
    contactEmail: "press@greenenergyalliance.org"
  }
];

interface PressReleasePageProps {
  params: {
    slug: string;
  };
}

export default async function PressReleasePage({ params }: PressReleasePageProps) {
  const resolvedParams = await params;
  const release = pressReleases.find(r => r.slug === resolvedParams.slug);

  if (!release) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="bg-red-600 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Link 
              href="/press"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Press Media
            </Link>
          </div>
          
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                {release.category}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              {release.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/90 text-lg">{release.company}</p>
                <p className="text-white/70 text-sm">Press Media</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-colors">
                  <Bookmark className="h-4 w-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src={release.image}
              alt={release.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {release.content}
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-8">
              {release.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Author Info */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">{release.author}</span>
                  <span className="text-gray-500 ml-2">({release.authorTitle})</span>
                </p>
                <p className="text-gray-600">
                  Email: <a href={`mailto:${release.contactEmail}`} className="text-red-600 hover:text-red-700">
                    {release.contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Press Media */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Press Media</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {pressReleases
              .filter(r => r.id !== release.id)
              .slice(0, 2)
              .map((relatedRelease) => (
                <Link 
                  key={relatedRelease.id}
                  href={`/press/${relatedRelease.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedRelease.image}
                      alt={relatedRelease.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                      {relatedRelease.category}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {relatedRelease.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{relatedRelease.summary}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need More Information?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Our press team is ready to help with your media inquiries and provide additional information.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-red-600 hover:bg-gray-100 transition-colors"
            >
              Contact Press Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/press"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              View All Press Media
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
