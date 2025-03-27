
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Developito</title>
        <meta name="description" content="Learn about how Developito collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal information" />
        <link rel="canonical" href="https://developito.com/privacy" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Privacy Policy | Developito" />
        <meta property="og:description" content="Learn about how Developito collects, uses, and protects your personal information." />
        <meta property="og:url" content="https://developito.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Header Section */}
          <section className="py-20 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-40 left-10 w-96 h-96 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Privacy <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Last updated: July 15, 2023
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Privacy Policy Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 md:p-12 rounded-lg max-w-4xl mx-auto"
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p>
                    At Developito ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your personal information when you visit our website, use our services, or interact with us in any way.
                  </p>
                  <p>
                    Please read this privacy policy carefully to understand our policies and practices regarding your personal data and how we will treat it. By accessing or using our website or services, you agree to the terms of this privacy policy.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
                  <p>
                    We may collect, use, store, and transfer different kinds of personal data about you, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> Includes email address, telephone numbers, and mailing address.</li>
                    <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                    <li><strong>Usage Data:</strong> Includes information about how you use our website and services.</li>
                    <li><strong>Marketing and Communications Data:</strong> Includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">How We Collect Your Data</h2>
                  <p>
                    We collect your personal data through the following methods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Direct interactions:</strong> You may provide us with your personal data when you fill in forms, correspond with us, or otherwise interact with us.</li>
                    <li><strong>Automated technologies:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.</li>
                    <li><strong>Third parties:</strong> We may receive personal data about you from various third parties, such as analytics providers and advertising networks.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Data</h2>
                  <p>
                    We will only use your personal data for legitimate purposes permitted by applicable law. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and improve our services to you.</li>
                    <li>To respond to your inquiries and fulfill your requests.</li>
                    <li>To send administrative information to you, such as changes to our terms, conditions, and policies.</li>
                    <li>To personalize your experience on our website.</li>
                    <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
                    <li>To administer and protect our business and website (including troubleshooting, data analysis, testing, system maintenance, support, reporting, and hosting of data).</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
                  <p>
                    We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
                  </p>
                  <p>
                    We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Data Retention</h2>
                  <p>
                    We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  </p>
                  <p>
                    To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Your Legal Rights</h2>
                  <p>
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Request access</strong> to your personal data.</li>
                    <li><strong>Request correction</strong> of your personal data.</li>
                    <li><strong>Request erasure</strong> of your personal data.</li>
                    <li><strong>Object to processing</strong> of your personal data.</li>
                    <li><strong>Request restriction</strong> of processing your personal data.</li>
                    <li><strong>Request transfer</strong> of your personal data.</li>
                    <li><strong>Right to withdraw consent</strong> where we are relying on consent to process your personal data.</li>
                  </ul>
                  <p>
                    If you wish to exercise any of these rights, please contact us using the details provided below.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">GDPR Compliance</h2>
                  <p>
                    For users in the European Union (EU) and European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). This means you have certain rights regarding your personal data, as outlined above.
                  </p>
                  <p>
                    We will not transfer your personal data outside the EU/EEA unless appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
                  </p>
                  <p>
                    We encourage you to review this privacy policy periodically to stay informed about how we are protecting your personal data.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <p>
                    <strong>Email:</strong> privacy@developito.com<br />
                    <strong>Mailing Address:</strong> 123 Web Dev Street, Tech City, TC 10234
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
