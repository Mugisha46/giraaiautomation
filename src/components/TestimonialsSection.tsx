import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gobuy",
    role: "E-Commerce Company",
    content: "Gira AI has transformed our customer service operations. The WhatsApp agent handles orders seamlessly and our customers love the instant responses. Highly recommended for any business looking to scale!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-left)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "100ms" }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 max-w-xl"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
