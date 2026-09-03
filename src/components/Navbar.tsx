import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '@/data/content';

interface NavbarProps {
  current: string;
  navigate: (path: string) => void;
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ current, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isTransparent = !scrolled && current === 'home';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-ink-100 top-0'
          : isTransparent
            ? 'bg-transparent top-4'
            : 'bg-white shadow-sm border-b border-ink-100 top-0'
      }`}
    >
      {/* Top bar */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'} bg-brand-700`}>
        <div className="container-page flex h-9 items-center justify-between text-xs text-white">
          <div className="flex items-center gap-4">
            <span className="font-medium">{companyInfo.shortAddress}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-brand-200">{companyInfo.email}</a>
            <span className="text-white/40">|</span>
            <a href={`tel:${companyInfo.phones[0]}`} className="font-medium text-white hover:text-brand-200">
              {companyInfo.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        <button onClick={() => handleNav('/')} className="flex-shrink-0">
          <Logo />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              (link.path === '/' && current === 'home') ||
              (link.path !== '/' && current === link.path.slice(1));
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-brand-600'
                    : isTransparent
                      ? 'text-white hover:text-brand-200'
                      : 'text-ink-600 hover:text-brand-700'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-brand-500" />
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => handleNav('/contact')}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
              isTransparent
                ? 'bg-accent-500 text-ink-900 hover:bg-accent-400'
                : 'bg-brand-700 text-white hover:bg-brand-800'
            }`}
          >
            Request a Quote
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`rounded-lg p-2 lg:hidden ${isTransparent ? 'text-white' : 'text-ink-700'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive =
                (link.path === '/' && current === 'home') ||
                (link.path !== '/' && current === link.path.slice(1));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-600 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-ink-700"
            >
              <Phone className="h-4 w-4" />
              {companyInfo.phones[0]}
            </a>
            <button
              onClick={() => handleNav('/contact')}
              className="btn-primary mt-2 w-full"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
