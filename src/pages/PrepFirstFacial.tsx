import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const PrepFirstFacial = () => {
  useSEO({
    title: 'How to Prep for Your First Facial Treatment | Moon Studios',
    description: 'First time getting a professional facial? Here is a step-by-step prep guide. Learn what to avoid, what to discuss with your aesthetician, and aftercare.',
    canonicalUrl: 'https://moonstudiossalon.in/how-to-prep-for-your-first-facial'
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
              How to Prep for Your First Facial
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to pamper your skin? Professional facials offer deep cleansing, extraction, and targeted treatments. Knowing how to prepare ensures you avoid irritation and achieve the best possible results.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-stone max-w-none">
              <h2 className="text-3xl font-playfair font-semibold mb-6">Before You Arrive: The Pre-Facial Checklist</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To keep your skin barrier calm and receptive during active treatments, follow these guidelines in the days leading up to your appointment:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-lg font-semibold mb-1">1. Stop Exfoliating (3-5 Days Before)</h3>
                  <p className="text-muted-foreground text-sm">
                    Avoid using chemical exfoliants (AHAs, BHAs, glycolic acid, salicylic acid), retinol, or harsh physical scrubs. Professional facials include deep exfoliation, and using active products beforehand can thin out the skin barrier and cause burning.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-lg font-semibold mb-1">2. Avoid Shaving or Waxing (24-48 Hours Before)</h3>
                  <p className="text-muted-foreground text-sm">
                    Shaving and waxing create micro-tears in the skin. Applying active masks, facial steam, or massage oils over recently shaved or waxed skin will cause intense stinging and red bumps.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-lg font-semibold mb-1">3. Stay Hydrated</h3>
                  <p className="text-muted-foreground text-sm">
                    Drink plenty of water. Well-hydrated skin is much easier to cleanse and perform blackhead/whitehead extractions on, resulting in a more comfortable experience.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-lg font-semibold mb-1">4. Limit Sun Exposure</h3>
                  <p className="text-muted-foreground text-sm">
                    If you have a sunburn, we cannot perform a standard facial. Protect your skin with a broad-spectrum SPF 30+ and wear a hat if you are out in the sun.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">What to Expect During Your Consultation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A great facial begins with communication. When you sit down with our skincare specialists at Moon Studios, make sure to share:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-8">
                <li>Your current skincare routine (what products you use daily).</li>
                <li>Any known allergies, especially to botanicals, nuts, or specific chemicals.</li>
                <li>If you are pregnant or lactating (as certain ingredients like salicylic acid or electrical current treatments are avoided).</li>
                <li>Your primary goals (e.g., clearing acne, reducing tan, anti-aging, or hydration).</li>
              </ul>

              <h2 className="text-3xl font-playfair font-semibold mt-10 mb-4">Post-Facial Aftercare</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After your facial, your skin will be freshly hydrated and vulnerable. For the next 24 hours, avoid heavy makeup, steam rooms, saunas, and intense workouts that cause heavy sweating. Let your skin breathe and absorb the nutrient-dense serums.
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
                <h3 className="text-xl font-semibold mb-3">Should I wash my face before coming in for a facial?</h3>
                <p className="text-muted-foreground">
                  Yes, but keep it simple. You can wash your face with a gentle cleanser. Avoid using scrubs or chemical exfoliants, as we will perform a deep, professional exfoliation during the session anyway.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">Is it normal to break out after a facial?</h3>
                <p className="text-muted-foreground">
                  Yes, it is common to experience a temporary &apos;purge&apos; where deep impurities rise to the surface. This typically clears up within a few days, revealing smoother, healthier skin underneath.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for a Radiance Reset?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you want a gentle Fruit Facial, organic Vegan Care, or an advanced Hydra Facial, our experts are here to guide you. Book your first session today.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Facial Session
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default PrepFirstFacial;
