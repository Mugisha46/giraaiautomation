import teamPhoto from "@/assets/team-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={teamPhoto}
                alt="Neurotech Team"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-2 border border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl -z-20" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="section-label">About Us</p>
            <h2 className="section-title">
              We don't just build AI, We build the future of{" "}
              <span className="text-gradient">African Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are an AI firm that assists businesses in transforming their
              customer experiences through conversational AI
            </p>

            <div className="glass-card rounded-xl p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionise customer interaction by providing advanced
                AI-driven conversational experiences
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              More About Us
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
