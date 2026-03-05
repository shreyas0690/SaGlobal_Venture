import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import ClientsShowcase from './components/ClientsShowcase'
import Services from './components/Services'
import Products from './components/Products'
import QuoteModal from './components/QuoteModal'
import CartSidebar from './components/CartSidebar'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <CartProvider>
      <div className="app">
        <Header onQuoteClick={() => setQuoteOpen(true)} />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <ClientsShowcase />
          <Services />
          <Products />
          <CallToAction />
        </main>
        <Footer />
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}

export default App
