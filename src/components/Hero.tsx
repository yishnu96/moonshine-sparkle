import React from 'react';
import { Star, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
import { trackEvent } from '@/lib/analytics';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import googleLogo from '@/assets/images/google-logo.png';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToBooking = () => {
    trackEvent('cta_click', {
      section_name: 'hero',
      label: 'Book Your Visit',
      cta_type: 'scroll_to_booking',
    });
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    trackEvent('phone_call_click', {
      section_name: 'hero',
      contact_method: 'phone',
      cta_label: 'Call Hero',
      destination_url: 'tel:+919004832184',
    });
    window.location.href = 'tel:+919004832184';
  };

  return (
    <>
      {/* ORIGINAL DESKTOP HERO */}
      <section className="hidden md:block relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 lg:px-8 overflow-hidden" data-analytics-section="hero" data-analytics-label="Hero" data-analytics-section-view="true">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight px-0">
              Your Neighbourhood<br />Family Salon
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Haircuts, Balayage, Nanoplastia, Hydra Medi Facial, Olaplex, and grooming for women, men, and kids in a
              salon known for warmth, hygiene, and honest consultation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground px-0">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Warm, hygiene-first care</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-medium">Women, men and kids welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-medium">545+ Google reviews</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4">
              <Button onClick={scrollToBooking} data-analytics-event="cta_click" data-analytics-section="hero" data-analytics-label="Book Your Visit" data-analytics-cta-type="scroll_to_booking" size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all">
                Book Your Visit
              </Button>
              <Button onClick={() => navigate('/services')} data-analytics-event="cta_click" data-analytics-section="hero" data-analytics-label="Explore Our Services" data-analytics-destination="/services" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg rounded-xl">
                Explore Our Services
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-muted-foreground">
              <a href="https://www.justdial.com/Mumbai/Moon-Studio-The-Family-Salon-_-Hair-Salon-Andheri-East/022PXX22-XX22-180915172828-M8K4_BZDET" target="_blank" rel="noopener noreferrer" data-analytics-section="hero">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-medium">4.9 Rating on </span>
                  <img src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" alt="JustDial" className="h-4" />
                </div>
              </a>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="font-medium">4.9 Rating on</span>
                <img src={googleLogo} alt="Google" className="h-5" />
              </div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="hidden sm:grid grid-cols-3 gap-6">
              {[{
                img: hero1,
                rotation: '-rotate-2'
              }, {
                img: hero2,
                rotation: 'rotate-1'
              }, {
                img: hero3,
                rotation: '-rotate-1'
              }].map((item, index) => (
                <div key={index} className={`${item.rotation} hover:rotate-0 transition-all duration-300 hover:scale-105 cursor-pointer`} style={{
                  animationDelay: `${index * 100}ms`
                }} onClick={scrollToGallery} data-analytics-event="cta_click" data-analytics-section="hero" data-analytics-label={`Hero Image ${index + 1}`} data-analytics-cta-type="scroll_to_gallery">
                  <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-hover aspect-[3/4] bg-card">
                    <img src={item.img} alt={`Hair transformation ${index + 1}`} className="w-full h-full object-cover" loading={index === 0 ? 'eager' : 'lazy'} />
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-6 text-sm text-muted-foreground">
              <button onClick={scrollToGallery} data-analytics-event="cta_click" data-analytics-section="hero" data-analytics-label="View more transformations in our gallery" data-analytics-cta-type="scroll_to_gallery" className="hover:text-primary transition-colors underline">
                View more transformations in our gallery
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE HERO & TRUST STRIP */}
      <div className="block md:hidden">
        <section className="hero" data-analytics-section="hero" data-analytics-section-view="true">
          <div className="kick">The Family Salon · Andheri East</div>
          <h1>Your Neighbourhood<br />Family Salon</h1>
          <p>Specialist results, treated like family. Walk in, and walk out feeling like <em>you</em> again.</p>
          <div className="ratingrow flex">
            <span className="r">
              <span style={{ display: 'inline-flex', gap: 1, color: '#f5a623', width: 65, height: 13 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" />
                ))}
              </span>{' '}
              <b>4.9</b> <img src={googleLogo} alt="Google" className="h-4" />
            </span>
            <span className="r">
              <span style={{ display: 'inline-flex', gap: 1, color: '#f5a623', width: 65, height: 13 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" />
                ))}
              </span>{' '}
              <b>4.9</b> <img src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" alt="JustDial" className="h-3" />
            </span>
          </div>
        </section>

        <div className="trust">
          <div className="t"><b>4.9★</b><span>Across 300+ reviews</span></div>
          <div className="t"><b>5000+</b><span>Happy clients</span></div>
          <div className="t"><b>Hygiene</b><span>First, always</span></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
