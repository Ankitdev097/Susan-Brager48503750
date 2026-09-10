import { useState } from 'react';
import { motion } from 'motion/react';
import EmailPopup from './EmailPopup';

export default function CTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
            Let's get this installed for your team.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            I’m not asking for a purchase or a long commitment. Reply to my previous message to schedule a quick, free 9-minute call. I will personally help you install and customize this workflow for The Brager Schaub Team at absolutely no cost.
          </p>
          
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20"
          >
            Reply to my message
          </button>
          
          <p className="mt-6 text-sm text-gray-400">
            No pressure, no aggressive sales pitch. Just a tailored solution for your business.
          </p>
        </motion.div>
      </div>

      <EmailPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        email="ankit@agentbydesign.in"
      />
    </section>
  );
}
