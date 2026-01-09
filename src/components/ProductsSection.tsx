import { useState, useEffect } from "react";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import andaiTeam from "@/assets/andai-team.jpg";
import andaiDelivery from "@/assets/andai-delivery.jpg";
import andaiWhatsapp from "@/assets/andai-whatsapp.png";

const tabs = [
  { id: "whatsapp", label: "WhatsApp Agent", icon: MessageCircle },
  { id: "call", label: "Call Agent", icon: Phone },
];

const whatsappFeatures = [
  "Automate orders & deliveries with no missed orders",
  "24/7 customer support automation",
  "Smart WhatsApp AI automation for sales, support, and growth",
  "Seamless integration with your existing systems",
  "Multi-language support for African markets",
];

const callAgentFeatures = [
  "AI-powered voice calls for customer service",
  "Automated appointment scheduling",
  "Lead qualification and follow-ups",
  "Natural conversation handling",
  "Real-time call analytics and insights",
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");

  // Auto-switch tabs every 3500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "whatsapp" ? "call" : "whatsapp"));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-left)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <p className="section-label">Our Products</p>
          <h2 className="section-title">
            AI Agents that <span className="text-gradient">Transform Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our suite of AI-powered agents designed specifically for African businesses.
          </p>
        </div>

        {/* Tabs with highlight animation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button flex items-center gap-2 relative overflow-hidden transition-all duration-300 ${
                activeTab === tab.id 
                  ? "tab-button-active ring-2 ring-primary ring-offset-2 ring-offset-background" 
                  : "text-muted-foreground hover:text-foreground bg-card/50"
              }`}
            >
              {/* Highlight pulse effect for active tab */}
              {activeTab === tab.id && (
                <span className="absolute inset-0 bg-primary/20 animate-pulse" />
              )}
              <tab.icon className={`w-4 h-4 relative z-10 ${activeTab === tab.id ? "animate-bounce" : ""}`} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in" key={activeTab}>
          {/* WhatsApp Agent Tab */}
          {activeTab === "whatsapp" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">ANDA AI - WhatsApp Agent</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Empower Your Business with <span className="text-gradient">ANDA AI</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  ANDA AI is our powerful WhatsApp AI automation solution designed for delivery businesses and customer service. Automate orders, handle inquiries, and never miss a customer again.
                </p>
                <ul className="space-y-3">
                  {whatsappFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-hero inline-flex items-center gap-2 mt-4">
                  Get ANDA AI
                </a>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={andaiTeam}
                    alt="ANDA AI Team"
                    className="w-full rounded-2xl shadow-xl border border-border/50"
                  />
                  <img
                    src={andaiDelivery}
                    alt="ANDA AI Delivery"
                    className="w-full rounded-2xl shadow-xl border border-border/50 mt-8"
                  />
                </div>
                <img
                  src={andaiWhatsapp}
                  alt="ANDA AI WhatsApp"
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 rounded-2xl shadow-2xl border border-primary/30"
                />
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
              </div>
            </div>
          )}

          {/* Call Agent Tab */}
          {activeTab === "call" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">AYANDA AI - Call Agent</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  AI-Powered <span className="text-gradient">Voice Assistant</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our intelligent call agent handles customer calls with natural conversation, schedules appointments, and qualifies leads - all without human intervention.
                </p>
                <ul className="space-y-3">
                  {callAgentFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-hero inline-flex items-center gap-2 mt-4">
                  Get Call Agent
                </a>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="w-72 h-[500px] bg-card rounded-[3rem] border-4 border-border shadow-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-primary/5 to-primary/20 p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse">
                        <Phone className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">AYANDA AI Calling...</h4>
                      <p className="text-muted-foreground text-sm mb-6">AI Call Agent</p>
                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center">
                          <Phone className="w-6 h-6 text-destructive-foreground rotate-[135deg]" />
                        </div>
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
