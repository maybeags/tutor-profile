import { useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { gradeTest } from '../lib/gradeTest'
import { submitTestResultToSheet } from '../lib/submitToSheet'
import StepIndicator from '../components/StepIndicator'
import Reveal from '../components/Reveal'
import { SECTIONS } from '../data/levelTest'

const CHOICE_MARKS = ['①', '②', '③', '④']
const STEP_LABELS = SECTIONS.map((section) => section.label)

function formatResponse(item) {
  if (!item.answered) return '미응답'
  if (item.question.type === 'choice') {
    return `${CHOICE_MARKS[item.response]} ${item.question.choices[item.response]}`
  }
  return item.response
}

function formatAnswer(question) {
  if (question.type === 'choice') {
    return `${CHOICE_MARKS[question.answer]} ${question.choices[question.answer]}`
  }
  return question.displayAnswer
}

export default function TestResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [openId, setOpenId] = useState(null)

  const state = location.state
  const result = useMemo(() => (state ? gradeTest(state.responses) : null), [state])

  useEffect(() => {
    if (!result || !state) return
    submitTestResultToSheet(state.student, result)
    // Log once per completed attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!state) {
    return <Navigate to="/test" replace />
  }

  const wrongItems = result.items.filter((item) => !item.correct)

  return (
    <div className="page container-narrow">
      <StepIndicator current={STEP_LABELS.length} steps={STEP_LABELS} />

      <div className="result-card">
        <span className="eyebrow">RESULT</span>
        <h1 className="form-title">{state.student.name} 학생 진단 결과</h1>

        <div className="score-band">
          <div className="score-main">
            <span className="score-value">{result.totalCorrect}</span>
            <span className="score-total">/ {result.totalQuestions}</span>
          </div>
          <div className={`score-level level-${result.overallLevel.key}`}>
            {result.overallLevel.label}
          </div>
        </div>

        <p className="result-overall">{result.overallComment}</p>
      </div>

      <section className="result-section">
        <span className="eyebrow">BY SECTION</span>
        <h2 className="section-title" style={{ fontSize: 22 }}>
          영역별 분석
        </h2>

        <div className="section-list">
          {result.sections.map((section, index) => (
            <Reveal key={section.key} delay={index * 80}>
              <div className="section-item">
                <div className="section-item-head">
                  <span className="section-item-label">{section.label}</span>
                  <span className="section-item-score">
                    {section.correct} / {section.total}
                    <em className={`level-tag level-${section.level.key}`}>{section.level.label}</em>
                  </span>
                </div>
                <div className="section-bar">
                  <div
                    className={`section-bar-fill level-${section.level.key}`}
                    style={{ width: `${Math.round(section.rate * 100)}%` }}
                  />
                </div>
                <p className="section-item-comment">{section.comment}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="result-section">
        <span className="eyebrow">REVIEW</span>
        <h2 className="section-title" style={{ fontSize: 22 }}>
          문항별 확인
        </h2>
        <p className="section-sub" style={{ textAlign: 'left', marginBottom: 20 }}>
          {wrongItems.length === 0
            ? '틀린 문항이 없습니다. 아래에서 전체 해설을 확인할 수 있습니다.'
            : `틀린 ${wrongItems.length}문항을 먼저 확인해보세요. 문항을 누르면 해설이 열립니다.`}
        </p>

        <div className="review-list">
          {result.items.map((item) => (
            <div className={`review-item ${item.correct ? 'is-correct' : 'is-wrong'}`} key={item.id}>
              <button
                type="button"
                className="review-head"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="review-num">{String(item.id).padStart(2, '0')}</span>
                <span className="review-topic">{item.topic}</span>
                <span className="review-mark">{item.correct ? '정답' : item.answered ? '오답' : '미응답'}</span>
                <span className="review-toggle">{openId === item.id ? '−' : '+'}</span>
              </button>

              {openId === item.id && (
                <div className="review-body">
                  <p className="review-question">{item.question.prompt}</p>
                  {item.question.sentence && (
                    <p className="review-sentence">{item.question.sentence}</p>
                  )}
                  <dl className="review-answers">
                    <div>
                      <dt>내 답</dt>
                      <dd className={item.correct ? '' : 'is-wrong-text'}>{formatResponse(item)}</dd>
                    </div>
                    <div>
                      <dt>정답</dt>
                      <dd>{formatAnswer(item.question)}</dd>
                    </div>
                  </dl>
                  <p className="review-explanation">{item.question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="result-actions">
        <button type="button" className="btn btn-outline btn-block" onClick={() => navigate('/profile')}>
          학생 프로필 등록하고 상담받기 <span className="arrow">→</span>
        </button>
        <button type="button" className="btn btn-ghost btn-block" onClick={() => navigate('/')}>
          처음으로 돌아가기
        </button>
      </div>
    </div>
  )
}
