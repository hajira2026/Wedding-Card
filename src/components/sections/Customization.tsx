'use client'

import { motion } from 'framer-motion'
import { Palette, Type, Layout, Image, Wand2, Sparkles, Layers, Check } from 'lucide-react'

const tools = [
  { icon: Palette, label: 'Colors', desc: '200+ premium colors' },
  { icon: Type, label: 'Typography', desc: '50+ elegant fonts' },
  { icon: Layout, label: 'Layouts', desc: '30+ card templates' },
  { icon: Image, label: 'Motifs', desc: '100+ traditional motifs' },
  { icon: Wand2, label: 'Finishes', desc: 'Gold foil, emboss, UV' },
  { icon: Layers, label: 'Layers', desc: 'Multi-layer designs' },
]

const processSteps = [
  { step: '01', title: 'Share Your Vision', desc: 'Tell us your style, colors, and theme' },
  { step: '02', title: 'Design Preview', desc: 'Get a digital preview within 24 hours' },
  { step: '03', title: 'Refine & Perfect', desc: 'Unlimited revisions until you love it' },
  { step: '04', title: 'Print & Deliver', desc: 'Premium printing & timely delivery' },
]

export default function Customization() {
  return (
    <section id="customize" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-maroon-dark/15 to-luxury-black" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-maroon/8 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-gold/60 to-transparent" />
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-inter text-[10px] text-gold/60 tracking-[0.3em] uppercase">Personalize</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Design Your </span>
              <br />
              <span className="text-gold-gradient">Invitation</span>
              <span className="text-foreground"> Your Way</span>
            </h2>
            <p className="font-inter text-foreground/40 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Every love story is unique, and your invitation should be too. Our expert designers work with you to create a bespoke wedding card that perfectly captures your style and traditions.
            </p>

            {/* Tools grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass rounded-xl p-3 sm:p-4 hover:border-gold/30 transition-all duration-500 group cursor-pointer hover:shadow-lg hover:shadow-gold/5"
                >
                  <tool.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold/60 group-hover:text-gold transition-colors duration-300 mb-2" />
                  <h4 className="font-inter text-xs sm:text-sm font-bold text-foreground/80 group-hover:text-gold transition-colors duration-300">
                    {tool.label}
                  </h4>
                  <p className="font-inter text-[10px] sm:text-xs text-foreground/30 mt-1">
                    {tool.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20customize%20a%20wedding%20card%20from%20Galaxy%20Printers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-gold to-gold-dark text-luxury-black font-inter font-bold text-sm rounded-full tracking-wider uppercase hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Start Custom Design
              <Wand2 className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </motion.a>
          </motion.div>

          {/* Right - Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main card preview */}
            <div className="relative">
              <div className="glass rounded-2xl p-3 sm:p-5 glow-gold">
                <img
                  src="/images/customization.png"
                  alt="Customization Interface"
                  className="w-full rounded-xl"
                />
              </div>

              {/* Floating tool panel - Color */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass rounded-xl p-3 sm:p-4 glow-gold"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <Palette className="w-3.5 h-3.5 text-gold" />
                  <span className="font-inter text-[10px] sm:text-xs text-gold font-bold tracking-wider uppercase">Colors</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  {['#D4AF37', '#6B0F2A', '#F5F0E8', '#1A1A1A', '#8B1A3A'].map((color, i) => (
                    <div
                      key={color}
                      className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-gold/20 cursor-pointer hover:scale-125 transition-transform duration-200 hover:border-gold/60 relative"
                      style={{ backgroundColor: color }}
                    >
                      {i === 0 && (
                        <Check className="w-3 h-3 text-luxury-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating font panel */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass rounded-xl p-3 sm:p-4 glow-gold"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <Type className="w-3.5 h-3.5 text-gold" />
                  <span className="font-inter text-[10px] sm:text-xs text-gold font-bold tracking-wider uppercase">Font Style</span>
                </div>
                <div className="space-y-1.5">
                  <div className="font-playfair text-sm text-gold/80 border border-gold/30 rounded-md px-2.5 py-1 bg-gold/5">Playfair Display</div>
                  <div className="font-cormorant text-sm text-foreground/40 px-2.5 py-1">Cormorant Garamond</div>
                </div>
              </motion.div>

              {/* Floating preview panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1/3 -left-4 sm:-left-8 glass rounded-xl p-3 sm:p-4 glow-gold"
              >
                <div className="flex items-center gap-2">
                  <Layout className="w-3.5 h-3.5 text-gold" />
                  <span className="font-inter text-[10px] sm:text-xs text-gold font-bold tracking-wider uppercase">Layout</span>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {['▐', '▬', '▪'].map((s, i) => (
                    <div key={i} className={`w-6 h-8 sm:w-8 sm:h-10 rounded border text-center leading-8 sm:leading-10 text-xs ${i === 0 ? 'border-gold/50 bg-gold/10 text-gold' : 'border-luxury-border text-foreground/30'}`}>
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Process steps */}
            <div className="mt-12 sm:mt-16">
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-foreground/80 mb-4 sm:mb-6">How It Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <span className="font-playfair text-2xl sm:text-3xl font-bold text-gold/20">{step.step}</span>
                    <h4 className="font-inter text-xs sm:text-sm font-bold text-foreground/70 mt-1">{step.title}</h4>
                    <p className="font-inter text-[10px] sm:text-xs text-foreground/30 mt-0.5">{step.desc}</p>
                    {i < 3 && (
                      <div className="hidden sm:block absolute top-4 -right-4 w-6 h-px bg-gold/20" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
