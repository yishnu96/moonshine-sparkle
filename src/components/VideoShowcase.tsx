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
  // User intent: unmuted by default. Browsers forbid UNMUTED autoplay without a
  // gesture, so we start muted for autoplay and unmute on first interaction.
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [volume, setVolume] = useState(100);
  const effectiveMuted = isMuted || !hasInteracted;
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());
  const isMobileRef = useRef(false);

  // Mobile inline autoplay state
  const [mobileInViewport, setMobileInViewport] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileSectionRef = useRef<HTMLElement>(null);
  const mobileRailRef = useRef<HTMLDivElement>(null);
  const mobileIframeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());
  const mobileVidRefs = useRef<Map<number, HTMLElement>>(new Map());

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

  // Unmute as soon as the user interacts (browsers only allow sound after a gesture)
  useEffect(() => {
    if (hasInteracted) return;
    const onInteract = () => setHasInteracted(true);
    const opts = { once: true, passive: true } as AddEventListenerOptions;
    // Only genuine activation gestures unlock audio (scroll does not count in Chrome)
    window.addEventListener('pointerdown', onInteract, opts);
    window.addEventListener('touchstart', onInteract, opts);
    window.addEventListener('keydown', onInteract, opts);
    return () => {
      window.removeEventListener('pointerdown', onInteract);
      window.removeEventListener('touchstart', onInteract);
      window.removeEventListener('keydown', onInteract);
    };
  }, [hasInteracted]);

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
    const all = [...iframeRefs.current.values(), ...mobileIframeRefs.current.values()];
    all.forEach((iframe) => {
      if (effectiveMuted) {
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
  }, [effectiveMuted, volume]);

  // Mobile: detect when the section enters the viewport
  useEffect(() => {
    const el = mobileSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setMobileInViewport(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mobile: track which video is most centered in the rail
  useEffect(() => {
    if (!mobileInViewport) return;
    const ratios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          ratios.set(idx, entry.intersectionRatio);
        });
        let best = mobileActiveIndex;
        let bestRatio = -1;
        ratios.forEach((r, i) => {
          if (r > bestRatio) { bestRatio = r; best = i; }
        });
        setMobileActiveIndex(best);
      },
      { root: mobileRailRef.current, threshold: [0.25, 0.5, 0.75, 1] }
    );
    mobileVidRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mobileInViewport]);

  // Mobile: play the centered video, pause the rest
  useEffect(() => {
    mobileIframeRefs.current.forEach((iframe, idx) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: idx === mobileActiveIndex && mobileInViewport ? 'playVideo' : 'pauseVideo',
          args: [],
        }),
        '*',
      );
    });
  }, [mobileActiveIndex, mobileInViewport]);

  // Keep latest active indices accessible inside the global message listener
  const activeIndexRef = useRef(0);
  const mobileActiveIndexRef = useRef(0);
  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { mobileActiveIndexRef.current = mobileActiveIndex; }, [mobileActiveIndex]);

  // Auto-advance to the next video when the current one finishes (desktop + mobile)
  const playedSources = useRef<WeakSet<Window>>(new WeakSet());
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === 'string' && !e.origin.includes('youtube')) return;
      let data: any;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      const state =
        data?.info?.playerState ?? (data?.event === 'onStateChange' ? data?.info : undefined);
      if (state === undefined || !e.source) return;
      const src = e.source as Window;

      // Mark a source as "played" so we only honour ENDED after real playback
      if (state === 1) {
        playedSources.current.add(src);
        return;
      }
      if (state !== 0) return; // 0 = ENDED
      if (!playedSources.current.has(src)) return; // ignore spurious end before play
      playedSources.current.delete(src);

      const activeDesktop = iframeRefs.current.get(activeIndexRef.current);
      const activeMobile = mobileIframeRefs.current.get(mobileActiveIndexRef.current);

      if (activeDesktop && src === activeDesktop.contentWindow) {
        emblaApi?.scrollNext();
      } else if (activeMobile && src === activeMobile.contentWindow) {
        const next = (mobileActiveIndexRef.current + 1) % videos.length;
        const el = mobileVidRefs.current.get(next);
        const rail = mobileRailRef.current;
        if (el && rail) {
          const railRect = rail.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          const delta = elRect.left - railRect.left - (rail.clientWidth - el.clientWidth) / 2;
          rail.scrollBy({ left: delta, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [emblaApi]);

  // Establish the YouTube postMessage "listening" handshake so the embed
  // broadcasts state changes (needed for auto-advance on video end).
  const startListening = (iframe: HTMLIFrameElement | null) => {
    iframe?.contentWindow?.postMessage(
      JSON.stringify({ event: 'listening', channel: 'widget' }),
      '*',
    );
  };

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
                          onLoad={(e) => startListening(e.currentTarget)}
                          src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&autoplay=0&mute=1&controls=1&rel=0&playsinline=1&modestbranding=1`}
                          title={video.title}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />

                        {isActive && (
                          <div className="absolute top-4 right-4 z-10 flex gap-2">
                            <button
                              onClick={() => { setHasInteracted(true); setIsMuted(!effectiveMuted); }}
                              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-background transition-all shadow-soft cursor-pointer"
                              aria-label={effectiveMuted ? 'Unmute video' : 'Mute video'}
                            >
                              {effectiveMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                          </div>
                        )}

                        {isActive && !effectiveMuted && (
                          <div className="absolute top-16 right-4 z-10 bg-background/80 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2 shadow-soft">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={(e) => {
                                const v = parseInt(e.target.value);
                                setVolume(v);
                                setHasInteracted(true);
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
      <section ref={mobileSectionRef} className="block md:hidden band" id="videos" data-analytics-section="videos" data-analytics-section-view="true">
        <div className="band-head">
          <span className="eyebrow">
            <span style={{ width: 12, height: 12, display: 'inline-flex' }}>
              <Icon name="play" />
            </span>{' '}
            See What We Do
          </span>
          <h2>Watch The Vibes</h2>
          <div className="sub">Real transformations, real moments — swipe to explore our favourite clips.</div>
        </div>
        <div className="vid-rail" ref={mobileRailRef}>
          {videos.map((v, index) => {
            const isActive = index === mobileActiveIndex;
            return (
              <div
                key={v.id}
                className="vid"
                data-idx={index}
                ref={(el) => { if (el) mobileVidRefs.current.set(index, el); }}
                data-analytics-section="videos"
                data-analytics-label={v.title}
              >
                <div className="vid-thumb">
                  <iframe
                    ref={(el) => { if (el) mobileIframeRefs.current.set(index, el); }}
                    onLoad={(e) => startListening(e.currentTarget)}
                    src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1&autoplay=0&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1`}
                    title={v.title}
                    className="w-full h-full pointer-events-none"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {isActive && (
                    <button
                      onClick={() => { setHasInteracted(true); setIsMuted(!effectiveMuted); }}
                      className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground shadow-soft cursor-pointer"
                      aria-label={effectiveMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {effectiveMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <div className="vid-cap">
                  <h4>{v.title}</h4>
                  <p>{v.description}</p>
                </div>
              </div>
            );
          })}
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
