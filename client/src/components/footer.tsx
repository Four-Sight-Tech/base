import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// FourSight Logo Component
function FourSightLogo({ className = "text-3xl" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" className="mr-2">
        <defs>
          <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(214, 84%, 56%)" />
            <stop offset="50%" stopColor="hsl(264, 69%, 64%)" />
            <stop offset="100%" stopColor="hsl(164, 78%, 45%)" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="8" height="8" rx="2" fill="url(#footerLogoGradient)" />
        <rect x="20" y="4" width="8" height="8" rx="2" fill="url(#footerLogoGradient)" opacity="0.8" />
        <rect x="4" y="20" width="8" height="8" rx="2" fill="url(#footerLogoGradient)" opacity="0.6" />
        <rect x="20" y="20" width="8" height="8" rx="2" fill="url(#footerLogoGradient)" opacity="0.9" />
      </svg>
      <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        FourSight
      </span>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <FourSightLogo />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering entrepreneurs and small businesses to create professional websites
              with AI-powered tools. No coding required, maximum impact guaranteed.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none focus:border-primary"
                />
                <Button
                  onClick={() => {
                    if (email) {
                      const subject = "Newsletter Subscription Request";
                      const body = `Hi FourSight team,

I would like to subscribe to your newsletter with the following email address:
${email}

Thank you!`;
                      
                      const mailtoLink = `mailto:hello@foursight.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.open(mailtoLink, '_blank');
                      setEmail("");
                    }
                  }}
                  disabled={!email}
                  className="bg-gradient-to-r from-primary to-secondary rounded-l-none hover:shadow-lg transition duration-200"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition duration-200"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Status Page
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 FourSight. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}