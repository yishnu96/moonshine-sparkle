import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const BeardTrimShave = () => {
  useSEO({
    title: 'Beard Trim, Shaping & Clean Shave in Andheri East, Mumbai | Moon Studios',
    description: 'Get a professional beard trim, line-up, or hot-towel shave in Andheri East at Moon Studios. Sharp razor detailing, jaw shaping, and skin hydration.',
    canonicalUrl: 'https://moonstudiossalon.in/beard-trim-shave'
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
              Beard Grooming & Clean Shaves
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your beard defines your jawline. Whether you want a clean, hot-towel straight shave, a crisp cheek line-up, or a full trim to groom length and flyaways, we deliver sharp, symmetrical results.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Grooming & Care</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beard styling is about geometry and hair texture. Our barbers evaluate your jaw structure, growth pattern, and hair density to shape a beard that sits balanced on your face.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you prefer a clean look, our **Hot-Towel Shave** uses pre-shave oil, thick lather, and a fresh single-use blade for a close, comfortable glide, followed by a cold towel splash and hydrating balm to prevent razor burn.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Grooming Menu</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Beard Trim & Shape:</strong> Custom length trim and jawline shaping.</li>
                <li><strong>Razor Line-Up:</strong> Straight razor detailing on cheeks and neck.</li>
                <li><strong>Hot-Towel Clean Shave:</strong> Classic close shave with hot towel prep.</li>
                <li><strong>Beard Colouring:</strong> Natural-looking dye to cover patches or grey hair.</li>
                <li><strong>Skin Hydration Add-on:</strong> Post-shave cooling massage for sensitive skin.</li>
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
                <h3 className="text-xl font-semibold mb-3">How often should I get my beard trimmed?</h3>
                <p className="text-muted-foreground">
                  To maintain a sharp outline and keep flyaways under control, we recommend a professional beard trim and line-up every 1 to 2 weeks. If you are growing it out, a trim every 3 to 4 weeks helps keep the shape neat.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">How do you prevent razor burns during a clean shave?</h3>
                <p className="text-muted-foreground">
                  We use a multi-step prep process: a warm steam towel to open pores and soften the beard, pre-shave oil to create a protective barrier, premium lathering cream, and a fresh single-use blade. We finish with a cold towel and alcohol-free soothing balm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Look Sharp, Feel Confident
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Treat your beard to professional grooming. Call Moon Studios in Andheri East to book your slot today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Beard Grooming
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

export default BeardTrimShave;
