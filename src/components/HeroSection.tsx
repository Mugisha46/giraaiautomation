import { Play } from "lucide-react";
import aiBrainImage from "@/assets/ai-brain-hero.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Empowering Africa's Digital Future with{" "}
              <span className="text-gradient">AI solutions</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="btn-hero">Get Started</button>
              <button className="btn-ghost-hero group">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:border-primary group-hover:glow-soft transition-all duration-300">
                  <Play className="w-5 h-5 text-foreground fill-foreground ml-1" />
                </div>
                <span>Play Video</span>
              </button>
            </div>
          </div>

          {/* Right Content - AI Brain Image */}
          <div className="relative animate-slide-up delay-200 hidden lg:block">
            <div className="relative animate-float">
              <img
                src={aiBrainImage}
                alt="AI Brain Illustration"
                className="w-full max-w-xl mx-auto drop-shadow-2xl"
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 scale-75" />
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
