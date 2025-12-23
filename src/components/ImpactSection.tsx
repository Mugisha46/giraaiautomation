import { Users, CheckCircle, GraduationCap, Calendar } from "lucide-react";
import meetupImage from "@/assets/meetup-event.png";

const stats = [
  { icon: Users, value: "450+", label: "Total Attendees" },
  { icon: CheckCircle, value: "10+", label: "Successful Meetups" },
];

const highlights = [
  "Sarufi Ambassador programme in 15+ universities",
  "Generative AI Monthly Meetup",
  "Sarufi Hackathons",
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-right)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with Stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={meetupImage}
                alt="Generative AI Meetup"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-4 right-4 flex gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 glass-card rounded-xl p-4 border border-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gradient">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:pl-8 pt-12 lg:pt-0">
            <p className="section-label">Our Impact</p>
            <h2 className="section-title">
              Generative AI{" "}
              <span className="text-gradient">Meetup & Hackathon</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A safe place for AI enthusiasts to share and network together. We
              build capacity of people who are builders and not just consumers
              of Generative AI. These meetups spark discussion and collaboration
              around leveraging AI for social good.
            </p>

            <ul className="space-y-4 pt-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 pt-4"
            >
              Learn More
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
