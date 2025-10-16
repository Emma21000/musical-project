import './index.css'
import { navbar } from '../data/navbar'
import Navbar from './navigation/Navbar'
import Hero from './components/Hero'
import { hero } from '../data/hero'

function App() {

  return (
    <>
      <Navbar data={navbar} />
      <Hero data={hero} />
    </>
  )
}

export default App
