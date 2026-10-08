import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    // Recomputed from scratch on every scroll tick, rather than driven by IntersectionObserver
    // true/false edges — a tall section (Projects) can stay "intersecting" continuously from
    // partway down all the way to the bottom of the page, overlapping the next section's own
    // range near the tail. Edge-triggered booleans lose that overlap information: scrolling back
    // up produces no fresh "true" event for it, so the active dot skips straight over it. A
    // direct position check has no stale state to get stuck on, in either scroll direction.
    const update = () => {
      // A short last section (Contact) can sit low enough in the viewport that its top never
      // reaches the reference line even at max scroll — the page runs out of room first. Treat
      // "scrolled to the bottom" as its own case rather than relying on the line crossing it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1
      if (atBottom) {
        setActive(els[els.length - 1]?.id ?? 'hero')
        return
      }

      const refLine = window.innerHeight * 0.4
      let current = els[0]?.id ?? 'hero'
      for (const el of els) {
        if (el.getBoundingClientRect().top <= refLine) current = el.id
        else break
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.rail}>
      <span className={styles.mark}>JG</span>
      <div className={styles.dots}>
        {sections.map((s) => (
          <button
            key={s.id}
            className={`${styles.dot} ${active === s.id ? styles.active : ''}`}
            aria-label={s.label}
            onClick={() => scrollTo(s.id)}
          />
        ))}
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/ordomigato" target="_blank" rel="noopener noreferrer">GH</a>
        <a href="https://www.linkedin.com/in/jeremy-gervais/" target="_blank" rel="noopener noreferrer">LI</a>
        <a href="https://www.behance.net/fakiescript" target="_blank" rel="noopener noreferrer">BE</a>
      </div>
    </nav>
  )
}

export default Nav
