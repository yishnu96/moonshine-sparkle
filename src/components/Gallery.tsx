import { Instagram } from 'lucide-react';
import { Button } from './ui/button';

import before1 from '@/assets/gallery/1_b.jpg';
import after1 from '@/assets/gallery/1_a.jpg';

import before2 from '@/assets/gallery/1761652646179.jpg';
import after2 from '@/assets/gallery/1761652646175.jpg';

import before3 from '@/assets/gallery/image_mare_before.jpg';
import after3 from '@/assets/gallery/image_male_after.jpg';

import before4 from '@/assets/gallery/female_hair_b.jpg';
import after4 from '@/assets/gallery/female_hair_after.jpg';

import before5 from '@/assets/gallery/f_color_b.jpg';
import after5 from '@/assets/gallery/f_color_af.jpg';

import before6 from '@/assets/gallery/f_face_b.jpg';
import after6 from '@/assets/gallery/f_face_af.jpg';

import before7 from '@/assets/gallery/f_hair_one_before.jpg';
import after7 from '@/assets/gallery/f_hair_one_after.jpg';

import before8 from '@/assets/gallery/last_one.jpg';
import after8 from '@/assets/gallery/last_one_after.jpg';

const Gallery = () => {
  const transformations = [{
    before: before1,
    after: after1,
    alt: 'Hair transformation with balayage highlights',
    type: 'image'
  }, {
    before: before2,
    after: after2,
    alt: 'Professional styling result',
    type: 'image'
  }, {
    before: before3,
    after: after3,
    alt: 'Perfect hair color treatment',
    type: 'image'
  }, {
    before: before4,
    after: after4,
    alt: 'Nanoplastia smoothening treatment',
    type: 'image'
  }, {
    before: before5,
    after: after5,
    alt: 'Hair coloring with highlights',
    type: 'image'
  }, {
    before: before6,
    after: after6,
    alt: 'Olaplex bond repair treatment',
    type: 'image'
  }, {
    before: before7,
    after: after7,
    alt: 'Hair styling transformation video',
    type: 'image',
  }, {
    before: before8,
    after: after8,
    alt: 'Beautiful hair color result',
    type: 'image'
  }];
  return <section id="gallery" className="py-20 px-4  lg:px-8 bg-secondary/20">
    <div className="container max-w-7xl mx-auto px-0">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3">
          See Transformations You’ll Love
        </h2>
        <p className="text-muted-foreground">
          Follow us on Instagram for more stunning results
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {transformations.map((item, index) => <div key={index} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up" style={{
          animationDelay: `${index * 50}ms`
        }}>
          <div className="flex h-full w-full">
            {/* Before - Left Half */}
            <div className="relative w-1/2 h-full overflow-hidden">
              {item.type === 'image' ? (
                <img src={item.before} alt={`Before - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              ) : (
                <video src={item.before} className="absolute inset-0 w-full h-full object-cover" loop muted playsInline autoPlay />
              )}
              <div className="absolute top-3 left-3 bg-background/90 text-foreground px-2 py-1 rounded-full text-xs font-semibold">
                Before
              </div>
            </div>

            {/* After - Right Half */}
            <div className="relative w-1/2 h-full overflow-hidden">
              {item.type === 'image' ? (
                <img src={item.after} alt={`After - ${item.alt}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              ) : (
                <video src={item.after} className="absolute inset-0 w-full h-full object-cover" loop muted playsInline autoPlay />
              )}
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                After
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-white/50 -translate-x-1/2" />
        </div>)}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2" onClick={() => window.open('https://www.instagram.com/moonstudiossalon', '_blank')}>
          <Instagram className="w-5 h-5" />
          See More
        </Button>
      </div>
    </div>
  </section>;
};
export default Gallery;