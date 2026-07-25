import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SECTIONS, TOTAL_QUESTIONS } from '../data/levelTest'

const SECTION_DETAIL = {
  grammar: '관계대명사 · 시제 · 분사구문 · 가정법 · 수일치',
  vocabulary: '문맥 추론 · 반의어 · 다의어 · 구동사 · 파생어',
  reading: '주제 · 세부 내용 · 빈칸 추론 · 연결어 · 필자의 주장',
  writing: '배열 영작 · 어형 변화 · 문장 전환 · 조건 영작',
}

const SECTION_COUNT = {
  grammar: 6,
  vocabulary: 5,
  reading: 5,
  writing: 4,
}

export default function TestIntroPage() {
  const [student, setStudent] = useState({ name: '', contact: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/test/quiz', { state: student })
  }

  return (
    <div className="page container-narrow">
      <div className="test-hero">
        <span className="eyebrow">LEVEL TEST</span>
        <h1 className="test-hero-title">중3 · 예비 고1 영어 진단 테스트</h1>
        <p className="test-hero-sub">
          몇 점인지가 아니라 <strong>왜 틀렸는지</strong>를 봅니다. 총 {TOTAL_QUESTIONS}문항을 풀고 나면
          문법 · 어휘 · 독해 · 서술형 네 영역의 강약점을 바로 확인할 수 있습니다.
        </p>
      </div>

      <div className="test-outline">
        {SECTIONS.map((section) => (
          <div className="test-outline-item" key={section.key}>
            <div className="test-outline-head">
              <span className="test-outline-label">{section.label}</span>
              <span className="test-outline-count">{SECTION_COUNT[section.key]}문항</span>
            </div>
            <p className="test-outline-detail">{SECTION_DETAIL[section.key]}</p>
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
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
            홈으로
          </button>
          <button type="submit" className="btn btn-ink btn-block">
            테스트 시작하기 <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  )
}
