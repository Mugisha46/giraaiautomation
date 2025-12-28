import { Target, Lightbulb } from "lucide-react";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-right)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <p className="section-label">AboutUs</p>
          <h2 className="section-title">
            Empowering Africa with <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn about our mission and vision to transform African businesses through AI.
          </p>
        </div>

        {/* Content */}
        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          {/* Mission and Vision on top */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              About <span className="text-gradient">Gira AI</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Gira AI is an AI Automation Agency dedicated to empowering African businesses and institutions to work smarter, faster, and more efficiently.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-3 mb-2">
                  <Target className="w-6 h-6 text-primary flex-shrink-0" />
                  <h4 className="text-xl font-semibold">Our Mission</h4>
                </div>
                <p className="text-muted-foreground ml-9">
                  To develop and implement AI-driven solutions that address multiple pain points of businesses and institutions, helping them save time, reduce costs, and optimize operations.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border-l-4 border-l-accent">
                <div className="flex items-start gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                  <h4 className="text-xl font-semibold">Our Vision</h4>
                </div>
                <p className="text-muted-foreground ml-9">
                  To empower African businesses and institutions to work smarter, faster, and more efficiently through innovative AI solutions that transform challenges into opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Images below */}
          <div className="relative mt-12 grid md:grid-cols-2 gap-6">
            <img
              src={team1}
              alt="Gira AI Team"
              className="w-full rounded-2xl shadow-xl border border-border/50"
            />
            <img
              src={team2}
              alt="Gira AI Team"
              className="w-full rounded-2xl shadow-xl border border-border/50"
            />
            <div className="absolute -inset-2 border border-primary/30 rounded-2xl -z-10" />
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
