import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
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

  // Generate time slots from 9:30 AM to 9:00 PM in 1-hour intervals
  const timeSlots = [
    '9:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '1:30 PM',
    '2:30 PM',
    '3:30 PM',
    '4:30 PM',
    '5:30 PM',
    '6:30 PM',
    '7:30 PM',
    '8:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Please fill all fields",
        description: "Name, service, date, and time are required.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi! I'd like to book an appointment:\n\nName: ${formData.name}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`;
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
    <section id="booking" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-3 sm:mb-4">
            Your dream hair is<br />one appointment away
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">Fill in your details and we'll get back to you</p>
        </div>
        
        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                Select Service *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                required
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
              <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                required
              >
                <option value="">Choose a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg rounded-xl shadow-medium hover:shadow-hover transition-all"
              >
                Book Now
              </Button>
              
              <Button
                type="button"
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg rounded-xl transition-all"
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
