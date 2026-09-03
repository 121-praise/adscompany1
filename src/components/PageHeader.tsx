import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  navigate: (path: string) => void;
}

export default function PageHeader({ title, subtitle, breadcrumb, navigate }: PageHeaderProps) {
  return (
    <section className="border-b border-ink-100 bg-ink-50 pt-28 pb-12 lg:pt-32">
      <div className="container-page">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-ink-400">
          <button onClick={() => navigate('/')} className="hover:text-brand-700">
            Home
          </button>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-700">{breadcrumb}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink-500">{subtitle}</p>}
      </div>
    </section>
  );
}
