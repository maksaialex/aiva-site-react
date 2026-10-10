import './landing.css'
import { Background } from '@/components/landing/background'
import { Header, Hero } from '@/components/landing/hero'
import { Cta, Footer, Offers, Steps } from '@/components/landing/sections'

export default function Page() {
  return (
    <div id="top" className="landing">
      <Background />
      <div className="shell">
        <Header />
        <main>
          <Hero />
          <Offers />
          <Steps />
          <Cta />
        </main>
      </div>
      <Footer />
    </div>
  )
}
