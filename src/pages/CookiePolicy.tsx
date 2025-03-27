
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Developito</title>
        <meta name="description" content="Learn about how Developito uses cookies on our website. Our cookie policy explains what cookies we use and how they enhance your experience." />
        <meta name="keywords" content="cookie policy, cookies, data storage, website cookies, Developito cookies" />
        <link rel="canonical" href="https://developito.com/cookie-policy" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Cookie Policy | Developito" />
        <meta property="og:description" content="Learn about how Developito uses cookies on our website." />
        <meta property="og:url" content="https://developito.com/cookie-policy" />
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
                  Cookie <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Last updated: July 15, 2023
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Cookie Policy Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass p-8 md:p-12 rounded-lg max-w-4xl mx-auto"
              >
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                  </p>
                  <p>
                    These cookies may store information about your browsing habits and preferences, making your next visit easier and the site more useful to you, or they may be necessary for the website&apos;s functionality.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Cookies</h2>
                  <p>
                    At Developito, we use cookies for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
                    <li><strong>Analytics Cookies:</strong> We use these cookies to collect information about how visitors use our website. This helps us improve our site and your browsing experience.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.</li>
                    <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Types of Cookies We Use</h2>
                  <h3 className="text-xl font-semibold mb-2">First-Party Cookies</h3>
                  <p>
                    These are cookies that are set by our website directly. They are essential for the functionality of the website and help us to personalize your experience.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">Third-Party Cookies</h3>
                  <p>
                    These are cookies placed on our website by a third party on our behalf. We use third-party cookies for analytics, advertising, and social media integration.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Managing Cookies</h2>
                  <p>
                    Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. However, if you disable cookies, some parts of our website may not function properly.
                  </p>
                  <p>
                    You can find information on how to manage cookie settings on different browsers here:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">Microsoft Edge</a></li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Your Choices</h2>
                  <p>
                    When you first visit our website, you will be presented with a cookie banner that allows you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Accept All Cookies:</strong> This will allow all cookies to be placed on your device.</li>
                    <li><strong>Customize Your Preferences:</strong> This allows you to select which types of cookies you are willing to accept.</li>
                    <li><strong>Reject All Cookies:</strong> This will reject all non-essential cookies.</li>
                  </ul>
                  <p>
                    You can change your cookie preferences at any time by clearing your browser cookies and reloading the page.
                  </p>
                  
                  <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
