import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HairColourHighlights = () => {
  useSEO({
    title: 'Hair Colour & Highlights in Andheri East, Mumbai | Moon Studios',
    description: 'Get expert hair colouring, highlights, global dye, and balayage in Andheri East at Moon Studios. Using premium, ammonia-free products for hair health.',
    canonicalUrl: 'https://moonstudiossalon.in/hair-colour-highlights'
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
              Hair Colour & Highlights
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your look with rich global colour, sun-kissed highlights, or a seamless balayage. We use premium, ammonia-free professional pigments that protect your hair strands while delivering deep, vibrant colour.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Artistry in Colour</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hair colouring is an art form. Our lead colorists evaluate your skin undertones, eye color, and natural hair base to recommend shades that flatter you. Whether you want deep chocolate brown, warm caramel highlights, or ash blonde balayage, we deliver consistent, rich results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize hair health: all of our bleaching processes are done gently, and we offer Olaplex bond-building add-ons to prevent damage and lock in a silky, reflective shine.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Our Colour Menu</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Global Colour:</strong> Rich, even colour coverage head-to-toe.</li>
                <li><strong>Root Touch-Up:</strong> Seamless coverage of new regrowth and grey hair.</li>
                <li><strong>Balayage:</strong> Hand-painted, low-maintenance highlights.</li>
                <li><strong>Highlights & Lowlights:</strong> Multi-dimensional blonde, caramel, or honey streaks.</li>
                <li><strong>Fashion Shades:</strong> Bold reds, coppers, blues, and pastel colors.</li>
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
                <h3 className="text-xl font-semibold mb-3">Does hair color cause damage to my hair?</h3>
                <p className="text-muted-foreground">
                  With modern salon-grade formulations and ammonia-free colors, damage is minimal. For bleaching and high-lift highlights, we recommend adding Olaplex treatment to rebuild hair bonds and protect structural integrity during processing.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">How long does a global hair color session take?</h3>
                <p className="text-muted-foreground">
                  A standard global hair color or root touch-up takes about 1.5 to 2 hours. If you are getting complex highlighting services like balayage, it can take 3 to 4 hours depending on your hair length and density.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for a Colour Change?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book a custom colouring consultation at Andheri East&apos;s favorite studio. Bring reference photos, and let&apos;s design your perfect shade together.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Consultation
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

export default HairColourHighlights;
