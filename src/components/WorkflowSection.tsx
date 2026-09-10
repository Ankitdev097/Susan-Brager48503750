import { motion } from 'motion/react';
import { Download, FileBox, GitMerge, FileText } from 'lucide-react';

export default function WorkflowSection() {
  const openWorkflow = () => {
    window.open('https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing', '_blank');
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">I've already built the architecture for you.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I didn't just put together a pitch; I actually built the underlying infrastructure needed to deploy this for The Brager Schaub Team. You can review the exact logic and workflows right now.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileBox className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Retell AI Integration</h4>
                  <p className="text-sm text-gray-500">The core conversational engine tailored for real estate inquiries.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <GitMerge className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">n8n Workflows</h4>
                  <p className="text-sm text-gray-500">Automated Appointment Scheduling and detailed Call Summary generation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Setup Documentation</h4>
                  <p className="text-sm text-gray-500">A complete installation guide, checklist, and architectural setup diagram.</p>
                </div>
              </div>
            </div>

            <button
              onClick={openWorkflow}
              className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gray-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 w-full sm:w-auto"
            >
              <Download className="h-5 w-5" />
              <span>Access Custom Workflow</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 p-8 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-inner">
               <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
               <div className="relative z-10">
                 <div className="h-20 w-20 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                    <FileBox className="h-10 w-10 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-medium text-gray-900 mb-2">The Brager Schaub Setup</h3>
                 <p className="text-gray-500 text-sm max-w-xs mx-auto">Contains 2x n8n workflows, Retell configuration, and setup diagrams.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
