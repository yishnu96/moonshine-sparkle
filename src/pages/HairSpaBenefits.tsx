import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HairSpaBenefits = () => {
  useSEO({
    title: 'Hair Spa Benefits for Damaged & Dry Hair | Moon Studios',
    description: 'Learn how a professional hair spa treatment revives dry, frizzy, and damaged hair. Discover scalp health benefits, keratin options, and tips.',
    canonicalUrl: 'https://moonstudiossalon.in/hair-spa-benefits-for-damaged-hair'
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
              Hair Spa Benefits for Damaged Hair
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Dry weather, hard water, heat styling, and chemical treatments strip the natural moisture from your hair. A professional hair spa is the ultimate recovery system to repair damage and restore shine.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why Your Hair Needs a Spa</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A hair spa is more than just a relaxing head massage. It is a structured treatment that involves deep cleansing, steam, application of nutrient-rich creams or masks, and active hydration. It helps rehydrate the hair shaft, normalize oil secretion in the scalp, and rebuild damaged cuticle structures.
              </p>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-6">5 Key Benefits of a Hair Spa</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Deep Conditioning & Moisture Restoration</h3>
                    <p className="text-muted-foreground">
                      The spa cream contains essential lipids, vitamins, and proteins that penetrate deep into the hair shafts, smoothing down rough cuticles and restoring natural moisture.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Scalp Health Normalization</h3>
                    <p className="text-muted-foreground">
                      Whether you have an overly oily scalp or a dry, flaky one, a hair spa balances sebum production. Clean pores prevent follicular blockages, reducing hair fall.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Improved Blood Circulation</h3>
                    <p className="text-muted-foreground">
                      The professional scalp massage improves blood flow to your hair follicles, supplying oxygen and nutrients that encourage healthier and faster hair growth.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">4</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Frizz Control & Smooth Texture</h3>
                    <p className="text-muted-foreground">
                      By sealing the cuticles and infusing moisture, hair spas dramatically reduce frizz, static, and split ends, making your hair easy to detangle and comb.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">5</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Stress Relief</h3>
                    <p className="text-muted-foreground">
                      Mental stress is a primary driver of hair fall. The soothing massage and pampering atmosphere reduce cortisol levels, promoting full-body relaxation.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-12 mb-4">Which Hair Spa Should You Choose?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Moon Studios, we offer specialized hair spa options depending on your hair needs:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8">
                <li><strong>L\'Oreal Professional Spa:</strong> Best for standard deep conditioning, hydration, and color retention.</li>
                <li><strong>Keratin Infusion Spa:</strong> Ideal for highly frizzy, dry, or coarse hair that needs smoothing.</li>
                <li><strong>Olaplex Bond-Rebuilding:</strong> Best for chemically damaged, bleached, or repeatedly dyed hair that has lost its structural strength.</li>
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
                <h3 className="text-xl font-semibold mb-3">How often should I get a hair spa?</h3>
                <p className="text-muted-foreground">
                  For dry, frizzy, or damaged hair, we recommend getting a hair spa every 3 to 4 weeks. For normal hair maintenance, once a month is perfect to keep it hydrated.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Does a hair spa stop hair fall?</h3>
                <p className="text-muted-foreground">
                  Yes, by deeply nourishing the scalp, opening blocked follicles, and improving blood circulation through targeted massage, a hair spa significantly reduces hair breakage and follicle-level hair fall.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Give Your Hair the Recovery It Deserves
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book a customized hair spa at Moon Studios. Walk in with dull, tired tresses; walk out with soft, hydrated, and bouncy hair.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Hair Spa
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default HairSpaBenefits;
