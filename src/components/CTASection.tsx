import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "var(--gradient-radial-left)" }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Are you ready to be part of Africa's{" "}
              <span className="text-gradient">Tech Revolution?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you're looking to optimize your operations, enhance
              customer experiences, or leverage data for strategic insights, our
              team is here to guide you every step of the way.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <span className="text-muted-foreground ml-2">
                100+ Client Reviews
              </span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 btn-hero text-lg group"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-primary/20 animate-pulse-glow" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full border border-primary/20 animate-pulse-glow delay-500" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
