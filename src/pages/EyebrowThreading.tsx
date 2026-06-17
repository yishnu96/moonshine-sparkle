import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const EyebrowThreading = () => {
  useSEO({
    title: 'Eyebrow Threading & Face Shaping in Andheri East, Mumbai | Moon Studios',
    description: 'Get clean, precise eyebrow shaping and facial threading in Andheri East at Moon Studios. Professional shaping, hygienic process, and gentle aloe post-care.',
    canonicalUrl: 'https://moonstudiossalon.in/eyebrow-threading'
  });

  return (
    <div className="min-h-screen flex flex-col pb-[88px] md:pb-0">
      <StructuredData />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Popular Services</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Precise Eyebrow Threading
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Frames your face perfectly. Our experienced threading technicians deliver clean, symmetrical, and sharp eyebrow shapes designed to open up your eyes and match your facial features.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Shaping with Precision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eyebrows are a defining feature. We don&apos;t rush the process — our specialists measure the arch, length, and thickness of your natural brow line before threading to ensure a balanced, symmetric shape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use high-grade, antibacterial cotton thread to prevent irritation, and finish every session with a cooling massage using pure aloe vera gel or rosewater to reduce redness.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Facial Threading Menu</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Eyebrow Threading:</strong> Clean, detailed shape and arch definition.</li>
                <li><strong>Upper Lip Threading:</strong> Fast, gentle, and thorough hair removal.</li>
                <li><strong>Forehead & Chin Threading:</strong> Smooth finish for a polished skin look.</li>
                <li><strong>Face Sides Threading:</strong> Subtle removal for clean makeup application.</li>
                <li><strong>Full Face Threading:</strong> Complete facial hair removal and exfoliation.</li>
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
                <h3 className="text-xl font-semibold mb-3">Is threading better than waxing for eyebrows?</h3>
                <p className="text-muted-foreground">
                  Yes, threading is highly recommended for eyebrows because it allows for precision, line-by-line hair removal to create a sharp shape. Unlike waxing, threading does not pull on the delicate skin around the eyes, preventing premature sagging.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-semibold mb-3">How long does eyebrow threading last?</h3>
                <p className="text-muted-foreground">
                  On average, eyebrow threading lasts between 2 to 4 weeks depending on your individual hair growth rate. To maintain a clean and structured shape, we recommend booking a touch-up every 3 weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Define Your Look Instantly
            </h2>
            <p className="text-lg text-white/90 mb-8">
              A quick shape-up makes all the difference. Visit Moon Studios for professional threading and grooming.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Threading Slot
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

export default EyebrowThreading;
