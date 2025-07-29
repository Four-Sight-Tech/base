import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal projects",
    monthlyPrice: 9,
    yearlyPrice: 7,
    features: [
      "1 Website",
      "AI Content Generation",
      "50+ Templates",
      "Basic SEO Tools",
      "SSL Certificate"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      "5 Websites",
      "Advanced AI Features",
      "500+ Templates",
      "Advanced SEO & Analytics",
      "E-commerce Integration",
      "Priority Support"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited Websites",
      "Custom AI Training",
      "White-label Solution",
      "Advanced Integrations",
      "Dedicated Account Manager",
      "Custom Development"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include AI features and 24/7 support.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className="text-gray-600 dark:text-gray-400 mr-3">Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className="text-gray-600 dark:text-gray-400 ml-3">Yearly</span>
            <span className="ml-2 bg-accent text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 relative ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-accent mr-3 h-4 w-4" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                } transition duration-200`}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}