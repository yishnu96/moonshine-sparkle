import { CheckCircle2, Leaf, Eye, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Expert Consultancy',
      description: 'Our clients love our precision in analysis. We understand your hair perfectly and deliver exactly what we promise.',
    },
    {
      icon: Heart,
      title: 'Calming Environment',
      description: 'Step into a space designed for relaxation. Our peaceful ambiance ensures you feel refreshed and rejuvenated with every visit.',
    },
    {
      icon: Eye,
      title: 'Transparent Products',
      description: 'We don\'t just tell you what products we use - we explain why and how they work for your specific hair needs.',
    },
    {
      icon: Leaf,
      title: 'Complete After Care',
      description: 'Your hair journey doesn\'t end at the salon. We provide personalized aftercare schedules because your satisfaction is our priority.',
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
            Experience the difference that makes us Mumbai's trusted salon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-card rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
