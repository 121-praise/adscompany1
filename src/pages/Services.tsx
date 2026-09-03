import { ArrowRight, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { services, companyInfo } from '@/data/content';

interface ServicesProps {
  navigate: (path: string) => void;
}

export default function Services({ navigate }: ServicesProps) {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive land, property, and engineering solutions delivered with precision and professionalism."
        breadcrumb="Services"
        navigate={navigate}
      />

      {/* Service cards — large image tiles like Cheval */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="group relative h-[380px] cursor-pointer overflow-hidden rounded-2xl shadow-md animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => navigate('/contact')}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-900/50 to-transparent transition-colors group-hover:from-brand-950/95 group-hover:via-brand-900/60" />

                <div className="relative flex h-full flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-200">
                    {service.shortDescription}
                  </p>

                  {/* Features — revealed on hover */}
                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-48 group-hover:opacity-100">
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 4).map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-ink-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-lg transition-all group-hover:bg-accent-400">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="rounded-2xl border border-ink-100 bg-white p-10 text-center sm:p-16">
            <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-500">
              Our team will assess your project and recommend the right combination
              of services to get it done right.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-accent">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`tel:${companyInfo.phones[0]}`}
                className="btn-outline"
              >
                <Phone className="h-4 w-4" />
                Call {companyInfo.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
