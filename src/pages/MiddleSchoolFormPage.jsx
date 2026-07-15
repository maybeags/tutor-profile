import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StepIndicator from '../components/StepIndicator'
import SharedFields from '../components/SharedFields'
import RadioPillGroup from '../components/RadioPillGroup'
import CheckboxGroup from '../components/CheckboxGroup'
import { submitProfileToSheet } from '../lib/submitToSheet'

const GRADES = ['중1', '중2', '중3']
const REPORT_CARD_OPTIONS = ['A', 'B', 'C', '없음 / 잘 모름']
const WEAK_AREAS = ['문법', '독해', '어휘', '듣기', '말하기']
const SPECIAL_HIGH_OPTIONS = ['준비 중', '고민 중', '준비 안 함']

const initialState = {
  name: '',
  contact: '',
  school: '',
  goal: '',
  availability: '',
  grade: '',
  reportCard: '',
  weakAreas: [],
  specialHigh: '',
  materials: '',
}

export default function MiddleSchoolFormPage() {
  const [form, setForm] = useState(initialState)
  const navigate = useNavigate()

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { type: 'middle', ...form }
    submitProfileToSheet(data)
    navigate('/profile/complete', { state: data })
  }

  return (
    <div className="page container-narrow">
      <StepIndicator current={2} />
      <form className="form-card" onSubmit={handleSubmit}>
        <span className="eyebrow">MIDDLE SCHOOL</span>
        <h1 className="form-title">중학생 프로필</h1>
        <p className="form-sub">영어 학습 관련 정보를 입력해주세요.</p>

        <SharedFields value={form} onChange={set} />

        <RadioPillGroup legend="학년" name="grade" options={GRADES} value={form.grade} onChange={(v) => set('grade', v)} required />

        <RadioPillGroup
          legend="최근 학교 내신 영어 성적"
          name="reportCard"
          options={REPORT_CARD_OPTIONS}
          value={form.reportCard}
          onChange={(v) => set('reportCard', v)}
        />

        <CheckboxGroup
          legend="영어 취약 영역 (중복 선택 가능)"
          name="weakAreas"
          options={WEAK_AREAS}
          selected={form.weakAreas}
          onToggle={(v) => set('weakAreas', v)}
        />

        <RadioPillGroup
          legend="특목고(외고 / 국제고) 준비 여부"
          name="specialHigh"
          options={SPECIAL_HIGH_OPTIONS}
          value={form.specialHigh}
          onChange={(v) => set('specialHigh', v)}
        />

        <div className="field-group">
          <label htmlFor="materials">
            현재 사용 교재 / 학원 이력 <span className="field-hint">(선택)</span>
          </label>
          <input
            id="materials"
            type="text"
            value={form.materials}
            onChange={(e) => set('materials', e.target.value)}
            placeholder="예: OO어학원 6개월 수강, 능률 교재 사용 중"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/profile')}>
            이전
          </button>
          <button type="submit" className="btn btn-ink btn-block">
            프로필 제출하기
          </button>
        </div>
      </form>
    </div>
  )
}
