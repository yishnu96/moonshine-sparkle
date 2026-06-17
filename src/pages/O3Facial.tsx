import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const O3Facial = () => {
  useSEO({
    title: 'O3+ Facial & Skin Whitening in Andheri East, Mumbai | Moon Studios',
    description: 'Experience the premium O3+ Facial in Andheri East at Moon Studios. Detoxify, remove tanning, and restore instant radiance with oxygen-boosting therapy.',
    canonicalUrl: 'https://moonstudiossalon.in/o3-facial'
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
              O3+ Oxygen Therapy Facial
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revive dull, tired skin with oxygen therapy. The premium O3+ Facial line removes environmental tan, lightens pigmentation, and infuses active oxygen to give you a bright, healthy, and luminous glow.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Instant Radiance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The O3+ Facial is a multi-step clinical whitening system that combines deep pore purification, massage, and concentrated oxygen formulas. It acts as an excellent solution for city-weary skin clogged by dust, pollution, and sun damage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accelerating oxygen penetration and cellular metabolism, it provides an immediate lifting and brightening effect. This makes it the go-to facial choice before weddings, family gatherings, or major events.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Facial Benefits</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Oxygenating Cleanse:</strong> Opens clogged pores and extracts impurities.</li>
                <li><strong>De-Tanning Effect:</strong> Safely reduces pigmentation and sun damage.</li>
                <li><strong>Hyperpigmentation Care:</strong> Lightens dark spots and evens skin tone.</li>
                <li><strong>Deep Moisture Lock:</strong> Infuses hyaluronic acid and botanical nutrients.</li>
                <li><strong>Safe for Sensitive Skin:</strong> Hypoallergenic, clinical formulations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Get Your Natural Glow Back
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Experience the brightness of a professional O3+ facial session. Book your appointment at Moon Studios in Andheri East today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book O3+ Facial
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default O3Facial;
