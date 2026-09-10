import { motion } from 'motion/react';
import { Zap, Brain, Calendar, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Response, 24/7",
    description: "Answers every single call instantly, day or night, sounding just like a real, professional person."
  },
  {
    icon: Brain,
    title: "Natural Qualification",
    description: "Asks the right questions to qualify buyers and sellers naturally, gathering crucial details before you ever speak with them."
  },
  {
    icon: Calendar,
    title: "Seamless Booking",
    description: "Books qualified appointments straight into your calendar, turning raw inquiries into scheduled showings without you lifting a finger."
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    description: "Maintains the high-end, polished image of The Brager Schaub Team on every interaction."
  }
];

export default function Solution() {
  return (
    <section className="py-24 px-4 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                An assistant that never sleeps, never takes a day off, and never misses a lead.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Imagine having a dedicated receptionist whose sole job is to capture every opportunity that comes your way. They sound human, they understand Las Vegas real estate, and they seamlessly integrate with how you already work.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
