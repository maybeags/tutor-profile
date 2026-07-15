import { useEffect, useRef, useState } from 'react'

// Renders "20건+" / "100%" style stat values, animating the numeric part
// from 0 when the element scrolls into view. Non-numeric stats render as-is.
export default function CountUp({ value, duration = 1400 }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  const ref = useRef(null)
  const [display, setDisplay] = useState(target !== null ? 0 : null)

  useEffect(() => {
    if (target === null) return
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }

    let rafId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * target))
          if (progress < 1) rafId = requestAnimationFrame(tick)
        }
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [target, duration])

  if (target === null) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
