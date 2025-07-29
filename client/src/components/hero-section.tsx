import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dream Website
              </span>{" "}
              in Hours
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Empower your business with our AI-powered website builder. No coding required.
              Drag, drop, and launch your professional website with smart templates and automated content generation.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Build Your Website Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:border-primary hover:text-primary transition duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 h-4 w-4" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 h-4 w-4" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-accent mr-2 h-4 w-4" />
                Launch in 24 hours
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Entrepreneurs working in modern office"
              className="rounded-2xl shadow-2xl animate-float"
            />
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Website Live!</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <span className="text-secondary">✨</span>
                <span className="text-sm font-medium text-gray-700">AI Generated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
