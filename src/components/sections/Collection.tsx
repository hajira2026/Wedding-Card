'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X, Sparkles, ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 1,
    title: 'Royal Invitations',
    description: 'Opulent designs with gold foil, embossed details, and regal motifs fit for kings and queens.',
    image: '/images/royal-invitations.png',
    tag: 'Bestseller',
    color: 'from-gold/20 to-maroon/20',
  },
  {
    id: 2,
    title: 'Hindu Wedding Cards',
    description: 'Traditional designs with Lord Ganesha blessings, mandala art, and sacred symbols in rich colors.',
    image: '/images/hindu-wedding.png',
    tag: 'Popular',
    color: 'from-maroon/20 to-gold/10',
  },
  {
    id: 3,
    title: 'Muslim Wedding Cards',
    description: 'Elegant Islamic patterns, geometric artistry, and refined calligraphy in green and gold themes.',
    image: '/images/muslim-wedding.png',
    tag: 'Exclusive',
    color: 'from-emerald-900/20 to-gold/10',
  },
  {
    id: 4,
    title: 'Christian Invitations',
    description: 'Graceful designs with cross motifs, floral lily borders, and timeless white & gold elegance.',
    image: '/images/christian-invitations.png',
    tag: 'Elegant',
    color: 'from-white/10 to-gold/15',
  },
  {
    id: 5,
    title: 'Minimal Modern Cards',
    description: 'Clean lines, contemporary typography, and subtle elegance for the modern couple.',
    image: '/images/modern-minimal.png',
    tag: 'Trending',
    color: 'from-luxury-card to-gold/10',
  },
  {
    id: 6,
    title: 'Luxury Box Invitations',
    description: 'Complete box sets with velvet lining, wax seals, silk ribbons, and matching enclosures.',
    image: '/images/luxury-box.png',
    tag: 'Premium',
    color: 'from-maroon-dark/30 to-gold/20',
  },
]

export default function Collection() {
  const [selectedCard, setSelectedCard] = useState<typeof collections[0] | null>(null)

  return (
    <section id="collection" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-dark to-luxury-black" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-maroon/8 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

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
            <Sparkles className="w-4 h-4 text-gold" />
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-gold-gradient">Collection</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-foreground/40 max-w-2xl mx-auto italic">
            Each collection tells a story of love, tradition, and elegance — crafted to make your wedding unforgettable
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="collection-card group relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden border border-luxury-border hover:border-gold/30 transition-all duration-700 cursor-pointer bg-luxury-card"
                onClick={() => setSelectedCard(item)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Quick preview button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="glass rounded-full p-4 glow-gold flex items-center gap-2">
                      <Eye className="w-5 h-5 text-gold" />
                      <span className="font-inter text-xs text-gold font-semibold tracking-wider uppercase">Preview</span>
                    </div>
                  </motion.div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-inter font-bold tracking-wider uppercase bg-gold/20 text-gold rounded-full border border-gold/20 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-foreground/40 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300">
                    <span className="font-inter text-xs font-semibold tracking-wider uppercase">View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <div className="absolute inset-0 bg-luxury-black/95 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative max-w-lg w-full glass rounded-2xl overflow-hidden glow-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 glass rounded-full p-2.5 hover:bg-gold/20 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gold" />
              </button>
              <div className="aspect-[3/4] relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 text-xs font-inter font-bold tracking-wider uppercase bg-gold/20 text-gold rounded-full border border-gold/20 mb-3">
                  {selectedCard.tag}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {selectedCard.title}
                </h3>
                <p className="font-inter text-sm text-foreground/50 mb-6 leading-relaxed">
                  {selectedCard.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20wedding%20card%20from%20Galaxy%20Printers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-luxury-black font-inter font-bold text-sm rounded-full tracking-wider uppercase hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
