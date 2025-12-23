import { useState } from "react";
import { MessageCircle, Phone, Star, Quote, Users, Target, Lightbulb, CheckCircle } from "lucide-react";
import andaiTeam from "@/assets/andai-team.jpg";
import andaiDelivery from "@/assets/andai-delivery.jpg";
import andaiWhatsapp from "@/assets/andai-whatsapp.png";
import giraOffice from "@/assets/gira-ai-office.jpg";

const tabs = [
  { id: "whatsapp", label: "WhatsApp Agent", icon: MessageCircle },
  { id: "call", label: "Call Agent", icon: Phone },
  { id: "testimonials", label: "Testimonials", icon: Star },
  { id: "about", label: "About Us", icon: Users },
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

const testimonials = [
  {
    name: "Gobuy",
    role: "E-Commerce Company",
    content: "Gira AI has transformed our customer service operations. The WhatsApp agent handles orders seamlessly and our customers love the instant responses. Highly recommended for any business looking to scale!",
    rating: 5,
  },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");

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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button flex items-center gap-2 ${
                activeTab === tab.id ? "tab-button-active" : "text-muted-foreground hover:text-foreground bg-card/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
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

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <div className="space-y-8">
              <div className="flex justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 max-w-xl"
                  >
                    <Quote className="w-10 h-10 text-primary/40 mb-6" />
                    <p className="text-foreground text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Us Tab */}
          {activeTab === "about" && (
            <div id="about" className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={giraOffice}
                  alt="Gira AI Team"
                  className="w-full rounded-2xl shadow-xl border border-border/50"
                />
                <div className="absolute -inset-2 border border-primary/30 rounded-2xl -z-10" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  About <span className="text-gradient">Gira AI</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Gira AI is an AI Automation Agency dedicated to empowering African businesses and institutions to work smarter, faster, and more efficiently.
                </p>

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
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
