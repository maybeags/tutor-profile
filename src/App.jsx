import { Routes, Route } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import ProfileSelectPage from './pages/ProfileSelectPage'
import MiddleSchoolFormPage from './pages/MiddleSchoolFormPage'
import HighSchoolFormPage from './pages/HighSchoolFormPage'
import SummaryPage from './pages/SummaryPage'
import TestIntroPage from './pages/TestIntroPage'
import TestQuizPage from './pages/TestQuizPage'
import TestResultPage from './pages/TestResultPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/profile" element={<ProfileSelectPage />} />
      <Route path="/profile/middle" element={<MiddleSchoolFormPage />} />
      <Route path="/profile/high" element={<HighSchoolFormPage />} />
      <Route path="/profile/complete" element={<SummaryPage />} />
      <Route path="/test" element={<TestIntroPage />} />
      <Route path="/test/quiz" element={<TestQuizPage />} />
      <Route path="/test/result" element={<TestResultPage />} />
    </Routes>
  )
}

export default App
