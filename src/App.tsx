import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Home from './pages/Home'
import Projects from './pages/Projects'
import MetaProject from './pages/MetaProject'
import ComponentLibrary from './pages/ComponentLibrary'
import GolfBallGarage from './pages/GolfBallGarage'
import About from './pages/About'
import Locus from './pages/Locus'
import Pages from './pages/Pages'
import DevLog from './pages/DevLog'
import AllPages from './pages/AllPages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/thiswebsite" element={<MetaProject />} />
        <Route path="/projects/thiswebsite/components" element={<ComponentLibrary />} />
        <Route path="/projects/golfballgarage" element={<GolfBallGarage />} />
        <Route path="/projects/locus" element={<Locus />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/all" element={<AllPages />} />
        <Route path="/pages/devlog" element={<DevLog />} />
      </Routes>
    </Router>
  )
}

export default App
