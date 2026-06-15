import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Icon } from './Icon';
import { trackEvent } from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import before4 from '@/assets/gallery/f_color_b.jpg';
import after5 from '@/assets/gallery/f_color_af.jpg';
import before3 from '@/assets/gallery/1761652646179.jpg';
import after2 from '@/assets/gallery/1761652646175.jpg';

const specialties = [
  {
    id: 'nanoplastia',
    badge: 'Signature Treatment',
    title: 'Nanoplastia — Smooth,\nHealthy Hair That Moves',
    body: [
      "Nanoplastia isn't just another smoothing treatment. It uses organic acids and amino acids to rebuild your hair from the inside — repairing damage, removing frizz, and giving you that natural, lightweight bounce that lasts.",
      "It's for anyone battling humidity damage, frizz, chemical damage from years of coloring, or just hair that won't behave. No formaldehyde. No harsh chemicals. Just visibly healthier, smoother hair.",
      "At Moon Studios, this is what our Google Maps listing leads with — because it's what we're known for in Andheri East. Hundreds of treatments, consistent results."
    ],
    cta: 'Book a Free Consultation',
    beforeAfter: { before: before3, after: after2 },
    image: serviceNanoplastia,
    icon: Sparkles
  },
  {
    id: 'balayage',
    badge: "Shehzad's Signature",
    title: 'Balayage — Color That\nLooks Like It Was Meant To Be',
    body: [
      "Balayage is hand-painted color — soft sun-kissed tones that grow out naturally, not in harsh lines. It's the most requested service at Moon Studios because it looks like the color you were born with, just better.",
      "Whether you want warm caramel tones, cool ash blonde, or subtle lowlights that add dimension, Shehzad's freehand technique gives you dimensional color that looks good at 2 days and 2 months.",
      "Every balayage at Moon Studios starts with a honest consultation about your hair health. If your hair isn't ready for it, we'll tell you — and suggest what works first."
    ],
    cta: 'Book a Free Consultation',
    beforeAfter: { before: before4, after: after5 },
    image: serviceColoring,
    icon: Sparkles
  }
];

const SpecialtyHighlight: React.FC = () => {
  const { toast } = useToast();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % specialties.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    resetTimer();
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, activeIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, 8000);
  }, [goNext]);

  useEffect(() => {
    timerRef.current = setTimeout(goNext, 8000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [goNext]);

  const scrollToBooking = () => {
    const isMobile = window.innerWidth < 768;
    const targetId = isMobile ? 'booking' : 'booking-desktop';
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const current = specialties[activeIndex];

  const waLink = "https://wa.me/919004832184?text=Hi%20Moon%20Studios!%20I'd%20love%20to%20book%20a%20free%20Nanoplastia%20%2F%20Balayage%20consultation%20%E2%80%94%20when's%20your%20next%20available%20slot%3F";

  const handleMobileCtaClick = () => {
    trackEvent('booking_start', {
      section_name: 'specialty',
      booking_method: 'whatsapp',
      service_name: 'Nanoplastia / Balayage consultation',
      destination_url: waLink,
    });
    toast({
      description: "Opening WhatsApp...",
    });
  };

  return (
    <>
      {/* ORIGINAL DESKTOP SPECIALTY SLIDER */}
      <section
        id="specialty"
        data-analytics-section="specialty"
        data-analytics-label="Specialty Highlight"
        data-analytics-section-view="true"
        className="hidden md:block bg-primary/[0.03] overflow-hidden"
        aria-label="Featured Treatments"
      >
        <div className="relative py-16 px-4 lg:px-8">
          <button
            onClick={goPrev}
            data-analytics-event="carousel_navigate"
            data-analytics-section="specialty"
            data-analytics-label="Previous treatment"
            data-analytics-direction="previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft border flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-medium hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous treatment"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            data-analytics-event="carousel_navigate"
            data-analytics-section="specialty"
            data-analytics-label="Next treatment"
            data-analytics-direction="next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft border flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-medium hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Next treatment"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="container mx-auto max-w-6xl relative">
            <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-98 translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6 text-left">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    <current.icon className="w-3.5 h-3.5" />
                    {current.badge}
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold text-foreground leading-tight whitespace-pre-line">
                    {current.title}
                  </h2>

                  <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {current.body.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      onClick={scrollToBooking}
                      data-analytics-event="cta_click"
                      data-analytics-section="specialty"
                      data-analytics-label={current.cta}
                      data-analytics-cta-type="scroll_to_booking"
                      size="lg"
                      className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-medium hover:shadow-hover transition-all w-full sm:w-auto"
                    >
                      {current.cta}
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-card rounded-3xl p-4 sm:p-6 shadow-medium border border-border/40">
                    <div className="flex gap-4">
                      <div className="w-1/2 space-y-2">
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-soft bg-muted">
                          <img src={current.beforeAfter.before} alt="Before treatment" className="w-full h-full object-cover" loading="lazy" />
                          <span className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-foreground">Before</span>
                        </div>
                      </div>
                      <div className="w-1/2 space-y-2">
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-soft bg-muted">
                          <img src={current.beforeAfter.after} alt="After treatment" className="w-full h-full object-cover" loading="lazy" />
                          <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-lg text-xs font-bold">After</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8 lg:mt-12">
              {specialties.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${idx === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE SPECIALTY SECTION */}
      <section className="block md:hidden band" id="specialty" data-analytics-section="specialty" data-analytics-section-view="true" style={{ padding: '24px 0 4px' }}>
        <div className="spot">
          <span className="pill">
            <span style={{ width: 13, height: 13, display: 'inline-flex' }}>
              <Icon name="sparkles" />
            </span>{' '}
            Why clients drive past 10 salons
          </span>
          <div className="imgs" style={{ marginTop: 12 }}>
            <div>
              <img src={serviceNanoplastia} alt="Hair before Nanoplastia treatment" />
              <span className="tag-ba">Before</span>
            </div>
            <div>
              <img src={serviceColoring} alt="Hair after balayage and Nanoplastia" />
              <span className="tag-ba">After</span>
            </div>
          </div>
          <h3>
            Nanoplastia &amp; Balayage —
            <br />
            the treatments we're known for
          </h3>
          <p>
            We do 70+ services, but these two are what clients <em>remember</em>. Nanoplastia rebuilds your hair from the
            inside — frizz-free, healthy, lasting months. Book a free consultation and we'll be honest about what your
            hair actually needs.
          </p>
          <a
            className="spotcta"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileCtaClick}
          >
            <span style={{ width: 19, height: 19, display: 'inline-flex' }}>
              <Icon name="whatsapp" />
            </span>
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default SpecialtyHighlight;
