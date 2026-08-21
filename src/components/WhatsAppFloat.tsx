import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/content';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsappRaw}?text=Hello%2C%20I'd%20like%20to%20discuss%20HSE%20consulting%20services.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-4 py-3.5 text-white shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden md:inline font-btn text-sm font-medium pr-1">WhatsApp</span>
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 group-hover:opacity-0" />
    </a>
  );
}
