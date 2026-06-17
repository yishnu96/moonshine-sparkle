import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafetyTrustPolicies from '@/components/SafetyTrustPolicies';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const KidsHaircut = () => {
  useSEO({
    title: 'Kids Haircut & Styling in Andheri East, Mumbai | Moon Studios',
    description: 'Safe, gentle, and patient haircuts for kids in Andheri East at Moon Studios. Friendly environment and experienced stylists for boys & girls.',
    canonicalUrl: 'https://moonstudiossalon.in/kids-haircut'
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
              Gentle Kids\' Haircuts
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Getting a haircut shouldn\'t be stressful for you or your child. Our stylists are patient, friendly, and experienced in making children feel comfortable while delivering quick, clean, and cute cuts.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">A Patient, Stress-Free Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We know that kids can get wiggly or scared during a salon visit. That\'s why we never rush. Our team takes the time to chat with your little one, introduce them to the tools, and make the experience fun.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it\'s their very first haircut or a regular trim for school, we ensure a clean, neat style that\'s easy for parents to maintain at home.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-4">What Parents Love About Us</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Gentle Handled Stylists:</strong> Calm and reassuring demeanor for kids.</li>
                <li><strong>Fun & Friendly Environment:</strong> Distractions and warm service.</li>
                <li><strong>Safe & Clean Tools:</strong> Strictly sterilized scissors and clippers.</li>
                <li><strong>Styles for All Ages:</strong> Trims, bangs, fades, and school-ready cuts.</li>
                <li><strong>First Haircut Certificates:</strong> Upon request to remember the milestone!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-6">
              Make Haircut Day Fun
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book a comfortable, quick haircut session for your little one at Moon Studios. Call us to schedule a child-friendly slot.
            </p>
            <Button onClick={() => (window.location.href = 'tel:+919004832184')} data-analytics-event="phone_call_click" data-analytics-section="landing_cta" data-analytics-contact-method="phone" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Kid\'s Haircut
            </Button>
          </div>
        </section>
      </main>

      <SafetyTrustPolicies />
      <Footer />
    </div>
  );
};

export default KidsHaircut;
