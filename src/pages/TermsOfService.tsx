import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { useSEO } from '@/hooks/useSEO';

const TermsOfService = () => {
  useSEO({
    title: 'Terms of Service | Moon Studios',
    description: 'Terms of Service for Moon Studios - The Family Salon in Andheri East, Mumbai. Learn about appointment rules, cancellations, and salon policies.',
    canonicalUrl: 'https://moonstudiossalon.in/terms-of-service'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-playfair font-semibold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: June 15, 2026</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and visiting Moon Studios – The Family Salon, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Booking and Appointments</h2>
              <p>
                Appointments can be booked online via WhatsApp or by calling the salon directly. We request that you arrive 5-10 minutes prior to your scheduled time. If you need to cancel or reschedule, please notify us at least 2 hours in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Pricing and Payments</h2>
              <p>
                All service prices listed or discussed are subject to change. Final pricing is confirmed in the salon during your free consultation. We accept cash, credit cards, debit cards, and UPI payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Conduct and Safety</h2>
              <p>
                For the safety and comfort of all clients and staff, we maintain a warm, welcoming, and hygienic environment. We reserve the right to refuse service to anyone displaying inappropriate, aggressive, or unsafe behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Disclaimer of Liability</h2>
              <p>
                 skicare and hair treatments carry inherent traits based on individual sensitivities. While we provide honest consultations and premium products, Moon Studios is not liable for allergic reactions or hair results when clients fail to disclose previous chemical treatments, scalp conditions, or medical history.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of Maharashtra, India. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
