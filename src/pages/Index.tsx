
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProjectsCounter from '@/components/ProjectsCounter';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Workflow from '@/components/Workflow';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Web Development Agency | Developito</title>
        <meta name="description" content="Developito builds modern, high-converting websites with expert strategy, UI/UX, SEO, and seamless development. Get a top-ranked site today!" />
        <meta name="keywords" content="web development agency, SEO optimization, website design, high performance websites, custom web development" />
        <link rel="canonical" href="https://developito.com" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Best Web Development Agency | Developito" />
        <meta property="og:description" content="Developito builds modern, high-converting websites with expert strategy, UI/UX, SEO, and seamless development." />
        <meta property="og:url" content="https://developito.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developito.com/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Development Agency | Developito" />
        <meta name="twitter:description" content="Developito builds modern, high-converting websites with expert strategy, UI/UX, SEO, and seamless development." />
        <meta name="twitter:image" content="https://developito.com/twitter-image.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Developito",
              "url": "https://developito.com",
              "logo": "https://developito.com/logo.png",
              "description": "Developito builds modern, high-converting websites with expert strategy, UI/UX, SEO, and seamless development.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Web Dev Street",
                "addressLocality": "Tech City",
                "postalCode": "10234",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-890",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/developito",
                "https://www.twitter.com/developito",
                "https://www.linkedin.com/company/developito",
                "https://www.instagram.com/developito"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ServicesGrid />
          <Workflow />
          <ProjectsCounter />
          <Features />
          <Portfolio />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
