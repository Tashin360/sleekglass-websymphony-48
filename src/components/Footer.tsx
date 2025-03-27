
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
                <Link to="/careers" className="text-gray-300 hover:text-neon-blue transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-neon-blue transition-colors">Support</Link>
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
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Framer Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">SEO Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">CMS Development</a>
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
        
        <div className="pt-8 border-t border-white/10 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Developito. All rights reserved.
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
