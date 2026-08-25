import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { SECTIONS, countBySection, getTest } from '../data/tests'

export default function TestIntroPage() {
  const { testId } = useParams()
  const [student, setStudent] = useState({ name: '', contact: '' })
  const navigate = useNavigate()

  const test = getTest(testId)

  if (!test) {
    return <Navigate to="/test" replace />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/test/${test.id}/quiz`, { state: student })
  }

  return (
    <div className="page container-narrow">
      <div className="test-hero">
        <span className="eyebrow">LEVEL TEST · {test.label}</span>
        <h1 className="test-hero-title">{test.title}</h1>
        <p className="test-hero-sub">
          몇 점인지가 아니라 <strong>왜 틀렸는지</strong>를 봅니다. 총 {test.questions.length}문항을 풀고
          나면 문법 · 어휘 · 독해 · 서술형 네 영역의 강약점을 바로 확인할 수 있습니다.
        </p>
      </div>

      <div className="test-outline">
        {SECTIONS.map((section) => (
          <div className="test-outline-item" key={section.key}>
            <div className="test-outline-head">
              <span className="test-outline-label">{section.label}</span>
              <span className="test-outline-count">{countBySection(test, section.key)}문항</span>
            </div>
            <p className="test-outline-detail">{test.sectionDetail[section.key]}</p>
          </div>
        ))}
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">응시 정보</h2>
        <p className="form-sub">결과를 정리해 드리기 위해 이름과 연락처를 남겨주세요.</p>

        <div className="field-group">
          <label htmlFor="test-name">학생 이름</label>
          <input
            id="test-name"
            type="text"
            required
            value={student.name}
            onChange={(e) => setStudent((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="예: 홍길동"
          />
        </div>

        <div className="field-group">
          <label htmlFor="test-contact">
            연락처 <span className="field-hint">(학생 또는 학부모)</span>
          </label>
          <input
            id="test-contact"
            type="tel"
            required
            value={student.contact}
            onChange={(e) => setStudent((prev) => ({ ...prev, contact: e.target.value }))}
            placeholder="예: 010-1234-5678"
          />
        </div>

        <div className="test-notice">
          제한 시간은 없습니다. 모르는 문항은 비워 두어도 되지만, 찍지 말고 비워 두는 편이 더 정확한 진단에
          도움이 됩니다.
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/test')}>
            이전
          </button>
          <button type="submit" className="btn btn-ink btn-block">
            테스트 시작하기 <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  )
}
