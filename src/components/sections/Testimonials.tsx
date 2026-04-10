'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, Heart } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya & Arjun Sharma',
    location: 'Mysore',
    rating: 5,
    text: 'Galaxy Printers turned our dream wedding invitation into reality. The gold foil work was absolutely stunning, and every guest complimented us on the cards. Truly a luxury experience!',
    event: 'Hindu Wedding',
  },
  {
    name: 'Fatima & Imran Khan',
    location: 'Bangalore',
    rating: 5,
    text: 'The attention to detail was remarkable. From the geometric patterns to the calligraphy, every element was perfect. Our families were blown away by the quality.',
    event: 'Muslim Wedding',
  },
  {
    name: 'Sarah & David Mathew',
    location: 'Mysore',
    rating: 5,
    text: 'We wanted something elegant yet simple, and Galaxy Printers delivered beyond our expectations. The minimalist design with gold accents was exactly what we envisioned.',
    event: 'Christian Wedding',
  },
  {
    name: 'Ananya & Vikram Reddy',
    location: 'Mandya',
    rating: 5,
    text: 'The luxury box invitation was the showstopper of our wedding! The velvet box with wax seal made our guests feel so special. Worth every rupee!',
    event: 'Royal Wedding',
  },
  {
    name: 'Meera & Rohan Patel',
    location: 'Mysore',
    rating: 5,
    text: 'Working with the Galaxy Printers team was a breeze. They understood our vision instantly and the customization options were incredible. Our cards arrived on time and looked perfect.',
    event: 'Destination Wedding',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-dark to-luxury-black" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/3 rounded-full blur-[180px]" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-maroon/10 rounded-full blur-[120px]" />

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
            <Heart className="w-4 h-4 text-gold fill-gold/30" />
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">What Our </span>
            <span className="text-gold-gradient">Couples</span>
            <span className="text-foreground"> Say</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-foreground/40 max-w-2xl mx-auto italic">
            Every love story deserves a beautiful beginning — hear from the couples who trusted us with theirs
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Featured review (first one, spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 hover:border-gold/30 transition-all duration-500 group lg:col-span-2 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-[60px] group-hover:bg-gold/10 transition-colors duration-500" />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-10 h-10 text-gold/15 group-hover:text-gold/30 transition-colors duration-500" />
                <span className="font-inter text-[10px] text-gold/40 tracking-wider uppercase bg-gold/10 px-2.5 py-1 rounded-full">Featured</span>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[0].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-maroon/30 border border-gold/20 flex items-center justify-center">
                  <span className="font-playfair text-lg text-gold font-bold">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-inter text-sm font-bold text-foreground/90 group-hover:text-gold transition-colors duration-300">
                    {testimonials[0].name}
                  </h4>
                  <p className="font-inter text-xs text-foreground/40">
                    {testimonials[0].event} · {testimonials[0].location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rest of the reviews */}
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-32 h-32 bg-gold/5 rounded-full blur-[60px] group-hover:bg-gold/10 transition-colors duration-500" />

              <div className="relative">
                <Quote className="w-8 h-8 text-gold/15 mb-3 group-hover:text-gold/30 transition-colors duration-300" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-inter text-sm text-foreground/60 leading-relaxed mb-5">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-maroon/30 border border-gold/20 flex items-center justify-center">
                    <span className="font-playfair text-sm text-gold font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-inter text-sm font-bold text-foreground/80 group-hover:text-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="font-inter text-xs text-foreground/40">
                      {testimonial.event} · {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '5,000+', label: 'Happy Couples' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '25+', label: 'Years of Trust' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient">{stat.value}</p>
              <p className="font-inter text-[10px] sm:text-xs text-foreground/30 tracking-wider uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
