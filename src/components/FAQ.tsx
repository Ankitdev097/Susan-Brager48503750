import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do people actually trust talking to an AI?",
    answer: "Yes. The AI doesn't sound like a robotic answering machine from 2010. It uses advanced conversational models that sound incredibly human—complete with natural pauses and intonation. Most callers don't even realize they aren't speaking to a human receptionist. They just appreciate getting an instant, helpful response instead of being sent to voicemail."
  },
  {
    question: "What if the caller asks a complex question about a property?",
    answer: "The AI is designed to gracefully handle complex inquiries. It can provide standard information based on your listings, and for highly specific or sensitive questions, it is trained to say something like, 'That's a great question. Let me have Susan or a team member call you right back with the exact details,' while capturing the lead's information."
  },
  {
    question: "Will it accidentally book overlapping appointments?",
    answer: "No. The system connects directly to your calendar via the provided n8n workflow. It checks real-time availability before suggesting times, ensuring it only books slots you have explicitly marked as available for showings or consultations."
  },
  {
    question: "What if a lead just wants to leave a message?",
    answer: "The AI easily adapts. If a caller simply wants to leave a message, the AI will transcribe the message, generate a concise summary, and send it directly to your preferred channel (email or SMS) immediately."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Common Questions</h2>
          <p className="text-lg text-gray-600">Addressing the typical concerns top agents have before upgrading.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
