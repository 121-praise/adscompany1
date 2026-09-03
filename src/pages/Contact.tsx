import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { companyInfo, services } from '@/data/content';
import { supabase } from '@/lib/supabase';

interface ContactProps {
  navigate: (path: string) => void;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact({ navigate }: ContactProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        service: form.service || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`;

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team. We're ready to help with your surveying, engineering, and real-estate needs."
        breadcrumb="Contact"
        navigate={navigate}
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-ink-900">Get in Touch</h2>
              <p className="mt-3 text-ink-500">
                Reach out via phone, email, or the form. We typically respond within
                24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100">
                    <MapPin className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900">Office Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100">
                    <Phone className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900">Phone Numbers</h3>
                    <div className="mt-1 space-y-1">
                      {companyInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-sm text-ink-600 transition-colors hover:text-brand-700"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100">
                    <Mail className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900">Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="mt-1 block text-sm text-ink-600 transition-colors hover:text-brand-700"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100">
                    <Clock className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900">Working Hours</h3>
                    <p className="mt-1 text-sm text-ink-500">
                      Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM
                      <br />
                      Saturday: 9:00 AM &ndash; 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20ADS%20Transnational%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-all hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-ink-100 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-bold text-ink-900">Send Us a Message</h2>
                <p className="mt-2 text-sm text-ink-500">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {status === 'success' && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-700">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-800">Failed to send message</p>
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="label-field">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label-field">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="label-field">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="0801 234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="label-field">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label-field">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Tell us about your project or enquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-xl border border-ink-100 shadow-sm">
            <iframe
              title="ADS Transnational Office Location"
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
