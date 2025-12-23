import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Handshake,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary flex items-center justify-center">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-lg leading-tight">
                  GIRA AI
                </span>
                <span className="text-[10px] text-primary tracking-widest uppercase">
                  AI Automation Agency
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering African businesses with AI-driven solutions for sales, support, and growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gira_ai01?igsh=MWxuaW42d2l6a3lvNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/gira_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://wa.me/qr/YKQAOJA57M4MC1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-3">
              {[
                "ANDA AI - WhatsApp Agent",
                "AYANDA AI - Call Agent",
                "Custom AI Solutions",
                "AI Training & Workshops",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:gira.ai01@gmail.com" className="text-sm hover:text-primary transition-colors">
                  gira.ai01@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+250796916991" className="text-sm hover:text-primary transition-colors">
                  +250 796 916 991
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Gira AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
