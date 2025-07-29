import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Boutique Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "I launched my online boutique in just 3 hours! The AI wrote all my product descriptions and the design looks incredibly professional. Sales increased 200% in the first month."
  },
  {
    name: "Mike Rodriguez",
    company: "Consulting Firm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "The SEO suggestions helped us rank #1 for our main keywords. We went from 0 to 10,000 monthly visitors in 6 months. Best investment we've made!"
  },
  {
    name: "Emma Thompson",
    company: "Digital Agency",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    content: "As a busy entrepreneur, I needed something fast and professional. FourSight delivered both. The AI chatbot handles 80% of our customer inquiries automatically."
  }
];

const stats = [
  { label: "Websites Built", value: "50,000+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Support", value: "24/7" }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by 50,000+ Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how businesses like yours are succeeding with FourSight
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} headshot`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}