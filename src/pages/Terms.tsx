
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Developito</title>
        <meta name="description" content="Read the terms and conditions governing the use of Developito's web development services and website." />
        <meta name="keywords" content="terms of service, Developito terms, web development terms, website terms" />
        <link rel="canonical" href="https://developito.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2>1. Introduction</h2>
              <p>Welcome to Developito ("Company", "we", "our", "us")! As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20 minutes.</p>
              
              <p>These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at developito.com (together or individually "Service") operated by Developito.</p>
              
              <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <a href="/privacy" className="text-neon-blue hover:underline">Privacy Policy</a>.</p>
              
              <p>Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.</p>
              
              <p>If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at info@developito.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
              
              <h2>2. Communications</h2>
              <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing info@developito.com.</p>
              
              <h2>3. Purchases</h2>
              <p>If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
              
              <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
              
              <h2>4. Content</h2>
              <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.</p>
              
              <h2>5. Changes To Service</h2>
              <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
              
              <h2>6. Contact Us</h2>
              <p>Please send your feedback, comments, and requests for technical support by email to info@developito.com or via our contact page.</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms;
