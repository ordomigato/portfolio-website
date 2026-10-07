import { useReveal } from '../utils/useReveal'
import styles from './Contact.module.css'

function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className={`${styles.contact} reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <p className="eyebrow" style={{ color: 'var(--pale)' }}>04 — Contact</p>
        <div className={styles.head}>
          <h2 className={styles.heading}>
            <a href="mailto:hello@jeremygervais.dev">Let's talk</a>
          </h2>
          <p className={styles.meta}>
            Currently open to full-time and contract work. Fastest way to reach me is email — I
            read everything.
          </p>
        </div>
        <div className={styles.foot}>
          <span>© {new Date().getFullYear()} Jeremy Gervais</span>
          <div className={styles.socials}>
            <a href="https://github.com/ordomigato" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/files/Jeremy%20Gervais%20-%20Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé ↓</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
