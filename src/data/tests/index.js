import { middle2 } from './middle2'
import { middle3 } from './middle3'

// Shared across every test — all of them are graded on the same four areas.
export const SECTIONS = [
  { key: 'grammar', label: '문법', eyebrow: 'GRAMMAR' },
  { key: 'vocabulary', label: '어휘', eyebrow: 'VOCABULARY' },
  { key: 'reading', label: '독해', eyebrow: 'READING' },
  { key: 'writing', label: '서술형', eyebrow: 'WRITING' },
]

export const TESTS = [middle2, middle3]

export function getTest(testId) {
  return TESTS.find((test) => test.id === testId)
}

export function countBySection(test, sectionKey) {
  return test.questions.filter((question) => question.section === sectionKey).length
}
