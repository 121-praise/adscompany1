import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/content';

interface AboutProps {
  navigate: (path: string) => void;
}

const pillars = [
  {
    title: 'Precision & Spatial Accuracy',
    description: 'Utilizing state-of-the-art spatial technology and GIS mapping to eliminate errors, secure spatial boundaries, and provide reliable data for critical decision-making.',
  },
  {
    title: 'Engineering & Execution Excellence',
    description: 'Applying modern civil engineering principles to build durable, scalable infrastructure that respects environmental context and local topography.',
  },
  {
    title: 'Legal Certainty & Integrity',
    description: 'Navigating complex regulatory landscapes to deliver transparent, secure, and hassle-free land documentation, safeguarding real estate assets for generations.',
  },
  {
    title: 'Client-Centric Innovation',
    description: 'Combining deep domain expertise with modern technology to deliver tailored, cost-effective solutions for individuals, private enterprises, and public institutions.',
  },
];

export default function About({ navigate }: AboutProps) {
  const team = [
    { name: 'Managing Director', role: 'Surveying & Engineering', initials: 'MD' },
    { name: 'Head of Operations', role: 'Field Services', initials: 'HO' },
    { name: 'Lead Surveyor', role: 'Surveying & Mapping', initials: 'LS' },
    { name: 'Real Estate Manager', role: 'Property & Documentation', initials: 'RE' },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="A trusted Nigerian field services firm delivering precision, integrity, and excellence in every project."
        breadcrumb="About"
        navigate={navigate}
      />

      {/* History */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 section-title">Built on Precision and Trust</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-600">
                <p>
                  {companyInfo.name} was founded with a clear mission: to provide
                  Nigerians with land and engineering services they can trust. From
                  our base in Lakowe, Ibeju-Lekki, we have grown into a
                  multi-disciplinary firm serving clients across Lagos and
                  nationwide.
                </p>
                <p>
                  Our journey began with surveying — the foundation of every
                  construction and real-estate project. Over the years, we expanded
                  our expertise to cover civil engineering, real estate,
                  hydrography, GIS, and land documentation, offering our clients a
                  complete, end-to-end service under one roof.
                </p>
                <p>
                  Today, we are proud to be a trusted partner to property
                  developers, government agencies, private investors, and
                  homeowners who rely on our technical accuracy and professional
                  integrity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/about-us/1.jpeg"
                  alt="ADS surveyor using field equipment"
                  className="h-64 w-full object-cover object-center sm:h-72"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/about-us/8.jpeg"
                  alt="ADS field team carrying out wetland surveying"
                  className="h-40 w-full object-cover object-center sm:h-48"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/about-us/10.jpeg"
                  alt="ADS survey team working in a wooded site"
                  className="h-40 w-full object-cover object-center sm:h-48"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/about-us/5.jpeg"
                  alt="ADS team working on a land survey"
                  className="h-48 w-full object-cover object-center sm:h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-ink-100 bg-white p-10">
              <h3 className="text-2xl font-bold text-brand-700">Vision Statement</h3>
              <p className="mt-4 leading-relaxed text-ink-600">
                To be the most trusted infrastructure and geospatial solutions
                powerhouse across Nigeria and Africa, pioneering precision
                surveying, sustainable civil engineering, and digital land
                administration that powers resilient communities and smart
                development.
              </p>
            </div>
            <div className="rounded-xl border border-ink-100 bg-white p-10">
              <h3 className="text-2xl font-bold text-brand-700">Mission Statement</h3>
              <p className="mt-4 leading-relaxed text-ink-600">
                To deliver uncompromised accuracy, engineering integrity, and
                cutting-edge GIS intelligence to our clients. We seamlessly bridge
                the physical and legal dimensions of land development — from
                precise boundary measurements and legal perfection in
                documentation to world-class structural execution — delivering
                certainty and value to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / ADS Advantage */}
      <section className="bg-brand-800 py-20">
        <div className="container-page">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-300">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Core Pillars Driving Our Mission</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="rounded-xl border border-brand-700/50 bg-brand-900/60 p-8 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-200">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="mb-12">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-3 section-title">Meet Our Team</h2>
            <p className="mt-4 section-subtitle">
              Experienced professionals dedicated to delivering excellence on every
              project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-ink-100 bg-white"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white backdrop-blur-sm">
                    {member.initials}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-ink-900">{member.name}</h3>
                  <p className="text-sm text-brand-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-400">
            Detailed team profiles will be added as they become available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-900 p-10 sm:p-16 lg:flex-row">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Let's Work Together</h2>
              <p className="mt-3 text-lg text-brand-100">
                Discover how our expertise can support your next project.
              </p>
            </div>
            <button onClick={() => navigate('/contact')} className="btn-accent flex-shrink-0">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
