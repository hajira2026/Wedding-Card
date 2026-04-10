'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Award, Users, Sparkles, Phone, Navigation } from 'lucide-react'

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Couples' },
  { icon: Award, value: '25+', label: 'Years of Trust' },
  { icon: Clock, value: '7 Days', label: 'Delivery Promise' },
  { icon: MapPin, value: 'Mysore', label: 'Since 1998' },
]

export default function Location() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background with Mysore image */}
      <div className="absolute inset-0">
        <img
          src="/images/mysore-location.png"
          alt="Mysore City"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/90 to-luxury-black" />
      </div>
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-maroon/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <MapPin className="w-4 h-4 text-gold" />
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Serving </span>
            <span className="text-gold-gradient">Mysore</span>
            <span className="text-foreground"> with Pride</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-foreground/40 max-w-2xl mx-auto italic">
            Nestled in the heart of the cultural capital of Karnataka, we bring the royal heritage of Mysore to every invitation we craft
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-5 sm:p-6 text-center hover:border-gold/30 transition-all duration-500 group hover:shadow-lg hover:shadow-gold/5"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold/50 mx-auto mb-3 group-hover:text-gold transition-colors duration-300" />
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient mb-1">
                {stat.value}
              </h3>
              <p className="font-inter text-[10px] sm:text-xs text-foreground/40 tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location details */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-[60px]" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-foreground">
                    Visit Our Studio
                  </h3>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-sm text-foreground/90 font-semibold">Galaxy Printers</p>
                      <p className="font-inter text-sm text-foreground/40">Mandi Mohalla, Mysore</p>
                      <p className="font-inter text-sm text-foreground/40">Karnataka, India - 570001</p>
                    </div>
                  </div>
                  <div className="decorative-line w-full" />
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-sm text-foreground/90 font-semibold">Working Hours</p>
                      <p className="font-inter text-sm text-foreground/40">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="font-inter text-sm text-foreground/40">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="decorative-line w-full" />
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-sm text-foreground/90 font-semibold">Get in Touch</p>
                      <p className="font-inter text-sm text-foreground/40">+91 9880178606</p>
                      <p className="font-inter text-sm text-foreground/40">info@galaxyprinters.in</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20wedding%20card%20from%20Galaxy%20Printers"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-luxury-black font-inter font-bold text-sm rounded-full tracking-wider uppercase hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Map-style visual */}
            <div className="glass rounded-2xl overflow-hidden aspect-[4/3] relative glow-gold">
              <img
                src="/images/mysore-location.png"
                alt="Mysore Location"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

              {/* Grid overlay for map effect */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Location pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto glow-gold">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-ping" />
                  </div>
                </motion.div>
                <div className="mt-4 glass rounded-xl px-4 py-2.5 inline-block">
                  <p className="font-inter text-xs text-gold font-bold">Galaxy Printers</p>
                  <p className="font-inter text-[10px] text-foreground/40">Mandi Mohalla, Mysore</p>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-4 left-4 text-[9px] font-inter text-gold/20 tracking-wider uppercase">N</div>
              <div className="absolute bottom-4 left-4 text-[9px] font-inter text-gold/20 tracking-wider uppercase">S</div>
              <div className="absolute top-4 right-4 text-[9px] font-inter text-gold/20 tracking-wider uppercase">E</div>
              <div className="absolute bottom-4 right-4 text-[9px] font-inter text-gold/20 tracking-wider uppercase">W</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
