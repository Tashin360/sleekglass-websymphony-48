
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Developito transformed our online presence completely. Our website now ranks #1 for our target keywords and our conversion rate has improved by 80%! Their team was professional, responsive, and delivered beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowFast",
    content: "Working with Developito was a game-changer for our business. Not only did they create a beautiful website, but they also implemented an SEO strategy that increased our organic traffic by 210% in just 4 months.",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg"
  },
  {
    id: 3,
    name: "Jessica Miller",
    role: "Founder, EcoStyle",
    content: "The team at Developito understood our vision perfectly. They created a website that perfectly represents our brand and values. The site loads incredibly fast and looks stunning on all devices.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, Innovation Hub",
    content: "I've worked with many web development agencies, but Developito stands out for their technical expertise and attention to detail. Our complex web application was delivered on time and performs flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative bg-secondary">
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
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="glass p-6 rounded-lg h-full flex flex-col">
                    <blockquote className="flex-grow">
                      <p className="text-gray-300 italic">"{testimonial.content}"</p>
                    </blockquote>
                    
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 mx-2" />
              <CarouselNext className="relative inset-0 translate-y-0 mx-2" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
