import Beautify from './components/Beautify'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Inspiration from './components/Inspiration'
import Join from './components/Join'

const App = () => {
  return (
    <div className='font-montserrat'>
      <Header/>
      <Hero/>
      <FAQ/>
      <Inspiration/>/
      <Beautify/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default App