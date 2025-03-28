
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Developito transformed our online presence completely. Our website now ranks #1 for our target keywords and our conversion rate has improved by 80%! Their team was professional, responsive, and delivered beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    initials: "SJ",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowFast",
    content: "Working with Developito was a game-changer for our business. Not only did they create a beautiful website, but they also implemented an SEO strategy that increased our organic traffic by 210% in just 4 months.",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    initials: "MC",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Miller",
    role: "Founder, EcoStyle",
    content: "The team at Developito understood our vision perfectly. They created a website that perfectly represents our brand and values. The site loads incredibly fast and looks stunning on all devices.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: "JM",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, Innovation Hub",
    content: "I've worked with many web development agencies, but Developito stands out for their technical expertise and attention to detail. Our complex web application was delivered on time and performs flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    initials: "DW",
    rating: 5
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    role: "E-commerce Manager, StyleShop",
    content: "Our e-commerce sales increased by 45% within the first month after launching our new website built by Developito. Their integration of payment systems and inventory management was seamless.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    initials: "AR",
    rating: 5
  }
];

const featuredTestimonial = {
  id: 6,
  name: "Robert Thompson",
  role: "CEO, Enterprise Solutions",
  content: "Developito's approach to our enterprise-level project was nothing short of exceptional. They understood our complex requirements and delivered a solution that not only met our technical specifications but also provided an intuitive user experience. Their team's expertise in both design and development resulted in a platform that has significantly improved our operational efficiency and received praise from all stakeholders. I cannot recommend them highly enough for any large-scale digital transformation project.",
  avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  initials: "RT",
  company: "Enterprise Solutions",
  companyLogo: "/placeholder.svg",
  rating: 5
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-24 relative bg-secondary/30" id="testimonials">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-neon-blue opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-neon-green opacity-5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Developito.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass border-none rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-blue/10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-green/10 rounded-full transform -translate-x-20 translate-y-20"></div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col justify-between">
                <div>
                  <Quote className="w-12 h-12 text-neon-blue mb-4 opacity-80" />
                  <div className="flex mb-2">
                    {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-neon-blue/30">
                      <AvatarImage src={featuredTestimonial.avatar} alt={featuredTestimonial.name} />
                      <AvatarFallback className="bg-neon-blue/10 text-white">{featuredTestimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-lg">{featuredTestimonial.name}</p>
                      <p className="text-gray-400">{featuredTestimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed">
                  "{featuredTestimonial.content}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="glass border-none h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-neon-blue mb-2" />
                        <div className="flex mb-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-neon-blue/30">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-neon-blue/10 text-white">{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-neon-blue/10 border-neon-blue/20 hover:bg-neon-blue/20" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-neon-blue/10 border-neon-blue/20 hover:bg-neon-blue/20" />
            </div>
          </Carousel>
        </motion.div>
        
        {/* Testimonial Indicators - Mobile Alternative */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'bg-neon-blue w-6' : 'bg-gray-600'
              }`}
              onClick={() => {
                setActiveIndex(index);
                setAutoplay(false);
                setTimeout(() => setAutoplay(true), 10000);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Brands/Clients Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-center text-gray-400 mb-8 uppercase text-sm tracking-wider">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-32 h-12 bg-white/5 rounded flex items-center justify-center">
                <div className="w-24 h-6 bg-white/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
