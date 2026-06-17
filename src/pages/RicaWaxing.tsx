import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const RicaWaxing = () => {
  useSEO({
    title: 'Rica Waxing & Liposoluble Hair Removal in Andheri East, Mumbai | Moon Studios',
    description: 'Book a professional Rica waxing session in Andheri East at Moon Studios. Italian liposoluble wax, less pain, no redness, and soft regrowth. Safe for sensitive skin.',
    canonicalUrl: 'https://moonstudiossalon.in/rica-waxing'
  });

  return (
    <div className="min-h-screen flex flex-col pb-[88px] md:pb-0">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Popular Services</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Premium Rica Italy Waxing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ditch the redness and high pain of normal honey wax. We use genuine Italian Rica liposoluble wax, designed to stick only to your hair and not to your skin, providing a gentler hair removal experience.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why Switch to Rica?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traditional sugar or honey wax is water-soluble, meaning it grabs onto your skin cells and pulls them when the strip is removed. This leads to immediate redness, skin darkening, and burning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rica is oil-soluble and is formulated with natural vegetable oils, beeswax, and skin-soothing botanical extracts. It requires a much lower temperature to melt, avoiding burns, and removes even the finest hair from the root, weakening regrowth.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Our Waxing Hygiene Standards</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>No Double-Dipping:</strong> Spatulas are never dipped twice.</li>
                <li><strong>Single-Use Disposables:</strong> Bed sheets and strips are disposed of immediately.</li>
                <li><strong>Pre & Post Wax Lotions:</strong> Rica natural gels cleanse pores and soothe skin.</li>
                <li><strong>Strict Sanitization:</strong> Fully disinfected waxing rooms and tools.</li>
                <li><strong>Gentle on Sensitive Skin:</strong> 100% colophony-free (no synthetic resins).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">How long does hair take to grow back after Rica waxing?</h3>
                <p className="text-muted-foreground">
                  Because Rica wax pulls hair directly from the root, your skin remains smooth for 3 to 4 weeks. Over time, consistent Rica waxing weakens the hair follicle, resulting in much finer, softer, and sparser hair regrowth.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Can I get Rica waxing done on my face?</h3>
                <p className="text-muted-foreground">
                  Yes, Rica has specialized gentle formulations (like Aloe Vera or Milk wax) that are designed specifically for sensitive facial skin. They effectively remove facial fuzz and upper lip hair without causing burns or peeling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Experience Smooth Skin Without the Pain
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your Rica waxing session for hands, legs, underarms, or full-body. Call Moon Studios today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Waxing Slot
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    <FloatingCTA />

    </div>
  );
};

export default RicaWaxing;
