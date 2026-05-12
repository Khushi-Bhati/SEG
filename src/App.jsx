import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HistoryOfSeg from './pages/HistoryOfSeg'
import ChairmansMessage from './pages/ChairmansMessage'
import MissionVision from './pages/MissionVision'
import WhyJoinSeg from './pages/WhyJoinSeg'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history-of-seg" element={<HistoryOfSeg />} />
        <Route path="/chairmans-message" element={<ChairmansMessage />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/why-join-seg" element={<WhyJoinSeg />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
