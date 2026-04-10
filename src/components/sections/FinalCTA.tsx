'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Heart, Sparkles, Crown, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-maroon-dark/40 to-luxury-black" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-maroon/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />

      {/* Decorative corner elements */}
      <div className="absolute top-16 left-8 sm:left-16 w-20 h-20 border-t border-l border-gold/10 rounded-tl-lg" />
      <div className="absolute top-16 right-8 sm:right-16 w-20 h-20 border-t border-r border-gold/10 rounded-tr-lg" />
      <div className="absolute bottom-16 left-8 sm:left-16 w-20 h-20 border-b border-l border-gold/10 rounded-bl-lg" />
      <div className="absolute bottom-16 right-8 sm:right-16 w-20 h-20 border-b border-r border-gold/10 rounded-br-lg" />

      {/* Floating decorative dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/15 rounded-full"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <Crown className="w-5 h-5 text-gold" />
          <Heart className="w-4 h-4 text-gold fill-gold/30" />
          <Sparkles className="w-4 h-4 text-gold" />
          <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          <span className="text-foreground">Let&apos;s Create Your </span>
          <br />
          <span className="text-gold-gradient text-glow-gold">Dream Wedding</span>
          <br />
          <span className="text-foreground">Invitation</span>
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="decorative-line w-32 sm:w-48 mx-auto mb-6 sm:mb-8"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant text-lg sm:text-xl md:text-2xl text-foreground/40 mb-10 sm:mb-14 max-w-2xl mx-auto italic"
        >
          Your perfect wedding begins with the perfect invitation. Let us craft something extraordinary together.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20wedding%20card%20from%20Galaxy%20Printers"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(37, 211, 102, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 sm:px-14 sm:py-5 bg-[#25D366] text-white font-inter font-bold text-sm sm:text-base rounded-full tracking-wider uppercase shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          Order on WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-14"
        >
          {[
            { icon: Sparkles, label: 'Free Design Consultation' },
            { icon: Crown, label: 'Bulk Order Discounts' },
            { icon: Heart, label: 'Pan India Delivery' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 font-inter text-[10px] sm:text-xs text-foreground/30 tracking-wider uppercase">
              <Icon className="w-3 h-3 text-gold/40" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
