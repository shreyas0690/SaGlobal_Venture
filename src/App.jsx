import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import ClientsShowcase from './components/ClientsShowcase'
import Services from './components/Services'
import Products from './components/Products'
import QuoteModal from './components/QuoteModal'
import Footer from './components/Footer'

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <div className="app">
      <Header onQuoteClick={() => setQuoteOpen(true)} />
      <main>
        <Hero onQuoteClick={() => setQuoteOpen(true)} />
        <Portfolio />
        <About />
        <ClientsShowcase />
        <Services />
        <Products onQuoteClick={() => setQuoteOpen(true)} />
      </main>
      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}

export default App
