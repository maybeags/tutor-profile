export default function CheckboxGroup({ legend, name, options, selected, onToggle }) {
  const toggle = (option) => {
    const next = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option]
    onToggle(next)
  }

  return (
    <div className="field-group">
      <span className="field-legend">{legend}</span>
      <div className="checkbox-grid">
        {options.map((option) => (
          <label className="checkbox-pill" key={option}>
            <input
              type="checkbox"
              name={name}
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
