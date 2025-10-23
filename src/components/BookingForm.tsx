import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    time: '',
  });

  const services = [
    'Nanoplastia Hair Treatment',
    'Olaplex Hair Treatment',
    'Hair Coloring with Highlights/Balayage',
    'Hydra Facial & Korean Glass Facial',
    'Hair Smoothening & Advanced Hair Cut',
    'Other Services',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.service || !formData.time) {
      toast({
        title: "Please fill all fields",
        description: "Name, service, and preferred time are required.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi! I'd like to book an appointment:\n\nName: ${formData.name}\nService: ${formData.service}\nPreferred Time: ${formData.time}`;
    const whatsappUrl = `https://wa.me/919004832184?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your booking via WhatsApp",
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919004832184';
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-6">
            Your dream hair is<br />one appointment away
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Select Service
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                Preferred Time
              </label>
              <input
                type="text"
                id="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="e.g., Tomorrow 3 PM or Saturday morning"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-medium hover:shadow-hover transition-all"
              >
                Book Now
              </Button>
              
              <Button
                type="button"
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
