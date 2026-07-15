import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StepIndicator from '../components/StepIndicator'
import SharedFields from '../components/SharedFields'
import RadioPillGroup from '../components/RadioPillGroup'
import CheckboxGroup from '../components/CheckboxGroup'
import { submitProfileToSheet } from '../lib/submitToSheet'

const GRADES = ['고1', '고2', '고3']
const TRACKS = ['문과', '이과', '통합(공통)']
const GRADE_LEVELS = ['1등급', '2등급', '3등급', '4등급', '5등급', '6등급 이하', '없음 / 잘 모름']
const ADMISSION_TYPES = ['정시', '수시', '미정']
const WEAK_AREAS = ['독해(대의파악)', '빈칸추론', '순서·삽입', '어법', '어휘', '듣기']

const initialState = {
  name: '',
  contact: '',
  school: '',
  goal: '',
  availability: '',
  grade: '',
  track: '',
  schoolEnglishGrade: '',
  mockExamGrade: '',
  admissionType: '',
  weakAreas: [],
  targetSchool: '',
}

export default function HighSchoolFormPage() {
  const [form, setForm] = useState(initialState)
  const navigate = useNavigate()

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { type: 'high', ...form }
    submitProfileToSheet(data)
    navigate('/profile/complete', { state: data })
  }

  return (
    <div className="page container-narrow">
      <StepIndicator current={2} />
      <form className="form-card" onSubmit={handleSubmit}>
        <span className="eyebrow">HIGH SCHOOL</span>
        <h1 className="form-title">고등학생 프로필</h1>
        <p className="form-sub">영어 학습 관련 정보를 입력해주세요.</p>

        <SharedFields value={form} onChange={set} />

        <RadioPillGroup legend="학년" name="grade" options={GRADES} value={form.grade} onChange={(v) => set('grade', v)} required />

        <RadioPillGroup legend="계열" name="track" options={TRACKS} value={form.track} onChange={(v) => set('track', v)} />

        <RadioPillGroup
          legend="내신 영어 등급"
          name="schoolEnglishGrade"
          options={GRADE_LEVELS}
          value={form.schoolEnglishGrade}
          onChange={(v) => set('schoolEnglishGrade', v)}
        />

        <RadioPillGroup
          legend="최근 모의고사 영어 등급"
          name="mockExamGrade"
          options={GRADE_LEVELS}
          value={form.mockExamGrade}
          onChange={(v) => set('mockExamGrade', v)}
        />

        <RadioPillGroup
          legend="준비 전형"
          name="admissionType"
          options={ADMISSION_TYPES}
          value={form.admissionType}
          onChange={(v) => set('admissionType', v)}
        />

        <CheckboxGroup
          legend="영어 취약 영역 (중복 선택 가능)"
          name="weakAreas"
          options={WEAK_AREAS}
          selected={form.weakAreas}
          onToggle={(v) => set('weakAreas', v)}
        />

        <div className="field-group">
          <label htmlFor="targetSchool">
            목표 대학 / 학과 <span className="field-hint">(선택)</span>
          </label>
          <input
            id="targetSchool"
            type="text"
            value={form.targetSchool}
            onChange={(e) => set('targetSchool', e.target.value)}
            placeholder="예: 부산대학교 영어영문학과"
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
