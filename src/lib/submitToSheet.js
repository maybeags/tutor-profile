import { buildSummaryText } from './summary'

const WEBHOOK_URL = import.meta.env.VITE_SHEET_WEBHOOK_URL

// Fire-and-forget POST to a Google Apps Script Web App that appends a row
// to a Google Sheet. No-ops silently if no webhook is configured, and never
// throws — a sheet-logging failure must not block the student's submission.
function post(payload) {
  if (!WEBHOOK_URL) return

  fetch(WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Ignored — sheet logging is best-effort only.
  })
}

export function submitProfileToSheet(data) {
  post({
    kind: 'profile',
    submittedAt: new Date().toISOString(),
    type: data.type === 'middle' ? '중학생' : '고등학생',
    name: data.name,
    contact: data.contact,
    school: data.school,
    grade: data.grade,
    detail: buildSummaryText(data),
  })
}

export function submitTestResultToSheet(test, student, result) {
  const byKey = Object.fromEntries(
    result.sections.map((section) => [section.key, `${section.correct}/${section.total}`]),
  )
  const weakAreas = result.sections
    .filter((section) => section.level.key !== 'strong')
    .map((section) => `${section.label}(${section.wrongTopics.join('·') || '실점'})`)
    .join(', ')
  const wrongItems = result.items
    .filter((item) => !item.correct)
    .map((item) => `${item.id}번 ${item.topic}${item.answered ? '' : '(미응답)'}`)
    .join(', ')

  post({
    kind: 'levelTest',
    submittedAt: new Date().toISOString(),
    testLabel: test.label,
    name: student.name,
    contact: student.contact,
    total: `${result.totalCorrect}/${result.totalQuestions}`,
    grammar: byKey.grammar,
    vocabulary: byKey.vocabulary,
    reading: byKey.reading,
    writing: byKey.writing,
    weakAreas: weakAreas || '없음',
    wrongItems: wrongItems || '없음',
  })
}
