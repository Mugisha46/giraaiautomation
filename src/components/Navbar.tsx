import { useState, useEffect, useRef } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import giraLogo from "@/assets/gira-ai-logo.png";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "#home", isPage: false },
  { name: "Services", href: "#services", isPage: false },
  { name: "Products", href: "#products", isPage: false },
  { name: "AboutUs", href: "/about", isPage: true },
  { name: "Testimonials", href: "/testimonials", isPage: true },
  { name: "Contact", href: "#contact", isPage: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Track if scrolled past threshold for styling
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 100) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Track active section
      const sections = navItems.filter(item => !item.isPage).map((item) => item.href.replace("#", ""));
      const scrollPosition = currentScrollY + 150;

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

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (item.isPage) {
      navigate(item.href);
      // Scroll to top when navigating to a page
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // If we're on another page and clicking a section, go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const sectionId = item.href.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    
    const sectionId = item.href.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.isPage) {
      return location.pathname === item.href;
    }
    return location.pathname === "/" && activeSection === item.href.replace("#", "");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg" 
            : "bg-transparent"
        }`}>
          {/* Logo - Restored round style with scale */}
          <a href="#home" onClick={() => handleNavClick(navItems[0])} className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? "bg-background shadow-lg ring-2 ring-primary/20" 
                : "bg-background/50 backdrop-blur-sm"
            }`}>
              <img src={giraLogo} alt="Gira AI Logo" className="w-10 h-10 object-cover rounded-full scale-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-lg leading-tight tracking-tight">
                GIRA AI
              </span>
              <span className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
                AI Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 bg-secondary/50 rounded-xl px-1.5 py-1.5 border border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mx-6 mt-2">
          <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-xl animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-all mb-1 ${
                  isActive(item)
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button variant="outline" className="w-full mt-3 gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
