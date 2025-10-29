import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Star } from 'lucide-react';

const PreferredBy = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: false },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
  );

  const clients = [
    { name: 'Sanchari Sengupta', title: 'Singer', image: '' },
    { name: 'Lakshya Raj Anand', title: 'Film Producer', image: '' },
    { name: 'Majeet Kaur', title: 'MTX Winner', image: '' },
    { name: 'Nikhil Singh', title: 'Artist', image: '' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-primary fill-primary" />
            Preferred By
            <Star className="w-8 h-8 text-primary fill-primary" />
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by celebrities and professionals
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-[0_0_300px] min-w-0"
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Star className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {client.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferredBy;
