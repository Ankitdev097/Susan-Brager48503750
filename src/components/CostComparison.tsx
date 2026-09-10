import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function CostComparison() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">The Economics of Efficiency</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the traditional approach of hiring an in-house receptionist with the streamlined efficiency of a custom-built AI solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Receptionist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-200 opacity-60"
          >
            <h3 className="text-xl font-medium text-gray-500 mb-2">Human Receptionist</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-gray-400">$3,500+</span>
              <span className="text-gray-400">/mo</span>
            </div>
            
            <ul className="space-y-4">
              {[
                "Works 40 hours a week (misses evenings/weekends)",
                "Requires training, payroll, and benefits",
                "Can only handle one call at a time",
                "Needs sick days and vacations",
                "Susceptible to bad days and human error"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI Receptionist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 rounded-3xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                Custom Built for You
              </span>
            </div>

            <h3 className="text-xl font-medium text-white mb-2">My Exclusive Offer</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-gray-400">setup fee</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">I will personally install and customize this for your business.</p>
            
            <ul className="space-y-4">
              {[
                "Available 24/7/365, never misses a call",
                "No salary, no payroll taxes, no benefits",
                "Handles infinite simultaneous calls",
                "Books directly into your specific calendar",
                "Consistently perfect, professional tone every time"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
