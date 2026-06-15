import React from 'react';
import { ShieldCheck, Heart, Award } from 'lucide-react';

const SafetyTrustPolicies: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-semibold text-foreground mb-3">
            Our Quality & Safety Commitment
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            At Moon Studios, we prioritize your health and satisfaction above all. Here is how we ensure safe, high-integrity beauty treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Safety & Sterilization */}
          <div className="bg-card border border-border/40 p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
              Sterilization & Hygiene
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We strictly adhere to strict sanitation guidelines. All implements are autoclaved or single-use, and treatment stations are deep-cleaned between clients.
            </p>
          </div>

          {/* Card 2: Patch Test Policy */}
          <div className="bg-card border border-border/40 p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
              Consultation & Patch Tests
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Advanced chemical treatments and active facials begin with a consultation and a mandatory patch test if skin or scalp sensitivity is reported.
            </p>
          </div>

          {/* Card 3: Satisfaction Guarantee */}
          <div className="bg-card border border-border/40 p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
              7-Day Service Guarantee
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We stand behind our expertise. If you're not completely satisfied with your color or cut, contact us within 7 days for a complimentary refinement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTrustPolicies;
