import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ContractTypes from './components/ContractTypes'
import Benefits from './components/Benefits'
import Industry from './components/Industry'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <HowItWorks scrollTo={scrollTo} />
      <Features />
      <ContractTypes scrollTo={scrollTo} />
      <Benefits />
      <Industry scrollTo={scrollTo} />
      <Pricing />
      <Footer />
    </>
  )
}
