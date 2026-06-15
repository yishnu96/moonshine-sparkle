import { Phone } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const FloatingCTA = () => {
  const handleWhatsAppClick = () => {
    const txt = "Hi Moon Studios! I'd like to book an appointment — when's your next available slot?";
    const url = `https://wa.me/919004832184?text=${encodeURIComponent(txt)}`;
    trackEvent('cta_click', {
      section_name: 'floating_cta',
      cta_label: 'Book on WhatsApp',
      destination_url: url,
    });
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    trackEvent('phone_call_click', {
      section_name: 'floating_cta',
      contact_method: 'phone',
      cta_label: 'Call Now',
      destination_url: 'tel:+919004832184',
    });
    window.location.href = 'tel:+919004832184';
  };

  // SVG for WhatsApp since Lucide doesn't have a filled brand WhatsApp icon
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.34z"/>
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.26A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-2.85.75.76-2.78-.2-.32A8.2 8.2 0 1 1 12 20.2z"/>
    </svg>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] bg-gradient-to-t from-background/95 via-background/80 to-transparent pointer-events-none">
      <div className="flex gap-3 max-w-md mx-auto pointer-events-auto">
        <button
          onClick={handleWhatsAppClick}
          className="flex-[1.6] flex items-center justify-center gap-2.5 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-sm shadow-medium active:scale-[0.96] transition-all cursor-pointer"
        >
          <WhatsAppIcon />
          <div className="text-left leading-tight">
            <span>Book on WhatsApp</span>
            <span className="block text-[10.5px] font-medium opacity-90">Reply in minutes • 9:30–9</span>
          </div>
        </button>
        <button
          onClick={handleCallClick}
          aria-label="Call Moon Studios"
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full bg-card hover:bg-secondary text-primary border border-primary/40 shadow-medium active:scale-[0.96] transition-all cursor-pointer"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-sm font-bold">Call</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
