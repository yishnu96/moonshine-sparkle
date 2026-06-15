import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { useSEO } from '@/hooks/useSEO';

const PrivacyPolicy = () => {
  useSEO({
    title: 'Privacy Policy | Moon Studios',
    description: 'Privacy Policy for Moon Studios - The Family Salon in Andheri East, Mumbai. Learn how we handle and protect your personal information.',
    canonicalUrl: 'https://moonstudiossalon.in/privacy-policy'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-playfair font-semibold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: June 15, 2026</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when booking an appointment, filling out our contact form, or communicating with us. This information may include your name, phone number, email address, and service preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to manage and schedule appointments, send booking confirmations and reminders, communicate updates, and analyze traffic via Google Tag Manager and Google Analytics to improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Tracking & Cookies</h2>
              <p>
                We use cookies and tracking technologies (like Google Tag Manager, Google Analytics, and Google Ads tags) to track website activity, analyze user engagement, and measure the effectiveness of our marketing campaigns. You can disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p>
                Moon Studios does not sell, rent, or trade your personal information. We only share booking details with scheduling service providers or analytics partners (like Google) to facilitate communication and website optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Data Protection</h2>
              <p>
                We employ administrative, technical, and physical security measures to protect your personal information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:  
                <strong>Moon Studios – The Family Salon</strong>  
                Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072  
                Phone: +91 90048 32184  
                Email: info@moonstudiossalon.in
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
