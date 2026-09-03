import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/data/content';

interface ProjectsProps {
  navigate: (path: string) => void;
}

const categories = ['All', 'Surveying & Mapping', 'Civil Engineering', 'Real Estate', 'Hydrography', 'GIS', 'Land Documentation'];

export default function Projects({ navigate }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <PageHeader
        title="Our Projects"
        subtitle="A selection of completed work showcasing our expertise across surveying, engineering, and real estate."
        breadcrumb="Projects"
        navigate={navigate}
      />

      <section className="py-20">
        <div className="container-page">
          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-brand-700 text-white'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl border border-ink-100 bg-white transition-all hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-brand-700/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink-900">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-brand-600">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-ink-400">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-100 bg-ink-50 py-20">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-900 p-10 sm:p-16 lg:flex-row">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Your Project Could Be Next</h2>
              <p className="mt-3 text-lg text-brand-100">
                Let's discuss how we can bring the same level of excellence to your project.
              </p>
            </div>
            <button onClick={() => navigate('/contact')} className="btn-accent flex-shrink-0">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
