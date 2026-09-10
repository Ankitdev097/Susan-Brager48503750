import { motion } from 'motion/react';
import { ArrowDown, PhoneForwarded } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-100/40 blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-200 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-600">Prepared exclusively for Susan Brager</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1] mb-6"
        >
          Stop losing motivated buyers to the next agent who answers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I noticed The Brager Schaub Team's recent listing at <strong>12236 Sea Voyage Ave</strong>. While you're busy showing that stunning custom pool to prospective buyers, who is answering the phone when the next hot lead calls?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <PhoneForwarded className="h-5 w-5 text-blue-600" />
            <span>Discover a flawless call-handling system</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-12 p-3 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all focus:outline-none"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
