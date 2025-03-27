
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold">
                <span className="text-white">Develop</span>
                <span className="text-neon-blue">ito</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6">
              We build future-ready websites that deliver results. Our expert team combines technical expertise with creative innovation.
            </p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:neon-border transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-neon-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-neon-blue transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-neon-blue transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Website Strategy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Website Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Webflow Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">WordPress Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">SEO Optimization</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block">123 Web Dev Street</span>
                <span className="block">Tech City, TC 10234</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-neon-blue transition-colors">+1 (234) 567-890</a>
              </li>
              <li>
                <a href="mailto:info@developito.com" className="text-gray-300 hover:text-neon-blue transition-colors">info@developito.com</a>
              </li>
              <li className="text-gray-300">
                <span className="block">Monday - Friday</span>
                <span className="block">9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Careers and Support Sections */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Careers Section */}
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-neon-blue mb-4">Careers</h3>
              <p className="text-gray-300 mb-4">
                Join our team of talented developers, designers, and digital marketers. We're always looking for exceptional people.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="senior-developer" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">Senior Web Developer</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p className="mb-2">We're looking for an experienced web developer with 5+ years of experience in React, Node.js, and modern web technologies.</p>
                    <a href="mailto:careers@developito.com" className="text-neon-blue hover:underline">Apply Now</a>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ux-designer" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">UX/UI Designer</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p className="mb-2">Creative designer with a strong portfolio and experience in creating beautiful, functional interfaces for web applications.</p>
                    <a href="mailto:careers@developito.com" className="text-neon-blue hover:underline">Apply Now</a>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="digital-marketer" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">Digital Marketing Specialist</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p className="mb-2">Expert in SEO, content marketing, and PPC campaigns with a track record of driving measurable results.</p>
                    <a href="mailto:careers@developito.com" className="text-neon-blue hover:underline">Apply Now</a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Support Section */}
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-neon-blue mb-4">Support</h3>
              <p className="text-gray-300 mb-4">
                Need help with your website? Our support team is here to assist you with any questions or issues.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">Frequently Asked Questions</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li><strong>How long does a website project take?</strong> Typically 4-8 weeks depending on complexity.</li>
                      <li><strong>Do you offer hosting?</strong> Yes, we provide reliable, high-performance hosting services.</li>
                      <li><strong>What about SEO?</strong> All our websites are built with SEO best practices.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact-support" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">Contact Support</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p className="mb-2">Our support team is available Monday-Friday, 9am-6pm.</p>
                    <a href="mailto:support@developito.com" className="text-neon-blue hover:underline">Email Support</a>
                    <p className="mt-2">Or call us at: <a href="tel:+1234567890" className="text-neon-blue hover:underline">+1 (234) 567-890</a></p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="maintenance" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-neon-blue">Maintenance Plans</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <p>We offer various maintenance plans to keep your website secure, updated, and performing optimally. Contact us for details.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Developito. All rights reserved.
            </p>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-neon-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-neon-blue transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-neon-blue transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
