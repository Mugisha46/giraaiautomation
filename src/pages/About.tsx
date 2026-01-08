import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
