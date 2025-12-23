import { ArrowRight, Star, MessageCircle, Phone as PhoneIcon } from "lucide-react";

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
              Ready to Transform Your Business with{" "}
              <span className="text-gradient">AI Automation?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join African businesses that are already saving time, reducing costs, and growing faster with Gira AI solutions. Let's discuss how we can help you.
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
                Trusted by businesses across Africa
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/250796916991"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-hero text-lg group bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+250796916991"
                className="inline-flex items-center gap-2 btn-hero text-lg group"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              Email: <a href="mailto:gira.ai01@gmail.com" className="text-primary hover:underline">gira.ai01@gmail.com</a>
            </p>
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
