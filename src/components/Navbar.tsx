import { useState, useEffect } from "react";
import { Menu, X, Handshake } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary flex items-center justify-center group-hover:glow-soft transition-all duration-300">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="glass-card rounded-full px-2 py-2 flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-pill ${
                  activeSection === item.href.replace("#", "")
                    ? "nav-pill-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card mt-2 mx-4 rounded-xl p-4 animate-slide-up">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${
                activeSection === item.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
