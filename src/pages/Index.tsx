import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductSection from "@/components/ProductSection";
import ImpactSection from "@/components/ImpactSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <ImpactSection />
        <PartnersSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
