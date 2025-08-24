import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Features />
        <Pricing />
      </div>
      <Footer />
    </div>
  )
}

export default App
