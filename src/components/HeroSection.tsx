import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 4;
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime < 4) {
      video.currentTime = 4;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Video - Looping */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Background Overlay - No shadows */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mx-auto animate-scale-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">AI Automation Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering African Businesses with{" "}
              <span className="text-gradient">AI Solutions</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Transform challenges into opportunities. We develop and implement AI-driven solutions that help businesses save time, reduce costs, and optimize operations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href="#products" className="btn-hero group inline-flex items-center gap-2">
                Explore Our Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-ghost-hero group">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary transition-all duration-300">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <span>Contact Us</span>
              </a>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["WhatsApp Agent", "Call Agent", "24/7 Support"].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 glass-card rounded-full px-4 py-2 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
