const STEPS = ['학년 선택', '정보 입력', '완료']

export default function StepIndicator({ current }) {
  return (
    <div className="step-indicator">
      {STEPS.map((label, index) => {
        const step = index + 1
        const state = step < current ? 'is-done' : step === current ? 'is-active' : ''
        return (
          <div key={label} className={`step ${state}`}>
            <div className="step-num">{String(step).padStart(2, '0')}</div>
            <div className="step-name">{label}</div>
          </div>
        )
      })}
    </div>
  )
}
