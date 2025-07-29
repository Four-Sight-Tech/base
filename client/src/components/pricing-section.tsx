import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calculator, DollarSign } from "lucide-react";

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

// Pricing calculator component
function PricingCalculator() {
  const [requirements, setRequirements] = useState({
    websiteType: "",
    numberOfPages: "",
    features: [] as string[],
    timeline: "",
    customRequirements: "",
    contactInfo: ""
  });
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [showEstimate, setShowEstimate] = useState(false);

  const websiteTypes = [
    { value: "business", label: "Business Website", basePrice: 500 },
    { value: "ecommerce", label: "E-commerce Store", basePrice: 1200 },
    { value: "portfolio", label: "Portfolio/Personal", basePrice: 300 },
    { value: "blog", label: "Blog/Content Site", basePrice: 400 },
    { value: "landing", label: "Landing Page", basePrice: 250 },
    { value: "custom", label: "Custom Application", basePrice: 2000 }
  ];

  const featureOptions = [
    { id: "seo", label: "Advanced SEO Optimization", price: 200 },
    { id: "analytics", label: "Analytics & Tracking", price: 150 },
    { id: "social", label: "Social Media Integration", price: 100 },
    { id: "payment", label: "Payment Processing", price: 300 },
    { id: "booking", label: "Booking/Appointment System", price: 400 },
    { id: "multilingual", label: "Multi-language Support", price: 250 },
    { id: "mobile", label: "Mobile App Integration", price: 800 },
    { id: "ai", label: "AI-Powered Features", price: 500 }
  ];

  const calculateEstimate = () => {
    if (!requirements.websiteType || !requirements.numberOfPages) return;

    const selectedType = websiteTypes.find(type => type.value === requirements.websiteType);
    if (!selectedType) return;

    let total = selectedType.basePrice;

    // Page-based pricing
    const pages = parseInt(requirements.numberOfPages);
    if (pages > 5) {
      total += (pages - 5) * 50;
    }

    // Feature-based pricing
    requirements.features.forEach(featureId => {
      const feature = featureOptions.find(f => f.id === featureId);
      if (feature) total += feature.price;
    });

    // Timeline multiplier
    if (requirements.timeline === "rush") {
      total *= 1.5;
    } else if (requirements.timeline === "standard") {
      total *= 1.1;
    }

    setEstimatedCost(total);
    setShowEstimate(true);
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    setRequirements(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, featureId]
        : prev.features.filter(id => id !== featureId)
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Custom Pricing Calculator
        </CardTitle>
        <CardDescription>
          Tell us about your project requirements and get an instant estimate
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Website Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Website Type</label>
          <Select value={requirements.websiteType} onValueChange={(value) => 
            setRequirements(prev => ({ ...prev, websiteType: value }))
          }>
            <SelectTrigger>
              <SelectValue placeholder="Select website type" />
            </SelectTrigger>
            <SelectContent>
              {websiteTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label} (Starting at ${type.basePrice})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of Pages */}
        <div>
          <label className="block text-sm font-medium mb-2">Number of Pages</label>
          <Input
            type="number"
            placeholder="e.g., 8"
            value={requirements.numberOfPages}
            onChange={(e) => setRequirements(prev => ({ ...prev, numberOfPages: e.target.value }))}
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Features</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featureOptions.map(feature => (
              <div key={feature.id} className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={requirements.features.includes(feature.id)}
                  onCheckedChange={(checked) => handleFeatureChange(feature.id, !!checked)}
                />
                <label htmlFor={feature.id} className="text-sm">
                  {feature.label} (+${feature.price})
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium mb-2">Project Timeline</label>
          <Select value={requirements.timeline} onValueChange={(value) => 
            setRequirements(prev => ({ ...prev, timeline: value }))
          }>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flexible">Flexible (3-6 weeks) - Best Price</SelectItem>
              <SelectItem value="standard">Standard (2-4 weeks) - +10%</SelectItem>
              <SelectItem value="rush">Rush (1-2 weeks) - +50%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Custom Requirements */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Requirements</label>
          <Textarea
            placeholder="Describe any specific features, integrations, or design requirements..."
            value={requirements.customRequirements}
            onChange={(e) => setRequirements(prev => ({ ...prev, customRequirements: e.target.value }))}
            rows={3}
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="block text-sm font-medium mb-2">Contact Email (Optional)</label>
          <Input
            type="email"
            placeholder="your@email.com"
            value={requirements.contactInfo}
            onChange={(e) => setRequirements(prev => ({ ...prev, contactInfo: e.target.value }))}
          />
        </div>

        {/* Calculate Button */}
        <Button 
          onClick={calculateEstimate}
          disabled={!requirements.websiteType || !requirements.numberOfPages}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white"
        >
          Calculate Estimate
        </Button>

        {/* Estimate Display */}
        {showEstimate && estimatedCost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20"
          >
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Estimated Cost: ${estimatedCost.toLocaleString()}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This is a preliminary estimate based on your requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">
                  Get Detailed Quote
                </Button>
                <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                  Start Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

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
          
          {/* View Toggle */}
          <div className="flex items-center justify-center mb-8">
            <Button
              variant={!showCalculator ? "default" : "outline"}
              onClick={() => setShowCalculator(false)}
              className="mr-2"
            >
              Standard Plans
            </Button>
            <Button
              variant={showCalculator ? "default" : "outline"}
              onClick={() => setShowCalculator(true)}
              className="ml-2"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Custom Quote
            </Button>
          </div>
          
          {!showCalculator && (
            <>
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className="text-gray-600 dark:text-gray-400 mr-3">Monthly</span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span className="text-gray-600 dark:text-gray-400 ml-3">Yearly</span>
                <span className="ml-2 bg-accent text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
              </div>
            </>
          )}
        </motion.div>
        
        {!showCalculator ? (
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <PricingCalculator />
          </motion.div>
        )}
      </div>
    </section>
  );
}