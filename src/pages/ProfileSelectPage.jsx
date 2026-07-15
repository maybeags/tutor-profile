import { Link } from 'react-router-dom'
import StepIndicator from '../components/StepIndicator'

export default function ProfileSelectPage() {
  return (
    <div className="page container-narrow">
      <StepIndicator current={1} />
      <div className="select-head">
        <span className="eyebrow">STUDENT PROFILE</span>
        <h1 className="select-title" style={{ marginTop: 16 }}>
          학생 프로필 입력
        </h1>
        <p className="select-sub">현재 학년을 선택해주세요. 학년에 맞는 질문으로 안내해드립니다.</p>
      </div>

      <div className="choice-grid">
        <Link to="/profile/middle" className="choice-card">
          <div className="choice-hanja">中</div>
          <div className="choice-title">중학생</div>
          <div className="choice-desc">중1 · 중2 · 중3</div>
        </Link>
        <Link to="/profile/high" className="choice-card">
          <div className="choice-hanja">高</div>
          <div className="choice-title">고등학생</div>
          <div className="choice-desc">고1 · 고2 · 고3</div>
        </Link>
      </div>
    </div>
  )
}
