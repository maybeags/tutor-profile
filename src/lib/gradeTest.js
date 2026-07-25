import { QUESTIONS, SECTIONS } from '../data/levelTest'

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

// Section-specific wording so the feedback reads like a teacher wrote it,
// not like a template with the section name swapped in.
const SECTION_COMMENT = {
  grammar: {
    strong: '고1 과정에서 요구하는 문법 개념이 안정적으로 잡혀 있습니다.',
    fair: '기본 개념은 알고 있지만, 문장 안에서 형태를 결정하는 단계에서 흔들립니다.',
    weak: '고등 내신·모의고사의 어법 문항을 풀기 전에 개념부터 다시 세워야 합니다.',
  },
  vocabulary: {
    strong: '단어를 뜻으로만이 아니라 문맥 속에서 판단하는 힘이 있습니다.',
    fair: '아는 단어는 많지만, 문맥에 따라 뜻이 달라지는 지점에서 실점합니다.',
    weak: '어휘의 절대량과 쓰임 이해가 함께 부족해, 독해 속도의 발목을 잡고 있습니다.',
  },
  reading: {
    strong: '글의 논지와 세부 정보를 균형 있게 파악합니다.',
    fair: '대의는 잡지만 부정 표현이나 연결 관계에서 정확도가 떨어집니다.',
    weak: '문장 단위 해석에 머물러 글 전체의 흐름을 놓치고 있습니다.',
  },
  writing: {
    strong: '알고 있는 문법을 실제로 쓸 수 있는 단계까지 와 있습니다.',
    fair: '구조는 떠올리지만 어형과 어순에서 감점 요소가 남아 있습니다.',
    weak: '눈으로 아는 것과 직접 쓰는 것의 격차가 큽니다. 내신 서술형에서 실점이 예상됩니다.',
  },
}

const OVERALL_COMMENT = (rate) => {
  if (rate >= 0.85)
    return '전 영역에서 고1 과정을 소화할 준비가 되어 있습니다. 수능형 문항으로 난도를 올려 실전 감각을 쌓는 단계가 적절합니다.'
  if (rate >= 0.7)
    return '전반적인 기초는 갖춰져 있습니다. 아래에서 지적된 취약 영역만 집중적으로 메우면 고1 내신에서 안정적인 성적을 기대할 수 있습니다.'
  if (rate >= 0.5)
    return '아는 것과 모르는 것이 뚜렷하게 갈립니다. 전 범위를 다시 훑기보다, 취약 영역부터 순서대로 채우는 방식이 효율적입니다.'
  return '중학 과정에서 비어 있는 개념이 여러 곳에 있습니다. 문법 → 구문 → 독해 순서로 기초부터 다시 쌓는 것을 권합니다.'
}

export function gradeTest(responses) {
  const items = QUESTIONS.map((question) => {
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

    let comment = SECTION_COMMENT[key][level.key]
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
    overallComment: OVERALL_COMMENT(totalRate),
    weakSections,
  }
}
