export function buildSummaryText(data) {
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
