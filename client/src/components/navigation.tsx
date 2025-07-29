import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SiteForge
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-primary transition duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-primary transition duration-200"
              >
                AI Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-primary transition duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-primary transition duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-primary transition duration-200"
              >
                FAQ
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105 transition duration-200">
              Get Started Free
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              AI Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block px-3 py-2 text-gray-600 w-full text-left"
            >
              FAQ
            </button>
            <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white">
              Get Started Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
