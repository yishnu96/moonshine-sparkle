import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const HaircutForMen = () => {
  useSEO({
    title: 'Men\'s Haircut & Grooming in Andheri East, Mumbai | Moon Studios',
    description: 'Book a professional haircut for men in Andheri East at Moon Studios. Precision skin fades, classic cuts, beard trimming, and styling.',
    canonicalUrl: 'https://moonstudiossalon.in/haircut-for-men'
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
              Men\'s Haircuts & Grooming
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              From crisp skin fades and modern textured crops to classic office-ready trims, our barbers and stylists design cuts that look sharp on day one and grow out cleanly.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Precision Grooming</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A great haircut is about detail. Our barbers pay attention to your hair density, natural growth directions, and head structure. We make sure your neck lines are clean, sideburns are symmetrical, and the blend is seamless.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Complete your haircut with a professional hair wash, styling using matte clay or pomade, and an expert beard trim to define your jawline.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Men\'s Grooming Menu</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Skin Fade & Taper:</strong> Seamless blending from skin to length.</li>
                <li><strong>Classic Haircut:</strong> Clean scissor work, styled to your preference.</li>
                <li><strong>Beard Trim & Line-Up:</strong> Razor detailing and beard shaping.</li>
                <li><strong>Hot-Towel Shave:</strong> Relaxing, close shave with warm towel prep.</li>
                <li><strong>Men\'s Hair Spa:</strong> Nourishing scalp therapy to fight dryness and pollution.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Keep Your Cut Sharp
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your slot at Andheri\'s trusted family salon. Walk in for a fresh fade, walk out ready for anything.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Men\'s Cut
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default HaircutForMen;
