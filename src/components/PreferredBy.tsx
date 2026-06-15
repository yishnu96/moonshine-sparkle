import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Star } from 'lucide-react';
import { Icon } from './Icon';
import sanchariImg from '../assets/images/sanchari_sengupta.png';
import laxshImg from '../assets/images/laxsh_raj.png';
import snehaImg from '../assets/images/dj_sneha.png';
import parleenImg from '../assets/images/parleen.png';
import dubaiImg from '../assets/images/dubai.png';
import nikhikImg from '../assets/images/nikhik.png';
import sajilImg from '../assets/images/kandwala.png';

const PreferredBy: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false
  }, [AutoScroll({
    playOnInit: true,
    speed: 1,
    stopOnInteraction: false
  })]);

  const openUrl = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  const celebs = [
    { name: 'Sanchari Sengupta', title: 'Playback Singer', img: sanchariImg, url: 'https://share.google/t9QsmnTQmPm85OfXo' },
    { name: 'Lakshya Raj Anand', title: 'Film Producer', img: laxshImg, url: 'https://share.google/4eyKno0nbS8Yx5tAN' },
    { name: 'Sneha Agarwal', title: 'DJ', img: snehaImg, url: 'https://www.instagram.com/djsnea' },
    { name: 'Parleen Singh', title: 'Mindset Coach / Author', img: parleenImg, url: 'https://www.instagram.com/singhparleen' },
    { name: 'Manjeet Kaur', title: 'Miss India / Miss Dubai', img: dubaiImg, url: 'https://www.instagram.com/yes.manjeetkaur' },
    { name: 'Nikhil Singh', title: 'Winner, Battleground', img: nikhikImg, url: 'https://www.instagram.com/fitwithnikhil09' },
    { name: 'Sajil Khandelwal', title: 'Businessman', img: sajilImg, url: 'https://www.instagram.com/sajilkhandelwal' },
  ];

  return (
    <>
      {/* ORIGINAL DESKTOP AUTO-SCROLL CAROUSEL */}
      <section className="hidden md:block py-16 px-4 lg:px-8 bg-primary/5" data-analytics-section="preferred_by" data-analytics-label="Preferred By" data-analytics-section-view="true">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-primary fill-primary" />
              Loved by the Stylish
              <Star className="w-8 h-8 text-primary fill-primary" />
            </h2>
            <p className="text-muted-foreground text-lg">
              Celebrities • Professionals • Moms • Dads • Leaders
            </p>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {[...celebs, ...celebs].map((client, index) => (
                <div key={index} className="flex-[0_0_200px] min-w-0">
                  <div className="rounded-2xl p-8 duration-300 text-center h-full flex flex-col items-center justify-center py-0 px-0">
                    <button 
                      onClick={() => openUrl(client.url)}
                      data-analytics-event="outbound_click"
                      data-analytics-section="preferred_by"
                      data-analytics-label={client.name}
                      data-analytics-platform={client.url.includes('instagram.com') ? 'instagram' : 'google_profile'}
                      data-analytics-destination={client.url}
                      className="w-full text-left cursor-pointer"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border-4 border-primary/20">
                        <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-playfair text-center font-semibold text-foreground mb-2">
                        {client.name}
                      </h3>
                      <p className="text-muted-foreground text-center text-sm">
                        {client.title}
                      </p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE CELEB RAIL */}
      <section className="block md:hidden band band-tint" id="loved" data-analytics-section="preferred_by" data-analytics-section-view="true">
        <div className="band-head">
          <h2>
            <span className="star-i"><Icon name="star" /></span>
            Loved by the Stylish
            <span className="star-i"><Icon name="star" /></span>
          </h2>
          <div className="sub">Celebrities • Professionals • Moms • Dads • Leaders</div>
        </div>
        <div className="celeb-rail">
          {celebs.map((c) => (
            <button
              key={c.name}
              className="celeb"
              onClick={() => openUrl(c.url)}
              data-analytics-event="outbound_click"
              data-analytics-section="preferred_by"
              data-analytics-label={c.name}
              data-analytics-platform={c.url.includes('instagram.com') ? 'instagram' : 'google_profile'}
              data-analytics-destination={c.url}
            >
              <div className="ph"><img src={c.img} alt={c.name} loading="lazy" /></div>
              <div className="nm">{c.name}</div>
              <div className="ti">{c.title}</div>
              <div className="ext">View profile <Icon name="arrow" /></div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default PreferredBy;
