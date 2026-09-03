import { useState, useEffect } from 'react';
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { services, companyInfo } from '@/data/content';

interface HomeProps {
  navigate: (path: string) => void;
}

const heroSlides = [
  {
    title: 'Surveying & Mapping',
    image: '/images/home/6.jpeg',
  },
  {
    title: 'Civil Engineering',
    image: '/images/home/7.jpeg',
  },
  {
    title: 'Real Estate',
    image: '/images/about-us/8.jpeg',
  },
  {
    title: 'Hydrography',
    image: '/images/about-us/10.jpeg',
  },
];

export default function Home({ navigate }: HomeProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink-900">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-70 w-75 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/45" />
          </div>
        ))}

        <div className="container-page relative z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white animate-fade-up sm:text-5xl lg:text-6xl">
              Precision Surveying.
              <br />
              <span className="text-accent-400">Trusted Land Solutions.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 animate-fade-up">
              {companyInfo.name} delivers professional surveying, real estate,
              civil engineering, hydrography, GIS, and land documentation services
              with accuracy, integrity, and technical excellence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
              <button onClick={() => navigate('/contact')} className="btn-accent">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/5"
              >
                Explore Services
              </button>
            </div>

          </div>
        </div>

        {/* Dot indicators — centered at bottom */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? 'w-8 bg-white'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">About Us</span>
              <h2 className="mt-3 section-title">
                Engineering Trust Into Every Square Metre
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                We are a Nigerian field services company specialising in the full
                lifecycle of land and infrastructure projects. From the first
                survey to the final document, our team combines technical expertise
                with deep local knowledge to deliver results you can build on.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Modern surveying equipment and GIS technology',
                  'Experienced, licensed surveying and engineering team',
                  'End-to-end service from survey to documentation',
                  'Serving clients across Lagos and all 36 Nigerian states',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/about')} className="btn-primary mt-8">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/home/4.jpeg"
                  alt="Surveyor at work"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="mb-12">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 section-title">Our Core Services</h2>
            <p className="mt-4 section-subtitle">
              Six specialised service areas covering every aspect of land, property,
              and infrastructure development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <button
                key={service.slug}
                type="button"
                className="group relative min-h-[280px] cursor-pointer overflow-hidden rounded-xl text-left animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => navigate('/services')}
              >
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/50 to-ink-900/10 transition-colors group-hover:from-brand-950/90 group-hover:via-brand-900/60" />
                <span className="relative flex h-full flex-col justify-end p-5 sm:p-7">
                  <span className="rounded-xl bg-ink-950/55 p-4 backdrop-blur-[2px]">
                    <span className="text-xl font-bold text-white">{service.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-white/90">
                      {service.shortDescription}
                    </span>
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-bold text-ink-900 shadow-lg transition-all group-hover:bg-accent-400 group-hover:shadow-accent-500/30">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page">
          <div className="rounded-2xl bg-brand-900 p-10 text-center sm:p-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
              Get in touch with our team for a free consultation. We'll help you
              navigate every step of your land and engineering project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-accent">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`tel:${companyInfo.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
