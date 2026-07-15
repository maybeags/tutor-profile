export default function SharedFields({ value, onChange }) {
  const set = (field) => (e) => onChange(field, e.target.value)

  return (
    <>
      <div className="field-group">
        <label htmlFor="name">학생 이름</label>
        <input id="name" type="text" required value={value.name} onChange={set('name')} placeholder="예: 홍길동" />
      </div>

      <div className="field-group">
        <label htmlFor="contact">연락처 <span className="field-hint">(학생 또는 학부모)</span></label>
        <input id="contact" type="tel" required value={value.contact} onChange={set('contact')} placeholder="예: 010-1234-5678" />
      </div>

      <div className="field-group">
        <label htmlFor="school">학교명</label>
        <input id="school" type="text" required value={value.school} onChange={set('school')} placeholder="예: 가야중학교" />
      </div>

      <div className="field-group">
        <label htmlFor="goal">영어 학습 목표</label>
        <textarea
          id="goal"
          required
          value={value.goal}
          onChange={set('goal')}
          placeholder="예: 내신 영어 1등급 목표, 문법 기초부터 탄탄하게 다지고 싶어요"
        />
      </div>

      <div className="field-group">
        <label htmlFor="availability">수업 가능 요일 / 시간대</label>
        <input
          id="availability"
          type="text"
          required
          value={value.availability}
          onChange={set('availability')}
          placeholder="예: 화, 목 저녁 7시 이후"
        />
      </div>
    </>
  )
}
