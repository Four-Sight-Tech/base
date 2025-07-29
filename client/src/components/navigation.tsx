import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// FourSight Logo Component
function FourSightLogo({ className = "text-2xl" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" className="mr-2">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(214, 84%, 56%)" />
            <stop offset="50%" stopColor="hsl(264, 69%, 64%)" />
            <stop offset="100%" stopColor="hsl(164, 78%, 45%)" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="8" height="8" rx="2" fill="url(#logoGradient)" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill="url(#logoGradient)" opacity="0.8" />
        <rect x="4" y="20" width="8" height="8" rx="2" fill="url(#logoGradient)" opacity="0.6" />
        <rect x="20" y="20" width="8" height="8" rx="2" fill="url(#logoGradient)" opacity="0.9" />
      </svg>
      <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        FourSight
      </span>
    </div>
  );
}

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
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FourSightLogo />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-200"
              >
                AI Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition duration-200"
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
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 w-full text-left"
            >
              AI Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 w-full text-left"
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