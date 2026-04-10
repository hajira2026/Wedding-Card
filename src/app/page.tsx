'use client'

import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Collection from '@/components/sections/Collection'
import Customization from '@/components/sections/Customization'
import FeatureStory from '@/components/sections/FeatureStory'
import Testimonials from '@/components/sections/Testimonials'
import Location from '@/components/sections/Location'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-black animate-page-enter">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Collection />
        <Customization />
        <FeatureStory />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
