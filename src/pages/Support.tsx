
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// FAQ data
const faqCategories = [
  {
    id: 'general',
    name: 'General Questions',
    faqs: [
      {
        question: 'What services does Developito offer?',
        answer: 'Developito offers a comprehensive range of web development services including custom website development, e-commerce solutions, SEO optimization, UI/UX design, web application development, digital marketing, and ongoing website maintenance and support.'
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'The timeline for building a website varies depending on the complexity, size, and specific requirements of the project. A simple website may take 2-4 weeks, while more complex websites or web applications can take 2-6 months. During our initial consultation, we'll provide you with a more accurate timeline based on your specific needs.'
      },
      {
        question: 'Do you offer website maintenance services?',
        answer: 'Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, content updates, performance optimization, and technical support.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical Support',
    faqs: [
      {
        question: 'What technologies do you use for development?',
        answer: 'We use the latest web technologies and frameworks to build fast, secure, and scalable websites. Our tech stack typically includes React.js, Next.js, or Vue.js for frontend development, Node.js or PHP for backend development, and various databases like MySQL, PostgreSQL, or MongoDB depending on project requirements. We also utilize modern CSS frameworks like Tailwind CSS and implement responsive design principles.'
      },
      {
        question: 'Are your websites mobile-friendly?',
        answer: 'Absolutely! All websites we develop are fully responsive and mobile-friendly. We follow a mobile-first approach to ensure optimal performance and user experience across all devices, from smartphones and tablets to desktop computers.'
      },
      {
        question: 'Do you provide hosting for websites?',
        answer: 'Yes, we offer reliable and secure hosting solutions for websites we develop. Our hosting services include regular backups, security monitoring, and performance optimization to ensure your website remains fast, secure, and available 24/7.'
      }
    ]
  },
  {
    id: 'billing',
    name: 'Billing & Pricing',
    faqs: [
      {
        question: 'How much does a website cost?',
        answer: 'The cost of a website depends on several factors including complexity, features, design requirements, and the scope of the project. We offer customized pricing based on your specific needs. Contact us for a free consultation and quote based on your project requirements.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards, bank transfers, and PayPal. For larger projects, we typically work with a milestone-based payment schedule, with an initial deposit followed by payments at key project milestones.'
      },
      {
        question: 'Do you offer any payment plans?',
        answer: 'Yes, for larger projects we offer flexible payment plans to help spread the cost over the development period. Typically, this involves an initial deposit and then milestone-based payments as the project progresses. We'll discuss payment options during the project scoping phase.'
      }
    ]
  },
  {
    id: 'seo',
    name: 'SEO & Marketing',
    faqs: [
      {
        question: 'How do you optimize websites for search engines?',
        answer: 'Our SEO optimization process includes comprehensive keyword research, on-page optimization (meta tags, headings, content), technical SEO (site speed, mobile-friendliness, structured data), quality content creation, and building quality backlinks. We also set up proper analytics and monitoring to track performance and make continuous improvements.'
      },
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline depends on various factors including your website's current status, competition in your industry, and the keywords you're targeting. We provide regular reports to track progress and demonstrate improvement in rankings, traffic, and conversions.'
      },
      {
        question: 'Do you offer content creation services?',
        answer: 'Yes, we offer professional content creation services to help you develop engaging, keyword-optimized content for your website. Our content team can create various types of content including website copy, blog posts, product descriptions, case studies, and more, all tailored to your target audience and SEO goals.'
      }
    ]
  }
];

const Support = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleQuestion = (question: string) => {
    if (expandedQuestions.includes(question)) {
      setExpandedQuestions(expandedQuestions.filter(q => q !== question));
    } else {
      setExpandedQuestions([...expandedQuestions, question]);
    }
  };
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqCategories.flatMap(category => 
        category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(faq => ({ ...faq, category: category.id }))
      )
    : [];

  return (
    <>
      <Helmet>
        <title>Support & FAQ | Developito</title>
        <meta name="description" content="Get answers to frequently asked questions about our web development services, pricing, and process. Find support for your website needs." />
        <meta name="keywords" content="web development FAQ, website support, technical questions, SEO help" />
        <link rel="canonical" href="https://developito.com/support" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Support & FAQ | Developito" />
        <meta property="og:description" content="Get answers to frequently asked questions about our web development services, pricing, and process." />
        <meta property="og:url" content="https://developito.com/support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image-support.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support & FAQ | Developito" />
        <meta name="twitter:description" content="Get answers to frequently asked questions about our web development services, pricing, and process." />
        <meta name="twitter:image" content="https://developito.com/twitter-image-support.jpg" />
        
        {/* Schema.org structured data for FAQs */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ${JSON.stringify(faqCategories.flatMap(category => 
                category.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              ))}
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
                  Support & <span className="text-gradient">FAQ</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Find answers to commonly asked questions about our services, process, and technical details.
                </p>
                
                <div className="relative max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-secondary/50 border border-white/10 rounded-full px-5 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Search Results Section */}
          {searchQuery && filteredFaqs.length > 0 && (
            <section className="py-4">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    Search Results for: <span className="text-neon-blue">"{searchQuery}"</span>
                  </h2>
                  
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {filteredFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="glass rounded-lg overflow-hidden"
                      >
                        <div 
                          className="p-6 cursor-pointer flex justify-between items-start"
                          onClick={() => toggleQuestion(faq.question)}
                        >
                          <div>
                            <h3 className="text-lg font-semibold pr-6">{faq.question}</h3>
                            <span className="text-sm text-neon-blue">
                              Category: {faqCategories.find(c => c.id === (faq as any).category)?.name}
                            </span>
                          </div>
                          <div className="flex-shrink-0 mt-1">
                            {expandedQuestions.includes(faq.question) ? (
                              <ChevronUp className="w-5 h-5 text-neon-blue" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-300" />
                            )}
                          </div>
                        </div>
                        
                        {expandedQuestions.includes(faq.question) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 border-t border-white/10 pt-4"
                          >
                            <p className="text-gray-300">{faq.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}
          
          {/* FAQ Categories Section */}
          {(!searchQuery || filteredFaqs.length === 0) && (
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Category Sidebar */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/4"
                  >
                    <div className="glass p-6 rounded-lg sticky top-24">
                      <h2 className="text-xl font-semibold mb-4">Categories</h2>
                      <ul className="space-y-2">
                        {faqCategories.map((category) => (
                          <li key={category.id}>
                            <button
                              onClick={() => setActiveCategory(category.id)}
                              className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                                activeCategory === category.id 
                                  ? 'bg-neon-blue/20 text-white font-medium' 
                                  : 'text-gray-300 hover:bg-white/5'
                              }`}
                            >
                              {category.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  
                  {/* FAQ Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:w-3/4"
                  >
                    <div className="space-y-8">
                      {faqCategories
                        .filter(category => category.id === activeCategory)
                        .map((category) => (
                          <div key={category.id}>
                            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                            
                            <div className="space-y-4">
                              {category.faqs.map((faq, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1, duration: 0.3 }}
                                  className="glass rounded-lg overflow-hidden"
                                >
                                  <div 
                                    className="p-6 cursor-pointer flex justify-between items-start"
                                    onClick={() => toggleQuestion(faq.question)}
                                  >
                                    <h3 className="text-lg font-semibold pr-6">{faq.question}</h3>
                                    <div className="flex-shrink-0 mt-1">
                                      {expandedQuestions.includes(faq.question) ? (
                                        <ChevronUp className="w-5 h-5 text-neon-blue" />
                                      ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-300" />
                                      )}
                                    </div>
                                  </div>
                                  
                                  {expandedQuestions.includes(faq.question) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="px-6 pb-6 border-t border-white/10 pt-4"
                                    >
                                      <p className="text-gray-300">{faq.answer}</p>
                                    </motion.div>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}
          
          {/* Additional Support Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Additional <span className="text-gradient">Support?</span>
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help you with any questions or issues you may have.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="glass p-6 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold mb-4">Contact Support</h3>
                  <p className="text-gray-300 mb-6">
                    Reach out to our support team for personalized assistance with your website or project.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block px-6 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/20 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="glass p-6 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold mb-4">Knowledge Base</h3>
                  <p className="text-gray-300 mb-6">
                    Explore our comprehensive guides, tutorials, and resources for in-depth information.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block px-6 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/20 transition-colors"
                  >
                    View Resources
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass p-6 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold mb-4">Request Feature</h3>
                  <p className="text-gray-300 mb-6">
                    Have an idea for improvement? Submit a feature request for your project.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block px-6 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/20 transition-colors"
                  >
                    Submit Request
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Support;
