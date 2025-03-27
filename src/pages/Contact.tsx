
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Contact as ContactIcon, Info, Home, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'web-development'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'web-development'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Developito | Get a Free Website Consultation</title>
        <meta name="description" content="Need a website that ranks #1? Contact Developito today for expert web development and SEO solutions." />
        <meta name="keywords" content="contact web developer, website consultation, SEO agency contact, web design inquiry" />
        <link rel="canonical" href="https://developito.com/contact" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Developito | Get a Free Website Consultation" />
        <meta property="og:description" content="Need a website that ranks #1? Contact Developito today for expert web development and SEO solutions." />
        <meta property="og:url" content="https://developito.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-contact.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Developito | Get a Free Website Consultation" />
        <meta name="twitter:description" content="Need a website that ranks #1? Contact Developito today for expert web development and SEO solutions." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-contact.jpg" />
        
        {/* Schema.org structured data for contact page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Developito",
              "description": "Get in touch with our web development experts for a free consultation.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://developito.com/contact"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Developito",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://developito.com/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-40 left-10 w-96 h-96 bg-neon-blue opacity-10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-40 right-10 w-96 h-96 bg-neon-green opacity-10 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get In <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Ready to discuss your project? Contact us today for a free consultation and let's bring your vision to life.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-6">
                      Contact <span className="text-gradient">Information</span>
                    </h2>
                    <p className="text-gray-300 mb-8">
                      Feel free to reach out to us using your preferred method of communication. Our team is ready to assist you with any questions or inquiries.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-neon-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Email</h3>
                          <a href="mailto:info@developito.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                            info@developito.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-neon-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Phone</h3>
                          <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <Home className="w-5 h-5 text-neon-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Office</h3>
                          <address className="text-gray-300 not-italic">
                            123 Web Dev Street<br />
                            Tech City, TC 10234
                          </address>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <Info className="w-5 h-5 text-neon-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                          <p className="text-gray-300">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday & Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0
                          01.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="glass p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">
                      Send Us a <span className="text-gradient">Message</span>
                    </h2>
                    
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-neon-green/20 border border-neon-green/30 p-4 rounded-lg text-center"
                      >
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-gray-300">
                          Your message has been sent successfully. We'll get back to you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name *</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                              placeholder="+1 (234) 567-890"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service You're Interested In *</label>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={formState.service}
                              onChange={handleChange}
                              required
                              className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue appearance-none pr-10"
                            >
                              <option value="web-development">Web Development</option>
                              <option value="seo-optimization">SEO Optimization</option>
                              <option value="ui-ux-design">UI/UX Design</option>
                              <option value="digital-marketing">Digital Marketing</option>
                              <option value="web-maintenance">Web Maintenance</option>
                              <option value="e-commerce">E-commerce Solutions</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message *</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                            placeholder="Tell us about your project..."
                          ></textarea>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="privacy"
                            name="privacy"
                            required
                            className="w-4 h-4 bg-secondary/50 border border-white/10 rounded focus:ring-neon-blue"
                          />
                          <label htmlFor="privacy" className="text-sm text-gray-300">
                            I agree to the <a href="/privacy" className="text-neon-blue hover:underline">privacy policy</a>
                          </label>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3 px-6 rounded-md bg-neon-blue text-white font-medium transition-colors ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-80'
                          }`}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="glass rounded-lg overflow-hidden h-96">
                {/* Placeholder for map */}
                <div className="w-full h-full bg-background flex items-center justify-center">
                  <p className="text-gray-400">Interactive Map Will Be Displayed Here</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
