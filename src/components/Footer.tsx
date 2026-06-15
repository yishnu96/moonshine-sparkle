import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, PhoneOutgoing, Flower, Youtube, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';

const SEO_AREAS = ['Andheri East', 'Marol', 'Chakala', 'Saki Naka', 'JB Nagar', 'Powai', 'Ghatkopar', 'Kurla'];
const SEO_TREATMENTS = ['Nanoplastia', 'Balayage', 'Keratin Treatment', 'Hair Spa'];
const SEO_GROUPS = [
  {
    title: 'Salon Near You',
    links: SEO_AREAS.map((a) => `Salon in ${a}`),
  },
  {
    title: 'Treatments by Location',
    links: SEO_TREATMENTS.flatMap((t) => ['Andheri East', 'Marol'].map((a) => `${t} in ${a}`)),
  },
  {
    title: 'Popular Services',
    links: ['Haircut for Women', 'Haircut for Men', 'Kids Haircut', 'Hair Colour & Highlights', 'Olaplex Treatment', 'Hydra Facial', 'O3+ Facial', 'Spa Manicure & Pedicure', 'Rica Waxing', 'Eyebrow Threading', 'Head & Body Massage', 'Beard Trim & Shave'],
  },
  {
    title: 'Guides & Blog',
    links: ['Nanoplastia vs Keratin: What to Choose', 'How Long Does Balayage Last?', 'Hair Spa Benefits for Damaged Hair', 'Aftercare Tips for Coloured Hair', 'How to Prep for Your First Facial', 'Why Rica Wax Is Gentler on Skin'],
  },
];

