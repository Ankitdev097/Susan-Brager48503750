import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function EmailPopup({ isOpen, onClose, email }: EmailPopupProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOpenApp = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Choose how you'd like to contact me.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCopy}
                  className="flex w-full items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                      {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Copy email address</p>
                      <p className="text-xs text-gray-500">{email}</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleOpenApp}
                  className="flex w-full items-center justify-between rounded-xl bg-gray-900 p-4 text-white hover:bg-gray-800 transition-all group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-white">Open email app</p>
                      <p className="text-xs text-gray-400">Compose a new message</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
