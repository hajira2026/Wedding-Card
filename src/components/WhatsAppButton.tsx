'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20wedding%20card%20from%20Galaxy%20Printers"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
            className="absolute bottom-16 right-0 mb-3 glass rounded-2xl p-5 w-72 shadow-2xl glow-gold"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <h4 className="font-playfair text-sm font-bold text-foreground">Chat with Us</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground/30 hover:text-foreground transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="font-inter text-xs text-foreground/40 mb-5 leading-relaxed">
              Hi! We&apos;d love to help you create your perfect wedding invitation. Send us a message on WhatsApp and we&apos;ll get back to you shortly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-inter font-bold text-sm rounded-full hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 pulse-whatsapp hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        )}

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 whitespace-nowrap glass rounded-lg px-3 py-1.5 pointer-events-none"
          >
            <span className="font-inter text-[10px] text-gold font-semibold tracking-wider uppercase">Order on WhatsApp</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  )
}
