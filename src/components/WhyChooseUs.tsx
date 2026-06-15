import React from 'react';
import { CheckCircle2, Leaf, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Icon } from './Icon';

const WhyChooseUs: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const reasons = [
    { icon: 'check', lucideIcon: CheckCircle2, title: 'Expert Consultancy', text: 'Most clients are delighted by our analysis — we understand your needs and deliver exactly what you envision.' },
    { icon: 'heart', lucideIcon: Heart, title: 'Calming Environment', text: 'Clients love the peaceful atmosphere we create. You will feel truly relaxed and rejuvenated during your visit.' },
    { icon: 'leaf', lucideIcon: Leaf, title: 'Transparent Products', text: 'We tell you what products we use — and explain why and how they work for your specific hair and skin.' },
  ];

  return (
    <>
      {/* ORIGINAL DESKTOP WHY CHOOSE US */}
      <section className="hidden md:block py-20 px-4 lg:px-8 bg-secondary/20" data-analytics-section="why_choose_us" data-analytics-label="Why Choose Us" data-analytics-section-view="true">
        <div className="container mx-auto max-w-7xl px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
              Why People Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's why families and celebrities choose us
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-10">
            {reasons.map((reason, index) => (
              <div key={index} className="group bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 py-[24px] px-[24px]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                  <reason.lucideIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-playfair font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button onClick={() => scrollToId('booking')} data-analytics-event="cta_click" data-analytics-section="why_choose_us" data-analytics-label="Schedule Your Consultation" data-analytics-cta-type="scroll_to_booking" size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-hover transition-all cursor-pointer">
              Schedule Your Consultation
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Want to know who'll style you?{' '}
              <button 
                onClick={() => scrollToId('stylists')}
                data-analytics-event="cta_click"
                data-analytics-section="why_choose_us"
                data-analytics-label="Meet our expert stylists"
                data-analytics-cta-type="scroll_to_stylists"
                className="text-primary hover:text-accent font-semibold underline transition-colors cursor-pointer"
              >
                Meet our expert stylists
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE WHY CHOOSE US */}
      <section className="block md:hidden band band-soft" id="why" data-analytics-section="why_choose_us" data-analytics-section-view="true">
        <div className="band-head">
          <h2>Why People Choose Us</h2>
          <div className="sub">Here's why families and celebrities keep coming back.</div>
        </div>
        <div className="why-list">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-ic"><span><Icon name={r.icon} /></span></div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rev-actions" style={{ paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <button
            className="outline-btn solid"
            onClick={() => scrollToId('booking')}
            data-analytics-event="cta_click"
            data-analytics-section="why_choose_us"
            data-analytics-label="Schedule Your Consultation"
            data-analytics-cta-type="scroll_to_booking"
          >
            Schedule Your Consultation
          </button>
          <p className="text-sm text-muted-foreground">
            Want to know who'll style you?{' '}
            <button 
              onClick={() => scrollToId('stylists')}
              data-analytics-event="cta_click"
              data-analytics-section="why_choose_us"
              data-analytics-label="Meet our expert stylists"
              data-analytics-cta-type="scroll_to_stylists"
              className="text-primary hover:text-accent font-semibold underline transition-colors"
            >
              Meet our expert stylists
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
