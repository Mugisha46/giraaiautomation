import { MessageCircle, Globe, Send, ArrowRight } from "lucide-react";

const features = [
  { icon: MessageCircle, text: "WhatsApp Chatbots" },
  { icon: Globe, text: "Website Integration" },
  { icon: Send, text: "Telegram & Messenger" },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="section-label">Our Product</p>
            <h2 className="section-title">
              <span className="text-gradient">Sarufi</span> - No-Code Chatbot
              Builder
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sarufi is a no-code chatbot builder designed to empower businesses
              and developers to create sophisticated, AI-driven chatbots without
              any coding expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Using Sarufi, you can develop Website chatbots, WhatsApp, Facebook,
              Instagram chatbots and other social media of varying complexities
              that reaches your customers on any platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 glass-card rounded-full px-4 py-2"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 btn-hero mt-6 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex justify-center items-center">
            {/* Phone 1 */}
            <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-64 h-[500px] bg-card rounded-[3rem] border-4 border-border shadow-2xl overflow-hidden">
                <div className="h-full bg-gradient-to-b from-primary/5 to-primary/20 p-4 flex flex-col">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarufi Bot</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex-1 py-4 space-y-3">
                    <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm">Hello! How can I help you today?</p>
                    </div>
                    <div className="bg-primary rounded-2xl rounded-tr-none p-3 max-w-[80%] ml-auto">
                      <p className="text-sm text-primary-foreground">
                        I need product info
                      </p>
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm">
                        Sure! What would you like to know?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="absolute right-0 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-56 h-[450px] bg-card rounded-[3rem] border-4 border-border shadow-2xl overflow-hidden opacity-80">
                <div className="h-full bg-gradient-to-b from-primary/5 to-primary/20 p-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Send className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs">WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
