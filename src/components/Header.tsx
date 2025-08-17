import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-accordion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "خانه" },
    { id: "about", label: "درباره من" },
    { id: "skills", label: "مهارت‌ها" },
    { id: "experience", label: "تجربیات" },
  ];
  const mobileMenu = [
    { id: "hero", label: "خانه" },
    
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-elegant" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
       

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 text-xl hover:text-white hover:-translate-y-1 hover:scale-110 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-primary transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
            </button>
          ))}
          <Button 
            variant="outline-hero" 
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            تماس با من
          </Button>
        </div>

         {/* Logo */}

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button> */}
            <div>
              {mobileMenu.map((Item)=>(
              
            
              <Button 
              
              variant="outline-hero" 
              size="sm" 
              className="inline-block md:hidden pt-1 self-end"
              onClick={() => scrollToSection(Item.id)}
            >
             {Item.label}
            </Button>
             ) )}
            </div>
          <div 
            onClick={() => scrollToSection("hero")}
            className="text-white text-xl font-bold cursor-pointer hover:text-blue-light transition-colors"
          >
            محمدحسین قلی خواه 
          </div>

          
        {/* Mobile Navigation */}
        {/* <div className={`
          absolute top-16 left-0 right-0 md:hidden
          bg-navy/95 backdrop-blur-md border-b border-white/10
          transition-all duration-300 transform
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}>
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white transition-colors text-right"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="outline-hero" 
              size="sm" 
              className="hidden md:inline-block self-end"
              onClick={() => scrollToSection("contact")}
            >
              تماس با من
            </Button>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;