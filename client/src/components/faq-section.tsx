import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I launch my website?",
    answer: "Most users launch their professional website within 2-4 hours using our AI-powered builder. The AI handles content creation, design suggestions, and SEO optimization automatically, so you can focus on customizing your brand elements."
  },
  {
    question: "Do I need any technical skills?",
    answer: "Not at all! Our drag-and-drop builder is designed for complete beginners. The AI handles the technical aspects like coding, hosting setup, and SEO optimization. You simply choose what you want and drag it where you want it."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes! You can connect your existing domain or purchase a new one through our platform. We handle all the technical setup including SSL certificates, DNS configuration, and email forwarding automatically."
  },
  {
    question: "What makes your AI different?",
    answer: "Our AI is trained specifically on high-converting websites and understands business contexts. It doesn't just generate generic content - it creates industry-specific copy, suggests relevant images, and optimizes for your target audience and business goals."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can build, customize, and even publish your website during the trial period to see if FourSight is right for you."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about getting started
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}