'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Crafted with',
    highlight: 'Precision',
    description: 'Every detail is meticulously designed — from the finest gold foil stamping to the most delicate embossing. Our artisans bring decades of expertise to each creation.',
    stat: '10,000+',
    statLabel: 'Cards Crafted',
    image: '/images/royal-invitations.png',
  },
  {
    title: 'Printed with',
    highlight: 'Perfection',
    description: 'Using state-of-the-art printing technology combined with traditional craftsmanship. Every color, every texture, every finish is perfected to exceed expectations.',
    stat: '99.8%',
    statLabel: 'Client Satisfaction',
    image: '/images/hindu-wedding.png',
  },
  {
    title: 'Designed for',
    highlight: 'Emotions',
    description: 'We understand that a wedding invitation is more than paper — it\'s the first glimpse of your celebration. Every design evokes the emotions your wedding deserves.',
    stat: '500+',
    statLabel: 'Unique Designs',
    image: '/images/luxury-box.png',
  },
]

function FeatureSection({
  feature,
  index,
}: {
  feature: typeof features[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.9, 1])
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

  return (
    <div ref={ref} className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img
          src={feature.image}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/95 to-luxury-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-maroon/10 rounded-full blur-[100px]" />

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="font-playfair text-5xl sm:text-7xl md:text-8xl font-bold text-gold-gradient text-glow-gold">
            {feature.stat}
          </span>
          <p className="font-inter text-xs sm:text-sm text-gold/40 tracking-[0.3em] uppercase mt-2">
            {feature.statLabel}
          </p>
        </motion.div>

        {/* Title */}
        <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-foreground/70">{feature.title}</span>
          <br />
          <span className="text-gold-gradient text-glow-gold">{feature.highlight}</span>
        </h2>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <div className="decorative-line w-20 sm:w-32" />
          <Sparkles className="w-3 h-3 text-gold/40" />
          <div className="decorative-line w-20 sm:w-32" />
        </div>

        {/* Description */}
        <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-foreground/50 max-w-2xl mx-auto leading-relaxed italic">
          {feature.description}
        </p>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </div>
  )
}

export default function FeatureStory() {
  return (
    <section id="about" className="relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {features.map((feature, index) => (
        <FeatureSection
          key={feature.highlight}
          feature={feature}
          index={index}
        />
      ))}
    </section>
  )
}
