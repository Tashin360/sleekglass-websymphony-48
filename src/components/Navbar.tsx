
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check authentication status
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-3' : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <motion.div 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">Develop</span>
            <span className="text-neon-blue">ito</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={item.href}
                className={`text-sm font-medium text-gray-200 hover:text-neon-blue transition-colors relative group ${
                  location.pathname === item.href ? 'text-neon-blue' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </motion.div>
          ))}
          
          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/dashboard"
                className={`ml-4 px-5 py-2 rounded-md flex items-center gap-2 
                  ${location.pathname === '/dashboard' 
                    ? 'bg-neon-blue text-white' 
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                  } transition-colors`}
              >
                <User size={16} />
                Dashboard
              </Link>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to="/sign-in"
                  className="text-sm font-medium text-gray-200 hover:text-neon-blue transition-colors"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/sign-up"
                  className="ml-4 px-5 py-2 rounded-md bg-neon-blue text-white font-medium hover:bg-opacity-80 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 glass-dark flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={item.href}
                  className={`text-xl font-medium hover:text-neon-blue transition-colors ${
                    location.pathname === item.href ? 'text-neon-blue' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/dashboard"
                  className="mt-4 px-6 py-3 rounded-md bg-neon-blue text-white font-medium hover:bg-opacity-80 transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  Dashboard
                </Link>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    to="/sign-in"
                    className="text-xl font-medium text-white hover:text-neon-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link 
                    to="/sign-up"
                    className="mt-4 px-6 py-3 rounded-md bg-neon-blue text-white font-medium hover:bg-opacity-80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
