import { motion } from "framer-motion";
import { Users, Lightbulb, Target, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Empowering Entrepreneurs",
    description: "We believe every entrepreneur deserves professional tools to bring their vision to life, regardless of technical expertise."
  },
  {
    icon: Lightbulb,
    title: "AI-Driven Innovation",
    description: "Leveraging cutting-edge artificial intelligence to simplify website creation and optimize for success."
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every feature is designed to help businesses grow, convert visitors, and achieve their goals faster."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Delivering professional-grade websites with enterprise-level security, performance, and reliability."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About FourSight
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize web development, making professional website creation accessible to every entrepreneur and small business owner.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded by a team of entrepreneurs and technologists, FourSight emerged from a simple observation: 
              building a professional website shouldn't require years of coding experience or thousands of dollars.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We've combined the power of artificial intelligence with intuitive design tools to create a platform 
              that empowers anyone to build stunning, effective websites in hours instead of months.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we're proud to serve over 50,000 entrepreneurs worldwide, helping them launch their dreams 
              and grow their businesses online.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="FourSight team collaborating"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do at FourSight
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}