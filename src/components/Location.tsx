import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, CreditCard, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Icon } from './Icon';
import { trackEvent } from '@/lib/analytics';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8501965309724!2d72.88492991149732!3d19.114226682023627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c991b4c48baf%3A0x59444ef9221923!2sMoon%20Studios-The%20Family%20Salon-Nanoplastia%20Hair%20Treatment%20%7C%20Hydra%20Medi%20Facial%20%7C%20Olaplex%20Hair%20Treatment-Balayage%20Hair%20colour!5e0!3m2!1sen!2sin!4v1761295422766!5m2!1sen!2sin";

  const handleDirectionsClick = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=Moon+Studio+Andheri+East+Mumbai';
    trackEvent('map_open', {
      section_name: 'contact',
      cta_label: 'Get Directions',
      platform: 'google_maps',
      destination_url: url,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    trackEvent('phone_call_click', {
      section_name: 'contact',
      contact_method: 'phone',
      cta_label: 'Call Now',
      destination_url: 'tel:+919004832184',
    });
  };

  const handleMapOverlayClick = () => {
    const url = 'https://maps.app.goo.gl/YqntQGMKfKekQMN69';
    trackEvent('map_open', {
      section_name: 'contact',
      cta_label: 'Map Overlay',
      platform: 'google_maps',
      destination_url: url,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* ORIGINAL DESKTOP LOCATION */}
      <section ref={sectionRef} id="contact" data-analytics-section="contact" data-analytics-label="Location and Contact" data-analytics-section-view="true" className="hidden md:block py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl px-0">
          <div className={`scroll-fade-up ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground">
              Find Us Here
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-medium h-[500px] bg-card relative group cursor-pointer">
              <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Moon Studios Location Map" />
              <button 
                onClick={handleMapOverlayClick}
                className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full"
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-semibold">Click to open in Google Maps</p>
                </div>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 shadow-soft rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground text-base font-normal">
                       Moon Studios (The Family Salon) <br />
                       Shop C13, Harmony Apartments Krishanlal Marwah Marg <br />
                       Ashok Nagar, Andheri East, Mumbai, Maharashtra 400072
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      Easy to reach from Marol, Chakala, Saki Naka, Powai, Ghatkopar, and Kurla.
                    </p>
                  </div>
                </div>
                

                <div className="flex py-3 items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Hours</h3>
                    <div className="space-y-2">
                      <div className="inline-block bg-secondary/50 px-3 py-1.5 rounded-lg">
                        <p className="text-sm font-medium text-foreground">Open All Days</p>
                      </div>
                      <div className="inline-block bg-primary/10 px-3 py-1.5 rounded-lg ml-2">
                        <p className="text-sm font-medium text-primary">9:30 AM – 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="flex py-3 items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <a href="tel:+919004832184" data-analytics-section="contact" className="text-primary hover:text-accent transition-colors">
                      +91 90048 32184
                    </a>
                  </div>
                </div>
                
                
                <div className="flex py-3 items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Payment</h3>
                    <p className="text-muted-foreground">
                      UPI, Cards, Cash accepted
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <Button 
                  onClick={handleDirectionsClick} 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold px-6 sm:px-8 h-11 sm:h-14 text-sm sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all py-[10px]"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Directions
                </Button>
                
                <Button onClick={() => { handleCallClick(); window.location.href = 'tel:+919004832184'; }} variant="outline" size="lg" className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 h-11 sm:h-14 text-sm sm:text-lg rounded-xl transition-all py-[10px]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE LOCATION */}
      <section className="block md:hidden band" id="contact" data-analytics-section="contact" data-analytics-label="Location and Contact" data-analytics-section-view="true">
        <div className="band-head left" style={{ textAlign: 'left' }}>
          <h2>Find Us Here</h2>
        </div>
        <div className="loc">
          <div className="loc-map">
            <iframe src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Moon Studios location" style={{ border: 0 }} />
          </div>
          <div className="loc-card">
            <div className="loc-row">
              <div className="ic"><span><Icon name="mappin" /></span></div>
              <div>
                <h4>Address</h4>
                <p>Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072</p>
                <div className="loc-tags">
                  {['Marol', 'Chakala', 'Saki Naka', 'Powai', 'Ghatkopar', 'Kurla'].map((t) => <span className="tg" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
            <div className="loc-row">
              <div className="ic"><span><Icon name="clock" /></span></div>
              <div>
                <h4>Hours</h4>
                <div className="loc-tags">
                  <span className="tg">Open all days</span>
                  <span className="tg hi">9:30 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="loc-row">
              <div className="ic"><span><Icon name="phone" /></span></div>
              <div>
                <h4>Contact</h4>
                <a href="tel:+919004832184" onClick={handleCallClick}>+91 90048 32184</a>
              </div>
            </div>
            <div className="loc-row">
              <div className="ic"><span><Icon name="card" /></span></div>
              <div>
                <h4>Payment</h4>
                <p>UPI, Cards &amp; Cash accepted</p>
              </div>
            </div>
          </div>
          <div className="loc-actions">
            <button className="outline-btn solid" onClick={handleDirectionsClick}>
              <span style={{ width: 16, height: 16, display: 'inline-flex' }}><Icon name="mappin" /></span> Get Directions
            </button>
            <a className="outline-btn" href="tel:+919004832184" onClick={handleCallClick}>
              <span style={{ width: 16, height: 16, display: 'inline-flex' }}><Icon name="phone" /></span> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
