import { useEffect, useRef, useState } from 'react'
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
  const observerSet = useRef(false)

  useEffect(() => {
    if (observerSet.current) return
    observerSet.current = true

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
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
        <a href="#" target="_blank" rel="noopener noreferrer">LI</a>
      </div>
    </nav>
  )
}

export default Nav
