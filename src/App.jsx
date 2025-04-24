
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CV from './components/CurriculumVitae'

function App() {

  return (
    <>
      <div id="home" className='home'>
        <Header />
        <Hero />
      </div>

      <Skills />
      <Projects />
      <About />
      <Testimonials />
      <div className='page-bottom'>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
