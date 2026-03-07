import { ArrowRight, Phone } from "lucide-react";
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
        <div className="max-w-3xl text-left">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Empowering African Businesses with{" "}
              <span className="text-gradient">AI Solutions.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              We develop and implement AI-driven solutions that help businesses save time, reduce costs, and optimize operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#products" className="btn-hero group inline-flex items-center gap-2">
                Explore Our Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-ghost-hero group border border-border rounded-full px-6 py-3">
                <Phone className="w-5 h-5 text-foreground" />
                <span>Contact Us</span>
              </a>
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
