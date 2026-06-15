import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const VeganFacialAndheriEast = () => {
  useSEO({
    title: 'Vegan Facial in Andheri East, Mumbai | Moon Studios',
    description: 'Book a premium Vegan Facial in Andheri East at Moon Studios. Enjoy a cruelty-free, plant-based skincare treatment using natural organic ingredients. A warm, clean family salon experience in Marol.',
    canonicalUrl: 'https://moonstudiossalon.in/vegan-facial-andheri-east'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Last Updated: June 2026</p>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Vegan Facial in Andheri East
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              If you are looking for a clean, cruelty-free, and plant-based skincare treatment, Moon Studios offers a rejuvenating Vegan Facial in Andheri East. We prioritize organic and natural formulations to nourish your skin without harsh chemicals.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Facial
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Why choose a Vegan Facial?</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>100% cruelty-free, plant-based ingredients</li>
                <li>Free from parabens, sulfates, and synthetic chemicals</li>
                <li>Gentle on sensitive, allergy-prone, or irritated skin</li>
                <li>Nourishes with natural antioxidants and vitamins</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">Our Salon Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Moon Studios, we combine skin-friendly organic formulations with a clean, relaxing environment. Our specialists evaluate your skin texture and needs before recommending natural extracts that restore hydration and clarity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Families and individuals from Marol, Powai, and Andheri trust us for honest skincare consultations that highlight your natural glow.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What products are used in the Vegan Facial?</h3>
                <p className="text-muted-foreground">
                  We use premium skincare formulations certified as 100% vegan, cruelty-free, and organic. They are enriched with botanicals, fruit enzymes, and natural essential oils that feed your skin nutrients directly.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is it suitable for acne-prone skin?</h3>
                <p className="text-muted-foreground">
                  Yes. Plant-based ingredients like tea tree, chamomile, and aloe vera are naturally soothing and help regulate sebum without clogging pores, making it ideal for congested or acne-prone skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Ready for clean, glowing skin?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Call Moon Studios to book your Vegan Facial or consult with our skincare specialists.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} size="lg" className="bg-white text-primary hover:bg-white/90">
              Call for a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VeganFacialAndheriEast;
