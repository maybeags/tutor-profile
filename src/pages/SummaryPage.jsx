import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import StepIndicator from '../components/StepIndicator'

function buildSummaryText(data) {
  const lines = []
  lines.push('[김과외 영어 학생 프로필]')
  lines.push(`학생 유형: ${data.type === 'middle' ? '중학생' : '고등학생'}`)
  lines.push(`이름: ${data.name}`)
  lines.push(`연락처: ${data.contact}`)
  lines.push(`학교: ${data.school}`)
  lines.push(`학년: ${data.grade}`)

  if (data.type === 'middle') {
    lines.push(`내신 영어 성적: ${data.reportCard || '미입력'}`)
    lines.push(`영어 취약 영역: ${data.weakAreas.length ? data.weakAreas.join(', ') : '미입력'}`)
    lines.push(`특목고 준비 여부: ${data.specialHigh || '미입력'}`)
    if (data.materials) lines.push(`현재 교재/학원 이력: ${data.materials}`)
  } else {
    lines.push(`계열: ${data.track || '미입력'}`)
    lines.push(`내신 영어 등급: ${data.schoolEnglishGrade || '미입력'}`)
    lines.push(`최근 모의고사 영어 등급: ${data.mockExamGrade || '미입력'}`)
    lines.push(`준비 전형: ${data.admissionType || '미입력'}`)
    lines.push(`영어 취약 영역: ${data.weakAreas.length ? data.weakAreas.join(', ') : '미입력'}`)
    if (data.targetSchool) lines.push(`목표 대학/학과: ${data.targetSchool}`)
  }

  lines.push(`영어 학습 목표: ${data.goal}`)
  lines.push(`수업 가능 요일/시간대: ${data.availability}`)

  return lines.join('\n')
}

export default function SummaryPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  const data = location.state

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2500)
    return () => clearTimeout(timer)
  }, [copied])

  if (!data) {
    return <Navigate to="/profile" replace />
  }

  const summaryText = buildSummaryText(data)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText)
      setCopied(true)
      setCopyFailed(false)
      return
    } catch {
      // Clipboard API unavailable or blocked — fall back to a manual selection copy.
    }

    const textarea = document.createElement('textarea')
    textarea.value = summaryText
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    let fallbackSucceeded = false
    try {
      fallbackSucceeded = document.execCommand('copy')
    } catch {
      fallbackSucceeded = false
    }
    document.body.removeChild(textarea)

    setCopied(fallbackSucceeded)
    setCopyFailed(!fallbackSucceeded)
  }

  return (
    <div className="page container-narrow">
      <StepIndicator current={3} />
      <div className="summary-card">
        <div className="summary-success">프로필이 확인되었습니다</div>
        <h1 className="form-title">입력 내용 요약</h1>
        <p className="form-sub">아래 내용을 복사해서 선생님께 카카오톡 등으로 보내주세요.</p>

        <div className="summary-block">{summaryText}</div>

        <button type="button" className="btn btn-ink btn-block" style={{ marginTop: 28 }} onClick={handleCopy}>
          {copied ? '복사 완료' : '요약 내용 복사하기'}
        </button>
        <div className="copy-feedback" style={copyFailed ? { color: '#a03b2e' } : undefined}>
          {copied ? '클립보드에 복사되었습니다.' : copyFailed ? '자동 복사에 실패했어요. 위 내용을 직접 선택해서 복사해주세요.' : ''}
        </div>

        <button type="button" className="btn btn-ghost btn-block" style={{ marginTop: 8 }} onClick={() => navigate('/')}>
          처음으로 돌아가기
        </button>
      </div>
    </div>
  )
}