const SEOLinkMap: Record<string, string> = {
  'salon-in-andheri-east': '/best-salon-andheri-east',
  'salon-in-marol': '/family-salon-marol-mumbai',
  'salon-in-powai': '/salon-near-powai',
  'salon-in-ghatkopar': '/salon-near-ghatkopar',
  'salon-in-kurla': '/salon-near-kurla',
  'nanoplastia-in-andheri-east': '/nanoplastia-andheri-east',
  'balayage-in-andheri-east': '/balayage-salon-andheri',
  'nanoplastia-hair-treatment': '/nanoplastia-andheri-east',
  'balayage-hair-colour': '/balayage-salon-andheri',
  'hydra-medi-facial': '/hydra-medi-facial-andheri-east',
  'olaplex-hair-treatment': '/olaplex-hair-treatment-andheri-east',
  'manicure-and-pedicure': '/manicure-pedicure-mumbai',
  'vegan-facial': '/vegan-facial-andheri-east',
  'derma-glow-facial': '/derma-glow-facial-andheri-east',
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Stylists', target: 'stylists' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'contact' },
  ];

  const moreLinks = [
    { label: 'Best Salon in Andheri East', href: '/best-salon-andheri-east' },
    { label: 'Family Salon in Marol', href: '/family-salon-marol-mumbai' },
    { label: 'Nanoplastia Hair Treatment', href: '/nanoplastia-andheri-east' },
    { label: 'Balayage Hair Colour', href: '/balayage-salon-andheri' },
    { label: 'Hydra Medi Facial', href: '/hydra-medi-facial-andheri-east' },
    { label: 'Olaplex Hair Treatment', href: '/olaplex-hair-treatment-andheri-east' },
    { label: 'Manicure and Pedicure', href: '/manicure-pedicure-mumbai' },
    { label: 'Salon Near Powai', href: '/salon-near-powai' },
    { label: 'Salon Near Ghatkopar', href: '/salon-near-ghatkopar' },
    { label: 'Salon Near Kurla', href: '/salon-near-kurla' },
    { label: 'Vegan Facial Andheri East', href: '/vegan-facial-andheri-east' },
    { label: 'Derma Glow Facial Andheri', href: '/derma-glow-facial-andheri-east' },
  ];

  const openSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(`/#${id}`);
  };

  const handleQuickLink = (target: string) => {
    if (target === 'services') {
      navigate('/services');
    } else {
      openSection(target);
    }
  };

  const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const toggleGroup = (title: string) => {
    setOpenGroups((o) => ({ ...o, [title]: !o[title] }));
  };

  const handleSEOClick = (e: React.MouseEvent, label: string) => {
    const s = slug(label);
    const destination = SEOLinkMap[s];
    trackEvent('nav_click', {
      section_name: 'footer',
      cta_label: label,
      destination_url: destination || `/${s}`,
    });
    if (!destination) {
      e.preventDefault();
      toast({
        title: "Coming Soon",
        description: `Our services in ${label} will be detailed here soon!`,
      });
    }
  };

  const socials = [
    { icon: 'instagram', url: 'https://instagram.com/moonstudiossalon', label: 'Instagram', platform: 'instagram' },
    { icon: 'youtube', url: 'https://www.youtube.com/@moonstudiossalon/shorts', label: 'YouTube', platform: 'youtube' },
    { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61579161101740', label: 'Facebook', platform: 'facebook' },
    { icon: 'mappin', url: 'https://maps.app.goo.gl/YqntQGMKfKekQMN69', label: 'Google Maps', platform: 'google_maps' },
    { icon: 'phone', url: 'tel:+919004832184', label: 'Phone', platform: 'phone' },
  ];

  return (
    <>
      {/* ORIGINAL DESKTOP FOOTER */}
      <footer ref={sectionRef} data-analytics-section="footer" data-analytics-label="Footer" data-analytics-section-view="true" className={`hidden md:block bg-secondary/30 py-12 px-4 lg:px-8 border-t border-border scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                Moon Studios
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A warm, family-friendly salon in Andheri East and Marol for women, men, and kids. Known for expert
                hair, skin, and grooming services with thoughtful consultation and care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleQuickLink(item.target)}
                      data-analytics-event="nav_click"
                      data-analytics-section="footer"
                      data-analytics-label={item.label}
                      data-analytics-destination={item.target}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">More at Moon Studios</h4>
              <ul className="space-y-2">
                {moreLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    trackEvent('outbound_click', {
                      section_name: 'footer',
                      cta_label: 'Instagram',
                      platform: 'instagram',
                      destination_url: 'https://instagram.com/moonstudiossalon',
                    });
                    window.open('https://instagram.com/moonstudiossalon', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    trackEvent('outbound_click', {
                      section_name: 'footer',
                      cta_label: 'YouTube',
                      platform: 'youtube',
                      destination_url: 'https://www.youtube.com/@moonstudiossalon/shorts',
                    });
                    window.open('https://www.youtube.com/@moonstudiossalon/shorts', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                >
                  <Youtube className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    trackEvent('map_open', {
                      section_name: 'footer',
                      cta_label: 'Google Maps',
                      platform: 'google_maps',
                    });
                    window.open('https://www.google.com/maps/place/Moon+Studios-The+Family+Salon-Nanoplastia+Hair+Treatment+%7C+Hydra+Medi+Facial+%7C+Olaplex+Hair+Treatment-Balayage+Hair+colour/@19.1142267,72.8875102,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c991b4c48baf:0x59444ef9221923!8m2!3d19.1142267!4d72.8875102!16s%2Fg%2F11pcdwvq61?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                >
                  <MapPin className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    trackEvent('outbound_click', {
                      section_name: 'footer',
                      cta_label: 'Facebook',
                      platform: 'facebook',
                      destination_url: 'https://www.facebook.com/profile.php?id=61579161101740',
                    });
                    window.open('https://www.facebook.com/profile.php?id=61579161101740', '_blank', 'noopener,noreferrer');
                  }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <a
                  href="tel:+919004832184"
                  onClick={() => {
                    trackEvent('phone_call_click', {
                      section_name: 'footer',
                      contact_method: 'phone',
                      cta_label: 'Phone',
                      destination_url: 'tel:+919004832184',
                    });
                  }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <PhoneOutgoing className="w-5 h-5" />
                </a>
                <a
                  href="https://wellnessta.com/partner/moon-studip-a-andheri-east-c-mumbai"
                  onClick={() => {
                    trackEvent('outbound_click', {
                      section_name: 'footer',
                      cta_label: 'Wellnessta',
                      platform: 'wellnessta',
                      destination_url: 'https://wellnessta.com/partner/moon-studip-a-andheri-east-c-mumbai',
                    });
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Flower className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Moon Studios. All rights reserved. Crafted with care.
            </p>
          </div>
        </div>
      </footer>

      {/* PROTOTYPE MOBILE FOOTER */}
      <footer className="block md:hidden foot" data-analytics-section="footer" data-analytics-label="Footer" data-analytics-section-view="true">
        <h3>Moon Studios</h3>
        <p className="blurb">A warm, family-friendly salon in Andheri East &amp; Marol — for women, men and kids. Known for expert hair, skin and grooming, with thoughtful consultation and care.</p>
        <h4>Quick Links</h4>
        <div className="foot-links">
          {quickLinks.map((q) => (
            <button key={q.label} onClick={() => handleQuickLink(q.target)}>
              {q.label}
            </button>
          ))}
        </div>
        <h4>Follow Us</h4>
        <div className="foot-social">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.url.startsWith('tel:') ? s.url : SEOLinkMap[slug(s.label)] || '#'}
              onClick={(e) => {
                if (s.url.startsWith('tel:')) {
                  trackEvent('phone_call_click', {
                    section_name: 'footer',
                    contact_method: 'phone',
                    cta_label: 'Call Now',
                    destination_url: s.url,
                  });
                  return;
                }
                e.preventDefault();
                trackEvent(s.platform === 'google_maps' ? 'map_open' : 'outbound_click', {
                  section_name: 'footer',
                  cta_label: s.label,
                  platform: s.platform,
                  destination_url: s.url,
                });
                window.open(s.url, '_blank', 'noopener,noreferrer');
              }}
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
        <h4>Explore Moon Studios</h4>
        <div className="seo">
          {SEO_GROUPS.map((g) => {
            const isOpen = !!openGroups[g.title];
            return (
              <div className="seo-group" key={g.title}>
                <button
                  type="button"
                  className="seo-head"
                  onClick={() => toggleGroup(g.title)}
                  aria-expanded={isOpen}
                >
                  {g.title}
                  <span className={'seo-chev' + (isOpen ? ' open' : '')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <nav className="seo-links" aria-label={g.title}>
                    {g.links.map((l) => {
                      const destination = SEOLinkMap[slug(l)];
                      return destination ? (
                        <Link key={l} to={destination} onClick={(e) => trackEvent('nav_click', { section_name: 'footer', cta_label: l, destination_url: destination })}>
                          {l}
                        </Link>
                      ) : (
                        <a key={l} href={'/' + slug(l)} onClick={(e) => handleSEOClick(e, l)}>
                          {l}
                        </a>
                      );
                    })}
                  </nav>
                )}
              </div>
            );
          })}
        </div>
        <div className="foot-copy flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} Moon Studios. All rights reserved. Crafted with care.</span>
          <span className="hidden sm:inline text-muted-foreground/40">|</span>
          <Link to="/privacy-policy" className="hover:underline hover:text-primary transition-colors text-[11px]">Privacy Policy</Link>
          <span className="hidden sm:inline text-muted-foreground/40">|</span>
          <Link to="/terms-of-service" className="hover:underline hover:text-primary transition-colors text-[11px]">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
