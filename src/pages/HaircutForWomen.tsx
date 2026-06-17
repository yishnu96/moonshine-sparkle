import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HaircutForWomen = () => {
  useSEO({
    title: 'Women\'s Haircut & Styling in Andheri East, Mumbai | Moon Studios',
    description: 'Get a professional haircut for women in Andheri East at Moon Studios. From layers and lob cuts to bangs and deep conditioning trims. Free hair consultation included.',
    canonicalUrl: 'https://moonstudiossalon.in/haircut-for-women'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Popular Services</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Women\'s Haircuts & Styling
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your hair is your signature. Whether you want a complete style makeover, face-framing layers, or a clean trim to remove split ends, we deliver precision cuts that work with your hair texture and face shape.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Our Styling Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Moon Studios, we don\'t believe in one-size-fits-all cuts. Every women\'s haircut begins with a detailed, honest consultation. We discuss your daily routine, how much styling time you have, your hair type (fine, coarse, wavy, curly), and what shape will best highlight your features.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use high-quality styling shears, advanced sectioning techniques, and professional post-cut blowouts to ensure your hair looks as good when you wash it at home as it does in our salon.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Haircut Styles We Offer</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Layers & Face-Framing:</strong> Adds volume and movement to flat or heavy hair.</li>
                <li><strong>Bob & Lob (Long Bob):</strong> Chic, classic, and extremely easy to manage.</li>
                <li><strong>Pixie & Textured Short Cuts:</strong> Bold, stylish, and customized to your head shape.</li>
                <li><strong>Fringe, Flicks & Bangs:</strong> Frame your eyes and forehead without losing length.</li>
                <li><strong>Classic Trim & Split-End Removal:</strong> Maintain length while restoring structural health.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Step Into Your Next Best Look
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Treat your hair to a professional cut and blow dry. Call Moon Studios to book your appointment or speak with our lead stylist today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Haircut
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default HaircutForWomen;
