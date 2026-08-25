import { Link, useNavigate } from 'react-router-dom'
import { TESTS } from '../data/tests'

export default function TestSelectPage() {
  const navigate = useNavigate()

  return (
    <div className="page container-narrow">
      <div className="test-hero">
        <span className="eyebrow">LEVEL TEST</span>
        <h1 className="test-hero-title">영어 진단 테스트</h1>
        <p className="test-hero-sub">
          몇 점인지가 아니라 <strong>왜 틀렸는지</strong>를 봅니다. 현재 학년에 맞는 테스트를 선택해주세요.
        </p>
      </div>

      <div className="choice-grid">
        {TESTS.map((test) => (
          <Link to={`/test/${test.id}`} className="choice-card" key={test.id}>
            <div className="choice-hanja">{test.hanja}</div>
            <div className="choice-title">{test.label}</div>
            <div className="choice-desc">{test.questions.length}문항 · 제한 시간 없음</div>
            <p className="choice-summary">{test.summary}</p>
          </Link>
        ))}
      </div>

      <div className="form-actions" style={{ marginTop: 32 }}>
        <button type="button" className="btn btn-ghost btn-block" onClick={() => navigate('/')}>
          홈으로
        </button>
      </div>
    </div>
  )
}
