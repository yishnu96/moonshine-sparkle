import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceOlaplex from '@/assets/service-olaplex.jpg';
import serviceNanoplastia from '@/assets/service-nanoplastia.jpg';

const SkinCareServices = () => {
  const services = [
    {
      title: 'Facial Treatments',
      description: 'Choose from Regular, Advanced, Organic, or Medi facials for glowing, healthy skin.',
      image: serviceFacial,
    },
    {
      title: 'Waxing',
      description: 'Professional waxing services - Full, Half, Upper Arms for smooth, hair-free skin.',
      image: serviceColoring,
    },
    {
      title: 'Pedicure & Manicure',
      description: 'Pamper yourself with Normal, Herbal, Spa, or Pedilogix treatments for beautiful hands and feet.',
      image: serviceOlaplex,
    },
    {
      title: 'Bleach & D-Tan',
      description: 'Brighten your skin with our bleach, d-tan, body polish, and scrub treatments.',
      image: serviceNanoplastia,
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
            Skin Care Services<br />We Offer
          </h2>
        </div>

        {/* Desktop: Carousel for all items */}
        <div className="hidden lg:block overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex-[0_0_calc(25%-1.125rem)] min-w-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Sparkles className="w-6 h-6 text-primary drop-shadow-md" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Grid layout */}
        <div className="grid grid-cols-2 lg:hidden gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <Sparkles className="w-6 h-6 text-primary drop-shadow-md" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-playfair font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinCareServices;
