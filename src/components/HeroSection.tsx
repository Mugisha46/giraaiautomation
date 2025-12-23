import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-left)" }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-right)" }}
      />
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mx-auto"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">AI Automation Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Empowering African Businesses with{" "}
              <span className="text-gradient">AI Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
            >
              Transform challenges into opportunities. We develop and implement AI-driven solutions that help businesses save time, reduce costs, and optimize operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a href="#products" className="btn-hero group inline-flex items-center gap-2">
                Explore Our Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-ghost-hero group">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:glow-soft transition-all duration-300">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <span>Contact Us</span>
              </a>
            </motion.div>

            {/* Features Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {["WhatsApp Agent", "Call Agent", "24/7 Support"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 glass-card rounded-full px-4 py-2"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
