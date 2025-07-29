import { motion } from "framer-motion";
import { Edit3, Images, Bot } from "lucide-react";

const benefits = [
  {
    icon: Edit3,
    title: "Intelligent Content Creation",
    description: "AI writes compelling copy tailored to your business, industry, and target audience automatically.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Images,
    title: "Smart Image Selection",
    description: "AI curates and generates the perfect images that match your brand aesthetic and content context.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    description: "Engage visitors 24/7 with intelligent chatbots that understand your business and answer customer questions.",
    gradient: "from-accent to-primary"
  }
];

export default function AIBenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our GenAI engine learns from millions of successful websites to help you create professional,
              converting websites that match your brand and industry.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <benefit.icon className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI and technology concept with digital interface"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
