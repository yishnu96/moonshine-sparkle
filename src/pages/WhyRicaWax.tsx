import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const WhyRicaWax = () => {
  useSEO({
    title: 'Why Rica Wax Is Gentler on Sensitive Skin | Moon Studios',
    description: 'Learn why Rica Liposoluble Wax is gentler on your skin than normal sugar/honey wax. Discover pain reduction, hair removal, and aftercare benefits.',
    canonicalUrl: 'https://moonstudiossalon.in/why-rica-wax-is-gentler-on-skin'
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
              Why Rica Wax Is Gentler on Skin
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              If standard waxing leaves you with red bumps, burning skin, or ingrown hairs, it is time to switch to Rica. Formulated in Italy, Rica is a premium liposoluble wax designed to respect sensitive skin.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-4">Rica Liposoluble Wax vs. Normal Wax</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Normal wax (often made from sugar, honey, or lemon) is water-soluble. It sticks to both your hair and your skin. When the strip is pulled, it pulls away the top layer of skin cells along with the hair, causing redness, irritation, and sometimes burns.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Rica Wax</strong> is liposoluble (oil-soluble). It is formulated to bind specifically to the hair shaft and <strong>not to the skin</strong>. This single chemical difference makes the entire process dramatically gentler, less painful, and safer for sensitive areas.
              </p>

              {/* Comparison */}
              <div className="grid gap-8 md:grid-cols-2 my-10">
                <div className="border rounded-xl p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Rica Liposoluble Wax</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 100% Colophony-free (no skin-sensitizing resins)</li>
                    <li>✓ Formulated with natural vegetable oils and beeswax</li>
                    <li>✓ Melt temperature is close to body temperature (no burns)</li>
                    <li>✓ Pulls only the hair, leaving skin calm and exfoliated</li>
                    <li>✓ Effectively removes short, coarse, and deep-rooted hair</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-6 border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Normal Sugar/Honey Wax</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✗ Contains synthetic resins and chemicals</li>
                    <li>✗ Sticks aggressively to the skin, causing redness</li>
                    <li>✗ Requires high heat, posing a risk of skin burning</li>
                    <li>✗ Can lift skin cells, causing pigmentation in dark skin</li>
                    <li>✗ Misses very fine or tiny hair shafts</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">The Main Skin Benefits of Rica</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8">
                <li>
                  <strong>Virtually Pain-Free:</strong> Because it doesn&apos;t tug or pull the skin barrier, the pain factor is reduced by up to 50% compared to honey wax.
                </li>
                <li>
                  <strong>No Red Bumps or Strawberry Legs:</strong> The natural pre-wax and post-wax lotions soothe the hair follicles instantly, preventing the formation of red bumps or irritated pores.
                </li>
                <li>
                  <strong>Slows Regrowth:</strong> Rica wax grabs hair right from the root, weakening the follicle over time so your hair grows back thinner, softer, and much slower.
                </li>
                <li>
                  <strong>Tan Removal:</strong> It acts as a gentle skin exfoliator, lifting dead skin cells and environmental tan to reveal bright, smooth skin.
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
                <h3 className="text-xl font-semibold mb-3">Why can&apos;t you wash off Rica wax with water?</h3>
                <p className="text-muted-foreground">
                  Rica is a liposoluble wax, meaning it is oil-soluble rather than water-soluble. It can only be dissolved and cleaned using a post-wax oil (usually enriched with Aloe Vera or Argan oil), which also helps soothe and hydrate the skin.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Is Rica wax suitable for sensitive facial skin?</h3>
                <p className="text-muted-foreground">
                  Yes. Rica wax is excellent for facial waxing as it has natural anti-inflammatory properties and does not pull the skin, making it much safer for sensitive facial areas compared to regular wax.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Switch to the Gentler Way of Waxing
            </h2>
            <p className="text-lg text-white/90 mb-8">
              At Moon Studios, we offer full-body, arms, legs, and underarm waxing using genuine Rica Italy products. Treat your skin to the luxury it deserves.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Rica Wax Session
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

export default WhyRicaWax;
