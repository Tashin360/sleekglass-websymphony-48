
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | Developito</title>
        <meta name="description" content="Find your way around the Developito website with our sitemap. Easily navigate to all our pages and services." />
        <meta name="keywords" content="sitemap, Developito sitemap, website navigation, site structure" />
        <link rel="canonical" href="https://developito.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Sitemap</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Main Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-white hover:text-neon-blue transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-white hover:text-neon-blue transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="text-white hover:text-neon-blue transition-colors">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white hover:text-neon-blue transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Services</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Website Strategy</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Website Design & Re-design</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Website Information Architecture</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Webflow Development</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">WordPress Development</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Framer Development</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Website SEO Optimization</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">CMS Development</a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-neon-blue transition-colors">Website Maintenance & Support</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Other Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <Link to="/careers" className="text-white hover:text-neon-blue transition-colors">Careers</Link>
                  </li>
                  <li>
                    <Link to="/support" className="text-white hover:text-neon-blue transition-colors">Support</Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-white hover:text-neon-blue transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-white hover:text-neon-blue transition-colors">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
