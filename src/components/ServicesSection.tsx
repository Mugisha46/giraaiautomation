import { MessageSquare, Zap, GraduationCap } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "AI-powered chatbots for multiple platforms (Websites, Apps). We help businesses enable a fast and excellent 24/7 customer service experience.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing systems. We ensure smooth adoption and maximum impact for your operations.",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Workshops",
    description:
      "Comprehensive training programs on how to use AI effectively in all sectors. Empower your team with practical AI skills and knowledge for the future.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-left)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">
            AI-powered solutions for{" "}
            <span className="text-gradient">African Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Gira AI, everything starts with understanding the real pain points of our clients. 
            We know that behind every business or institution, there are people struggling with 
            missed leads, unanswered calls, disorganized financial records, and hidden risks like fraud or mistakes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow-soft group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
