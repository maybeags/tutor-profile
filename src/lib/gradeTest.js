import { SECTIONS } from '../data/tests'

// Lowercase, drop punctuation, collapse whitespace — so casing, a trailing
// period, or doubled spaces never cost a student a correct answer.
export function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/[.,!?;:'"()\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function isCorrect(question, response) {
  if (response === undefined || response === null || response === '') return false
  if (question.type === 'choice') return response === question.answer
  return question.answers.includes(normalize(response))
}

const LEVEL_BY_RATE = (rate) => {
  if (rate >= 0.8) return { key: 'strong', label: '우수' }
  if (rate >= 0.6) return { key: 'fair', label: '보통' }
  return { key: 'weak', label: '보완 필요' }
}

// The wording lives on each test (see src/data/tests/*.js) because the same
// score means something different for a 중2 student than a 예비 고1 student.
export function gradeTest(test, responses) {
  const items = test.questions.map((question) => {
    const response = responses[question.id]
    const answered = !(response === undefined || response === null || response === '')
    return {
      id: question.id,
      section: question.section,
      topic: question.topic,
      correct: isCorrect(question, response),
      answered,
      response,
      question,
    }
  })

  const sections = SECTIONS.map(({ key, label }) => {
    const sectionItems = items.filter((item) => item.section === key)
    const correct = sectionItems.filter((item) => item.correct).length
    const total = sectionItems.length
    const rate = total === 0 ? 0 : correct / total
    const level = LEVEL_BY_RATE(rate)
    const wrongTopics = [
      ...new Set(sectionItems.filter((item) => !item.correct).map((item) => item.topic)),
    ]
    const unanswered = sectionItems.filter((item) => !item.answered).length

    let comment = test.feedback.section[key][level.key]
    if (wrongTopics.length > 0) {
      comment += ` 특히 ${wrongTopics.join(', ')}에서 실점했습니다.`
    }
    if (unanswered > 0) {
      comment += ` (미응답 ${unanswered}문항 포함)`
    }

    return { key, label, correct, total, rate, level, wrongTopics, unanswered, comment }
  })

  const totalCorrect = items.filter((item) => item.correct).length
  const totalRate = totalCorrect / items.length
  const weakSections = sections.filter((section) => section.level.key === 'weak')

  return {
    items,
    sections,
    totalCorrect,
    totalQuestions: items.length,
    totalRate,
    overallLevel: LEVEL_BY_RATE(totalRate),
    overallComment: test.feedback.overall(totalRate),
    weakSections,
  }
}
