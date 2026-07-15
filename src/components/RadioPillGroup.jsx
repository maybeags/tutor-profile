export default function RadioPillGroup({ legend, name, options, value, onChange, required }) {
  return (
    <div className="field-group">
      <span className="field-legend">{legend}</span>
      <div className="radio-pill-group">
        {options.map((option) => (
          <label className="radio-pill" key={option}>
            <input
              type="radio"
              name={name}
              required={required}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
