import { useReveal } from '../utils/useReveal'
import styles from './About.module.css'

function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className={`${styles.about} reveal ${visible ? 'in' : ''}`}>
      <div className="wrap">
        <p className="eyebrow" style={{ color: 'var(--hot-dim)' }}>01 — About</p>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.statement}>
              Six years of turning <em>product briefs</em> into shipped software — the Go service
              underneath, the React interface on top, and the pipeline that deploys both.
            </h2>
            <p className={styles.para}>
              I'm a software developer first: most of what's below is a full-stack SaaS build — a
              Go or Node API, a Postgres/Mongo layer, React or Vue on top, deployed and run by me
              end to end. I can do design and client sites too (a few are below), but backend and
              application code is where I spend most of my time.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.statRow}>
              <span className={styles.num}>06</span>
              <span className={styles.label}>Years professional</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.num}>07</span>
              <span className={styles.label}>Shipped projects</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.num}>04</span>
              <span className={styles.label}>Languages (Go · TS · C# · SQL)</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.num}>01</span>
              <span className={styles.label}>Based in Ontario, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
