import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const SalonNearPowai = () => {
  useSEO({
    title: 'Salon Near Powai for Hair, Facial & Family Services | Moon Studios',
    description: 'Looking for a premium salon near Powai? Moon Studios in Andheri East is just 10 minutes away via Saki Vihar Road or JVLR. Haircuts, Balayage, Nanoplastia, Hydra Facials, and family grooming near Hiranandani Gardens and IIT Bombay.',
    canonicalUrl: 'https://moonstudiossalon.in/salon-near-powai'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Near Powai</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Looking for a Salon Near Powai?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Moon Studios is located in Andheri East near Marol, just 10–12 minutes away from Powai via Saki Vihar Road or JVLR. We are a practical and trusted choice for clients coming from Hiranandani Gardens, IIT Bombay, Rambaug, and Chandivali who want dependable haircut, color, facial, and advanced treatment services in a salon that feels warm and genuinely welcoming.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-primary hover:bg-primary/90">
              Call for Directions
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why clients from Powai choose us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some clients want a nearby neighborhood salon. Others are happy to travel a bit for better service,
                more consistent results, and specialists they trust with treatments like Balayage, Nanoplastia,
                Olaplex, or Hydra Medi Facial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Moon Studios is one of those salons people revisit because the experience is both technically strong
                and emotionally comfortable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Popular services</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>Haircuts and styling for women, men, and kids</li>
                <li>Balayage and advanced hair colour</li>
                <li>Nanoplastia and repair-focused hair treatments</li>
                <li>Hydra Medi Facial and glow-focused skincare</li>
                <li>Olaplex treatment, threading, waxing, and grooming</li>
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
                <h3 className="text-xl font-semibold mb-3">How far is Moon Studios from Powai?</h3>
                <p className="text-muted-foreground">
                  We are about 10 to 12 minutes away from Powai. You can reach us quickly via Saki Vihar Road or JVLR towards Ashok Nagar in Andheri East.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Do you offer parking near the salon?</h3>
                <p className="text-muted-foreground">
                  Yes, safe visitor parking is available around Harmony Apartments for our salon guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Coming from Powai?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios for the quickest route, availability, and service guidance before you visit.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Call Moon Studios
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default SalonNearPowai;
