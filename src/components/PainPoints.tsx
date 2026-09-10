import { motion } from 'motion/react';
import { Voicemail, Clock, UserX } from 'lucide-react';

const painPoints = [
  {
    icon: Voicemail,
    title: "The Voicemail Trap",
    description: "Letting new leads go to voicemail while you're with clients or at a showing. In today's market, a motivated buyer won't wait for a callback—they'll just dial the next agent on their list."
  },
  {
    icon: Clock,
    title: "After-Hours Opportunities",
    description: "Missing calls after hours or on weekends. Real estate doesn't happen strictly between 9 to 5, but you also need time to recharge. Unanswered calls are lost commissions."
  },
  {
    icon: UserX,
    title: "The Multitasking Toll",
    description: "Trying to manage complex negotiations for high-end properties while simultaneously fielding new inquiries. It divides your attention and compromises the premium service your clients expect."
  }
];

export default function PainPoints() {
  return (
    <section id="problem" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">The hidden cost of being successful</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As a top-producing agent at Berkshire Hathaway HomeServices, your time is your most valuable asset. But high demand creates a logistical bottleneck.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-shadow hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
