import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const DermaGlowFacialAndheriEast = () => {
  useSEO({
    title: 'Derma Glow Facial in Andheri East, Mumbai | Moon Studios',
    description: 'Book a professional Derma Glow Facial in Andheri East at Moon Studios. Active ingredients, deep exfoliation, and advanced skin brightening. Safe, consultation-led local salon care in Marol.',
    canonicalUrl: 'https://moonstudiossalon.in/derma-glow-facial-andheri-east'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Last Updated: June 2026</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Derma Glow Facial in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              If you want visible skin brightening, even tone, and medical-grade care, Moon Studios offers a professional Derma Glow Facial in Andheri East. We utilize active dermatological formulations to deeply exfoliate, repair, and illuminate your skin.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Facial
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">What is a Derma Glow Facial?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Derma Glow Facial targets pigmentation, uneven skin tone, and dullness using safe, active ingredients like Vitamin C, Niacinamide, and gentle AHAs/BHAs. Unlike superficial facials, it cleanses deep inside the pores and stimulates cell regeneration for a lasting, natural radiance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is a results-oriented skincare solution designed for busy individuals who want a noticeable glow without heavy downtime.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Core Skin Benefits</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Deep enzymatic and chemical exfoliation</li>
                <li>Visible reduction in pigmentation and tan</li>
                <li>Boosts collagen and skin elasticity</li>
                <li>Hygienic, sterile, and consultation-backed process</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Who is the Derma Glow Facial for?</h3>
                <p className="text-muted-foreground">
                  It is suitable for anyone experiencing sun damage, pigmentation, rough skin texture, or chronic dullness. We run a complete consultation before the session to customize the active concentrations for your specific skin type.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is there any peeling or downtime?</h3>
                <p className="text-muted-foreground">
                  No. We use gentle, superficial active ingredients designed to refresh and bright without causing standard skin shedding or deep chemical peeling. You can walk out directly with hydrated, glowing skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Reveal your smoothest, brightest skin
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios to book your Derma Glow Facial or ask our skincare consultants for directions from Powai, Marol, and Chakala.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Call for a Consultation
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default DermaGlowFacialAndheriEast;
