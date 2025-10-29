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
