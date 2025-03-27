
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gradient">Developito</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Modern web solutions for businesses of all sizes. We build websites that convert visitors into customers.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/developito" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/developito/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567227921734" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/developito" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@Devolapito" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Content Strategy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Web Dev Street</li>
              <li>Tech City, TC 10234</li>
              <li>contact@developito.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Legal Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Developito. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
