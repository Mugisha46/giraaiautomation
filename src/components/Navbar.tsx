import { useState } from "react";
import { Menu, X, Handshake } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", active: true },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
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
              <a
                key={item.name}
                href={item.href}
                className={`nav-pill ${
                  item.active
                    ? "nav-pill-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </a>
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
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-all ${
                item.active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
