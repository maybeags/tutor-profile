import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import StepIndicator from '../components/StepIndicator'
import { buildSummaryText } from '../lib/summary'

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
