import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const AftercareColouredHair = () => {
  useSEO({
    title: 'Aftercare Tips for Coloured & Highlighted Hair | Moon Studios',
    description: 'Expert tips to maintain colour-treated hair. Learn how to prevent fading, lock in moisture, and keep your global dye or highlights looking vibrant.',
    canonicalUrl: 'https://moonstudiossalon.in/aftercare-tips-for-coloured-hair'
  });

  return (
    <div className="min-h-screen flex flex-col pb-[88px] md:pb-0">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Guides & Blog</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Aftercare Tips for Coloured Hair
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Getting a gorgeous global color, balayage, or highlights is only the first step. How you treat your hair at home decides whether that color stays vibrant for months or fades in weeks.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-4">The Golden Rules of Hair Colour Aftercare</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chemical dyes alter the hair\'s structure by lifting the outer cuticle to deposit color molecules inside. To keep those molecules locked in and prevent your hair from looking dry or brassy, follow these professional aftercare habits.
              </p>

              <div className="grid gap-6 md:grid-cols-2 my-8">
                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">1. Wait 72 Hours Before Washing</h3>
                  <p className="text-muted-foreground text-sm">
                    It takes up to three days for the hair cuticle layer to fully close and lock in the new color pigment. Washing your hair too soon will wash out the pigment, leading to immediate fading.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">2. Use Sulfate-Free Products Only</h3>
                  <p className="text-muted-foreground text-sm">
                    Sodium laureth sulfate (SLS) is a common foaming agent in commercial shampoos that strips color and natural oils. Switch to salon-recommended, sulfate-free, color-safe shampoos.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">3. Wash with Cool Water</h3>
                  <p className="text-muted-foreground text-sm">
                    Hot water opens up the hair cuticle, allowing color to wash away. Wash with lukewarm water and always rinse with cool water to seal the cuticle and add natural shine.
                  </p>
                </div>

                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">4. Heat Protectant is Mandatory</h3>
                  <p className="text-muted-foreground text-sm">
                    Heat styling literally melts away hair color and dries out the cuticle. Apply a high-quality heat protectant serum or spray before using a blow dryer, straightener, or curling iron.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">Advanced Tips for Specific Colours</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Different colors fade differently, and some require extra attention:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8">
                <li>
                  <strong>For Blondes, Platinum & Grey:</strong> Use a purple shampoo once every two weeks. This prevents yellow or brassy tones and maintains a cool, fresh ash tone.
                </li>
                <li>
                  <strong>For Reds & Coppers:</strong> Red hair molecules are larger and escape the hair shaft more easily than other colors. Avoid washing frequently, and avoid direct sun exposure.
                </li>
                <li>
                  <strong>For Brunettes & Caramels:</strong> Use a blue shampoo to neutralize brassy orange undertones that naturally occur over time.
                </li>
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
                <h3 className="text-xl font-semibold mb-3">Why does my hair color fade so fast in the shower?</h3>
                <p className="text-muted-foreground">
                  Tap water contains chlorine and minerals, and hot water opens up the hair cuticle which allows the pigment molecules to escape. Washing with cool or lukewarm water and using a sulfate-free shampoo blocks this color loss.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Can I swim after coloring my hair?</h3>
                <p className="text-muted-foreground">
                  Avoid swimming in chlorinated pools or salty ocean water for at least 2 weeks after coloring. Chlorine acts as a bleaching agent and will quickly strip or green-tinge blonde highlights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Need a Tone Refresh?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              If your highlights are looking flat or brassy, a quick gloss or toner refresh at Moon Studios will bring them back to life in 30 minutes.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Colour Refresh
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

export default AftercareColouredHair;
