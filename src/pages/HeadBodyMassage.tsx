import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HeadBodyMassage = () => {
  useSEO({
    title: 'Head & Body Massage & Wellness in Andheri East, Mumbai | Moon Studios',
    description: 'De-stress with a professional head and body massage in Andheri East at Moon Studios. Knots relief, deep tissue massage, head massage, and foot care.',
    canonicalUrl: 'https://moonstudiossalon.in/head-body-massage'
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
              Head & Body Massage Wellness
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your muscles are begging for a reset. Our massage therapies release chronic tension, improve blood flow, and melt away the daily physical stress of city life.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Therapeutic Stress Relief</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Massage is an essential part of self-care, not just a luxury. Sitting at a desk all day or navigating heavy commutes causes tight shoulders, lower back stiffness, and tension headaches.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Moon Studios, we provide a clean, calm, and private environment with freshly sanitized linens and high-quality aromatherapy oils. Our therapists adjust their pressure according to your tolerance and target specific knots.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Massage Therapies We Offer</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Deep Tissue Massage:</strong> Firm pressure targeting deep muscle knots and stiffness.</li>
                <li><strong>Normal Body Massage:</strong> Full-body oil massage focused on full relaxation.</li>
                <li><strong>Thai Massage:</strong> Passive stretching and pressure point activation.</li>
                <li><strong>Head Massage:</strong> Scalp massage to release mental fatigue and tension.</li>
                <li><strong>Foot & Shoulder Massage:</strong> Quick, effective relief for tired extremities.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Melt Your Stress Away
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Treat your body to a restorative wellness session. Call Moon Studios to book a professional massage today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Massage
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default HeadBodyMassage;
