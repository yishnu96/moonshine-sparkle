import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HowLongBalayageLasts = () => {
  useSEO({
    title: 'How Long Does Balayage Last & Maintenance Guide | Moon Studios',
    description: 'Find out how long a balayage hair colour lasts, what affects its lifespan, and expert tips to extend its vibrancy. Low maintenance hair colouring advice.',
    canonicalUrl: 'https://moonstudiossalon.in/how-long-does-balayage-last'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Guides & Blog</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              How Long Does Balayage Last?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Balayage is celebrated for its natural, hand-painted look and soft root regrowth. But exactly how long can you go between salon visits, and how do you keep it looking fresh? Let\'s break down the details.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-4">The Lifespan of a Balayage</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On average, a professional balayage lasts between <strong>4 to 6 months</strong>. However, because the colour is blended seamlessly near your roots and hand-painted down the lengths, many clients find their hair still looks beautiful and lived-in for up to <strong>8 to 12 months</strong> as it grows out.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike traditional foil highlights that show a harsh line of demarcation after 6-8 weeks, balayage grows out softly without a noticeable regrowth line. This makes it one of the most low-maintenance, cost-effective hair colour techniques available.
              </p>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">Factors That Affect Your Balayage Lifespan</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8">
                <li>
                  <strong>Wash Frequency:</strong> The more frequently you wash your hair, the faster your toner or gloss will fade. Washing 2-3 times a week is ideal.
                </li>
                <li>
                  <strong>Shampoo Type:</strong> Sulfate-based shampoos strip away molecules of colour quickly. Always use a professional sulfate-free, colour-safe shampoo.
                </li>
                <li>
                  <strong>Water Temperature:</strong> Hot water opens the hair cuticle, letting colour escape. Wash with lukewarm water and rinse with cool water to lock in shine.
                </li>
                <li>
                  <strong>Sun & Heat Exposure:</strong> UV rays from the sun and high heat from styling tools (blow dryers, straighteners) oxidize the pigment, turning blonde brassy and brown flat.
                </li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">Tips to Make Your Balayage Last Longer</h2>
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="border rounded-xl p-6 bg-muted/20">
                  <h3 className="text-lg font-semibold mb-2">1. Schedule a Toner Refresh</h3>
                  <p className="text-muted-foreground text-sm">
                    Your lightened sections will stay light, but the tone (ashy, golden, caramel) will fade after 8-12 weeks. Booking a quick 30-minute toner or gloss treatment will completely revive the colour without doing a full balayage again.
                  </p>
                </div>
                <div className="border rounded-xl p-6 bg-muted/20">
                  <h3 className="text-lg font-semibold mb-2">2. Use Purple/Blue Shampoo</h3>
                  <p className="text-muted-foreground text-sm">
                    For blonde balayage, use a purple shampoo once every 2 weeks to neutralize yellow tones. For brunette or caramel balayage, use a blue shampoo to neutralize unwanted orange or brassy undertones.
                  </p>
                </div>
                <div className="border rounded-xl p-6 bg-muted/20">
                  <h3 className="text-lg font-semibold mb-2">3. Hydrate & Protect</h3>
                  <p className="text-muted-foreground text-sm">
                    Bleached hair requires moisture. Use a deep conditioning hair mask weekly and apply a heat protectant spray before using any hot tools.
                  </p>
                </div>
                <div className="border rounded-xl p-6 bg-muted/20">
                  <h3 className="text-lg font-semibold mb-2">4. Filter Your Shower Water</h3>
                  <p className="text-muted-foreground text-sm">
                    Hard water contains heavy minerals like iron and copper that can deposit on lightened hair, making it look dark and brassy. A shower filter helps protect your colour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Can I get balayage if I have dark black hair?</h3>
                <p className="text-muted-foreground">
                  Yes! Our colorists specialize in painting caramel, honey, and hazelnut tones onto dark Asian hair to create soft, seamless dimensions that blend naturally and grow out without harsh lines.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Does balayage damage your hair?</h3>
                <p className="text-muted-foreground">
                  Like any lightening treatment, bleach is used, but balayage is painted on the surface and doesn\'t saturate every strand like global highlights. We always integrate bond-builders like Olaplex to protect hair structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for a Balayage Upgrade?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              At Moon Studios, we specialize in seamless, hand-painted balayage tailored to your skin tone and hair health. Book a consultation with our expert stylists today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Appointment
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default HowLongBalayageLasts;
