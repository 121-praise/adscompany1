import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { companyInfo, services } from '@/data/content';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              {companyInfo.tagline} Professional surveying, real estate, and
              engineering services across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigate('/services')}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-300"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="text-sm text-ink-400 hover:text-brand-300">Home</button></li>
              <li><button onClick={() => navigate('/about')} className="text-sm text-ink-400 hover:text-brand-300">About Us</button></li>
              <li><button onClick={() => navigate('/services')} className="text-sm text-ink-400 hover:text-brand-300">Services</button></li>
              <li><button onClick={() => navigate('/projects')} className="text-sm text-ink-400 hover:text-brand-300">Projects</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-sm text-ink-400 hover:text-brand-300">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-ink-400">
                <MapPin className="h-5 w-5 flex-shrink-0 text-brand-400" />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phones[0]}`} className="flex gap-3 text-sm text-ink-400 hover:text-brand-300">
                  <Phone className="h-5 w-5 flex-shrink-0 text-brand-400" />
                  {companyInfo.phones[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phones[1]}`} className="flex gap-3 text-sm text-ink-400 hover:text-brand-300">
                  <Phone className="h-5 w-5 flex-shrink-0 text-brand-400" />
                  {companyInfo.phones[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex gap-3 text-sm text-ink-400 hover:text-brand-300">
                  <Mail className="h-5 w-5 flex-shrink-0 text-brand-400" />
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            &copy; {year} {companyInfo.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-semibold text-ink-400 transition-colors hover:text-brand-300"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
