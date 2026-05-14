import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HistoryOfSeg from './pages/HistoryOfSeg'
import ChairmansMessage from './pages/ChairmansMessage'
import MissionVision from './pages/MissionVision'
import WhyJoinSeg from './pages/WhyJoinSeg'
import ContactUs from './pages/ContactUs'
import ProgramPage from './pages/ProgramPage'
import AdmissionProcess from './pages/AdmissionProcess'
import EligibilityCriteria from './pages/EligibilityCriteria'
import PlacementsPage from './pages/PlacementsPage'
import ExploreMore from './pages/ExploreMore'
import FeeStructure from './pages/FeeStructure'
import ManagementQuota from './pages/ManagementQuota'
import ResearchProjects from './pages/ResearchProjects'
import TechnologiesDeveloped from './pages/TechnologiesDeveloped'
import AwardWinningProjects from './pages/AwardWinningProjects'
import ResearchPublications from './pages/ResearchPublications'
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
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/programs/:programId" element={<ProgramPage />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/eligibility-criteria" element={<EligibilityCriteria />} />
        <Route path="/explore-more" element={<ExploreMore />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/management-quota" element={<ManagementQuota />} />
        <Route path="/rd-projects" element={<ResearchProjects />} />
        <Route path="/technologies-developed" element={<TechnologiesDeveloped />} />
        <Route path="/award-winning-projects" element={<AwardWinningProjects />} />
        <Route path="/research-publications" element={<ResearchPublications />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
