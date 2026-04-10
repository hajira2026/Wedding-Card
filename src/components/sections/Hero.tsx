'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronDown, Sparkles, Crown } from 'lucide-react'

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
      color: string
      pulse: number
      pulseSpeed: number
    }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['rgba(212, 175, 55,', 'rgba(240, 216, 120,', 'rgba(184, 150, 12,', 'rgba(107, 15, 42,']

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.05),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.pulse += p.pulseSpeed

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }

        const pulsedOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        const pulsedSize = p.size * (0.8 + 0.2 * Math.sin(p.pulse))

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedSize * 4)
        gradient.addColorStop(0, `${p.color}${pulsedOpacity})`)
        gradient.addColorStop(1, `${p.color}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulsedSize * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulsedSize, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${pulsedOpacity * 1.5})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const smoothRotateY = useSpring(0, { stiffness: 50, damping: 20 })
  const smoothRotateX = useSpring(0, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePos({ x, y })
  }, [])

  useEffect(() => {
    smoothRotateY.set(mousePos.x * 15)
    smoothRotateX.set(-mousePos.y * 15)
  }, [mousePos, smoothRotateY, smoothRotateX])

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-maroon-dark/40 to-luxury-black" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-maroon/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-8 w-24 h-24 border-t border-l border-gold/10 rounded-tl-lg" />
      <div className="absolute top-20 right-8 w-24 h-24 border-t border-r border-gold/10 rounded-tr-lg" />
      <div className="absolute bottom-20 left-8 w-24 h-24 border-b border-l border-gold/10 rounded-bl-lg" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-b border-r border-gold/10 rounded-br-lg" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
          <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-gold/80 font-inter text-[10px] sm:text-xs tracking-[0.3em] uppercase">
            <Sparkles className="w-3 h-3" />
            Galaxy Printers · Mysore
            <Sparkles className="w-3 h-3" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6"
        >
          <span className="text-foreground">Not Just Invitations.</span>
          <br />
          <span className="text-gold-gradient text-glow-gold">A First Impression</span>
          <br />
          <span className="text-foreground">of Your Wedding.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl text-gold/60 mb-8 sm:mb-12 tracking-wide italic"
        >
          Luxury Wedding Invitations Crafted in Mysore
        </motion.p>

        {/* 3D Wedding Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center gap-2 sm:gap-8 md:gap-12 mb-10 sm:mb-16"
          style={{ perspective: 1200 }}
        >
          {/* Left card */}
          <motion.div
            style={{
              rotateY: smoothRotateY,
              rotateX: smoothRotateX,
              transformStyle: 'preserve-3d',
            }}
            className="hidden sm:block w-32 md:w-44 lg:w-52 relative"
          >
            <div className="animate-float-delayed">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gold/10 border border-gold/20 hover:border-gold/40 transition-colors duration-500">
                <img
                  src="/images/hero-card-1.png"
                  alt="Luxury Wedding Invitation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>
          </motion.div>

          {/* Center card (main) */}
          <motion.div
            style={{
              rotateY: smoothRotateY,
              rotateX: smoothRotateX,
              transformStyle: 'preserve-3d',
            }}
            className="w-44 sm:w-52 md:w-64 lg:w-72 relative z-10"
          >
            <div className="animate-float">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gold/30 glow-gold-strong border border-gold/40 hover:border-gold/60 transition-colors duration-500">
                <img
                  src="/images/hero-card-2.png"
                  alt="Premium Wedding Invitation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent" />
                {/* Gold shimmer overlay */}
                <div className="absolute inset-0 shimmer rounded-xl" />
                {/* Premium badge */}
                <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-[9px] font-inter font-bold text-gold tracking-wider uppercase">
                  Premium
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            style={{
              rotateY: smoothRotateY,
              rotateX: smoothRotateX,
              transformStyle: 'preserve-3d',
            }}
            className="hidden sm:block w-32 md:w-44 lg:w-52 relative"
          >
            <div className="animate-float-delayed" style={{ animationDelay: '2s' }}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gold/10 border border-gold/20 hover:border-gold/40 transition-colors duration-500">
                <img
                  src="/images/royal-invitations.png"
                  alt="Royal Wedding Invitation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
                <div className="absolute inset-0 shimmer" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#collection"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-luxury-black font-inter font-bold text-sm sm:text-base rounded-full tracking-wider uppercase transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection
              <Crown className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-white/20 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
          <motion.a
            href="#customize"
            whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3.5 sm:px-10 sm:py-4 border-2 border-gold/40 text-gold font-inter font-bold text-sm sm:text-base rounded-full tracking-wider uppercase hover:bg-gold/10 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Customize Your Card
              <Sparkles className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-gold/30 text-[10px] tracking-[0.3em] uppercase font-inter">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border border-gold/20 rounded-full flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gold/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-black to-transparent z-[2]" />
    </section>
  )
}
