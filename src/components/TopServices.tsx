import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Icon } from './Icon';
import { trackEvent } from '@/lib/analytics';
import { getServiceImage } from '@/utils/serviceImages';

const TopServices: React.FC = () => {
  const navigate = useNavigate();

  const desktopServices = [
    { title: 'Haircuts', description: "The kind of cut that makes people ask who does your hair — styles for men, women, and kids.", image: getServiceImage('normal-haircut') },
    { title: 'Hair Coloring', description: 'Subtle highlights that catch the light, bold color that turns heads — looks like it was made for you.', image: getServiceImage('hair-color') },
    { title: 'Hair Spa', description: "Dry, dull, or damaged hair gets deep nourishment — walks out softer, calmer, alive.", image: getServiceImage('hair-spa') },
    { title: 'Derma Glow Facial', description: 'Professional brightening treatment using targeted active dermatological ingredients to reveal a radiant, even complexion.', image: getServiceImage('derma-glow-facial') }
  ];

  const mobileServices = [
    { id: 't-haircut', name: 'Haircuts', cat: 'hair', dur: '~45 min', img: getServiceImage('normal-haircut'),
      blurb: 'The kind of cut that makes people ask who does your hair — men, women, kids.' },
    { id: 't-color', name: 'Hair Coloring', cat: 'hair', dur: '~2 hrs', img: getServiceImage('hair-color'),
      blurb: 'Subtle highlights that catch the light, or bold colour that turns heads.' },
    { id: 't-spa', name: 'Hair Spa', cat: 'hair', dur: '~60 min', img: getServiceImage('hair-spa'),
      blurb: 'Dry, dull or damaged hair gets deep nourishment — softer, calmer, alive.' },
    { id: 't-facial', name: 'Derma Glow Facial', cat: 'skin', dur: '~50 min', img: getServiceImage('derma-glow-facial'),
      blurb: 'Professional brightening treatment using targeted active dermatological ingredients.' },
  ];

  const handleServiceClick = (title: string) => {
    trackEvent('cta_click', {
      section_name: 'top_services',
      cta_label: title,
      destination_url: '/services'
    });
    navigate('/services');
  };

  return (
    <>
      {/* ORIGINAL DESKTOP SERVICES */}
      <section id="services" className="hidden md:block py-20 px-4 lg:px-8" data-analytics-section="top_services" data-analytics-label="Top Services" data-analytics-section-view="true">
        <div className="container max-w-7xl mx-auto px-0">
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
              Your Hair & Our Full-Care
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {desktopServices.map((service, index) => (
              <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] cursor-pointer" onClick={() => handleServiceClick(service.title)}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-playfair font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => navigate('/services')} data-analytics-event="cta_click" data-analytics-section="top_services" data-analytics-label="View All Services" data-analytics-destination="/services" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE SERVICES */}
      <section className="block md:hidden band" id="services" data-analytics-section="top_services" data-analytics-section-view="true" style={{ paddingBottom: 16 }}>
        <div className="sec">
          <h2>Most Loved</h2>
          <div className="sub">Tap any service to see what's involved, then book in one tap.</div>
        </div>
        
        <div className="grid top4">
          {mobileServices.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className="card rise"
              onClick={() => handleServiceClick(s.name)}
              aria-label={`${s.name} — view details and book`}
              style={{ animationDelay: `${i * 60}ms`, border: 0, textAlign: 'left', cursor: 'pointer' }}
            >
              <div className="card-img">
                <img src={s.img} alt={s.name} loading="lazy" />
                <span className="card-cat" style={{ color: `hsl(var(--cat-${s.cat === 'skin' ? 'skin' : 'hair'}-fg))` }}>
                  <Icon name={s.cat === 'skin' ? 'sparkles' : 'scissors'} />
                </span>
              </div>
              <div className="card-body">
                <div className="card-title">{s.name}</div>
                <div className="card-blurb">{s.blurb}</div>
                <div className="card-foot">
                  <span className="card-dur">
                    <Icon name="clock" /> {s.dur}
                  </span>
                  <span className="card-go">
                    View <Icon name="chevron" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          className="viewall"
          onClick={() => {
            trackEvent('cta_click', {
              section_name: 'top_services',
              cta_label: 'View All Services',
              destination_url: '/services'
            });
            navigate('/services');
          }}
          style={{ cursor: 'pointer', border: 0 }}
        >
          View All 70+ Services <Icon name="chevron" />
        </button>
      </section>
    </>
  );
};

export default TopServices;
