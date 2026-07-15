import { Routes, Route } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import ProfileSelectPage from './pages/ProfileSelectPage'
import MiddleSchoolFormPage from './pages/MiddleSchoolFormPage'
import HighSchoolFormPage from './pages/HighSchoolFormPage'
import SummaryPage from './pages/SummaryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/profile" element={<ProfileSelectPage />} />
      <Route path="/profile/middle" element={<MiddleSchoolFormPage />} />
      <Route path="/profile/high" element={<HighSchoolFormPage />} />
      <Route path="/profile/complete" element={<SummaryPage />} />
    </Routes>
  )
}

export default App
