import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Shema Y. David", title: "CEO & Founder", image: "" },
  { name: "Kayigamba Bertrand", title: "Consultancy Manager", image: "" },
  { name: "Rwigamba Lionel", title: "Branding Manager", image: "" },
  { name: "Mugisha Frank", title: "Marketing Manager", image: "" },
  { name: "Ngarambe Karly", title: "Sales Manager", image: "" },
  { name: "Niyibizi Teddy", title: "CTO", image: "" },
  { name: "Irimaso Camarade", title: "V.Consultancy Manager", image: "" },
  { name: "Cyusa Keith", title: "V.Marketing Manager", image: "" },
  { name: "Ishimwe D. Divin", title: "Developer", image: "" },
  { name: "Manzi J. Desire", title: "Developer", image: "" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-radial-left)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">Our Team</p>
          <h2 className="section-title">
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The brilliant minds behind Gira AI's mission to transform Africa through AI.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-500" />
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-500" />
                        <User className="w-16 h-16 text-muted-foreground/50 relative z-10 group-hover:text-primary/70 transition-colors duration-300" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative p-4 text-center">
                  <motion.h3
                    className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-base"
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {member.title}
                  </p>
                  
                  {/* Underline Animation */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent mx-auto mt-2 group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/0 group-hover:border-primary transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
