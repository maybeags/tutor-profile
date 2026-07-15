import { useNavigate } from 'react-router-dom'
import { tutor } from '../data/tutorProfile'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

// Renders "{highlight}" segments of the headline in brass
function Headline({ text }) {
  return text.split('\n').map((line, i) => (
    <span key={line} style={{ display: 'block' }}>
      {line.split(/(\{[^}]+\})/).map((part, j) =>
        part.startsWith('{') ? <em key={j}>{part.slice(1, -1)}</em> : part,
      )}
    </span>
  ))
}

export default function IntroPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <header className="hero">
        <span className="hero-watermark" aria-hidden="true">
          英
        </span>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-stagger">
              <span className="eyebrow">{tutor.eyebrow}</span>
              <h1>
                <Headline text={tutor.headline} />
              </h1>
              <p className="hero-sub">{tutor.subheadline}</p>
              <div className="hero-cta-row">
                <button
                  type="button"
                  className="btn btn-brass-outline"
                  onClick={() => navigate('/profile')}
                >
                  {tutor.ctaBand.button}
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="credential-table">
              {tutor.credentials.map((item) => (
                <div className="credential-row" key={item.label}>
                  <span className="credential-label">{item.label}</span>
                  <span className="credential-value">
                    {item.verified && <span className="check">✓</span>}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="section container">
        <Reveal>
          <div className="intro-editorial">
            <div>
              <div className="intro-initial">안</div>
              <div className="intro-name-block">
                <p className="intro-name">{tutor.name}</p>
                <p className="intro-role">{tutor.role}</p>
              </div>
            </div>
            <div className="intro-body">
              {tutor.bio.map((paragraph, i) => (
                <p key={paragraph} className={i === 0 ? 'lead' : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <span className="eyebrow">WHY DIFFERENT</span>
          <h2 className="section-title">학원과는 다른 이유</h2>
          <p className="section-sub">출제자의 시선으로 가르치는 교사 출신 선생님의 수업입니다.</p>
        </Reveal>
        <div className="feature-grid">
          {tutor.features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 2) * 120}>
              <div className="feature-item">
                <span className="feature-keyword">{feature.keyword}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {tutor.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="stat">
                  <div className="stat-number">
                    <CountUp value={stat.number} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head-split">
          <Reveal className="section-head">
            <span className="eyebrow">RECORD</span>
            <h2 className="section-title">과외 경력</h2>
            <p className="section-sub">김과외를 통해 진행한 정규과외 이력입니다.</p>
          </Reveal>
          <div className="timeline">
            {tutor.career.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="timeline-item">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <div className="cta-band-inner">
              <div>
                <span className="eyebrow">FREE TRIAL</span>
                <h2>
                  {tutor.ctaBand.title.split('\n').map((line) => (
                    <span key={line} style={{ display: 'block' }}>
                      {line}
                    </span>
                  ))}
                </h2>
                <p>{tutor.ctaBand.desc}</p>
              </div>
              <button
                type="button"
                className="btn btn-brass-outline"
                onClick={() => navigate('/profile')}
              >
                {tutor.ctaBand.button}
                <span className="arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
