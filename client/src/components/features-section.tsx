import { motion } from "framer-motion";
import { MousePointer, Brain, Search, Globe, ShoppingCart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MousePointer,
    title: "Drag & Drop Builder",
    description: "Intuitive visual editor with 500+ customizable templates. Simply drag elements where you want them - no technical skills required.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Let AI write your copy, generate images, and optimize content for your industry. Save hours of work with smart automation.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Search,
    title: "Smart SEO Optimization",
    description: "Built-in SEO tools automatically optimize your site for search engines. Get found by customers without the guesswork.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Globe,
    title: "Custom Domain Setup",
    description: "Professional custom domains with SSL certificates included. We handle all technical setup for you automatically.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ready",
    description: "Sell products online with built-in payment processing, inventory management, and order tracking capabilities.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: TrendingUp,
    title: "Analytics & Email",
    description: "Track your website performance and engage customers with integrated email marketing and detailed analytics reporting.",
    gradient: "from-accent to-primary"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build & Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines powerful tools with AI intelligence to make website creation effortless
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
