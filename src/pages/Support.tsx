import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Sample FAQs data
const faqs = [
  {
    id: 1,
    question: 'What services does Developito offer?',
    answer: 'Developito offers a comprehensive suite of web development services including custom website design, e-commerce development, SEO optimization, web application development, website maintenance, and digital marketing services. We specialize in creating high-performance, SEO-friendly websites that help businesses achieve their online goals.'
  },
  {
    id: 2,
    question: 'How long does it take to build a website?',
    answer: 'The timeline for website development varies depending on the project complexity, features required, and client feedback cycles. Typically, a simple brochure website can be completed in 2-4 weeks, while more complex projects with custom functionality may take 8-12 weeks. During our initial consultation, we\'ll provide you with a specific timeline based on your project requirements.'
  },
  {
    id: 3,
    question: 'What is the typical cost of a website?',
    answer: 'Website costs vary widely based on your specific needs, complexity, and features. Basic informational websites typically range from $5,000 to $10,000, while e-commerce sites or complex web applications can range from $10,000 to $50,000+. We provide detailed quotes after understanding your project requirements during our initial consultation.'
  },
  {
    id: 4,
    question: 'Do you offer website maintenance services?',
    answer: 'Yes, we offer comprehensive website maintenance services to ensure your website remains secure, up-to-date, and performs optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, and technical support. We recommend ongoing maintenance for all websites to prevent security vulnerabilities and ensure continued optimal performance.'
  },
  {
    id: 5,
    question: 'How do you approach SEO in your web development process?',
    answer: 'SEO is integrated into our web development process from the beginning. We implement SEO best practices including proper HTML structure, fast loading speeds, mobile optimization, schema markup, and keyword-optimized content. Our websites are built with clean code, semantic HTML, and following all technical SEO guidelines to ensure the best possible search engine visibility.'
  },
  {
    id: 6,
    question: 'What platform do you use to build websites?',
    answer: 'We select the best platform for each project based on specific requirements. For content-managed sites, we often use WordPress, Shopify for e-commerce, or custom solutions built with React, Next.js, or other modern frameworks for web applications. Our technology recommendations are always based on your specific business needs, scalability requirements, and long-term goals.'
  },
  {
    id: 7,
    question: 'Do you offer hosting services?',
    answer: 'Yes, we offer managed hosting solutions tailored to your website\'s needs. Our hosting packages include server maintenance, security monitoring, regular backups, and technical support. We ensure your website is hosted on high-performance servers with excellent uptime and speed to provide the best user experience and SEO advantages.'
  },
  {
    id: 8,
    question: 'What is your design process?',
    answer: 'Our design process begins with understanding your business, goals, and target audience. We create wireframes and mockups for your approval before proceeding to development. We prioritize user experience, brand consistency, and conversion optimization in our designs. Our iterative approach allows for feedback and refinements at each stage to ensure the final product aligns perfectly with your vision and business objectives.'
  }
];

const Support = () => {
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Support | Developito</title>
        <meta name="description" content="Get support and find answers to frequently asked questions about Developito's web development services." />
        <meta name="keywords" content="Developito support, web development FAQs, website help, contact Developito" />
        <link rel="canonical" href="https://developito.com/support" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Support | Developito" />
        <meta property="og:description" content="Get support and find answers to frequently asked questions about Developito's web development services." />
        <meta property="og:url" content="https://developito.com/support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-support.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support | Developito" />
        <meta name="twitter:description" content="Get support and find answers to frequently asked questions about Developito's web development services." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-support.jpg" />
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
                  Support & <span className="text-gradient">FAQs</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Find answers to common questions about our services, processes, and more.
                </p>
              </motion.div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
                <p className="text-gray-300">
                  Browse our FAQs to find quick answers to common questions.
                </p>
              </motion.div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-lg overflow-hidden"
                  >
                    <div
                      className="p-6 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h3 className="text-xl font-bold">{faq.question}</h3>
                      {expandedFaqId === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-neon-blue" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-300" />
                      )}
                    </div>

                    {expandedFaqId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 border-t border-white/10 pt-6"
                      >
                        <p className="text-gray-300">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-dark p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still Need <span className="text-gradient">Help?</span>
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you couldn't find the answer you were looking for, please don't hesitate to contact us. Our team is here to assist you with any questions or concerns.
                </p>
                <a
                  href="/contact"
                  className="px-8 py-3 rounded-md bg-neon-blue hover:bg-opacity-80 transition-colors text-white font-medium inline-block"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Support;
