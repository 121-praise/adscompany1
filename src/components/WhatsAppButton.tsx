import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20ADS%20Transnational%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-600/30 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative h-4 w-4 rounded-full bg-green-500" />
      </span>
    </a>
  );
}
