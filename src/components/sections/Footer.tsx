'use client'

import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Crown, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'Customize', href: '#customize' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const collections = [
  'Royal Invitations',
  'Hindu Wedding Cards',
  'Muslim Wedding Cards',
  'Christian Invitations',
  'Minimal Modern Cards',
  'Luxury Box Invitations',
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-luxury-black border-t border-luxury-border mt-auto">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold-dark flex items-center justify-center shadow-lg shadow-gold/10">
                  <Crown className="w-5 h-5 text-luxury-black" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-gold-gradient tracking-wide leading-tight">
                    Galaxy Printers
                  </h3>
                  <p className="text-[9px] text-gold/40 tracking-[0.25em] uppercase font-inter leading-tight">
                    Luxury Invitations
                  </p>
                </div>
              </div>
              <p className="font-inter text-sm text-foreground/30 leading-relaxed mb-5 max-w-xs">
                Crafting luxury wedding invitations in the heart of Mysore since 1998. Where tradition meets elegance.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full border border-luxury-border flex items-center justify-center text-foreground/30 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-xs font-bold text-foreground/60 tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                <div className="w-4 h-px bg-gold/30" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-inter text-sm text-foreground/30 hover:text-gold transition-colors duration-300 hover:pl-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-playfair text-xs font-bold text-foreground/60 tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                <div className="w-4 h-px bg-gold/30" />
                Collections
              </h4>
              <ul className="space-y-3">
                {collections.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick('#collection')}
                      className="font-inter text-sm text-foreground/30 hover:text-gold transition-colors duration-300 hover:pl-1"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair text-xs font-bold text-foreground/60 tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                <div className="w-4 h-px bg-gold/30" />
                Contact Us
              </h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold/40 mt-0.5 shrink-0" />
                  <span className="font-inter text-sm text-foreground/30">
                    Mandi Mohalla, Mysore<br />Karnataka, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold/40 shrink-0" />
                  <span className="font-inter text-sm text-foreground/30">
                    +91 98765 43210
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold/40 shrink-0" />
                  <span className="font-inter text-sm text-foreground/30">
                    info@galaxyprinters.in
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-luxury-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-inter text-xs text-foreground/20">
              © {new Date().getFullYear()} Galaxy Printers. All rights reserved.
            </p>
            <p className="font-inter text-xs text-foreground/20 flex items-center gap-1.5">
              Crafted with <Heart className="w-3 h-3 text-gold/40 fill-gold/30" /> in Mysore <Sparkles className="w-3 h-3 text-gold/30" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
