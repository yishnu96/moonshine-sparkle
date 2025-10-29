import { CheckCircle2, Leaf, Eye, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Deep-dive consultancy',
      description: 'We dive deep into your hair and skin story — so we tailor every detail',
    },
    {
      icon: Heart,
      title: 'Calming Environment',
      description: 'A calm, inclusive space. We make you feel relaxed, restored, and ready',
    },
    {
      icon: Eye,
      title: 'Transparent Products',
      description: 'We show you the products. We explain what’s inside them. You always know what’s going on',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            Why People Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Families & Celebs Choose Us Because
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 lg:p-8 bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg lg:text-xl font-playfair font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
