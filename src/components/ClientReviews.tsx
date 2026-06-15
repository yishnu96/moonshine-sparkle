import React from 'react';
import { Star as LucideStar, MapPin as LucideMapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Icon } from './Icon';

const ClientReviews: React.FC = () => {
  const openUrl = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');
  
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    { name: 'Riddhima C.', rating: 5, reviewCount: 15, date: '9 months ago on Google', av: 'RC',
      text: "I couldn't be happier with the results of my hair highlights! The attention to detail and precision was outstanding. The color is perfectly blended, giving my hair a natural yet vibrant look that suits me perfectly. The stylist truly understood my vision and went above and beyond to deliver. I've received so many compliments already—definitely coming back for more! Highly recommend!" },
    { name: 'Anindita R.', rating: 5, reviewCount: 15, date: '8 months ago on Google', av: 'AR',
      text: "I went for Nanoplastia treatment 2 days back and I am amazed by the service provided by Shehzad. Monica the owner is a sweetheart. She is amazing and so is Shehzad. It's my first visit but definitely not the last. Shehzad is a one-man army… patiently did the treatment with a smile on his face throughout. I have been to several parlours in several states but the warmth here is unparalleled. Thank you guys, you are fabulous!" },
    { name: 'Anannya D.', rating: 5, reviewCount: 8, date: '6 months ago on Google', av: 'AD',
      text: "Omg!! This is by far the best hair experience ever. Monica the owner is a sweetheart! They listened carefully and gave me exactly what I wanted. Sadam was magical!! He was patient and did my treatment with so much care and professionalism. My hair has never looked better! Highly recommend Moon Studios to everyone looking for a solid transformation. These people are amazing at their jobs and lovely humans too!" },
  ];

  return (
    <>
      {/* ORIGINAL DESKTOP REVIEWS */}
      <section id="reviews" className="hidden md:block py-20 px-4 lg:px-8 bg-secondary/20" data-analytics-section="reviews" data-analytics-label="Client Reviews" data-analytics-section-view="true">
        <div className="container mx-auto max-w-6xl px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
              Real Stories from Happy Clients
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    {review.av}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-xs text-muted-foreground">{review.reviewCount} reviews</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <LucideStar key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-4 text-left">{review.date}</p>

                <p className="text-sm text-muted-foreground leading-relaxed text-left">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex gap-3 justify-center">
              <Button variant="outline" size="lg" data-analytics-event="review_engagement" data-analytics-section="reviews" data-analytics-label="View All Reviews" data-analytics-platform="google_maps" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 cursor-pointer" onClick={() => openUrl('https://maps.app.goo.gl/2UPypwux2XpX57jE6')}>
                <LucideMapPin className="w-5 h-5" />
                View All Reviews
              </Button>
              <Button 
                size="lg" 
                data-analytics-event="cta_click"
                data-analytics-section="reviews"
                data-analytics-label="Book Your Appointment"
                data-analytics-cta-type="scroll_to_booking"
                className="bg-primary hover:bg-accent text-primary-foreground font-semibold cursor-pointer"
                onClick={() => scrollToId('booking')}
              >
                Book Your Appointment
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied clients.{' '}
              <button 
                onClick={() => scrollToId('gallery')}
                data-analytics-event="cta_click"
                data-analytics-section="reviews"
                data-analytics-label="See their transformations"
                data-analytics-cta-type="scroll_to_gallery"
                className="text-primary hover:text-accent font-semibold underline transition-colors cursor-pointer"
              >
                See their transformations
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE REVIEWS */}
      <section className="block md:hidden band band-soft" id="reviews" data-analytics-section="reviews" data-analytics-section-view="true">
        <div className="band-head left" style={{ textAlign: 'left' }}>
          <h2>Real Stories from Happy Clients</h2>
        </div>
        <div className="rev-rail">
          {reviews.map((r) => (
            <div className="rev" key={r.name}>
              <div className="rev-top">
                <div className="rev-av">{r.av}</div>
                <div>
                  <div className="nm">{r.name}</div>
                  <div className="meta">{r.count} reviews</div>
                </div>
              </div>
              <div className="starrow" style={{ display: 'flex', gap: 2, color: '#f5a623' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ width: 14, height: 14, display: 'inline-flex' }}>
                    <Icon name="star" />
                  </span>
                ))}
              </div>
              <div className="rev-date">{r.date.replace(' on Google', '').replace('Google', '')}</div>
              <p>"{r.text}"</p>
            </div>
          ))}
        </div>
        <div className="rev-actions" style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 12, width: '100%', justifyContent: 'center' }}>
            <button
              className="outline-btn"
              onClick={() => openUrl('https://maps.app.goo.gl/2UPypwux2XpX57jE6')}
              data-analytics-event="review_engagement"
              data-analytics-section="reviews"
              data-analytics-label="View All Reviews"
              data-analytics-platform="google_maps"
            >
              <span style={{ width: 16, height: 16, display: 'inline-flex' }}><Icon name="mappin" /></span> All Reviews
            </button>
            <button
              className="outline-btn solid"
              onClick={() => scrollToId('booking')}
              data-analytics-event="cta_click"
              data-analytics-section="reviews"
              data-analytics-label="Book Your Appointment"
              data-analytics-cta-type="scroll_to_booking"
            >
              Book Now
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join thousands of satisfied clients.{' '}
            <button 
              onClick={() => scrollToId('gallery')}
              data-analytics-event="cta_click"
              data-analytics-section="reviews"
              data-analytics-label="See their transformations"
              data-analytics-cta-type="scroll_to_gallery"
              className="text-primary hover:text-accent font-semibold underline transition-colors"
            >
              See their transformations
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default ClientReviews;
