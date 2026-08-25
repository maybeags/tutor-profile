import { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { SECTIONS, getTest } from '../data/tests'
import StepIndicator from '../components/StepIndicator'
import PassageBox from '../components/PassageBox'

const STEP_LABELS = SECTIONS.map((section) => section.label)
const CHOICE_MARKS = ['①', '②', '③', '④']

function ChoiceQuestion({ question, index, value, onChange }) {
  return (
    <div className="quiz-item">
      <div className="quiz-item-head">
        <span className="quiz-num">{String(question.id).padStart(2, '0')}</span>
        <div>
          <p className="quiz-prompt">{question.prompt}</p>
          <span className="quiz-topic">{question.topic}</span>
        </div>
      </div>

      {question.sentence && <p className="quiz-sentence">{question.sentence}</p>}

      <div className="choice-list">
        {question.choices.map((choice, choiceIndex) => (
          <label className="choice-option" key={choice}>
            <input
              type="radio"
              name={`q${question.id}`}
              checked={value === choiceIndex}
              onChange={() => onChange(question.id, choiceIndex)}
            />
            <span>
              <em>{CHOICE_MARKS[choiceIndex]}</em>
              {choice}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

function TextQuestion({ question, value, onChange }) {
  return (
    <div className="quiz-item">
      <div className="quiz-item-head">
        <span className="quiz-num">{String(question.id).padStart(2, '0')}</span>
        <div>
          <p className="quiz-prompt">{question.prompt}</p>
          <span className="quiz-topic">{question.topic}</span>
        </div>
      </div>

      {question.korean && <p className="quiz-korean">{question.korean}</p>}
      {question.sentence && <p className="quiz-sentence">{question.sentence}</p>}

      {question.wordBank && (
        <div className="word-bank">
          {question.wordBank.map((word) => (
            <span className="word-chip" key={word}>
              {word}
            </span>
          ))}
        </div>
      )}

      {question.conditions && (
        <ul className="quiz-conditions">
          {question.conditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
      )}

      <input
        type="text"
        className="quiz-answer-input"
        value={value ?? ''}
        onChange={(e) => onChange(question.id, e.target.value)}
        placeholder="여기에 답을 쓰세요"
        autoComplete="off"
      />
    </div>
  )
}

export default function TestQuizPage() {
  const { testId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const topRef = useRef(null)

  const student = location.state
  const test = getTest(testId)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [stepIndex])

  if (!test) {
    return <Navigate to="/test" replace />
  }

  if (!student) {
    return <Navigate to={`/test/${test.id}`} replace />
  }

  const section = SECTIONS[stepIndex]
  const sectionQuestions = test.questions.filter((question) => question.section === section.key)
  const passageKeys = [...new Set(sectionQuestions.map((q) => q.passage).filter(Boolean))]
  const isLastStep = stepIndex === SECTIONS.length - 1

  const setResponse = (id, value) => setResponses((prev) => ({ ...prev, [id]: value }))

  const answeredCount = sectionQuestions.filter((question) => {
    const value = responses[question.id]
    return value !== undefined && value !== null && value !== ''
  }).length

  const handleNext = () => {
    if (isLastStep) {
      navigate(`/test/${test.id}/result`, { state: { student, responses } })
      return
    }
    setStepIndex((prev) => prev + 1)
  }

  return (
    <div className="page container-narrow" ref={topRef}>
      <StepIndicator current={stepIndex + 1} steps={STEP_LABELS} />

      <div className="quiz-card">
        <span className="eyebrow">
          {test.label} · {section.eyebrow}
        </span>
        <h1 className="form-title">{section.label}</h1>
        <p className="form-sub">
          {sectionQuestions.length}문항 중 {answeredCount}문항 응답
        </p>

        {passageKeys.map((key) => (
          <PassageBox key={key} passage={test.passages[key]} />
        ))}

        <div className="quiz-list">
          {sectionQuestions.map((question, index) =>
            question.type === 'choice' ? (
              <ChoiceQuestion
                key={question.id}
                question={question}
                index={index}
                value={responses[question.id]}
                onChange={setResponse}
              />
            ) : (
              <TextQuestion
                key={question.id}
                question={question}
                value={responses[question.id]}
                onChange={setResponse}
              />
            ),
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() =>
              stepIndex === 0 ? navigate(`/test/${test.id}`) : setStepIndex((p) => p - 1)
            }
          >
            이전
          </button>
          <button type="button" className="btn btn-ink btn-block" onClick={handleNext}>
            {isLastStep ? '제출하고 결과 보기' : `다음: ${SECTIONS[stepIndex + 1].label}`}{' '}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
