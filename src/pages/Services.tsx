import { useState, useCallback, useEffect } from 'react';
import { Scissors, Sparkles, Hand, Droplet, Flower2, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import StructuredData from '@/components/StructuredData';
import { trackEvent } from '@/lib/analytics';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

import mensGroomingImg from '@/assets/services/mens-grooming.jpg';
import haircolorImg from '@/assets/services/haircolour.png';
import charcoalfacialImg from '@/assets/services/charcoal_fecial.png';
import kidsHaircutImg from '@/assets/services/kids_haircut.png';
import fringeCutImg from '@/assets/services/Fringe_Flicks_Bangs.png';
import normalHaircutImg from '@/assets/services/normal_hircut.png';
import advanceHaircutImg from '@/assets/services/Advance_Haircut.png';
import hairWashBlowdryImg from '@/assets/services/blow_hair.png';
import hairSpaImg from '@/assets/services/hair_spa.png';
import hairWashBlastdryImg from '@/assets/services/blast.png';
import threadingImg from '@/assets/services/threading.png';
import lipThreadingImg from '@/assets/services/lip_threading.png';
import forheadThreadingImg from '@/assets/services/fourhead_threading.png';
import chinThreadingImg from '@/assets/services/chin_threading.png';
import faceThreadingImg from '@/assets/services/face_threading.png';
import cleannUpImg from '@/assets/services/cleanup.png';
import fruitFacialImg from '@/assets/services/fruit_facial.png';
import LotusFacialImg from '@/assets/services/lotus_facial.png';
import o3FacialImg from '@/assets/services/o3_facial.png';
import DiamondFacialImg from '@/assets/services//dimonnd_facial.png';
import facialCleanupImg from '@/assets/services/facial-cleanup.jpg';
import facialTreatmentImg from '@/assets/services/facial-treatment.jpg';
import manicureImg from '@/assets/services/manicure.png';
import pedicureImg from '@/assets/services/pedicure.png';
import waxingImg from '@/assets/services/waxing.png';
import massageImg from '@/assets/services/massage.png';
import manUnderArmWaxingImg from '@/assets/services/underarm_wax.png';
import manLegWaxImg from '@/assets/services/legs_man_wax.png';
import manBackImg from '@/assets/services/back_wax_man.png';

type Service = {
  id: string;
  name: string;
  description: string;
  long?: string;
  dur?: string;
  image?: string;
};

type ServiceCategory = {
  id: string;
  catVar: string;   // css variable suffix: hair, skin, nails, wax, massage, men
  title: string;
  description: string;
  iconName: string;
  services: Service[];
};

type SheetState = { open: boolean; service: Service | null; category: ServiceCategory | null };

const WA_NUMBER = '919004832184';
const waLink = (service?: string) => {
  const txt = service
    ? `Hi Moon Studios! I'd love to book ${service} — when's your next available slot?`
    : "Hi Moon Studios! I'd like to book an appointment — when's your next available slot?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(txt)}`;
};

/* ── Detail sheet / modal ── */
const DetailSheet = ({ entry, onClose }: { entry: SheetState; onClose: () => void }) => {
  const { open, service: svc, category: cat } = entry;

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', h);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const handleCall = () => {
    trackEvent('phone_call_click', { section_name: 'service_sheet', service_name: svc?.name });
    window.location.href = 'tel:+919004832184';
  };

  const bgVar = cat ? `hsl(var(--cat-${cat.catVar}-bg))` : '';
  const fgVar = cat ? `hsl(var(--cat-${cat.catVar}-fg))` : '';

  return (
    <div className={cn('sheet-dialog-wrap', open && 'open')} aria-hidden={!open}>
      <div className="sheet-dialog-back" onClick={onClose} />
      <div className="sheet-dialog" role="dialog" aria-modal="true">
        {/* drag handle (mobile only) */}
        <div className="flex justify-center pt-2.5 pb-1 flex-shrink-0 md:hidden">
          <span className="w-10 h-1.5 rounded-full bg-foreground/20" />
        </div>

        <div className="overflow-y-auto flex-1" style={{ WebkitOverflowScrolling: 'touch' as any }}>
          {svc && (
            <>
              {svc.image && (
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover" />
                  <button onClick={onClose} aria-label="Close"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 active:scale-90 transition-transform z-10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
                    </svg>
                  </button>
                  {cat && (
                    <span className="absolute left-3.5 bottom-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                      style={{ background: bgVar, color: fgVar }}>
                      <span style={{ width: 13, height: 13, display: 'inline-flex' }}><Icon name={cat.iconName} /></span>
                      {cat.title}
                    </span>
                  )}
                </div>
              )}

              <div className="px-5 pt-4 pb-1">
                <h3 className="font-playfair text-[24px] font-semibold leading-tight mb-3">{svc.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {svc.dur && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/70">
                      <span style={{ width: 12, height: 12, display: 'inline-flex', opacity: 0.7 }}><Icon name="clock" /></span>
                      {svc.dur} approx
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'hsl(var(--whatsapp)/0.12)', color: 'hsl(var(--whatsapp))' }}>
                    <span style={{ width: 12, height: 12, display: 'inline-flex' }}><Icon name="check" /></span>
                    Free consultation
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/70">
                    <span style={{ width: 12, height: 12, display: 'inline-flex', opacity: 0.7 }}><Icon name="leaf" /></span>
                    Premium products
                  </span>
                </div>
                <p className="text-sm leading-[1.55] mb-3" style={{ color: 'hsl(var(--fg)/0.82)' }}>{svc.long || svc.description}</p>
                <div className="flex gap-2.5 items-start text-xs leading-relaxed text-muted-foreground rounded-xl p-3 mb-3" style={{ background: 'hsl(var(--secondary)/0.45)' }}>
                  <span style={{ width: 15, height: 15, flexShrink: 0, marginTop: 1, display: 'inline-flex', color: 'hsl(var(--primary))' }}><Icon name="info" /></span>
                  Pricing is shared during your free consultation — no advance payment, reschedule anytime.
                </div>
              </div>
            </>
          )}
        </div>

        {/* sticky CTAs */}
        <div className="flex gap-2.5 px-5 pt-3 flex-shrink-0"
          style={{ paddingBottom: 'calc(14px + env(safe-area-inset-bottom,0px))', background: 'linear-gradient(hsl(var(--card)/0), hsl(var(--card)) 22%)' }}>
          <a href={waLink(svc?.name)} target="_blank" rel="noopener"
            onClick={() => trackEvent('cta_click', { section_name: 'service_sheet', service_name: svc?.name, cta_type: 'whatsapp' })}
            className="flex-[1.4] flex items-center justify-center gap-2 h-[52px] rounded-full font-bold text-[15px] text-white no-underline active:scale-[0.96] transition-transform"
            style={{ background: 'hsl(145 63% 42%)', boxShadow: '0 8px 20px -6px hsl(145 63% 42%/0.6)' }}>
            <span style={{ width: 19, height: 19, display: 'inline-flex' }}><Icon name="whatsapp" /></span>
            Book on WhatsApp
          </a>
          <button onClick={handleCall}
            className="flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full font-bold text-[15px] text-primary bg-transparent border-[1.5px] border-primary active:scale-[0.96] transition-transform cursor-pointer">
            <span style={{ width: 17, height: 17, display: 'inline-flex' }}><Icon name="phone" /></span>
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Category chip nav ── */
const CatNav = ({ categories, active, onSelect }: {
  categories: ServiceCategory[];
  active: string;
  onSelect: (c: ServiceCategory) => void;
}) => (
  <div className="sticky z-40 border-b catnav md:flex md:justify-center md:gap-2 md:py-3 md:px-8 md:bg-background/95 md:backdrop-blur-sm"
    style={{ top: 64 }}>
    {categories.map(cat => (
      <button key={cat.id}
        onClick={() => onSelect(cat)}
        className={cn(
          'flex items-center gap-[7px] whitespace-nowrap border-0 cursor-pointer font-semibold text-[13px] px-[15px] h-[44px] rounded-full min-w-max transition-all duration-200',
          active === cat.id
            ? 'text-primary-foreground shadow-[0_6px_16px_-4px_hsl(var(--primary)/0.5)]'
            : 'text-muted-foreground hover:text-foreground',
        )}
        style={active === cat.id ? { background: 'hsl(var(--primary))' } : { background: 'hsl(var(--secondary)/0.6)' }}
      >
        <span style={{ width: 17, height: 17, display: 'inline-flex' }}><Icon name={cat.iconName} /></span>
        {cat.title}
      </button>
    ))}
  </div>
);

/* ── Service card ── */
const ServiceCard = ({ service, category, onOpen }: {
  service: Service;
  category: ServiceCategory;
  onOpen: (s: Service, c: ServiceCategory) => void;
}) => {
  const fgVar = `hsl(var(--cat-${category.catVar}-fg))`;
  return (
    <button type="button"
      onClick={() => onOpen(service, category)}
      aria-label={`${service.name} — view details and book`}
      className="group text-left w-full border border-border/80 bg-card rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-[var(--shadow-soft)] transition-all duration-200 active:scale-[0.965] hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] hover:border-primary/40"
      style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
    >
      {service.image && (
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img src={service.image} alt={service.name} loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <span className="absolute top-[9px] left-[9px] w-[30px] h-[30px] rounded-[9px] flex items-center justify-center bg-white/86 backdrop-blur-[4px] shadow-[0_2px_6px_hsl(0_0%_0%/0.12)]"
            style={{ color: fgVar }}>
            <span style={{ width: 15, height: 15, display: 'inline-flex' }}><Icon name={category.iconName} /></span>
          </span>
        </div>
      )}
      <div className="flex flex-col flex-1 p-3 sm:p-[13px]">
        <div className="font-playfair font-semibold text-[13px] sm:text-[15px] leading-[1.18] mb-[5px] transition-colors group-hover:text-primary
                        overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {service.name}
        </div>
        <div className="text-[11px] sm:text-[11.5px] leading-[1.42] text-muted-foreground mb-auto
                        overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {service.description}
        </div>
        <div className="flex items-center justify-between gap-2 mt-[11px] pt-0">
          {service.dur ? (
            <span className="flex items-center gap-1 text-[10.5px] text-muted-foreground font-medium">
              <span style={{ width: 12, height: 12, display: 'inline-flex' }}><Icon name="clock" /></span>
              {service.dur}
            </span>
          ) : <span />}
          <span className="flex items-center gap-[3px] text-[11px] font-bold text-primary">
            View <span style={{ width: 13, height: 13, display: 'inline-flex' }}><Icon name="chevron" /></span>
          </span>
        </div>
      </div>
    </button>
  );
};

/* ── Page ── */
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('hair');
  const [sheet, setSheet] = useState<SheetState>({ open: false, service: null, category: null });

  useEffect(() => {
    document.title = 'Services — Moon Studios | Hair, Beauty & Spa in Andheri East';
  }, []);

  const openSheet = useCallback((service: Service, category: ServiceCategory) => {
    trackEvent('service_card_tap', { service_name: service.name, service_category: category.id });
    setSheet({ open: true, service, category });
  }, []);

  const closeSheet = useCallback(() => setSheet(s => ({ ...s, open: false })), []);

  const scrollToCategory = useCallback((category: ServiceCategory) => {
    setActiveCategory(category.id);
    trackEvent('service_category_select', { service_category: category.id });
    const el = document.getElementById(category.id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const categories: ServiceCategory[] = [{
    id: 'hair', catVar: 'hair', title: 'Hair', iconName: 'scissors',
    description: 'Cuts, spa and colour — the things that make people ask who your stylist is.',
    services: [
      { id: 'kids-haircut', name: "Kids' Haircut", dur: '~30 min', description: "Gentle cuts that make little ones look — and feel — like a million bucks.", long: "A calm, patient cut for little ones — distractions, gentle hands, and a style that's easy for parents to manage at home.", image: kidsHaircutImg },
      { id: 'fringe', name: 'Fringe, Flicks & Bangs', dur: '~25 min', description: 'Frame your face with precision — bangs that actually work with your features.', long: "We read your face shape and growth pattern first, then cut a fringe that falls right every morning — not just on day one.", image: fringeCutImg },
      { id: 'normal-haircut', name: 'Classic Haircut', description: 'A clean cut with a quick consultation. Simple, but done right.', image: normalHaircutImg },
      { id: 'advance-haircut', name: 'Advanced Haircut', dur: '~45 min', description: 'Detailed styling with a full consultation — for when your hair deserves more attention.', long: "Starts with a proper consultation about your hair, your routine and the look you want — then a precision cut and finish you can recreate yourself.", image: advanceHaircutImg },
      { id: 'advance-haircut-wash', name: 'Advanced Haircut + Wash & Blow', description: 'Full cut, wash, and blown-out finish. Walk out looking polished.', image: advanceHaircutImg },
      { id: 'hair-wash-blast', name: 'Hair Wash & Blow Blast', description: 'A quick refresh with real volume — feel renewed in under an hour.', image: hairWashBlastdryImg },
      { id: 'hair-wash-dry', name: 'Hair Wash & Blow Dry', dur: '~40 min', description: 'Professional wash, expert blow-dry. Salon-fresh every time.', long: "A proper wash with the right products for your hair, then a blow-dry with real volume and shine. The fastest way to feel put-together.", image: hairWashBlowdryImg },
      { id: 'hair-color', name: 'Hair Color & Treatment', dur: '~2 hrs', description: 'Full color service using premium products that keep your hair healthy while transforming it.', long: "Global colour, highlights or balayage using premium products that protect your hair while they change it. Shehzad's signature balayage grows out soft, never harsh.", image: haircolorImg },
      { id: 'hair-spa', name: 'Hair Spa', dur: '~60 min', description: "Keratin, L'Oréal, Olaplex — intense nourishment that your hair can actually feel.", long: "Keratin, L'Oréal or Olaplex — intense nourishment your hair can actually feel. Dry, dull and damaged walks in; soft, light and alive walks out.", image: hairSpaImg },
    ],
  }, {
    id: 'skin-face', catVar: 'skin', title: 'Skin & Face', iconName: 'sparkles',
    description: 'Facials, clean-ups, threading — the kind of glow strangers notice.',
    services: [
      { id: 'eyebrow-thread', name: 'Eyebrow Threading', dur: '~15 min', description: 'Clean, precise shaping that opens up your entire face.', long: "Precise threading shaped to your features — the small change that makes your whole face look more awake.", image: threadingImg },
      { id: 'upper-lip-thread', name: 'Upper Lip Threading', description: 'Quick, gentle, and done before you finish your chai.', image: lipThreadingImg },
      { id: 'forehead-thread', name: 'Forehead Threading', description: 'Smooth, clean finish that makes your skin look polished.', image: forheadThreadingImg },
      { id: 'chin-thread', name: 'Chin Threading', description: 'Gentle removal that lasts — no irritation, just smooth.', image: chinThreadingImg },
      { id: 'face-sides-thread', name: 'Face Sides Threading', description: 'Subtle hair removal on the sides of your face for a cleaner look.', image: faceThreadingImg },
      { id: 'full-face-thread', name: 'Full Face Threading', description: 'Complete facial threading — walk out feeling like you got a mini facial.', image: faceThreadingImg },
      { id: 'normal-cleanup', name: 'Normal Clean-Up', description: 'Essential cleansing that leaves your face fresh and glowing.', image: cleannUpImg },
      { id: 'advance-cleanup', name: 'Advanced Clean-Up', dur: '~35 min', description: 'More than basic — deep cleanse with treatment for visible brightness.', long: "More than a basic clean-up: deep cleansing, extraction and a treatment layer that leaves your skin visibly brighter in under an hour.", image: cleannUpImg },
      { id: 'fruit-facial', name: 'Fruit Facial', dur: '~45 min', description: 'Natural fruit enzymes that brighten and refresh — your skin on vacation.', long: "Natural fruit enzymes that gently brighten and refresh. A relaxed, glow-giving facial that feels as good as it looks.", image: fruitFacialImg },
      { id: 'charcoal-facial', name: 'Charcoal Facial', dur: '~45 min', description: "Deep-cleansing charcoal that pulls out impurities you didn't know were there.", long: "Activated charcoal draws out deep impurities and excess oil — ideal for congested, city-tired skin that needs a real reset.", image: charcoalfacialImg },
      { id: 'lotus-facial', name: 'Lotus/VLCC Facial', description: "Premium product facial — your skin looks different 45 minutes later.", image: LotusFacialImg },
      { id: 'cheryls-facial', name: "Cheryl's/Ozone Facial", description: 'Luxury brand treatments for skin that deserves the upgrade.', image: LotusFacialImg },
      { id: 'o3-facial', name: 'O3+ Facial', dur: '~50 min', description: "Oxygen therapy that makes your skin literally glow.", long: "O3+ oxygen therapy that revives dull skin from within — people will ask if you've been doing something different. (You have.)", image: o3FacialImg },
      { id: 'diamond-facial', name: 'Diamond Insta Glow', description: 'Instant radiance that hits different the moment you see your reflection.', image: DiamondFacialImg },
      { id: 'papaya-facial', name: 'Papaya Wrinkle Care', description: 'Gentle anti-aging care that smooths without chemicals.', image: facialTreatmentImg },
      { id: 'vitamin-c-facial', name: 'Vitamin C Rejuvenation', description: 'Brightening therapy for dull, tired-looking skin.', image: facialTreatmentImg },
      { id: 'red-vine-facial', name: 'Red Vine Anti-Ageing', description: 'Premium anti-aging care — your skin, but years younger.', image: facialTreatmentImg },
      { id: 'oxygen-facial', name: 'Oxygen Tan Treatment', description: "Targets tan and uneven tone — like a reset button for sun damage.", image: facialTreatmentImg },
      { id: 'detox-facial', name: 'Oxygen Detox (Acne Care)', description: "For acne-prone skin — calming, clearing, gentle but effective.", image: facialTreatmentImg },
      { id: 'hydra-cleanup', name: 'Hydra Facial Cleanup', description: 'Medical-grade cleanse — deep, thorough, leaves skin unbelievably soft.', image: facialCleanupImg },
      { id: 'hydra-facial', name: 'Hydra Facial', dur: '~55 min', description: 'Deep hydration, visible results, zero downtime.', long: "Medical-grade cleanse and deep hydration with visible results and no downtime. The facial people book before every big day.", image: facialTreatmentImg },
      { id: 'hydra-md', name: 'Hydra MD', description: 'Advanced hydra therapy — the next level from regular hydra facials.', image: facialTreatmentImg },
      { id: 'power-mask', name: 'Power Mask Add-on', description: 'Intensive treatment layer that turns a good facial into a great one.', image: facialTreatmentImg },
      { id: 'face-bleach', name: 'Face Bleach / De-Tan', description: 'Evens out skin tone — your natural glow, just uncovered.', image: facialCleanupImg },
      { id: 'back-bleach', name: 'Back & Stomach Bleach', description: 'For even, brightened skin on your back and midriff.', image: facialCleanupImg },
      { id: 'hands-bleach', name: 'Full Hands Bleach / De-Tan', description: "Your hands work hard — they shouldn't show the damage.", image: facialCleanupImg },
      { id: 'legs-bleach', name: 'Full Legs Bleach / De-Tan', description: 'Even skin tone from knees down.', image: facialCleanupImg },
      { id: 'body-polish', name: 'Body Polish', description: 'Full-body exfoliation that leaves you feeling like the smoothest version of yourself.', image: facialCleanupImg },
      { id: 'body-scrub', name: 'Full Body Scrub', description: 'Deep cleansing scrub for skin that feels renewed head to toe.', image: facialCleanupImg },
    ],
  }, {
    id: 'nails-feet', catVar: 'nails', title: 'Nails & Feet', iconName: 'hand',
    description: 'Manicures and pedicures — because your hands and feet deserve a treat.',
    services: [
      { id: 'normal-manicure', name: 'Normal Manicure', description: 'Clean, neat nails — the basics, done well.', image: manicureImg },
      { id: 'herbal-manicure', name: 'Herbal Manicure', description: 'Natural herbs that leave your hands feeling soft, not stripped.', image: manicureImg },
      { id: 'spa-manicure', name: 'Spa Manicure', dur: '~40 min', description: 'The kind where you close your eyes and forget your stress for 40 minutes.', long: "Soak, scrub, massage and a flawless finish. The manicure where you actually relax — hands that feel cared for, not just tidied.", image: manicureImg },
      { id: 'pedilogix-manicure', name: 'Pedilogix Manicure', description: 'Premium brand products for an elevated hand-care experience.', image: manicureImg },
      { id: 'normal-pedicure', name: 'Normal Pedicure', description: 'Clean, comfortable foot care — essential maintenance.', image: pedicureImg },
      { id: 'herbal-pedicure', name: 'Herbal Pedicure', description: 'Natural foot treatment — soft soles, no rough edges.', image: pedicureImg },
      { id: 'spa-pedicure', name: 'Spa Pedicure', dur: '~50 min', description: 'The good pedicure. Where you actually relax, not just sit.', long: "A proper spa pedicure — warm soak, exfoliation, massage and finish. Tired feet in, soft and renewed feet out.", image: pedicureImg },
      { id: 'pedilogix-pedicure', name: 'Pedilogix Pedicure', description: 'Advanced foot therapy with professional-grade products.', image: pedicureImg },
      { id: 'nail-cut-file', name: 'Nail Cut / File', dur: '~15 min', description: 'Quick shaping — five minutes, fresh-looking nails.', long: "A quick, neat shape-up when you just want clean, fresh-looking nails without the full treatment.", image: manicureImg },
    ],
  }, {
    id: 'waxing-grooming', catVar: 'wax', title: 'Waxing', iconName: 'droplet',
    description: 'Smooth skin without the hassle — gentle waxing that respects your skin.',
    services: [
      { id: 'lipo-combo', name: 'Liposoluble Wax — Full Combo', description: 'Hands, legs and underarms in one go — full smooth, done fast.', image: waxingImg },
      { id: 'lipo-fh-ua', name: 'Liposoluble Wax — Hands & Underarms', description: 'Clean removal, gentle on sensitive skin.', image: waxingImg },
      { id: 'lipo-ua', name: 'Liposoluble Wax — Underarms Only', dur: '~15 min', description: 'Quick, precise underarm waxing with minimal irritation.', long: "Fast, precise underarm waxing with premium wax on a high-sensitivity area — gentle, thorough, in and out.", image: waxingImg },
      { id: 'rica-combo', name: 'Rica Wax — Full Combo', description: 'Premium Italian-wax combo — the good stuff.', image: waxingImg },
      { id: 'rica-ua', name: 'Rica Wax — Underarms', description: 'Premium wax on a high-sensitivity area. Gentle and thorough.', image: waxingImg },
      { id: 'rica-body', name: 'Rica Wax — Full Body', dur: '~75 min', description: 'Complete smoothing — arms, legs, underarms, everything.', long: "Complete smoothing with premium Rica Italian wax — gentler on sensitive skin, longer-lasting results, arms to legs.", image: waxingImg },
      { id: 'men-ua-wax', name: "Men's Underarm Wax", dur: '~15 min', description: "Clean, quick, done. Because it's 2025.", long: "Fast, precise underarm waxing with premium wax on a high-sensitivity area — gentle, thorough, in and out.", image: manUnderArmWaxingImg },
      { id: 'men-half-legs', name: "Men's Half Legs Wax", description: 'Below-the-knee smoothing for comfort and aesthetics.', image: manLegWaxImg },
      { id: 'men-full-legs', name: "Men's Full Legs Wax", description: 'Complete leg waxing from thighs down.', image: manLegWaxImg },
      { id: 'men-body', name: "Men's Full Body Wax", description: 'Everything, everywhere, all at once.', image: manBackImg },
    ],
  }, {
    id: 'massage-wellness', catVar: 'massage', title: 'Massage', iconName: 'flower',
    description: 'Not a luxury — your muscles are begging for this.',
    services: [
      { id: 'normal-massage', name: 'Normal Body Massage', dur: '45 min', description: 'Full-body relaxation that melts the day off your shoulders.', image: massageImg },
      { id: 'deep-tissue', name: 'Deep Tissue Massage', dur: '45 min', description: 'For knots you forgot you had. Intense but deeply satisfying.', long: "Firm, focused pressure that works into the knots you forgot you had. Intense in the moment, deeply loosening after.", image: massageImg },
      { id: 'deep-relax', name: 'Deep Relaxation Massage', dur: '45 min', description: 'Walk in tense, walk out like you just woke up from the best nap.', image: massageImg },
      { id: 'thai-massage', name: 'Thai Massage', dur: '45 min', description: 'Stretching, pressure points — an entirely different kind of reset.', image: massageImg },
      { id: 'head-massage', name: 'Head Massage', dur: '30 min', description: 'Your scalp holds so much tension. This releases it.', long: "A calming scalp and head massage that releases tension you carry without noticing. Twenty quiet minutes that reset your whole day.", image: massageImg },
      { id: 'shoulder-massage', name: 'Shoulder & Hands Massage', dur: '30 min', description: 'For the parts of you that carry the weight of everything.', image: massageImg },
      { id: 'foot-massage', name: 'Foot Massage', dur: '20 min', description: 'Quick, effective, and your back never complains less.', long: "Targeted pressure-point foot massage. Quick, restorative, and somehow your back and shoulders feel it too.", image: massageImg },
    ],
  }, {
    id: 'mens-grooming', catVar: 'men', title: "Men's", iconName: 'user',
    description: 'Clean fades, sharp shaves, full grooming — everything to look put together.',
    services: [
      { id: 'basic-haircut', name: "Men's Basic Haircut", description: 'A proper cut, priced fairly, done well.', image: mensGroomingImg },
      { id: 'fade-haircut', name: 'Fade / Advanced Cut', dur: '~40 min', description: 'Clean edges, sharp lines — the kind of fade your barber needs to earn.', long: "Skin fades, tapers and textured crops cut sharp and finished clean. A cut that looks intentional growing out, not just on day one.", image: mensGroomingImg },
      { id: 'clean-shave', name: 'Clean Shave', dur: '~25 min', description: 'Hot towel, smooth finish. Walk out feeling ten years younger.', long: "A proper hot-towel shave — prep, glide and a smooth, close finish. The kind of reset that feels like a small reward.", image: mensGroomingImg },
      { id: 'beard-trim', name: 'Beard Trim', dur: '~20 min', description: 'Shape it up — clean lines that look intentional, not accidental.', long: "Beard shaped to your jaw with clean, deliberate lines — defined, even, and easy to maintain between visits.", image: mensGroomingImg },
      { id: 'men-hair-color', name: 'Hair Color', description: "Base color or fashion shades — done with premium products.", image: mensGroomingImg },
      { id: 'beard-color', name: 'Beard Color', description: 'Even, natural-looking color that matches your hair or makes a statement.', image: mensGroomingImg },
      { id: 'men-hair-spa', name: "Men's Hair Spa", description: "Yes, men need this too. L'Oréal, Keratin, Protein — pick your repair.", image: mensGroomingImg },
    ],
  }];

  return (
    <div className="moon min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1 pt-16 pb-24 md:pb-0">
        {/* Hero */}
        <section className="px-5 py-7 sm:py-16 sm:text-center">
          <div className="sm:container sm:mx-auto sm:max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-2">What We Do</p>
            <h1 className="font-playfair font-semibold leading-[1.08] mb-3" style={{ fontSize: 'clamp(28px,8vw,56px)' }}>
              Walk in stressed,<br />walk out <em className="text-primary italic">made</em> for it.
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'clamp(14px,3.5vw,17px)', maxWidth: '48ch', margin: '0 auto' }}>
              Over 70 services — hair, skin, nails, waxing, massage and grooming — all done with genuine care.
            </p>
          </div>
        </section>

        {/* Category nav */}
        <CatNav categories={categories} active={activeCategory} onSelect={scrollToCategory} />

        {/* Categories */}
        <div className="md:container md:mx-auto md:max-w-7xl md:px-8 py-4 md:py-10">
          {categories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              {idx > 0 && <div className="h-px bg-border/40 mx-4 md:mx-0 my-6 md:my-10" />}

              {/* Section header */}
              <div className="sec">
                <div className="catline">
                  <span className="catbadge"
                    style={{ background: `hsl(var(--cat-${cat.catVar}-bg))`, color: `hsl(var(--cat-${cat.catVar}-fg))` }}>
                    <span style={{ width: 18, height: 18, display: 'inline-flex' }}><Icon name={cat.iconName} /></span>
                  </span>
                  <h2 className="font-playfair">{cat.title}</h2>
                </div>
                <div className="sub">{cat.description}</div>
              </div>

              {/* Card grid — 2-col mobile, 3-col md, 4-col lg */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-4 md:px-0 pt-3">
                {cat.services.map((svc, i) => (
                  <ServiceCard key={svc.id} service={svc} category={cat} onOpen={openSheet} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="py-10 sm:py-16 px-4 mt-6 border-t" style={{ background: 'hsl(var(--primary)/0.04)' }}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold mb-3">Ready to Feel Like You Again?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
              No advance payment, free consultation, reschedule anytime. Just show up — we'll handle the rest.
            </p>
            <Button onClick={() => { trackEvent('phone_call_click', { section_name: 'services_cta' }); window.location.href = 'tel:+919004832184'; }}
              size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </section>

        {/* Floating CTAs */}
        <FloatingCTA />
        <Button
          onClick={() => { trackEvent('phone_call_click', { section_name: 'services_floating_cta' }); window.location.href = 'tel:+919004832184'; }}
          className="fixed bottom-6 right-6 z-50 hidden md:flex rounded-full h-auto px-6 shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
          size="lg" aria-label="Call Moon Studios">
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </main>

      <Footer />
      <DetailSheet entry={sheet} onClose={closeSheet} />
    </div>
  );
};

export default Services;
