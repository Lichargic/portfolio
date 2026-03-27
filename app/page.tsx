// app/page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Work from '@/components/Work'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
