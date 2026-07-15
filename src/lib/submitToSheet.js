import { buildSummaryText } from './summary'

const WEBHOOK_URL = import.meta.env.VITE_SHEET_WEBHOOK_URL

// Fire-and-forget POST to a Google Apps Script Web App that appends a row
// to a Google Sheet. No-ops silently if no webhook is configured, and never
// throws — a sheet-logging failure must not block the student's submission.
export function submitProfileToSheet(data) {
  if (!WEBHOOK_URL) return

  const payload = {
    submittedAt: new Date().toISOString(),
    type: data.type === 'middle' ? '중학생' : '고등학생',
    name: data.name,
    contact: data.contact,
    school: data.school,
    grade: data.grade,
    detail: buildSummaryText(data),
  }

  fetch(WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Ignored — sheet logging is best-effort only.
  })
}
