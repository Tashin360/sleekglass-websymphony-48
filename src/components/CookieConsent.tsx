
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('cookie-consent');
    if (!cookieChoice) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies.",
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
    toast({
      title: "Cookies rejected",
      description: "You've chosen to reject cookies. Some features may be limited.",
    });
  };

  const handleCustomize = () => {
    // For simplicity, this just accepts cookies, but in a real app would open settings
    localStorage.setItem('cookie-consent', 'customized');
    setVisible(false);
    toast({
      title: "Cookie preferences saved",
      description: "Your cookie preferences have been saved.",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm md:text-base text-card-foreground">
                  This website uses cookies to enhance your experience. By continuing, you agree to our Cookie Policy.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Button variant="outline" size="sm" onClick={handleReject}>
                  Reject
                </Button>
                <Button variant="outline" size="sm" onClick={handleCustomize}>
                  Customize
                </Button>
                <Button size="sm" onClick={handleAccept}>
                  Accept All
                </Button>
              </div>
              <button 
                onClick={() => setVisible(false)} 
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                aria-label="Close cookie banner"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
