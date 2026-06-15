import { Volume2, VolumeX, ChevronLeft, ChevronRight, Play as LucidePlay, Youtube as LucideYoutube } from 'lucide-react';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';

interface VideoItem {
  id: string;
  title: string;
  description: string;
}

const videos: VideoItem[] = [
  { id: 'gMn0cAUdfrE', title: 'Complete Makeover', description: 'Sun-kissed colour, zero effort after.' },
  { id: 'v_w9hHuOthg', title: 'Hair Rescue Story', description: 'Turning hair heartbreak into a healthy, happy..' },
  { id: 'vW7M-onjBmQ', title: 'Global Grooming', description: 'From Germany to Mumbai—world-class hair care ...' },
  { id: 'sIkMaPHcmJg', title: 'ICWF Event Mackup', description: 'Where good music meets great hair...' },
  { id: 'Io3uJg9J058', title: 'Sharp Fade & Finish', description: 'From a relaxing wash to a precision cut—walk' },
  { id: '5zehCF1RbLA', title: 'The Weekend Refresh', description: 'Walk in tired, walk out ready.' },
  { id: 'gLb8TlAVgZY', title: 'The Search is Over', description: 'Finding your "hair home" after years ...' }
];

const VideoShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(100);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());
  const isMobileRef = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const check = () => {
      isMobileRef.current =
        'ontouchstart' in window ||
        (navigator as any).maxTouchPoints > 0 ||
        window.innerWidth < 768;
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    iframeRefs.current.forEach((iframe, idx) => {
      if (idx === activeIndex && isInViewport) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*',
        );
      } else {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
          '*',
        );
      }
    });
  }, [activeIndex, isInViewport]);

  useEffect(() => {
    iframeRefs.current.forEach((iframe) => {
      if (isMuted) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'mute', args: [] }),
          '*',
        );
      } else {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*',
        );
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [volume] }),
          '*',
        );
      }
    });
  }, [isMuted, volume]);

  return (
    <>
      {/* ORIGINAL DESKTOP VIDEO CAROUSEL */}
      <section ref={sectionRef} id="videos-desktop" className="hidden md:block py-20 px-4 lg:px-8 bg-background relative overflow-hidden" data-analytics-section="videos" data-analytics-label="Videos Showcase" data-analytics-section-view="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
              <LucidePlay className="w-3.5 h-3.5" />
              See What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
              Watch The Vibes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real transformations, real moments — explore our favorite client transformations.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <button onClick={scrollPrev} data-analytics-event="carousel_navigate" data-analytics-section="videos" data-analytics-label="Previous Video" data-analytics-direction="previous" className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft border flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-medium transition-all cursor-pointer" aria-label="Previous video">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} data-analytics-event="carousel_navigate" data-analytics-section="videos" data-analytics-label="Next Video" data-analytics-direction="next" className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft border flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-medium transition-all cursor-pointer" aria-label="Next video">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {videos.map((video, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div key={video.id} className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 transition-opacity duration-300">
                      <div className={cn(
                        'bg-card rounded-2xl overflow-hidden shadow-soft border border-border/40 transition-all duration-300 relative group aspect-[9/16] max-h-[600px] mx-auto',
                        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50 pointer-events-none'
                      )}>
                        <iframe
                          ref={el => { if (el) iframeRefs.current.set(index, el); }}
                          src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&autoplay=0&mute=1&controls=1&rel=0&playsinline=1&modestbranding=1&loop=1&playlist=${video.id}`}
                          title={video.title}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />

                        {isActive && (
                          <div className="absolute top-4 right-4 z-10 flex gap-2">
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-background transition-all shadow-soft cursor-pointer"
                              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                            >
                              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                          </div>
                        )}

                        {isActive && !isMuted && (
                          <div className="absolute top-16 right-4 z-10 bg-background/80 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2 shadow-soft">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={(e) => {
                                const v = parseInt(e.target.value);
                                setVolume(v);
                                if (v > 0 && isMuted) setIsMuted(false);
                              }}
                              className="w-20 h-1 accent-primary cursor-pointer"
                            />
                          </div>
                        )}

                        <div className="px-3 py-2.5 bg-card">
                          <h3 className="font-semibold text-foreground text-sm mb-0.5 truncate">
                            {video.title}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300 cursor-pointer',
                    index === activeIndex ? 'bg-primary w-8' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  )}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => window.open('https://www.youtube.com/@moonstudiossalon/shorts', '_blank')}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <LucideYoutube className="w-4 h-4" />
                <span>Follow Us on Youtube</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE MOBILE VIDEO SHOWCASE */}
      <section className="block md:hidden band" id="videos" data-analytics-section="videos" data-analytics-section-view="true">
        <div className="band-head">
          <span className="eyebrow">
            <span style={{ width: 12, height: 12, display: 'inline-flex' }}>
              <Icon name="play" />
            </span>{' '}
            See What We Do
          </span>
          <h2>Watch The Vibes</h2>
          <div className="sub">Real transformations, real moments — tap to watch our favourite clips.</div>
        </div>
        <div className="vid-rail">
          {videos.map((v) => (
            <a
              key={v.id}
              className="vid"
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="video_play"
              data-analytics-section="videos"
              data-analytics-label={v.title}
              data-analytics-destination={`https://www.youtube.com/watch?v=${v.id}`}
            >
              <div className="vid-thumb">
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
                <div className="vid-play">
                  <span>
                    <Icon name="play" />
                  </span>
                </div>
              </div>
              <div className="vid-cap">
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="yt-cta">
          <a
            href="https://www.youtube.com/@moonstudiossalon/shorts"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="outbound_click"
            data-analytics-section="videos"
            data-analytics-label="Follow Us on Youtube"
            data-analytics-platform="youtube"
            data-analytics-destination="https://www.youtube.com/@moonstudiossalon/shorts"
          >
            <span style={{ width: 17, height: 17, display: 'inline-flex' }}>
              <Icon name="youtube" />
            </span>{' '}
            Follow on YouTube
          </a>
        </div>
      </section>
    </>
  );
};

export default VideoShowcase;
