import './index.css'
import { Routes, Route } from 'react-router-dom'
import { navbar } from '../data/navbar'
import Navbar from './navigation/Navbar'
import Hero from './components/Hero'
import { hero } from '../data/hero'
import AboutUs from './components/AboutUs'
import { aboutUs } from '../data/aboutUs'
import Events from './components/Events'
import { events } from '../data/events'
import NewPage from './components/NewPage'
import { newpage } from '../data/newpage'
import WhyUs from './components/WhyUs'
import { whyUs } from '../data/whyUs'

function App() {
  return (
    <>
      <Navbar data={navbar} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero data={hero} />
              <AboutUs data={aboutUs} />
              <Events data={events} />
            </>
          }
        />
        <Route path="/newpage" element={<NewPage data={newpage}/>} />
      </Routes>
      <WhyUs data={whyUs} />
    </>
  )
}

export default App
