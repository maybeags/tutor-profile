export default function PassageBox({ passage }) {
  return (
    <div className="passage-box">
      <div className="passage-title">{passage.title}</div>
      {passage.body.split('\n\n').map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>
  )
}
