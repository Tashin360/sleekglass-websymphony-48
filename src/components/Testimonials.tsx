
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Developito transformed our online presence completely. Our website now ranks #1 for our target keywords and our conversion rate has improved by 80%! Their team was professional, responsive, and delivered beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowFast",
    content: "Working with Developito was a game-changer for our business. Not only did they create a beautiful website, but they also implemented an SEO strategy that increased our organic traffic by 210% in just 4 months.",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    initials: "MC"
  },
  {
    id: 3,
    name: "Jessica Miller",
    role: "Founder, EcoStyle",
    content: "The team at Developito understood our vision perfectly. They created a website that perfectly represents our brand and values. The site loads incredibly fast and looks stunning on all devices.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: "JM"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, Innovation Hub",
    content: "I've worked with many web development agencies, but Developito stands out for their technical expertise and attention to detail. Our complex web application was delivered on time and performs flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    initials: "DW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative bg-secondary" id="testimonials">
      <div className="container mx-auto px-4">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-2">
                  <Card className="glass border-none h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-neon-blue mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>
                      
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
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
      </div>
    </section>
  );
};

export default Testimonials;
