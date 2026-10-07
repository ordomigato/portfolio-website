import Button from './Button'
import styles from './Hero.module.css'

const stack = ['Go', 'TypeScript', 'React', 'Vue', 'Lit', 'Node.js', 'PostgreSQL', 'GraphQL']
const headline = ['Software Developer', 'Dashboards', 'WebApps', 'Websites']

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.top}>
        <div>
          <p className={styles.name}>JEREMY&nbsp;GERVAIS</p>
          <p className={styles.loc}>// Ontario, Canada</p>
        </div>
        <div className={styles.status}>
          <span className={styles.dot} />
          Open to new work
        </div>
      </div>

      <div className={`${styles.marqueeWrap}`}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...headline, ...headline].map((word, i) => (
              <span key={i} className={i % 2 === 1 ? styles.accent : undefined}>{word}</span>
            ))}
          </div>
        </div>

        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {Array.from({ length: 8 }, () => stack).flat().map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.sub}>
          Software developer building full-stack <strong>SaaS products</strong> — from backend
          to interface, shipped and maintained end to end. <strong>6+ years</strong> professional,
          plus over a decade freelancing.
        </p>
        <div className={styles.cta}>
          <Button href="#contact">Get in touch</Button>
          <Button variant="secondary" href="#projects">View projects</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
