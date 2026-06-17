import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const NanoplastiaVsKeratin = () => {
  useSEO({
    title: 'Nanoplastia vs Keratin: Which Treatment to Choose? | Moon Studios',
    description: 'Compare Nanoplastia vs Keratin hair treatments. Learn the differences in safety, results, duration, and suitability for your hair type.',
    canonicalUrl: 'https://moonstudiossalon.in/nanoplastia-vs-keratin-what-to-choose'
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
              Nanoplastia vs Keratin: What to Choose?
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Confused between Nanoplastia and Keratin? While both promise frizz-free, shiny hair, their chemical makeup, process, and results are entirely different. Let\'s find out which is right for you.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-6">The Core Difference</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The main difference lies in their chemistry and how they interact with your hair. 
                <strong> Keratin treatments</strong> primarily coat the outer layer of the hair cuticle using proteins and (often) formaldehyde or its derivatives to smooth out frizz. 
                <strong> Nanoplastia</strong>, on the other hand, works at a cellular level. It uses nano-technology to seal organic acids, amino acids, and nutrients deep into the hair cortex, reconstructing it from within.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto my-8 border rounded-xl">
                <table className="min-w-full divide-y divide-border text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Nanoplastia</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Keratin Treatment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground">Chemical Safety</td>
                      <td className="px-6 py-4 text-primary font-medium">100% Formaldehyde-Free (Organic Acids)</td>
                      <td className="px-6 py-4">May contain formaldehyde or chemical derivatives</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground">Primary Result</td>
                      <td className="px-6 py-4">Ultra-sleek, straight, mirror-like shine</td>
                      <td className="px-6 py-4">Frizz-free, relaxed curls, natural volume retained</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground">Hair Health</td>
                      <td className="px-6 py-4">Heals & reconstructs the inner cortex</td>
                      <td className="px-6 py-4">Coats the outer cuticle for surface-level smoothing</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground">How Long It Lasts</td>
                      <td className="px-6 py-4">Up to 6 - 8 months (grows out)</td>
                      <td className="px-6 py-4">Typically 3 - 4 months (washes out)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground">Best Suited For</td>
                      <td className="px-6 py-4">Thick, curly, coarse, or highly frizzy hair</td>
                      <td className="px-6 py-4">Fine, wavy, or moderately damaged hair</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">When to Choose Nanoplastia</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nanoplastia is the premium modern choice if you want <strong>straight, glossy, and highly manageable hair</strong>. Since it does not release toxic fumes during the flat-ironing process, it is safe for sensitive individuals and pregnant/lactating women. It is particularly effective if you want long-lasting results that grow out naturally rather than washing out gradually.
              </p>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">When to Choose Keratin</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Keratin is a better option if you want to <strong>retain your hair\'s natural volume and body</strong>. If you love your curls but want them defined, smooth, and free of frizz without making them pin-straight, Keratin is the way to go. It is also excellent for fine hair that might look too flat after an intense straight treatment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Which treatment is safer for damaged hair?</h3>
                <p className="text-muted-foreground">
                  Nanoplastia is 100% formaldehyde-free and rebuilds hair from within using organic acids, making it safer for long-term hair health. However, for extremely compromised or mushy bleached hair, we recommend a bond-repair treatment (like Olaplex) first to rebuild strength.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Can I color my hair after these treatments?</h3>
                <p className="text-muted-foreground">
                  Yes, but we recommend waiting at least 2 weeks after a Keratin or Nanoplastia treatment before coloring to avoid color lifting or weakening the smoothing effect of the acids.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Still Unsure? Get a Free Hair Analysis
            </h2>
            <p className="text-lg text-white/90 mb-8">
              At Moon Studios, we examine your hair texture, porosity, and health before recommending any treatment. Talk to our stylist Shehzad for an honest recommendation.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Call for Free Consultation
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default NanoplastiaVsKeratin;
